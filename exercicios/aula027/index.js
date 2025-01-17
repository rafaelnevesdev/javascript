// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);

const data = new Date(1737072509361);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay() + 1);
console.log(data.toString());
console.log(Date.now());

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    const milisegundos = zeroAEsquerda(data.getMilliseconds());

    return  `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}:${milisegundos}`;
}

const dataFuncao = new Date();
const dataBrasil = formataData(dataFuncao);
console.log(dataBrasil);


// Quando põe toString() ele mostra o formato americano
// Tue Jan 14 2025 21:00:41 GMT-0300 (Horário Padrão de Brasília) - Com toString()
// 2025-01-14T23:59:40.893Z - Sem toString()

// As datas em JS são baseadas em milisegundos e no timestamp unix ou época unix (01-01-1970 que é igual a 0)
// Para selecionar datas em JS basta por na ordem (ano, mês (começando do 0-11), dia, hora, minuto, segundo, milessimo), separados por virgla, sem zero na frente e com pelo mesno dois desses parametros porque partir do dia é possivel omitir informações, se não por o dia por exemplo vai começar pelo 1.
// Se por acaso os segundos passarem de 59 o próprio JS irá corrigir para o minuto seguinte, lembrando que não é so com os segundos.
// Podemos também utilizar strings para representarem datas (const data = new Date('2020-05-20 21:21:23')).

// Para pegar o número do dia atual (mas se você colocar as informações dentro do objeto ele irá puxar oq está declarado na variavel) basta por .getDate() que é um metodo que so pode ser usado depois de uma variável.

// Duas coisas importantes. A primeira é que o mês sempre vai começar no número 0 e o .getDay() pega o dia da semana onde o 0 é domingo e o 6 é sabado

// Para criar uma Data você precisa sempre usar o "new", mas para pegar a data exata de hoje em MILISEGUNDOS basta usar o "Date.now()" que conta do marco 0 até o dia atual. (CURIOSIDADE IMPORTANTE: Se você quiser a data de hoje usando os milisegundos, basta por os milisegundos no "new Date() que retornará exatamente o dia, mês, ano e entre outras informações por isso em alguns bancos de dados a data é salva em milisegundos")