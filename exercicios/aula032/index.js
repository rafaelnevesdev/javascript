const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Neves',
    idade: 18,
    endereco: {
        rua: 'Tv Professor Sidrônio',
        numero: 9
    }
};

const { nome, ...resto } = pessoa;
console.log(nome, resto);
