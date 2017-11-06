System.register(['../domain/negociacao/Negociacoes.js', '../ui/views/NegociacoesView.js', '../ui/models/Mensagem.js', '../ui/views/MensagemView.js', '../domain/negociacao/NegociacaoService.js', '../util/DaoFactory.js', '../domain/negociacao/Negociacao.js', '../util/Bind.js', '../ui/converters/DateConverter.js'], function (_export, _context) {
    "use strict";

    var Negociacoes, NegociacoesView, Mensagem, MensagemView, NegociacaoService, getNegociacaoDao, Negociacao, Bind, DateConverter;
    return {
        setters: [function (_domainNegociacaoNegociacoesJs) {
            Negociacoes = _domainNegociacaoNegociacoesJs.Negociacoes;
        }, function (_uiViewsNegociacoesViewJs) {
            NegociacoesView = _uiViewsNegociacoesViewJs.NegociacoesView;
        }, function (_uiModelsMensagemJs) {
            Mensagem = _uiModelsMensagemJs.Mensagem;
        }, function (_uiViewsMensagemViewJs) {
            MensagemView = _uiViewsMensagemViewJs.MensagemView;
        }, function (_domainNegociacaoNegociacaoServiceJs) {
            NegociacaoService = _domainNegociacaoNegociacaoServiceJs.NegociacaoService;
        }, function (_utilDaoFactoryJs) {
            getNegociacaoDao = _utilDaoFactoryJs.getNegociacaoDao;
        }, function (_domainNegociacaoNegociacaoJs) {
            Negociacao = _domainNegociacaoNegociacaoJs.Negociacao;
        }, function (_utilBindJs) {
            Bind = _utilBindJs.Bind;
        }, function (_uiConvertersDateConverterJs) {
            DateConverter = _uiConvertersDateConverterJs.DateConverter;
        }],
        execute: function () {
            class NegociacaoController {
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
                adiciona(event) {
                    try {
                        event.preventDefault();
                        const negociacao = this._criarNegociacao();
                        getNegociacaoDao().then(dao => dao.adiciona(negociacao)).then(() => {
                            this._negociacoes.adiciona(this._criarNegociacao());
                            this._mensagem.texto = 'Negociação adicionada com sucesso';
                            this._limpaFormulario();
                        }).catch(err => this._mensagem.texto = err);
                    } catch (err) {
                        console.log(err);
                        this._mensagem.texto = err.message;
                    }
                }
                importa() {
                    this._service.obterNegociacoesDoPeriodo().then(periodo => {
                        periodo.filter(novaNegociacao => !this._negociacoes.getArray().some(negociacaoExistente => novaNegociacao.equals(negociacaoExistente))).map(x => this._negociacoes.adiciona(x));
                        this._mensagem.texto = "Negociações do período importadas com sucesso!";
                    }).catch(err => this._mensagem.texto = err);
                }
                apaga() {
                    getNegociacaoDao().then(dao => dao.apagaTodos()).then(() => {
                        this._negociacoes.esvazia();
                        this._mensagem.texto = 'Negociações apagadas com sucesso';
                    }).catch(err => this._mensagem.texto = err);
                }
                _init() {
                    getNegociacaoDao().then(dao => dao.listaTodos()).then(negociacoes => negociacoes.map(x => this._negociacoes.adiciona(x))).catch(err => this._mensagem.texto = err);
                }
                _limpaFormulario() {
                    this._inputData.value = '', this._inputQuantidade.value = 1, this._inputValor.value = '0.00', this._inputData.focus();
                }
                _criarNegociacao() {
                    return new Negociacao(new Date(DateConverter.paraData(this._inputData.value)), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                }
            }

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map