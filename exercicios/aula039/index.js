const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a proxima iteração
// Break sai do laço

// let i = 0;
// while (i < numeros.length) {
//     let numero = numeros[i]

//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         i++ 
//         continue;
//     }

//     console.log(numero)

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         i++
//         break;
//     }
//     i++
// }

// for (let i in numeros) {
//     let numero = numeros[i]

//     if (numero === 2) {
//         console.log('Pulei o numero 2');
//         continue;
//     }

//     console.log(numero)

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...');
//         break;
//     }
// }

for (let numero of numeros) {
    
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }
    
    console.log(numero);

//     if (numero === 7) {
//         console.log('7 encontrado, saindo...')
//         break;
//     }

}