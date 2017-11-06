System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class DateConverter {
                constructor() {
                    throw new Error('Esta classe não pode ser instanciada');
                }
                static paraData(texto) {
                    return new Date(...texto.split('/').reverse().map((x, i) => x - i % 2));
                }
                static paraTexto(data) {
                    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                }
            }

            _export('DateConverter', DateConverter);
        }
    };
});
//# sourceMappingURL=DateConverter.js.map