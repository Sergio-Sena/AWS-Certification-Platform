"""
PDF to Markdown Converter
Converte PDFs (texto ou scan) para .md legível pela IA.

Uso:
    python pdf-to-md.py arquivo.pdf
    python pdf-to-md.py pasta/  (converte todos os PDFs da pasta)

Instalar dependências:
    pip install pymupdf
    pip install pymupdf pytesseract Pillow  (para OCR de scans)
"""
import sys
import os
import fitz  # PyMuPDF


def pdf_to_markdown(pdf_path):
    """Extrai texto do PDF e salva como .md"""
    doc = fitz.open(pdf_path)
    text = ""

    for page_num, page in enumerate(doc, 1):
        page_text = page.get_text()
        if page_text.strip():
            text += f"\n\n---\n## Página {page_num}\n\n{page_text}"
        else:
            # Página sem texto (provavelmente scan) - tenta OCR
            try:
                pix = page.get_pixmap(dpi=300)
                from PIL import Image
                import pytesseract
                import io

                img = Image.open(io.BytesIO(pix.tobytes("png")))
                ocr_text = pytesseract.image_to_string(img, lang='por+eng')
                if ocr_text.strip():
                    text += f"\n\n---\n## Página {page_num} (OCR)\n\n{ocr_text}"
                else:
                    text += f"\n\n---\n## Página {page_num}\n\n[Página sem texto extraível]\n"
            except ImportError:
                text += f"\n\n---\n## Página {page_num}\n\n[Scan detectado - instale pytesseract e Pillow para OCR]\n"

    doc.close()

    # Salvar como .md
    output_path = pdf_path.rsplit('.', 1)[0] + '.md'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"# {os.path.basename(pdf_path)}\n\n")
        f.write(f"*Convertido automaticamente de PDF*\n")
        f.write(text)

    print(f"OK: {pdf_path} -> {output_path}")
    return output_path


def main():
    if len(sys.argv) < 2:
        print("Uso: python pdf-to-md.py <arquivo.pdf ou pasta/>")
        sys.exit(1)

    target = sys.argv[1]

    if os.path.isdir(target):
        pdfs = [os.path.join(target, f) for f in os.listdir(target) if f.endswith('.pdf')]
        if not pdfs:
            print(f"Nenhum PDF encontrado em {target}")
            sys.exit(1)
        for pdf in pdfs:
            pdf_to_markdown(pdf)
    elif os.path.isfile(target) and target.endswith('.pdf'):
        pdf_to_markdown(target)
    else:
        print(f"❌ Arquivo não encontrado ou não é PDF: {target}")
        sys.exit(1)


if __name__ == '__main__':
    main()
