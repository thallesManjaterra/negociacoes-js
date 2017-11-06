import { NegociacaoController } from './controllers/NegociacaoController.js';
import { debounce } from './util/index.js';

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
.addEventListener('click', debounce(() => {
    console.log('EXECUTOU A OPERAÇÃO DO DEBOUNCE');
    controller.importa();
}, 1000));
