#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
import shutil
from pathlib import Path
from datetime import datetime

if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Detecta automaticamente o diretório raiz do projeto
ROOT = Path(__file__).parent.parent.parent
ARCHIVE = ROOT / "_archive"
ARCHIVE_DATE = ARCHIVE / datetime.now().strftime("%Y%m%d_%H%M%S")

print("\n" + "="*60)
print("ORGANIZACAO PARA PERFORMANCE DO AMAZON Q")
print("="*60)
print(f"Projeto: {ROOT.name}")

# Criar estrutura
folders = [
    ARCHIVE_DATE / "backups",
    ARCHIVE_DATE / "migration-scripts",
    ARCHIVE_DATE / "s3-operations",
    ARCHIVE_DATE / "old-deploy-scripts",
    ARCHIVE_DATE / "old-sessions",
    ARCHIVE_DATE / "old-tests"
]
for folder in folders:
    folder.mkdir(parents=True, exist_ok=True)

print(f"\nOK - Estrutura criada em: {ARCHIVE_DATE.name}")

# 1. Mover backups
print("\n[1/6] Movendo backups...")
backup_patterns = ["backup*", "backup-*"]
moved = 0
for pattern in backup_patterns:
    for folder in ROOT.glob(pattern):
        if folder.is_dir() and folder.name != "_archive":
            try:
                shutil.move(str(folder), str(ARCHIVE_DATE / "backups"))
                print(f"  OK - {folder.name}")
                moved += 1
            except:
                pass
if moved == 0:
    print("  Nenhum backup encontrado")

# 2. Mover scripts de migração
print("\n[2/6] Movendo scripts de migracao...")
migration = ROOT / "scripts" / "migration"
if migration.exists():
    shutil.move(str(migration), str(ARCHIVE_DATE / "migration-scripts"))
    print(f"  OK - migration/")
else:
    print("  Nenhum script de migracao encontrado")

# 3. Mover operações S3
print("\n[3/6] Movendo scripts S3...")
s3_ops = ROOT / "scripts" / "s3-operations"
if s3_ops.exists():
    shutil.move(str(s3_ops), str(ARCHIVE_DATE / "s3-operations"))
    print(f"  OK - s3-operations/")
else:
    print("  Nenhum script S3 encontrado")

# 4. Mover scripts de teste antigos
print("\n[4/6] Movendo testes antigos...")
testing = ROOT / "scripts" / "testing"
if testing.exists():
    shutil.move(str(testing), str(ARCHIVE_DATE / "old-tests"))
    print(f"  OK - testing/")
else:
    print("  Nenhum teste antigo encontrado")

# 5. Mover scripts de deploy antigos da raiz
print("\n[5/6] Movendo deploy scripts antigos...")
deploy_patterns = [
    "deploy-*.py", "fix-*.py", "test-*.py", "check-*.py", 
    "upload-*.py", "*.bat", "move-*.py", "rename-*.py",
    "verify-*.py", "list-*.py", "create-*.py", "update-*.py",
    "add-*.py", "enable-*.py", "disable-*.py", "configure-*.py",
    "setup-*.py", "analyze-*.py", "convert-*.py", "delete-*.py"
]

moved_count = 0
for pattern in deploy_patterns:
    for file in ROOT.glob(pattern):
        if file.is_file() and file.name not in ["organize-now.py", "organize-for-performance.py"]:
            try:
                shutil.move(str(file), str(ARCHIVE_DATE / "old-deploy-scripts" / file.name))
                moved_count += 1
            except Exception as e:
                print(f"  ERRO: {file.name}")

if moved_count > 0:
    print(f"  OK - Movidos {moved_count} arquivos")
else:
    print("  Nenhum script de deploy antigo encontrado")

# 6. Organizar memoria/
print("\n[6/6] Organizando documentacao...")
memoria = ROOT / "memoria"
if memoria.exists():
    (memoria / "ATUAL").mkdir(exist_ok=True)
    (memoria / "HISTORICO").mkdir(exist_ok=True)
    
    moved_docs = 0
    for file in memoria.glob("SESSAO_*.md"):
        try:
            shutil.move(str(file), str(memoria / "HISTORICO" / file.name))
            moved_docs += 1
        except:
            pass
    
    if moved_docs > 0:
        print(f"  OK - {moved_docs} documentos organizados")
    else:
        print("  Nenhum documento para organizar")
else:
    print("  Pasta memoria/ nao encontrada")

print("\n" + "="*60)
print("ORGANIZACAO CONCLUIDA!")
print("="*60)
print(f"\nArquivos arquivados em: _archive/{ARCHIVE_DATE.name}")
print("\nPROXIMOS PASSOS:")
print("  1. Testar se o projeto ainda funciona")
print("  2. Verificar performance do Amazon Q")
print("  3. Se tudo OK, pode deletar _archive/ depois de 1 semana")
print("\n")
