import { Negociacoes, Negociacao } from '../domain';
import { NegociacoesView, MensagemView, Mensagem, DateConverter } from '../ui';
import { getNegociacaoDao, Bind, debounce, controller, bindEvent } from '../util';

@controller('#data', '#quantidade', '#valor')
export class NegociacaoController {
    constructor(_inputData, _inputQuantidade, _inputValor) {
        Object.assign(this, {
            _inputData,
            _inputQuantidade,
            _inputValor,
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
    async _init() {
        try {
            const dao = await getNegociacaoDao();
            const negociacoes = await dao.listaTodos();
            negociacoes.map( x => this._negociacoes.adiciona(x))
        } catch(err) {
            this._mensagem.texto = err.message;
        }
    }
    @bindEvent('submit', '.form')
    @debounce()
    async adiciona(event) {
        try {
            event.preventDefault();
            const negociacao = this._criarNegociacao();
            const dao = await getNegociacaoDao();
            await dao.adiciona(negociacao);
            this._negociacoes.adiciona(this._criarNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            this._limpaFormulario();
        } catch(err) {
            console.log(err);
            this._mensagem.texto = err.message;
        }
    }
    @bindEvent('click', '#btnImportar')
    @debounce()
    async importa() {
        try {
            const { NegociacaoService } = await System.import('../domain/negociacao/NegociacaoService');
            const serice = new NegociacaoService();
            const negociacoes = await negociacoes.obterNegociacoesDoPeriodo();
            negociacoes.filter(novaNegociacao =>
                !this._negociacoes.getArray()
                .some(negociacaoExistente =>
                    novaNegociacao.equals(negociacaoExistente)
                )
            )
            .map( x => this._negociacoes.adiciona(x))
            this._mensagem.texto = "Negociações do período importadas com sucesso!"
        } catch (err) {
            this._mensagem.texto = err;
        }
    }
    @bindEvent('click', '#btnApagar')
    async apaga() {
        try {
            const dao = await getNegociacaoDao();
            await dao.apagaTodos(),
            this._negociacoes.esvazia();
            this._mensagem.texto = 'Negociações apagadas com sucesso';
        }
        catch(err) {
            this._mensagem.texto = err;
        }
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
