/* _ (underline) convenção para propriedade que só poderão
ser acessadas pelos próprios métodos da classe.
Serve como um aviso, dizendo:
"Programador, você não pode alterar esta propriedade!". */
class Negociacao {
    constructor(data, qtd, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = qtd;
        this._valor = valor;
        Object.freeze(this);
    }
    /* metódos acessadores - prefixo get */
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
        /*O getTime() de uma data retornará um número long
        com uma representação da data*/
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
