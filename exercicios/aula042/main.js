// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o proprio número
// Checar se o número é realmente um número = Retorna o proprio número
// Use a função com números de 0 a 

// function funcVerificaDivisivel(valor) {
    
//     if (typeof valor !== 'number') {
//         return valor
//     }

//     let somaNumero = 0;
//     const strValor = valor.toString();
//     const ultimoNumero = Number(strValor[strValor.length - 1]);

//     for (let digito of strValor) {
//         somaNumero += Number(digito);
//     }

//     if (somaNumero % 3 === 0 && (ultimoNumero === 0 || ultimoNumero === 5)) {
//         return 'FizzBuzz'
//     }
    
//     if (somaNumero % 3 === 0) {
//         return 'Fizz'
//     }
    
//     if (ultimoNumero === 0 || ultimoNumero === 5) {
//         return 'Buzz'
//     }
    
//     return valor

// }

// funcVerificaDivisivel(18);

// console.log('a', funcVerificaDivisivel('a'));
// for (let i = 0; i <= 100; i++) {
//     console.log(i, funcVerificaDivisivel(i))
// }


function funcVerificaDivisivel(valor) {
    if (typeof valor !== 'number') {
        return valor;
    }

    if (valor % 15 === 0) {
        return 'FizzBuzz';
    }
    if (valor % 3 === 0) {
        return 'Fizz';
    }
    if (valor % 5 === 0) {
        return 'Buzz';
    }
    return valor;
}

console.log('a', funcVerificaDivisivel('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, funcVerificaDivisivel(i));
}
