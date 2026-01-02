// Crie uma função que receba dois números e uma operação (+, -, *, /)
// Retorne o resultado ou uma mensagem de erro para divisão por zero

function calculadora(numero01, numero02, operacao) {
    let resultado;

    switch (operacao) {
        case '+':
            resultado = numero01 + numero02;
            break;

        case '-':
            resultado = numero01 - numero02;
            break;

        case '*':
            resultado = numero01 * numero02;
            break;

        case '/':
            if (numero02 === 0) {
                return 'Erro: não é possível dividir por zero.'
            }
            resultado = numero01 / numero02;
            break;

        default:
            return 'Erro: operação invalida'
    }

    return resultado;
}

console.log(calculadora(10, 0, '/'));