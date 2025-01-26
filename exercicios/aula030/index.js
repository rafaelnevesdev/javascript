const verdadeira = true;

// Let tem escopo de bloco { ...bloco}
// Var só tem escopo de função

let nome = 'Rafael'; // criando
var nome2 = 'Rafael'; // criando

if (verdadeira) {
    let nome = 'Lucas'; // criando
    var nome2 = 'Santos'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Santos';
        let nome = 'Outra coisa'; // criando
    }
}
