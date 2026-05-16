# Metricas MSE RMSE R2

Analogias para entender MSE, RMSE e R²

Contexto: Imagine um jogo de dardos 🎯
Centro do alvo = valor real
Onde o dardo caiu = previsão do modelo
Distância até o centro = erro

MSE — Mean Squared Error (Erro Quadrático Médio)
Analogia: Erro com lupa 🔍
Os erros são elevados ao quadrado, então erros grandes ficam gigantes e pesam muito.
Exemplo:
Erro 1 → 1² = 1
Erro 5 → 5² = 25
Interpretação:
“Quão feios foram meus erros grandes?”

RMSE — Root Mean Squared Error (Raiz do Erro Quadrático Médio)
Analogia: Distância real do alvo 🏹
É o MSE com raiz para voltar à unidade original.
Interpretação:
“Em média, a que distância do alvo meus dardos caem?”
Exemplo:
RMSE = 5 cm → o modelo erra cerca de 5 cm por previsão.

R² — Coeficiente de Determinação
Analogia: Prova da escola 🏫
Compara o modelo com “chutar a média”.
Interpretação:
“Quanto do problema meu modelo conseguiu explicar?”

Escala do R²:
1.0 = perfeito
0.8 = muito bom
0.5 = razoável
0 = igual chutar a média
Negativo = pior que chutar

Resumo final:
MSE → penaliza erros grandes
RMSE → erro médio na unidade real
R² → quanto o modelo é melhor que chutar
