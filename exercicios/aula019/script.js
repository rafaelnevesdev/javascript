/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

const a = {
    nome: 'Rafael',
    sobrenome: 'Neves'
};

const b = {...a};

b.nome = 'Rayanne';
console.log(a);
console.log(b);

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Rafael');
console.log(a, c);
*/

/*let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/