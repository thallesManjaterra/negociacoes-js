import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/style.css';
import 'bootstrap/js/modal';
import { NegociacaoController } from './controllers/NegociacaoController';
import { Negociacao } from './domain';
import VMasker from 'vanilla-masker/lib/vanilla-masker';

//exemplo configurando requisiciçao com fetch api
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

VMasker(document.querySelector("#data")).maskPattern("99/99/9999");
