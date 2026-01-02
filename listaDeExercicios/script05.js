// Dado um array de números, retorne um objeto com:
// - maior número
// - menor número
// - média dos números
// - soma total

function estatisticasCompletas(arrayNumeros) {
    if (!Array.isArray(arrayNumeros) || arrayNumeros.length === 0) {
        throw new Error('Array invalido ou vazio')
        
    }

    function maiorNumero(arr) {
        let maior = arr[0];
        for (const num of arr) if (num > maior) maior = num;
        return maior;
    }

    function menorNumero(arr) {
        let menor = arr[0];
        for (const num of arr) if (num < menor) menor = num;
        return menor
    }

    function somaTotal(arr) {
        let soma = 0;
        for (const num of arr) soma += num;
        return soma;
    }

    const soma = somaTotal(arrayNumeros);

    return {
        maiorNumero: maiorNumero(arrayNumeros),
        menorNumero: menorNumero(arrayNumeros),
        media: Number((soma / arrayNumeros.length).toFixed(2)),
        somaTotal: somaTotal(arrayNumeros)
    };
}

console.log(estatisticasCompletas([]));
console.log(estatisticasCompletas([9, 48, 84, 97, 31, 7, 53, 10, 60]));

// const numeros = [5, 56, 7, 45, 65, 91, 77, 81]

// function criaObjeto(rMaiorNumero, rMenorNumero, rMedia, rSomaTotal) {
//     const resultados = {
//         maiorNumero: rMaiorNumero,
//         menorNumero: rMenorNumero,
//         media: rMedia,
//         somaTotal: rSomaTotal
//     };

//     return resultados;

// }

// function maiorNumero(arrayNumeros) {
//     let rMaiorNumero = arrayNumeros[0];
//     for (const numero of arrayNumeros) {
        
//         if (numero >= rMaiorNumero) {
//             rMaiorNumero = numero;
//         }

//     }

//     return rMaiorNumero;

// }

// function menorNumero(arrayNumeros) {

//     let rMenorNumero = arrayNumeros[0];

//     for (const numero of arrayNumeros) {
        
//         if (numero <= rMenorNumero) {
//             rMenorNumero = numero;
//         }

//     }

//     return rMenorNumero;

// }

// function media(arrayNumeros) {

//     let somaNumero = 0;

//     for (const numero of arrayNumeros) {
        
//         somaNumero = somaNumero + numero;

//     }

//     let rMedia = somaNumero / arrayNumeros.length

//     return rMedia;

// }

// function somaTotal(arrayNumeros) {
    
//     let somaTotal = 0;

//     for (const numero of arrayNumeros) {

//         somaTotal = somaTotal + numero;
        
//     }

//     let rSomaTotal = somaTotal;

//     return rSomaTotal;

// }

// const maior = maiorNumero(numeros);
// const menor = menorNumero(numeros);
// const mediaNumeros = media(numeros);
// const soma = somaTotal(numeros);

// const resultadoFinal = criaObjeto(maior, menor, mediaNumeros, soma);

// console.log(resultadoFinal);




