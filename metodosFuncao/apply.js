/*
O método function.apply() tem o mesmo funcionamento do function.call() com uma diferença na forma dos parâmetros, o segundo parâmetro sempre deverá ser um array, contendo todos os parâmetros que serão enviados para a função.

O primeiro parâmetro continua sendo o escopo onde sua função será executada.
*/
let title = require('./tools/title');
console.log(require('./tools/clear'));
title('MÉTODO APPLY');

var url = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript';
var site = { url : 'http://devdocs.io/javascript/' };
function f(x, y){
    console.log(`\n${x} ${y} - ${this.url}`);
}
f.apply({ url }, ['Guia Javascript', 'no MDN!']  );
f.apply(site, ['Domentação', 'JS no devdocs']);
f.apply(site, [])
console.log(`\n`);
