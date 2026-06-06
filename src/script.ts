const display = document.querySelector("#display") as HTMLDivElement;
const buttons = document.querySelectorAll(".btn");

let firstNumber = '';
let secundNumber = '';
let currentOperation: Operation | null = null;


buttons.forEach(button => {
    button.addEventListener('click', () => {

        const valor = button.textContent;

        try {

            // Limpa o campo display
            if (valor === 'AC') {
                firstNumber = '';
                secundNumber = '';
                currentOperation = null;
                display.textContent = '0'; 

            // chama a função calcular se já selecionou um operador 
            } else if (valor === '=') {
                if (currentOperation === null) {
                    return;
                } else {
                    const resultado = calcular(Number(firstNumber), Number(secundNumber), currentOperation)

                    // apos o calculo, o primeiro numero passa a ser o resultado e zera o segundo valor e o operador.
                    firstNumber = resultado.toString();
                    secundNumber = '';
                    currentOperation = null;

                    atualizarDisplay();
                }

            // verifica de foi selecionado um desses operadores
            } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
                currentOperation = valor;
                atualizarDisplay();

            // adiciona os valores as variaveis 
            } else {

                if (currentOperation === null) {
                    firstNumber += valor;
                    atualizarDisplay();
                } else {
                    secundNumber += valor
                    atualizarDisplay();
                }
            }
            
        } catch (error) {
             display.textContent = "Não é possível dividir por zero!";
        }
    }) 
})

// FUNÇÃO ATUALIZAR DISPLAY
const atualizarDisplay = () => {
    display.textContent = `${firstNumber} ${currentOperation ?? ''} ${secundNumber}`;
}


// FUNÇÕES OPERAÇÕES
type Funcao = (a: number, b:number) => number;

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

// FUNÇÃO CALCULAR
type Operation = '+' | '-' | '*' | '/'

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

