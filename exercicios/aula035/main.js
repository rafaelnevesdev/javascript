const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Neves',
    idade: 30
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}

// const frutas = ['Pera', 'Maçã', 'Uva'];

// forma manual (sem for in)
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }


// forma adequada para arrays e objetos (com for in)
// for (let index in frutas) {
//     console.log(index);
// }