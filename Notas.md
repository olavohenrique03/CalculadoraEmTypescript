# 📝 Notas do Projeto

Este documento contém ideias de melhorias e funcionalidades que poderão ser implementadas em versões futuras da calculadora.

## 🔢 Funcionalidades

### Suporte a números decimais

Permitir operações com valores decimais.

Exemplos:

* 10.5 + 2.3
* 15.75 / 3

Possíveis validações:

* Impedir mais de um ponto decimal por número.
* Permitir iniciar um número com `0.`.

---

### Botão de apagar último dígito (←)

Adicionar um botão para remover o último caractere digitado.

Exemplo:

```text
123 → 12 → 1 → 0
```

Objetivo:

* Melhorar a experiência do usuário.
* Evitar a necessidade de limpar toda a operação.

---

### Suporte ao teclado

Permitir utilizar a calculadora através do teclado.

Mapeamento inicial:

| Tecla     | Ação                 |
| --------- | -------------------- |
| 0-9       | Inserir número       |
| +         | Soma                 |
| -         | Subtração            |
| *         | Multiplicação        |
| /         | Divisão              |
| Enter     | Calcular             |
| Backspace | Apagar último dígito |
| Escape    | Limpar calculadora   |

---

### Histórico de operações

Armazenar as últimas operações realizadas.

Exemplo:

```text
10 + 20 = 30
50 - 15 = 35
8 * 7 = 56
```

Objetivo:

* Facilitar consultas.
* Praticar manipulação de arrays e renderização dinâmica.

---

## 🎨 Melhorias Visuais

### Animações

Adicionar pequenas animações para:

* Clique dos botões.
* Exibição do resultado.
* Estados de hover.

---

### Tema Dark Mode

Criar opção para alternar entre:

* Tema claro
* Tema escuro

---

### Melhorias de Layout

* Ajustar responsividade para telas menores.
* Melhorar espaçamento dos elementos.
* Refinar tipografia e cores.

---

## 🧠 Melhorias Técnicas

### Refatoração de Tipos

Criar uma função auxiliar para identificar operações matemáticas:

```ts
isOperation(valor)
```

Objetivo:

* Evitar type assertions desnecessárias.
* Melhorar a legibilidade do código.

---

### Melhor tratamento de erros

Exibir mensagens específicas para cada erro utilizando validações mais detalhadas.

---

### Testes

Estudar e implementar testes para as funções matemáticas:

* Soma
* Subtração
* Multiplicação
* Divisão

Utilizando ferramentas como:

* Jest
* Vitest

---

## 📚 Objetivo

Este projeto foi desenvolvido para praticar conceitos de TypeScript, manipulação do DOM e gerenciamento de estado. As melhorias listadas aqui servirão como próximos passos para continuar evoluindo a aplicação e aprofundar conhecimentos em Front-end.
