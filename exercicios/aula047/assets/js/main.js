const inputNovaTarefa = document.querySelector('.inputNovaTarefa');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputNovaTarefa.addEventListener('keypress', (e) => { // evento de tecla pressionada
    if (e.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);
    }
});

function limpaInput() {
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus(); // evento focus é quando seleciona o input
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    // botaoApagar.classList.add('apagar'); forma aprendida anteriormente
    botaoApagar.setAttribute('class', 'apagar'); // nova forma de atribuir classe e outros atributos.
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar); // diz onde vai ser criado o elemento
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnAddTarefa.addEventListener('click', () => {
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
});

document.addEventListener('click', (e) => {
    const elemento = e.target;
    
    if (elemento.classList.contains('apagar')) {
        elemento.parentElement.remove(); // remove o elemento pai
    }
});

function salvarTarefas() {
    const liTarefas = salvarTarefas.querySelector('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // estudar depois
}
