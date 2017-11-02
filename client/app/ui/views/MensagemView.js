class MensagemView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
    _template(model) {
        return model.texto
        ? `<p class="alert alert-info">${model.texto}</p>`
        : `<p></p>`;
    }
}
