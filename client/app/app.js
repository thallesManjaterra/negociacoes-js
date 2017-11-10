System.register(['./controllers/NegociacaoController.js', './domain/index.js'], function (_export, _context) {
    "use strict";

    var NegociacaoController, Negociacao;
    return {
        setters: [function (_controllersNegociacaoControllerJs) {
            NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
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

            //mascára input data
            VMasker(document.querySelector("#data")).maskPattern("99/99/9999");
        }
    };
});
//# sourceMappingURL=app.js.map