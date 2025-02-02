for (let i = 0; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = 500; i >= 0; i -= 10) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(`${i} é ${par}`);
}

const frutas = ['Pera', 'Maçã', 'Uva', 'Banana', 'Abacaxi'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} ${frutas[i]}`);
}
