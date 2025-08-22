// Escreva uma função que recebe 2 números e retorne o maior deles.
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function maiorNumero(num1, num2) {
    let resultFunc;

    if (num1 > num2) {
        resultFunc = `O número ${num1} é maior que ${num2}.`; 
    } else if (num2 > num1) {
        resultFunc = `O número ${num2} é maior que ${num1}.`;
    } else {
        resultFunc = `Os números são iguais`;
    }

    return resultFunc
}

function recebeEventoForm(evento) {
    evento.preventDefault();

    const primeiroNumero = Number(form.querySelector('.primeiroNumero').Value);
    const segundoNumero = Number(form.querySelector('.segundoNumero').Value);

    resultado.innerHTML = maiorNumero(primeiroNumero, segundoNumero)
}

form.addEventListener('submit', recebeEventoForm)

