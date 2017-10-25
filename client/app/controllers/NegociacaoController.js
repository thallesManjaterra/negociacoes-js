class NegociacaoController {
    constructor() {
        //criando 'alias' - atalho pra instrução
        //o this da função aqui é o da classe, como quero
        //que o this seja do document usa-se o bind
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    adiciona(event) {
        event.preventDefault();

        /*ou abordagem funcional
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );*/

        let negociacao = new Negociacao(
            new Date(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        console.log(negociacao.data);
    }
}
