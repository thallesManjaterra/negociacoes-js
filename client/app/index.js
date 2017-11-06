System.register(["./controllers/NegociacaoController.js"], function (_export, _context) {
  "use strict";

  var NegociacaoController;
  return {
    setters: [function (_controllersNegociacaoControllerJs) {
      NegociacaoController = _controllersNegociacaoControllerJs.NegociacaoController;
    }],
    execute: function () {

      const controller = new NegociacaoController();

      const $ = document.querySelector.bind(document);

      //mascára input data
      VMasker($("#data")).maskPattern("99/99/9999");

      $('.form').addEventListener('submit',
      /*Quero o this da função controller não o do document
      do DOM, por isso usa-se o bind passando controller */
      controller.adiciona.bind(controller));

      $('#btnApagar').addEventListener('click', controller.apaga.bind(controller));

      $('#btnImportar').addEventListener('click', controller.importa.bind(controller));
    }
  };
});
//# sourceMappingURL=index.js.map