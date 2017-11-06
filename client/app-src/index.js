import { NegociacaoController } from './controllers/NegociacaoController.js';

const controller = new NegociacaoController();

const $ = document.querySelector.bind(document);

//mascára input data
VMasker($("#data")).maskPattern("99/99/9999");

$('.form')
.addEventListener('submit',
/*Quero o this da função controller não o do document
do DOM, por isso usa-se o bind passando controller */
controller.adiciona.bind(controller));

$('#btnApagar')
.addEventListener('click', controller.apaga.bind(controller));

$('#btnImportar')
.addEventListener('click', controller.importa.bind(controller));
