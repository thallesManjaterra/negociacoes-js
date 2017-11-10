import { NegociacaoController } from './controllers/NegociacaoController.js';
import { debounce } from './util/index.js';
import { Negociacao } from './domain/index.js';


const negociacao = new Negociacao(new Date(), 2, 400);
const headers = new Headers({
    'Content-Type': 'application/json'
})
const body = JSON.stringify(negociacao);
const method = "POST";

fetch('/negociacoes', {
    method,
    headers,
    body
})
.then(() => console.log('Dados enviados com sucesso!'));

const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

//mascára input data
VMasker($("#data")).maskPattern("99/99/9999");

$('.form')
.addEventListener('submit',
controller.adiciona.bind(controller));

$('#btnApagar')
.addEventListener('click', controller.apaga.bind(controller));

$('#btnImportar')
.addEventListener('click', controller.importa.bind(controller));
