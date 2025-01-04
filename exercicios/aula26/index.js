// OPERAÇÃO TERNARIA: (condição) ? 'valor para verdadeiro' : 'valor para falso'

const pontuacaoUsuario = 999;
const nivelUsuario = (pontuacaoUsuario >= 1000) ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(nivelUsuario, corPadrao);

// CODIGO LONGO
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }