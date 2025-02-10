const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); // queryselector seleciona apenas a primeira classe encontrada
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // associação via desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    // podemos usar também o innerText que é mais seguro
    // let textoCriado = document.createTextNode(texto);
    // tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);