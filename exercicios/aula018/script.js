const pessoa1 = {
    nome: 'rafael',
    sobrenome: 'neves',
    idade: 18,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();


/*function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('rafael', 'neves', 18);
const pessoa2 = criaPessoa('rayanne', 'alves', 18);

console.log(pessoa1.nome);
console.log(pessoa2.nome);*/

/*function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('rafael', 'neves', 18);
const pessoa2 = criaPessoa('rayanne', 'alves', 18);

console.log(pessoa1.nome);
console.log(pessoa2.nome);*/


/*const pessoa1 = {
    nome: 'rafael',
    sobrenome: 'neves',
    idade: 18
};

const pessoa2 = {
    nome: 'rayanne',
    sobrenome: 'alves',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa2.nome);*/
