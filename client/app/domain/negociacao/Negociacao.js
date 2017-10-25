/* _ (underline) convenção para propriedade que só poderão
ser acessadas pelos próprios métodos da classe.
Serve como um aviso, dizendo:
"Programador, você não pode alterar esta propriedade!". */
class Negociacao {
    constructor(data, qtd, valor) {
        this._data = data;
        this._quantidade = qtd;
        this._valor = valor;
    }
    /* metódos acessadores - prefixo get */
    getVolume() {
        return this._quantidade * this._valor;
    }
    getData() {
        return this._data;
    }
    getQuantidade() {
        return this._quantidade;
    }
    getValor() {
        return this._valor;
    }
}
