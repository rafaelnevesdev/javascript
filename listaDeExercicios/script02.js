// Escreva uma função que conte quantas vogais há em uma string
// Considere vogais maiúsculas e minúsculas (a, e, i, o, u)

function contaVogal(texto){
    let contador = 0;
    for (let i = 0; i < texto.length; i++){
        const letra = texto[i].toLowerCase();
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            contador++;
        }
    }
    return contador
}

console.log(contaVogal('rafaelneves'));
