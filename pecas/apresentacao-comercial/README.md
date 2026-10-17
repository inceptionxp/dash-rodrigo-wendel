# Apresentação comercial · Viver de DTM · v9 (06/10/2026)

Deck da reunião 1x1 de 30 minutos do Dr. Rodrigo Wendel. Texto e notas: `produto/roteiro-deck-comercial-v7.md`.

## Arquivos

| Arquivo | O que é |
|---|---|
| `padrao/index.html` | versão padrão, só o Integral · 19 lâminas, 26 passos |
| `com-online/index.html` | acrescenta a segunda porta (Essencial) depois da conta · 21 lâminas, 27 passos |
| `index.html` | fonte com todas as lâminas; as só-com-online mostram a etiqueta "SÓ NA VERSÃO COM-ONLINE" |
| `viver-de-dtm-v9-padrao.pdf` · `viver-de-dtm-v9-com-online.pdf` | PDF, um passo aberto por página |
| `_prova/v9-contato.png` · `_prova/v9/` | lâminas da com-online em 1920x1080 |
| `_build-v9/` | gerador, plano, revisão, preset da Academia DTM |
| `_v8-2026-09-22/` | versão anterior (35 a 38 lâminas), preservada |

## Como apresentar

1. A padrão abre sempre. A com-online só depois do preço e da conta, se a objeção for viagem ou valor.
2. Abra no Chrome com internet uma vez (a fonte fica em cache). Fotos e efeitos vão embutidos.
3. **P** abre a janela do apresentador (nota, próximo clique, cronômetro). No Zoom/Meet, compartilhe só a janela do deck.
4. Setas, espaço, PageDown e passador avançam o passo antes da lâmina. **F** tela cheia, **N** notas na mesma janela, **0 a 5** saltam de capítulo.

## Editar

Mude o texto em `_build-v9/gerar.py` e rode `python3 _build-v9/derivar.py` (gera as três versões e os prints). Depois: `python3 _build-v9/validar.py padrao/index.html --plano /dev/null` e `python3 _build-v9/contato.py`.

A lâmina do depoimento (13 do roteiro) entra quando houver termo de autorização assinado.
