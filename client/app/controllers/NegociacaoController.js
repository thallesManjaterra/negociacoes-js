System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
    "use strict";

    var Negociacoes, NegociacaoService, Negociacao, NegociacoesView, MensagemView, Mensagem, DateConverter, getNegociacaoDao, Bind, debounce;
    return {
        setters: [function (_domainIndexJs) {
            Negociacoes = _domainIndexJs.Negociacoes;
            NegociacaoService = _domainIndexJs.NegociacaoService;
            Negociacao = _domainIndexJs.Negociacao;
        }, function (_uiIndexJs) {
            NegociacoesView = _uiIndexJs.NegociacoesView;
            MensagemView = _uiIndexJs.MensagemView;
            Mensagem = _uiIndexJs.Mensagem;
            DateConverter = _uiIndexJs.DateConverter;
        }, function (_utilIndexJs) {
            getNegociacaoDao = _utilIndexJs.getNegociacaoDao;
            Bind = _utilIndexJs.Bind;
            debounce = _utilIndexJs.debounce;
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

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
                var desc = {};
                Object['ke' + 'ys'](descriptor).forEach(function (key) {
                    desc[key] = descriptor[key];
                });
                desc.enumerable = !!desc.enumerable;
                desc.configurable = !!desc.configurable;

                if ('value' in desc || desc.initializer) {
                    desc.writable = true;
                }

                desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                    return decorator(target, property, desc) || desc;
                }, desc);

                if (context && desc.initializer !== void 0) {
                    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                    desc.initializer = undefined;
                }

                if (desc.initializer === void 0) {
                    Object['define' + 'Property'](target, property, desc);
                    desc = null;
                }

                return desc;
            }

            var _dec, _desc, _value, _class;

            let NegociacaoController = (_dec = debounce(1500), (_class = class NegociacaoController {
                constructor() {
                    let $ = document.querySelector.bind(document);
                    Object.assign(this, {
                        _inputData: $('#data'),
                        _inputQuantidade: $('#quantidade'),
                        _inputValor: $('#valor'),
                        _service: new NegociacaoService(),
                        _negociacoes: new Bind(new Negociacoes(), new NegociacoesView('#negociacoes'), 'adiciona', 'esvazia'),
                        _mensagem: new Bind(new Mensagem(), new MensagemView('#mensagemView'), 'texto')
                    });
                    this._init();
                }
                _init() {
                    var _this = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const dao = yield getNegociacaoDao();
                            const negociacoes = yield dao.listaTodos();
                            negociacoes.map(function (x) {
                                return _this._negociacoes.adiciona(x);
                            });
                        } catch (err) {
                            _this._mensagem.texto = err.message;
                        }
                    })();
                }
                adiciona(event) {
                    var _this2 = this;

                    return _asyncToGenerator(function* () {
                        try {
                            event.preventDefault();
                            const negociacao = _this2._criarNegociacao();
                            const dao = yield getNegociacaoDao();
                            yield dao.adiciona(negociacao);
                            _this2._negociacoes.adiciona(_this2._criarNegociacao());
                            _this2._mensagem.texto = 'Negociação adicionada com sucesso';
                            _this2._limpaFormulario();
                        } catch (err) {
                            console.log(err);
                            _this2._mensagem.texto = err.message;
                        }
                    })();
                }
                apaga() {
                    var _this3 = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const dao = yield getNegociacaoDao();
                            yield dao.apagaTodos(), _this3._negociacoes.esvazia();
                            _this3._mensagem.texto = 'Negociações apagadas com sucesso';
                        } catch (err) {
                            _this3._mensagem.texto = err;
                        }
                    })();
                }

                importa() {
                    var _this4 = this;

                    return _asyncToGenerator(function* () {
                        try {
                            const negociacoes = yield _this4._service.obterNegociacoesDoPeriodo();
                            negociacoes.filter(function (novaNegociacao) {
                                return !_this4._negociacoes.getArray().some(function (negociacaoExistente) {
                                    return novaNegociacao.equals(negociacaoExistente);
                                });
                            }).map(function (x) {
                                return _this4._negociacoes.adiciona(x);
                            });
                            _this4._mensagem.texto = "Negociações do período importadas com sucesso!";
                        } catch (err) {
                            _this4._mensagem.texto = err;
                        }
                    })();
                }
                _limpaFormulario() {
                    this._inputData.value = '', this._inputQuantidade.value = 1, this._inputValor.value = '0.00', this._inputData.focus();
                }
                _criarNegociacao() {
                    return new Negociacao(new Date(DateConverter.paraData(this._inputData.value)), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                }
            }, (_applyDecoratedDescriptor(_class.prototype, 'importa', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'importa'), _class.prototype)), _class));

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map