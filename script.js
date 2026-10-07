const inputNome = document.getElementById("nome");
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const resultado = document.getElementById("resultado");
const listaPessoas = document.getElementById("listaPessoas");
const btnCalcular = document.getElementById('btnCalcular');
const totalPessoas = document.getElementById('numeroPessoas');

const pessoas = [];
let proximoId = 1;

btnCalcular.addEventListener('click', () => {
    const nome = inputNome.value;
    const peso = parseFloat(inputPeso.value.replace(',', '.'));
    const altura = parseFloat(inputAltura.value.replace(',', '.'));
    
    if (!nome || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = '<p style="color: red;">Insira valores válidos!</p>';
        return;
    }
    
    const imc = (peso / (altura * altura)).toFixed(1);
    let categoria = '';

    if (imc < 18.5) categoria = 'Abaixo do peso';
    else if (imc < 24.9) categoria = 'Peso normal';
    else if (imc < 29.9) categoria = 'Sobrepeso';
    else if (imc < 34.9) categoria = 'Obesidade Grau 1';
    else if (imc < 39.9) categoria = 'Obesidade Grau 2';
    else categoria = 'Obesidade Grau 3';
    
    resultado.innerHTML = `<p>Seu IMC é <strong>${imc}</strong></p><p>Classificação: <strong>${categoria}</strong></p>`;

    pessoas.push({
        nome: nome,
        peso: peso,
        altura: altura,
        imc: imc,
        classificacao: categoria
    });

    mostrarPessoas();

    inputNome.value = '';
    inputPeso.value = '';
    inputAltura.value = '';
});


const inputBusca = document.getElementById('inputBusca');
const mediaIMC = document.getElementById('mediaIMC');
const maiorIMC = document.getElementById('maiorIMC');
const menorIMC = document.getElementById('menorIMC');
const btnLimpar = document.getElementById('btnLimpar');
const btnDark = document.getElementById('btnDark');
const btnTeste = document.getElementById('btnTeste');


function escapeHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function classeDaClassificacao(classificacao) {
    const classes = {
        'Abaixo do peso': 'abaixo-peso',
        'Peso normal': 'peso-normal',
        'Sobrepeso': 'sobrepeso',
        'Obesidade Grau 1': 'obesidade-1',
        'Obesidade Grau 2': 'obesidade-2',
        'Obesidade Grau 3': 'obesidade-3'
    };
    return classes[classificacao] || '';
}


function mostrarPessoas() {
    const termo = inputBusca.value.trim().toLowerCase();
    let html = "";

    pessoas.forEach(function(pessoa, index) {
        if (!pessoa.nome.toLowerCase().includes(termo)) return;

        const classe = classeDaClassificacao(pessoa.classificacao);
        html += `
            <div class="pessoa ${classe}">
                <h3>${escapeHTML(pessoa.nome)}</h3>
                <p>Peso: ${pessoa.peso} kg</p>
                <p>Altura: ${pessoa.altura.toFixed(2)} m</p>
                <strong>IMC: ${pessoa.imc}</strong>
                <p class="tag-classificacao ${classe}">${pessoa.classificacao}</p>
                <button class="excluir" data-index="${index}">Excluir</button>
            </div>
        `;
    });

    if (pessoas.length === 0) {
        html = "<p>Nenhuma pessoa cadastrada ainda.</p>";
    } else if (html === "") {
        html = "<p>Nenhuma pessoa encontrada.</p>";
    }

    listaPessoas.innerHTML = html;
    totalPessoas.textContent = pessoas.length;
    atualizarEstatisticas();
}

listaPessoas.addEventListener('click', (e) => {
    const botao = e.target.closest('button.excluir');
    if (!botao) return;
    excluirPessoa(Number(botao.dataset.index));
});

function excluirPessoa(index) {
    pessoas.splice(index, 1);
    mostrarPessoas();
}


inputBusca.addEventListener('input', mostrarPessoas);



function atualizarEstatisticas() {
    if (pessoas.length === 0) {
        mediaIMC.textContent = "-";
        maiorIMC.textContent = "-";
        menorIMC.textContent = "-";
        return;
    }

    const imcs = pessoas.map(p => parseFloat(p.imc));

    const soma = imcs.reduce((acc, curr) => acc + curr, 0);

    mediaIMC.textContent = (soma / imcs.length).toFixed(1);
    maiorIMC.textContent = Math.max(...imcs).toFixed(1);
    menorIMC.textContent = Math.min(...imcs).toFixed(1);
}


btnLimpar.addEventListener('click', () => {
    pessoas.length = 0;        
    inputNome.value = '';
    inputPeso.value = '';
    inputAltura.value = '';
    inputBusca.value = '';
    resultado.innerHTML = '<span>Resultado:</span>';
    mostrarPessoas();           
    inputNome.focus();
});


btnDark.addEventListener('click', () => {
    const escuro = document.body.classList.toggle('dark-mode');
    btnDark.textContent = escuro ? 'Modo Claro' : 'Modo Escuro';
});


btnTeste.addEventListener('click', () => {
    console.log("DOM funcionando!");
});