# Calculadora IMC

Aplicação web para cadastro de pessoas e cálculo do Índice de Massa Corporal (IMC), com classificação por faixa, estatísticas do grupo, busca por nome e modo escuro.

Desenvolvida com HTML, CSS e JavaScript puro, sem frameworks e sem dependências externas.

## Funcionalidades

- Cálculo de IMC a partir de nome, peso (kg) e altura (m)
- Aceitação de vírgula ou ponto como separador decimal (`1,75` ou `1.75`)
- Classificação automática de acordo com o valor do IMC
- Listagem das pessoas cadastradas, com contador e identificação visual por classificação
- Estatísticas do grupo: média, maior e menor IMC
- Busca por nome em tempo real
- Exclusão individual de registros
- Limpeza completa do formulário, da lista e das estatísticas
- Alternância entre tema claro e escuro
- Layout responsivo para dispositivos móveis e desktop

## Classificação do IMC

| IMC            | Classificação    |
|----------------|------------------|
| Abaixo de 18,5 | Abaixo do peso   |
| 18,5 a 24,9    | Peso normal      |
| 25 a 29,9      | Sobrepeso        |
| 30 a 34,9      | Obesidade Grau 1 |
| 35 a 39,9      | Obesidade Grau 2 |
| 40 ou mais     | Obesidade Grau 3 |

Fórmula utilizada:

```
IMC = peso / (altura × altura)
```

## Como executar

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd <nome-da-pasta>
   ```

3. Abra o arquivo `index.html` em um navegador.

Não é necessário instalar dependências nem executar um servidor.

## Estrutura do projeto

```
.
├── index.html   # Estrutura da página
├── style.css    # Estilos, temas claro e escuro e responsividade
├── script.js    # Lógica de cálculo, listagem, busca, estatísticas e eventos
└── README.md
```

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, Grid, Flexbox e media queries)
- JavaScript (ES6+ e manipulação do DOM)

## Observação

O IMC é um indicador de referência e não substitui avaliação médica ou nutricional.

## Autor: Alexandre Henrique
