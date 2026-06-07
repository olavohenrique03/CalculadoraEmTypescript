"use strict";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const operations = ['+', '-', '*', '/'];
let firstNumber = '';
let secondNumber = '';
let currentOperation = null;
const resetarCalculadora = () => {
    firstNumber = '';
    secondNumber = '';
    currentOperation = null;
};
const atualizarDisplay = () => {
    display.textContent = `${firstNumber} ${currentOperation ?? ''} ${secondNumber}`;
};
const somar = (n1, n2) => {
    return n1 + n2;
};
const subtrair = (n1, n2) => {
    return n1 - n2;
};
const multiplicar = (n1, n2) => {
    return n1 * n2;
};
const dividir = (n1, n2) => {
    if (n2 === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return n1 / n2;
};
const calcular = (n1, n2, operation) => {
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
};
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent;
        try {
            if (valor === 'AC') {
                resetarCalculadora();
                display.textContent = '0';
            }
            else if (valor === '=') {
                if (currentOperation === null) {
                    return;
                }
                else {
                    const resultado = calcular(Number(firstNumber), Number(secondNumber), currentOperation);
                    firstNumber = resultado.toString();
                    secondNumber = '';
                    currentOperation = null;
                    atualizarDisplay();
                }
            }
            else if (operations.includes(valor)) {
                currentOperation = valor;
                atualizarDisplay();
            }
            else {
                if (currentOperation === null) {
                    firstNumber += valor;
                    atualizarDisplay();
                }
                else {
                    secondNumber += valor;
                    atualizarDisplay();
                }
            }
        }
        catch (error) {
            display.textContent = "Não é possível dividir por zero!";
        }
    });
});
