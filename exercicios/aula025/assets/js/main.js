function meuEscopo() {
    
    const form = document.querySelector('#form');
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // e.target significa "de onde eu to selecionando o evento"
        const pesoInput = e.target.querySelector('#peso');
        const alturaInput = e.target.querySelector('#altura');
        
        const peso = Number(pesoInput.value);
        const altura = Number(alturaInput.value);
        
        if (!peso || !altura || peso <= 0 || altura <= 0) {
            setResultado(`Por favor, insira valores válidos para peso e altura.`, false);
            return; // Interrompe o fluxo
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);

        const msg = `Seu IMC é ${imc} e ${nivelImc}`;
        setResultado(msg, true);

    });

    function getNivelImc (imc) {
        const nivel = [`você está abaixo do peso.`, `você está com peso normal.`, `você está com sobrepeso.`, `você está com obesidade grau 1.`, `você está com obesidade grau 2.`, `você está com obesidade grau 3.`];

        if (imc < 18.5) {
            return nivel[0];
        }
        
        if (imc >= 18.5 && imc < 24.9) {
            return nivel[1];
        }
        
        if (imc >= 25 && imc < 29.9) {
            return nivel[2];
        }
        
        if (imc >= 30 && imc < 34.9) {
            return nivel[3];
        }
        
        if(imc >= 35 && imc < 39.9) {
            return nivel[4];
        }
        
        if (imc >= 39.9) {
            return nivel[5];
        }
    }

    function getImc (peso, altura) {
        const imc = peso / (altura ** 2);
        return imc.toFixed(2);
    }

    function createP () {
        const p = document.createElement('p');
        return p;
    }
    
    function setResultado (msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = createP();

        if (isValid) {
            p.classList.add('paragrafo-result');
        } else {
            p.classList.add('paragrafo-error');
        }

        p.innerHTML = msg
        resultado.appendChild(p);
    }
}
meuEscopo();
