System.register(['./controllers/NegociacaoController.js', './util/index.js'], function (_export, _context) {
  "use strict";

  var NegociacaoController, debounce;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }, function (_utilIndexJs) {
      debounce = _utilIndexJs.debounce;
    }],
    execute: function () {

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