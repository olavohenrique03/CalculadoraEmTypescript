"use strict";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
let firstNumber = '';
let secundNumber = '';
let currentOperation = null;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent;
        try {
            if (valor === 'AC') {
                firstNumber = '';
                secundNumber = '';
                currentOperation = null;
                display.textContent = '0';
            }
            else if (valor === '=') {
                if (currentOperation === null) {
                    return;
                }
                else {
                    const resultado = calcular(Number(firstNumber), Number(secundNumber), currentOperation);
                    firstNumber = resultado.toString();
                    secundNumber = '';
                    currentOperation = null;
                    atualizarDisplay();
                }
            }
            else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
                currentOperation = valor;
                atualizarDisplay();
            }
            else {
                if (currentOperation === null) {
                    firstNumber += valor;
                    atualizarDisplay();
                }
                else {
                    secundNumber += valor;
                    atualizarDisplay();
                }
            }
        }
        catch (error) {
            display.textContent = "Não é possível dividir por zero!";
        }
    });
});
const atualizarDisplay = () => {
    display.textContent = `${firstNumber} ${currentOperation ?? ''} ${secundNumber}`;
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
