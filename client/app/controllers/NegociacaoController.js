class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        Object.assign(this, {
            _inputData: $('#data'),
            _inputQuantidade: $('#quantidade'),
            _inputValor: $('#valor'),
            _negociacoes: new Negociacoes(),
            _negociacoesView: new NegociacoesView('#negociacoes')
        });
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._negociacoesView.update(this._negociacoes);
        this._limpaFormulario();
    }
    _limpaFormulario() {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = 0,
        this._inputData.focus()
    }
    _criarNegociacao() {
        return new Negociacao(
            new Date(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}
