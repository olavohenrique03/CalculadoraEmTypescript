# 🧮 Calculadora com TypeScript

Projeto desenvolvido com o objetivo de praticar conceitos fundamentais de TypeScript, manipulação do DOM e gerenciamento de estado em aplicações Front-end.

## 📋 Sobre o Projeto

Esta calculadora realiza operações matemáticas básicas através de uma interface interativa construída com HTML, CSS e TypeScript.

Durante o desenvolvimento, o foco principal foi aplicar conceitos de tipagem estática, eventos, tratamento de erros e organização de código, simulando situações comuns encontradas no desenvolvimento Front-end.

## 🚀 Funcionalidades

* Soma (+)
* Subtração (-)
* Multiplicação (*)
* Divisão (/)
* Limpeza completa da calculadora (AC)
* Exibição dinâmica da operação em andamento
* Encadeamento de operações utilizando o resultado anterior
* Tratamento de divisão por zero
* Atualização automática do display
* Interface responsiva

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* TypeScript

## 📚 Conceitos Praticados

### TypeScript

* Type Aliases
* Union Types
* Tipagem de funções
* Tipagem de variáveis
* Narrowing de tipos
* Tratamento de erros com `try/catch`

### JavaScript / DOM

* Manipulação do DOM
* Eventos de clique
* Atualização dinâmica da interface
* Conversão de tipos (`string` → `number`)
* Organização de funções
* Gerenciamento de estado da aplicação

## 🧠 Estrutura da Lógica

A calculadora utiliza três estados principais:

* `firstNumber` → primeiro valor digitado
* `secondNumber` → segundo valor digitado
* `currentOperation` → operação selecionada

Fluxo simplificado:

1. Usuário digita o primeiro número.
2. Seleciona uma operação.
3. Digita o segundo número.
4. Pressiona "=".
5. O resultado é calculado e exibido no display.
6. O resultado passa a ser o novo primeiro valor para operações subsequentes.

## ⚠️ Tratamento de Erros

A aplicação possui tratamento para divisão por zero utilizando `try/catch`, exibindo uma mensagem amigável ao usuário quando a operação não pode ser realizada.

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como parte do meu processo de aprendizado em TypeScript, com foco em fortalecer conhecimentos de lógica de programação, tipagem estática e manipulação de interfaces web.

## 📷 Preview

Adicione aqui uma captura de tela do projeto após o deploy.

## 🔗 Deploy

Adicione aqui o link da aplicação publicada.

---

Desenvolvido por Olavo utilizando HTML, CSS e TypeScript.
