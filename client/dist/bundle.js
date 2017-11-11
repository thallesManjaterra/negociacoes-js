webpackJsonp([1],[,function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(3);let e=class{constructor(a=Object(d.f)("data"),b=Object(d.f)("quantidade"),c=Object(d.f)("valor")){Object.assign(this,{_quantidade:b,_valor:c}),this._data=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._quantidade*this._valor}get data(){return new Date(this._data.getTime())}get quantidade(){return this._quantidade}get valor(){return this._valor}equals(a){return JSON.stringify(this)===JSON.stringify(a)}}},,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a){throw new Error(`${a} é um parâmetro obrigatório!`)}function f(a=500){return function(b,c,d){const e=d.value;let f=0;return d.value=function(...b){event&&event.preventDefault(),clearInterval(f),f=setTimeout(()=>e.apply(this,b),a)},d}}function g(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){const a=new c(...b);Object.getOwnPropertyNames(c.prototype).forEach((b)=>{Reflect.hasMetadata("bindEvent",a,b)&&h(a,Reflect.getMetadata("bindEvent",a,b))})};return d.prototype=c.prototype,d}}function h(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}function i(a=e("event"),b=e("selector"),c=!0){return function(d,e,f){return Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}let j=class a{static create(b,c,d){return new Proxy(b,{get(b,e){return a._ehFuncao(b[e])&&c.includes(e)?function(){b[e].apply(b,arguments),d(b)}:b[e]},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _ehFuncao(a){return typeof a==typeof Function}},k=class{constructor(a,b,...c){const d=j.create(a,c,(a)=>b.update(a));return b.update(a),d}};const l=["negociacoes"];let m=null,n=class a{constructor(){throw new Error("N\xE3o \xE9 poss\xEDvel criar inst\xE2ncias dessa classe.")}static getConnection(){return new Promise((b,c)=>{if(m)return b(m);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{m=a.target.result;m.close.bind(m);m.close=()=>{throw new Error("Voc\xEA n\xE3o pode fechar diretamente a conex\xE3o!")},b(a.target.result)},d.onerror=(a)=>{console.log(a.target.error),c(a.target.error.name)}})}static _createStores(a){l.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}static closeConnection(){m&&close()}};var o=c(4);let p=(()=>{var a=d(function*(){let a=yield n.getConnection();return new o.a(a)});return function(){return a.apply(this,arguments)}})();var q=c(5);c.d(b,"a",function(){return k}),c.d(b,!1,function(){return n}),c.d(b,"e",function(){return p}),c.d(b,!1,function(){return q.a}),c.d(b,!1,function(){return j}),c.d(b,"f",function(){return e}),c.d(b,"d",function(){return f}),c.d(b,"c",function(){return g}),c.d(b,"b",function(){return i})},function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(1);let e=class{constructor(a){this._connection=a,this._store="negociacoes"}adiciona(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=(a)=>{console.log(a.target.error),c("N\xE3o foi poss\xEDvel salvar a negocia\xE7\xE3o!")}})}listaTodos(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(e.value._data,e.value._quantidade,e.value._valor);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel listar nas negocia\xE7\xF5es")}})}apagaTodos(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=(a)=>{console.log(a.target.error),b("N\xE3o foi poss\xEDvel apagar as negocia\xE7\xF5es")}})}}},function(a,b,c){"use strict";c.d(b,"a",function(){return d});let d=class{_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}get(a){return fetch(a).then((a)=>this._handleErrors(a)).then((a)=>a.json())}}},,,,,,,,,,,,,,,,,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});var f=c(23),g=c.n(f),h=c(24),i=c.n(h),j=c(25),k=c.n(j),l=c(2),m=c.n(l),n=c(1),o=c(4);let p=class{constructor(){this._negociacoes=[],Object.freeze(this)}adiciona(a){this._negociacoes.push(a)}getArray(){return[].concat(this._negociacoes)}get volumeTotal(){return this._negociacoes.reduce((a,b)=>a+b.volume,0)}esvazia(){this._negociacoes.length=0}},q=class{constructor(a){this._elemento=document.querySelector(a)}update(){throw new Error("Voc\xEA precisa implementar o m\xE9todo update")}_template(){throw new Error("Voc\xEA precisa implementar o m\xE9todo _template")}},r=class extends q{update(a){this._elemento.className="mensagemShow",this._elemento.innerHTML=this._template(a),a.texto&&this._timer()}_timer(){setTimeout(()=>{this._elemento.className="mensagemHide"},1300)}_template(a){return a.texto?`<p class="alert alert-info">${a.texto}</p>`:`<p></p>`}},s=class{constructor(){throw new Error("Esta classe n\xE3o pode ser instanciada")}static paraData(a){return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}static paraTexto(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}},t=class extends q{update(a){this._elemento.innerHTML=this._template(a)}_template(a){return`
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${a.getArray().map((a)=>`
                    <tr>
                        <td>${s.paraTexto(a.data)}</td>
                        <td>${a.quantidade}</td>
                        <td>${a.valor}</td>
                        <td>${a.volume}</td>
                    </tr>
                    `).join("")}
            </tbody>
            <tfoot>
                <tr>
                      <td colspan="3"></td>
                      <td>${a.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `}},u=class{constructor(a=""){this._texto=a}get texto(){return this._texto}set texto(a){this._texto=a}};var v,w,x,y,z,A,B,C,D=c(3);let E=(v=Object(D.c)("#data","#quantidade","#valor"),w=Object(D.b)("submit",".form"),x=Object(D.d)(),y=Object(D.b)("click","#btnImportar"),z=Object(D.d)(),A=Object(D.b)("click","#btnApagar"),v(B=(C=class{constructor(a,b,c){Object.assign(this,{_inputData:a,_inputQuantidade:b,_inputValor:c,_negociacoes:new D.a(new p(),new t("#negociacoes"),"adiciona","esvazia"),_mensagem:new D.a(new u(),new r("#mensagemView"),"texto")}),this._init()}_init(){var a=this;return d(function*(){try{const b=yield Object(D.e)(),c=yield b.listaTodos();c.map(function(b){return a._negociacoes.adiciona(b)})}catch(b){a._mensagem.texto=b.message}})()}adiciona(a){var b=this;return d(function*(){try{a.preventDefault();const c=b._criarNegociacao(),d=yield Object(D.e)();yield d.adiciona(c),b._negociacoes.adiciona(b._criarNegociacao()),b._mensagem.texto="Negocia\xE7\xE3o adicionada com sucesso",b._limpaFormulario()}catch(a){console.log(a),b._mensagem.texto=a.message}})()}importa(){var a=this;return d(function*(){try{const{NegociacaoService:b}=yield c.e(0).then(c.bind(null,27)),d=new b,e=yield e.obterNegociacoesDoPeriodo();e.filter(function(b){return!a._negociacoes.getArray().some(function(a){return b.equals(a)})}).map(function(b){return a._negociacoes.adiciona(b)}),a._mensagem.texto="Negocia\xE7\xF5es do per\xEDodo importadas com sucesso!"}catch(b){a._mensagem.texto=b}})()}apaga(){var a=this;return d(function*(){try{const b=yield Object(D.e)();yield b.apagaTodos(),a._negociacoes.esvazia(),a._mensagem.texto="Negocia\xE7\xF5es apagadas com sucesso"}catch(b){a._mensagem.texto=b}})()}_limpaFormulario(){this._inputData.value="",this._inputQuantidade.value=1,this._inputValor.value="0.00",this._inputData.focus()}_criarNegociacao(){return new n.a(new Date(s.paraData(this._inputData.value)),parseInt(this._inputQuantidade.value),parseFloat(this._inputValor.value))}},e(C.prototype,"adiciona",[w,x],Object.getOwnPropertyDescriptor(C.prototype,"adiciona"),C.prototype),e(C.prototype,"importa",[y,z],Object.getOwnPropertyDescriptor(C.prototype,"importa"),C.prototype),e(C.prototype,"apaga",[A],Object.getOwnPropertyDescriptor(C.prototype,"apaga"),C.prototype),C))||B);var F=c(26),G=c.n(F);const H=new n.a(new Date(),2,400),I=new Headers({"Content-Type":"application/json"}),J=JSON.stringify(H);fetch("http://localhost:3000/negociacoes",{method:"POST",headers:I,body:J}).then(()=>console.log("Dados enviados com sucesso!"));new E;G()(document.querySelector("#data")).maskPattern("99/99/9999")},function(){},function(){},function(){},function(a,b,c){var d,e;(function(f,g){d=g,e="function"==typeof d?d.call(b,c,b,a):d,!(e!==void 0&&(a.exports=e))})(this,function(){var a="9",b="A",c="S",d=[9,16,17,18,36,37,38,39,40,91,92,93],f=function(a){for(var b=0,c=d.length;b<c;b++)if(a==d[b])return!1;return!0},e=function(a){return a=a||{},a={delimiter:a.delimiter||".",lastOutput:a.lastOutput,precision:a.hasOwnProperty("precision")?a.precision:2,separator:a.separator||",",showSignal:a.showSignal,suffixUnit:a.suffixUnit&&" "+a.suffixUnit.replace(/[\s]/g,"")||"",unit:a.unit&&a.unit.replace(/[\s]/g,"")+" "||"",zeroCents:a.zeroCents},a.moneyPrecision=a.zeroCents?0:a.precision,a},g=function(d,e,f){for(;e<d.length;e++)(d[e]===a||d[e]===b||d[e]===c)&&(d[e]=f);return d},h=function(a){this.elements=a};h.prototype.unbindElementToMask=function(){for(var a=0,b=this.elements.length;a<b;a++)this.elements[a].lastOutput="",this.elements[a].onkeyup=!1,this.elements[a].onkeydown=!1,this.elements[a].value.length&&(this.elements[a].value=this.elements[a].value.replace(/\D/g,""))},h.prototype.bindElementToMask=function(a){for(var b=this,c=function(c){c=c||window.event;var d=c.target||c.srcElement;f(c.keyCode)&&setTimeout(function(){b.opts.lastOutput=d.lastOutput,d.value=j[a](d.value,b.opts),d.lastOutput=d.value,d.setSelectionRange&&b.opts.suffixUnit&&d.setSelectionRange(d.value.length,d.value.length-b.opts.suffixUnit.length)},0)},d=0,e=this.elements.length;d<e;d++)this.elements[d].lastOutput="",this.elements[d].onkeyup=c,this.elements[d].value.length&&(this.elements[d].value=j[a](this.elements[d].value,this.opts))},h.prototype.maskMoney=function(a){this.opts=e(a),this.bindElementToMask("toMoney")},h.prototype.maskNumber=function(){this.opts={},this.bindElementToMask("toNumber")},h.prototype.maskAlphaNum=function(){this.opts={},this.bindElementToMask("toAlphaNumeric")},h.prototype.maskPattern=function(a){this.opts={pattern:a},this.bindElementToMask("toPattern")},h.prototype.unMask=function(){this.unbindElementToMask()};var j=function(a){if(!a)throw new Error("VanillaMasker: There is no element to bind.");var b="length"in a?a.length?a:[]:[a];return new h(b)};return j.toMoney=function(a,b){if(b=e(b),b.zeroCents){b.lastOutput=b.lastOutput||"";var c="("+b.separator+"[0]{0,"+b.precision+"})",d=new RegExp(c,"g"),f=a.toString().replace(/[\D]/g,"").length||0,g=b.lastOutput.toString().replace(/[\D]/g,"").length||0;a=a.toString().replace(d,""),f<g&&(a=a.slice(0,a.length-1))}var h=a.toString().replace(/[\D]/g,""),j=new RegExp("^(0|\\"+b.delimiter+")"),k=new RegExp("(\\"+b.separator+")$"),l=h.substr(0,h.length-b.moneyPrecision),m=l.substr(0,l.length%3),n=Array(b.precision+1).join("0");l=l.substr(l.length%3,l.length);for(var o=0,i=l.length;o<i;o++)0==o%3&&(m+=b.delimiter),m+=l[o];m=m.replace(j,""),m=m.length?m:"0";var p="";if(!0===b.showSignal&&(p=0>a||a.startsWith&&a.startsWith("-")?"-":""),!b.zeroCents){var q=h.length-b.precision,r=h.substr(q,b.precision),s=r.length,t=b.precision>s?b.precision:s;n=(n+r).slice(-t)}var u=b.unit+p+m+b.separator+n;return u.replace(k,"")+b.suffixUnit},j.toPattern=function(d,e){var f,h="object"==typeof e?e.pattern:e,i=h.replace(/\W/g,""),j=h.split(""),k=d.toString().replace(/\W/g,""),l=k.replace(/\W/g,""),m=0,n=j.length,o="object"==typeof e?e.placeholder:void 0;for(f=0;f<n;f++)if(m>=k.length){if(i.length==l.length)return j.join("");if(void 0!==o&&i.length>l.length)return g(j,f,o).join("");break}else if(j[f]===a&&k[m].match(/[0-9]/)||j[f]===b&&k[m].match(/[a-zA-Z]/)||j[f]===c&&k[m].match(/[0-9a-zA-Z]/))j[f]=k[m++];else if(j[f]===a||j[f]===b||j[f]===c)return void 0===o?j.slice(0,f).join(""):g(j,f,o).join("");return j.join("").substr(0,f)},j.toNumber=function(a){return a.toString().replace(/(?!^-)[^0-9]/g,"")},j.toAlphaNumeric=function(a){return a.toString().replace(/[^a-z0-9 ]+/i,"")},j})}],[22]);