import { Negociacoes } from '../domain/negociacao/Negociacoes.js';
import { NegociacoesView } from '../ui/views/NegociacoesView.js';
import { Mensagem } from '../ui/models/Mensagem.js';
import { MensagemView } from '../ui/views/MensagemView.js';
import { NegociacaoService } from '../domain/negociacao/NegociacaoService.js';
import { getNegociacaoDao } from '../util/DaoFactory.js';
import { Negociacao } from '../domain/negociacao/Negociacao.js';
import { Bind } from '../util/Bind.js';
import { DateConverter } from '../ui/converters/DateConverter.js';

export class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        Object.assign(this, {
            _inputData: $('#data'),
            _inputQuantidade: $('#quantidade'),
            _inputValor: $('#valor'),
            _service: new NegociacaoService(),
            _negociacoes: new Bind(
                new Negociacoes(),
                new NegociacoesView('#negociacoes'),
                'adiciona', 'esvazia'
            ),
            _mensagem: new Bind(
                new Mensagem(),
                new MensagemView('#mensagemView'),
                'texto'
            )
        });
        this._init();
    }
    adiciona(event) {
        try {
            event.preventDefault();
            const negociacao = this._criarNegociacao();
            getNegociacaoDao()
            .then(dao => dao.adiciona(negociacao))
            .then(() => {
                this._negociacoes.adiciona(this._criarNegociacao());
                this._mensagem.texto = 'Negociação adicionada com sucesso';
                this._limpaFormulario();
            }).catch(err => this._mensagem.texto = err);
        } catch(err) {
            console.log(err);
            this._mensagem.texto = err.message;
        }
    }
    importa() {
        this._service
        .obterNegociacoesDoPeriodo()
        .then(
            periodo => {
                periodo.filter(novaNegociacao =>
                    !this._negociacoes.getArray()
                    .some(negociacaoExistente =>
                        novaNegociacao.equals(negociacaoExistente)
                    )
                )
                .map( x => this._negociacoes.adiciona(x))
                this._mensagem.texto = "Negociações do período importadas com sucesso!"
            }
        ).catch( err => this._mensagem.texto = err);
    }
    apaga() {
        getNegociacaoDao()
        .then(dao => dao.apagaTodos())
        .then(() => {
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';
        })
        .catch(err => this._mensagem.texto = err);
    }
    _init() {
        getNegociacaoDao()
        .then(dao => dao.listaTodos())
        .then(negociacoes => negociacoes.map( x => this._negociacoes.adiciona(x)))
        .catch(err => this._mensagem.texto = err)
    }
    _limpaFormulario() {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = '0.00',
        this._inputData.focus()
    }
    _criarNegociacao() {
        return new Negociacao(
            new Date(DateConverter.paraData(this._inputData.value)),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}
