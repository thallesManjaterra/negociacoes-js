System.register(['../../util/HttpService.js', './Negociacao.js'], function (_export, _context) {
    "use strict";

    var HttpService, Negociacao;
    return {
        setters: [function (_utilHttpServiceJs) {
            HttpService = _utilHttpServiceJs.HttpService;
        }, function (_NegociacaoJs) {
            Negociacao = _NegociacaoJs.Negociacao;
        }],
        execute: function () {
            function _asyncToGenerator(fn) {
                return function () {
                    var gen = fn.apply(this, arguments);
                    return new Promise(function (resolve, reject) {
                        function step(key, arg) {
                            try {
                                var info = gen[key](arg);
                                var value = info.value;
                            } catch (error) {
                                reject(error);
                                return;
                            }

                            if (info.done) {
                                resolve(value);
                            } else {
                                return Promise.resolve(value).then(function (value) {
                                    step("next", value);
                                }, function (err) {
                                    step("throw", err);
                                });
                            }
                        }

                        return step("next");
                    });
                };
            }

            let NegociacaoService = class NegociacaoService {
                constructor() {
                    this._http = new HttpService();
                }
                obterNegociacoesDaSemana() {
                    return this._http.get('negociacoes/semana').then(dados => dados.map(x => new Negociacao(new Date(x.data), x.quantidade, x.valor)), err => {
                        throw new Error('Não foi possível obter as negociações.');
                    });
                }
                obterNegociacoesDaSemanaAnterior() {
                    return this._http.get('negociacoes/anterior').then(dados => dados.map(x => new Negociacao(new Date(x.data), x.quantidade, x.valor)), err => {
                        throw new Error('Não foi possível obter as negociações.');
                    });
                }
                obterNegociacoesDaSemanaRetrasada() {
                    return this._http.get('negociacoes/retrasada').then(dados => dados.map(x => new Negociacao(new Date(x.data), x.quantidade, x.valor)), err => {
                        throw new Error('Não foi possível obter as negociações.');
                    });
                }
                obterNegociacoesDoPeriodo() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {
                            let periodo = yield Promise.all([_this.obterNegociacoesDaSemana(), _this.obterNegociacoesDaSemanaAnterior(), _this.obterNegociacoesDaSemanaRetrasada()]);
                            return periodo.reduce(function (acc, x) {
                                return acc.concat(x);
                            }).sort(function (x, y) {
                                return y.data.getTime - x.data.getTime();
                            });
                        } catch (err) {
                            console.log(err);
                            throw new Error('Não foi possível obter as negociações do período');
                        }
                    })();
                }
            };

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map