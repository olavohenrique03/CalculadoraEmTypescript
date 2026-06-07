const display = document.querySelector("#display") as HTMLDivElement;
const buttons = document.querySelectorAll(".btn");


// TIPOS
type Operation = '+' | '-' | '*' | '/'
type Funcao = (a: number, b:number) => number;


// CONSTANTES
const operations: Operation[] = ['+', '-', '*', '/'];


// ESTADOS
let firstNumber = '';
let secondNumber = '';
let currentOperation: Operation | null = null;


// FUNÇÃO RESETAR VALORES (auxiliar)
const resetarCalculadora = () => {
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
}


// FUNÇÃO ATUALIZAR DISPLAY (auxiliar)
const atualizarDisplay = () => {
    display.textContent = `${firstNumber} ${currentOperation ?? ''} ${secondNumber}`;
}


// FUNÇÕES MATEMÁTICA
const somar: Funcao = (n1, n2) => {
    return n1 + n2;
}
const subtrair: Funcao = (n1, n2) => {
    return n1 - n2;
}
const multiplicar: Funcao = (n1, n2) => {
    return n1 * n2;
}
const dividir: Funcao = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return n1 / n2;
}


// FUNÇÃO CALCULAR (principal)
const calcular = (n1: number, n2: number, operation: Operation): number => {
    
    switch (operation) {
        case '+':
            return somar(n1, n2);
        
        case '-':
            return subtrair(n1, n2);
    
        case '*':
            return multiplicar(n1, n2);
        
        case '/':
            return dividir(n1, n2);
        default:
            throw new Error('Operação inválida');
    }
    
}


// EVENTOS
buttons.forEach(button => {
    button.addEventListener('click', () => {

        const valor = button.textContent!;

        try {

            // Limpa o campo display
            if (valor === 'AC') {
                resetarCalculadora();
                display.textContent = '0'; 

            // chama a função calcular se já selecionou um operador 
            } else if (valor === '=') {
                if (currentOperation === null) {
                    return;
                } else {
                    const resultado = calcular(Number(firstNumber), Number(secondNumber), currentOperation)

                    // apos o calculo, o primeiro numero passa a ser o resultado e zera o segundo valor e o operador.
                    firstNumber = resultado.toString();
                    secondNumber = '';
                    currentOperation = null;

                    atualizarDisplay();
                }

            // Detecta se o botão clicado representa uma operação matemática.
            } else if (operations.includes(valor as Operation)) { // includes = Se tiver no array retorna true
                currentOperation = valor as Operation;
                atualizarDisplay();

            // Após selecionar uma operação, os próximos dígitos pertencem ao segundo número.
            } else {

                if (currentOperation === null) {
                    firstNumber += valor;
                    atualizarDisplay();
                } else {
                    secondNumber += valor
                    atualizarDisplay();
                }
            }
            
        } catch (error) {
             display.textContent = "Não é possível dividir por zero!";
        }
    }) 
})