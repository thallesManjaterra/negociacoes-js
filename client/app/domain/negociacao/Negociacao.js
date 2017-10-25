/* _ (underline) convenção para propriedade que só poderão
ser acessadas pelos próprios métodos da classe.
Serve como um aviso, dizendo:
"Programador, você não pode alterar esta propriedade!". */
class Negociacao {
    constructor(_data, _quantidade, _valor) {
        Object.assign(this, {
            _quantidade, // _quantidade: _quantidade
            _valor // _valor: _valor
        })
        this._data = new Date(_data.getTime());
        Object.freeze(this);
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
