function inverteString(string) {
    let invertida = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i];
    }
    return invertida;
}

console.log(inverteString('rafael lucas santos neves'));