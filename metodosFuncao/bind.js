class X {
    constructor() {
        let $ = document.querySelector.bind(document);
        Object.assign(this, {
            _inputNome: $('#nome'),
            _inputSobrenome: $('#sobrenome'),
            button: $('#buttonID'),
            button2: $('#buttonID2')
        });
        this.textContent = '"BINDOOOOOU"!!!';
    }
    onSubmit(event) {
        event.preventDefault();
        alert(`${this._inputNome.value}\n${this._inputSobrenome.value}`)
    }
    onClickButton(event) {
        alert(this.textContent)
    }
}

let x = new X();
x.button.addEventListener('click', x.onClickButton);
x.button2.addEventListener('click', x.onClickButton.bind(x))
document.querySelector('form')
.addEventListener('submit', x.onSubmit.bind(x));
