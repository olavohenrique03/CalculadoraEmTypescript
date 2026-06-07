1. Melhorias de código (mais importantes)
Criar uma função para verificar operações

Hoje você repete:

valor === '+' ||
valor === '-' ||
valor === '*' ||
valor === '/'

Você poderia criar algo como:

const operations: Operation[] = ['+', '-', '*', '/'];

E depois:

operations.includes(valor as Operation)

Isso facilita futuras expansões.


2. Melhorias de funcionalidade (mais interessantes para portfólio)
Botão de apagar último caractere (←)

Exemplo:

123

↓

12

↓

1

↓

0

Você praticará:

Strings
slice()
Atualização de estado
Números decimais

Permitir:

10.5 + 2.3

Isso demonstra domínio maior da lógica.

Operações encadeadas

Hoje:

10 + 20 = 30

Depois:

+ 5 =

↓

35

Se ainda não funciona, seria um ótimo recurso.

Teclado

Permitir:

1
+
2
Enter

Além dos botões.

Isso impressiona bastante porque mostra conhecimento de eventos.