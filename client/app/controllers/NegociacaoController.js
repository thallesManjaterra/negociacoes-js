class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        Object.assign(this, {
            _inputData : $('#data'),
            _inputQuantidade : $('#quantidade'),
            _inputValor : $('#valor')
        });
    }
    adiciona(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            new Date(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        console.log(negociacao);
    }
}
