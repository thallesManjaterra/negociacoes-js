System.register(['./controllers/NegociacaoController.js', './util/index.js', './domain/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, debounce, Negociacao;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
        }, function (_utilIndexJs) {
            debounce = _utilIndexJs.debounce;
        }, function (_domainIndexJs) {
            Negociacao = _domainIndexJs.Negociacao;
        }],
        execute: function () {

            const negociacao = new Negociacao(new Date(), 2, 400);
            const headers = new Headers({
                'Content-Type': 'application/json'
            });
            const body = JSON.stringify(negociacao);
            const method = "POST";

            fetch('/negociacoes', {
                method,
                headers,
                body
            }).then(() => console.log('Dados enviados com sucesso!'));

            const controller = new NegociacaoController();

            const $ = document.querySelector.bind(document);

            //mascára input data
            VMasker($("#data")).maskPattern("99/99/9999");

            $('.form').addEventListener('submit', controller.adiciona.bind(controller));

            $('#btnApagar').addEventListener('click', controller.apaga.bind(controller));

            $('#btnImportar').addEventListener('click', controller.importa.bind(controller));
        }
    };
});
//# sourceMappingURL=app.js.map