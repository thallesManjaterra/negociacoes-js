import { NegociacaoController } from './controllers/NegociacaoController.js';
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

//mascára input data
VMasker(document.querySelector("#data")).maskPattern("99/99/9999");
