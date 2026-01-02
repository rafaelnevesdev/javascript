// Para números de 1 a 100:
// - Se múltiplo de 3: "Fizz"
// - Se múltiplo de 5: "Buzz"
// - Se múltiplo de 3 e 5: "FizzBuzz"
// - Caso contrário: o próprio número

function fizzBuzz(valor) {
    if (typeof valor !== 'number') return valor;
    
    const divisivelPor3 = valor % 3 === 0;
    const divisivelPor5 = valor % 5 === 0;
    
    if (divisivelPor3 && divisivelPor5) return 'FizzBuzz';
    if (divisivelPor3) return 'Fizz';
    if (divisivelPor5) return 'Buzz';
    
    return valor;
}

console.log('a', fizzBuzz('a'));
for (let i = 1; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}