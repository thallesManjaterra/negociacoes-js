import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import 'bootstrap/js/modal.js';
import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';


const negociacao = new Negociacao(new Date(), 2, 400);
const headers = new Headers({
    'Content-Type': 'application/json'
})
const body = JSON.stringify(negociacao);
const method = "POST";

fetch('http://localhost:3000/negociacoes', {
    method,
    headers,
    body
})
.then(() => console.log('Dados enviados com sucesso!'));

const controller = new NegociacaoController();

//mascára input data
VMasker(document.querySelector("#data")).maskPattern("99/99/9999");

$('h1').on('click',() => alert('Foi clicado!'));
// provando a existência da função!
console.log('Função adicionada pelo bootstrap:');
console.log($('h1').modal);
