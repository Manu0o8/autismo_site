
import perg_resp from './questoes.js';

const conteiner = document.querySelector('.conteiner');
const qtd_questoes = document.querySelector('.qtd_questoes');
const questoes = document.querySelector('.questoes');
const resposta = document.querySelector('.respostas');
const final = document.querySelector('.final');
const msg = document.querySelector('.msg');
const btn_final = document.querySelector('.btn_final');

let index_atual = 0;
let qtd_corretas = 0;

btn_final.onclick = () => {
    conteiner.style.display = 'block';
    final.style.display = 'none';
    index_atual = 0;
    qtd_corretas = 0;
    carregando_quest();
};

function finalizar() {
    msg.innerHTML = `${qtd_corretas} de ${perg_resp.length}`;
    conteiner.style.display = 'none';
    final.style.display = 'block';
}

function proxima_quest(e) {
    if (e.target.getAttribute('dado_correto') === 'true') {
        qtd_corretas++;
    }

    if (index_atual < perg_resp.length - 1) {
        index_atual++;
        carregando_quest();
    } else {
        finalizar();
    }
}

function carregando_quest() {
    qtd_questoes.innerHTML = `${index_atual + 1} / ${perg_resp.length}`;
    const item = perg_resp[index_atual];
    resposta.innerHTML = '';
    questoes.innerHTML = item.questao;

    item.respostas.forEach((answer) => {
        const div = document.createElement('div');
        div.innerHTML = `<button class="resp" dado_correto="${answer.correto}">${answer.opcao}</button>`;
        resposta.appendChild(div);
    });

    document.querySelectorAll('.resp').forEach((item) => {
        item.addEventListener('click', proxima_quest);
    });
}

// Inicializa o quiz carregando a primeira questão
carregando_quest();







