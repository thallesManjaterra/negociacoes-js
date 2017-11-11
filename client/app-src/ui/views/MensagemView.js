import { View } from './View';

export class MensagemView extends View{
    update(model) {
        this._elemento.className = 'mensagemShow';
        this._elemento.innerHTML = this._template(model);
        if (model.texto) this._timer();
    }
    _timer() {
        setTimeout(() => {
            this._elemento.className = 'mensagemHide';
        }, 1300);
    }
    _template(model) {
        /* eslint-disable quotes */
        return model.texto
        ? `<p class="alert alert-info">${model.texto}</p>`
        : `<p></p>`;
    }
}
