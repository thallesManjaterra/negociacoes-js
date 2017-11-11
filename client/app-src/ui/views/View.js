export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        throw new Error("Você precisa implementar o método update");
    }
    _template(model) {
        throw new Error("Você precisa implementar o método _template");
    }
}
