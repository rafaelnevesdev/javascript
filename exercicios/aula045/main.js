function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {

    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

// setInterval(funcaoDoInterval, 1000) // passar a referencia (sem executar a função com "()")

// o segundo parametro é o tempo em milisegundos 1000ms=1s

// setInterval(function () {
//     console.log(mostraHora());
// }, 1000); // prefira sempre fazer com funções anonimas pois não precisa criar uma função que retorne com console.log para executar o setInterval


const timer = setInterval(() => {
    console.log(mostraHora())
}, 1000);// também posso jogar esse setInterval em uma variavel

setTimeout(function () {
    clearInterval(timer); // somente para a parar e limpar o setInterval
}, 3000); // só executa uma vez
// Funciona tanto no node quanto no navegador.

setTimeout(function () {
    console.log('Olá, mundo!')
}, 5000);