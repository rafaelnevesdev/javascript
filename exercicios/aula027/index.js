// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);

const data = new Date();
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());

// Quando põe toString() ele mostra o formato americano
// Tue Jan 14 2025 21:00:41 GMT-0300 (Horário Padrão de Brasília) - Com toString()
// 2025-01-14T23:59:40.893Z - Sem toString()

// As datas em JS são baseadas em milisegundos e no timestamp unix ou época unix (01-01-1970 que é igual a 0)
// Para selecionar datas em JS basta por na ordem (ano, mês (começando do 0-11), dia, hora, minuto, segundo, milessimo), separados por virgla, sem zero na frente e com pelo mesno dois desses parametros porque partir do dia é possivel omitir informações, se não por o dia por exemplo vai começar pelo 1.
// Se por acaso os segundos passarem de 59 o próprio JS irá corrigir para o minuto seguinte, lembrando que não é so com os segundos.
// Podemos também utilizar strings para representarem datas (const data = new Date('2020-05-20 21:21:23')).

// Para pegar o número do dia atual (mas se você colocar as informações dentro do objeto ele irá puxar oq está declarado na variavel) basta por .getDate() que é um metodo que so pode ser usado depois de uma variável.

// Duas coisas importantes. A primeira é que o mês sempre vai começar no número 0 e o .getDay() pega o dia da semana onde o 0 é domingo e o 6 é sabado
