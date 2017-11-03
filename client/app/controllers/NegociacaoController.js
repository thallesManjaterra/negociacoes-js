class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        Object.assign(this, {
            _inputData: $('#data'),
            _inputQuantidade: $('#quantidade'),
            _inputValor: $('#valor'),
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
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log('Obtendo as negociacoes do servidor!');

                    //JSON.parse - convertendo json de string para objeto
                    JSON.parse(xhr.responseText)
                    .map(x => this._negociacoes.adiciona(
                        new Negociacao(
                            new Date(x.data),
                            x.quantidade,
                            x.valor,
                        )
                    ));
                    this._mensagem.texto = 'Negociacoes importadas com sucesso!'

                } else {
                    this._mensagem.texto = 'Não foi possível obter as negociações da semana';;
                }
            }
        };
        xhr.send();


        /* ESTADOS
        0: requisição ainda não iniciada;
        1: conexão com o servidor estabelecida;
        2: requisição recebida;
        3: processando requisição;
        4: requisição está concluída e a resposta está pronta.
        */
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
