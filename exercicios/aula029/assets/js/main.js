const h1 = document.querySelector('.container h1')

const dataAtual = new Date();

const dataFormatada = dataAtual.toLocaleString("pt-BR", {
    dateStyle: "full",
    timeStyle: "medium"
});

h1.innerHTML = dataFormatada

console.log(dataFormatada);