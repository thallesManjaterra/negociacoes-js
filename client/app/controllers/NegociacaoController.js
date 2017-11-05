class NegociacaoController {
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
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();
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
        this._negociacoes.esvazia();
        this._mensagem.texto = "Negociacões apagadas com sucesso";
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
