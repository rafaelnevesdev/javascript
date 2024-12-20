function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        // pega os valores do formulario
        const pesoInput = Number(form.querySelector('.peso').value);
        const alturaInput = Number(form.querySelector('.altura').value);

        // converte para número
        const peso = Number(pesoInput);
        const altura = Number(alturaInput);

        // validação de valores númericos
        if (!peso || !altura || peso <= 0 || altura <= 0) {
            resultado.innerHTML = `Por favor, insira valores válidos para peso e altura.`;
            return; // Interrompe o fluxo
        }

        // calcula o IMC
        let imc = peso / (altura ** 2);

        let mensagem = '';

        // fluxo de verificação
        if (imc < 18.5) {
            mensagem = `você está abaixo do peso.`;
        } else if (imc >= 18.5 && imc < 24.9) {
            mensagem = `você está com peso normal.`;
        } else if (imc >= 25 && imc < 29.9) {
            mensagem = `você está com sobrepeso.`;
        } else if (imc >= 30 && imc < 34.9) {
            mensagem = `você está com obesidade grau 1.`;
        }else if (imc >= 35 && imc < 39.9) {
            mensagem = `você está com obesidade grau 2.`;
        } else {
            mensagem = `você está com obesidade grau 3.`;
        }

        // Exibe o resultado
        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} e ${mensagem}`;
        
    }
    
    form.addEventListener('submit',recebeEventoForm);

}

meuEscopo();
