let controller = new NegociacaoController();

document.querySelector('.form')
.addEventListener('submit',
/*Quero o this da função controller não o do document
do DOM, por isso usa-se o bind passando controller */
controller.adiciona.bind(controller));
