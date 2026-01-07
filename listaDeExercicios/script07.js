// Agrupe um array de objetos por uma propriedade específica
// Exemplo: agrupar usuários por cidade
const usuarios = [
  { nome: 'Ana', cidade: 'SP' },
  { nome: 'João', cidade: 'RJ' },
  { nome: 'Maria', cidade: 'SP' }
];

const resultado = {}

for (const usuario of usuarios) {
  
  const cidade = usuario.cidade;

  if (!resultado[cidade]) {
    resultado[cidade] = [];
  }

  resultado[cidade].push(usuario.nome)

}

console.log(resultado);

const agrupadoPorCidade = usuarios.reduce((acc, usuario) => {
  const cidade = usuario.cidade;

  if (!acc[cidade]) {
    acc[cidade] = []
  }

  acc[cidade].push(usuario.nome)

  return acc

}, {});

// const agrupadoPorCidade = usuarios.reduce((acc, usuario) => {

//   const cidade = usuario.cidade;

//   if (!acc[cidade]) {
//     acc[cidade] = [];
//   }
  
//   acc[cidade].push(usuario);

//   return acc
// }, {});

// console.log(agrupadoPorCidade);
