class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        const self = this; // ou usar arrow function:
        /*o escopo de seu this é léxico (estático) em vez de
        dinâmico. O this de uma arrow function obtém seu valor do "código ao
        redor", mantendo esse valor independente do lugar onde é
        chamado.*/
        Object.assign(this, {
            _inputData: $('#data'),
            _inputQuantidade: $('#quantidade'),
            _inputValor: $('#valor'),
            _negociacoes: new Proxy( new Negociacoes(), {
                get(target, prop, receiver) {
                    if(typeof(target[prop]) == typeof(Function) &&
                        ['adiciona', 'esvazia'].includes(prop)){
                            return function () {
                                console.log(`"${prop}" disparou armadilha!`);
                                target[prop].apply(target, arguments)
                                self._negociacoesView.update(target);
                            }
                        } else {
                            return target[prop];
                        }
                }
            }),
            _negociacoesView: new NegociacoesView('#negociacoes'),
            _mensagem: new Mensagem(),
            _mensagemView: new MensagemView('#mensagemView')
        });
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem)
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criarNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }
    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = "Negociacoes apagadas com sucesso";
        this._mensagemView.update(this._mensagem);
    }
    _limpaFormulario() {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = '0.00',
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
