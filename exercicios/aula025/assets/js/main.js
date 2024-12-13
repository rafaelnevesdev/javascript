function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();


        // variaveis
        const pesoInput = Number(form.querySelector('.peso').value);
        const alturaInput = Number(form.querySelector('.altura').value);

        const peso = Number(pesoInput);
        const altura = Number(alturaInput);

        // validação valores numericos
        if (isNaN(peso) || isNaN(altura)) {
            console.error('Por favor, insira valores numéricos válidos para peso e altura.')
        } else {
            const imc = peso/(altura ** 2)
            console.log(imc)
        }

        // fluxo de verificação
        if (imc > 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc} você está abaixo do peso`
        }

    }

    form.addEventListener('submit',recebeEventoForm);

}
meuEscopo();