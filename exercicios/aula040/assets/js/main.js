// Escreva uma função que recebe 2 números e retorne o maior deles.
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const maiorNumero = (num1, num2) => num1 === num2 ? 'Os números são iguais.' : num1 > num2 ? num1 : num2;

function recebeEventoForm(evento) {
    evento.preventDefault();

    const n1 = Number(form.querySelector('.primeiroNumero').value);
    const n2 = Number(form.querySelector('.segundoNumero').value);

    if (isNaN(n1) || isNaN(n2)) {
        resultado.innerHTML = 'Digite dois números válidos.';
        return;
    }

    resultado.innerHTML = maiorNumero(n1, n2);
}


form.addEventListener('submit', recebeEventoForm)

