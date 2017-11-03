let controller = new NegociacaoController();

//mascára input data
VMasker(document.querySelector("#data")).maskPattern("99/99/9999");

document.querySelector('.form')
.addEventListener('submit',
/*Quero o this da função controller não o do document
do DOM, por isso usa-se o bind passando controller */
controller.adiciona.bind(controller));

document.querySelector('#btnApagar')
.addEventListener('click', controller.apaga.bind(controller));
