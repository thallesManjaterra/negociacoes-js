class Negociacao {
    constructor(_data, _quantidade, _valor) {
        Object.assign(this, {
            _quantidade,
            _valor
        });
        this._data = new Date(_data);
        Object.freeze();
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return new Date(this._data);
    }
}
