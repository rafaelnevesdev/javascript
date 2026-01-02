// Receba um array de palavras e um número mínimo de caracteres
// Retorne apenas as palavras com comprimento maior ou igual ao mínimo

function filtraPalavras(arr, comprimento) {
    if (!Array.isArray(arr) || typeof comprimento !== 'number' || comprimento < 0) {
        throw new Error('Array e comprimento invalidos.');
    }
    
    return arr.filter(palavra => 
        typeof palavra === 'string' && palavra.length >= comprimento
    );
}

console.log(filtraPalavras(['rafael', 123, true, 'neves', null, 'laranja'], 5));

// console.log(filtraPalavras(['rafael', 123, true, 'neves', null, 'laranja'], 5));