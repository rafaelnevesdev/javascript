function retornaHora(data) {
if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    } // checar invertido dentro da função pois não precisa do else, além disso não aninhar muitos blocos dentro de outros a não ser que seja preciso

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('tenha um bom dia');
}

// try {
//     // console.log(a); // Erro
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');

//     try {
//         console.log(b);
//     } catch (e) {
//         console.log('Deu erro');
//     }   finally {
//         console.log('Também sou finally');
//     }

//     // É executada quando não há erros
// } catch (e) {
//     console.log('Tratando o erro')
//     // É executada quando há erros
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
//     // Sempre, porém podemos omiti-lo
// }