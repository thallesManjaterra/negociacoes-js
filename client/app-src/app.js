import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import 'bootstrap/js/modal.js';
import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
import VMasker from 'vanilla-masker/lib/vanilla-masker.js';

//exemplo configurando requisiciçao com fetch api
const negociacao = new Negociacao(new Date(), 2, 400);
const headers = new Headers({
    'Content-Type': 'application/json'
})
const body = JSON.stringify(negociacao);
const method = "POST";

console.log($('h1'))

fetch('http://localhost:3000/negociacoes', {
    method,
    headers,
    body
})
.then(() => console.log('Dados enviados com sucesso!'));

const controller = new NegociacaoController();

VMasker(document.querySelector("#data")).maskPattern("99/99/9999");
