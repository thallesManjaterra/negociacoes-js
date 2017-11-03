//method call()
let title = require('./tools/title');


console.log(require('./tools/clear'));

title('MÉTODO CALL');

let y = {
	linguagem: 'javinha'
};
let x = {
	linguagem: 'JAVASCRIPT'
};

function start() {
	console.log(this.linguagem);
}

start.call(x);
start.call(y);

// metodo call com parâmetros
{
	title('MÉTODO CALL COM PARÂMETROS');
	let y = {
		linguagem: 'javinha'
	};
	let x = {
		linguagem: 'JAVASCRIPT'
	};
	function start(x, y) { //declarando PARAMÊTROS que os argumentos terão na funcão!
		//exibindo ARGUMENTOS que recebi através dos parâmetros
		console.log(`${this.linguagem} ${x} ${y}`);
	}
	start.call(x, 'Rocks', '!!!'); //passando ARGUMENTOS
	start.call(y, 'bem', 'mais ou menos'); //passando ARGUMENTOS
}
console.log('\n');
