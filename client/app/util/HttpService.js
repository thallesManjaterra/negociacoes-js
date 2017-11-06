System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let HttpService = class HttpService {
                get(url) {
                    return new Promise((resolve, reject) => {
                        let xhr = new XMLHttpRequest();
                        xhr.open('GET', url);
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    resolve(JSON.parse(xhr.responseText));
                                } else {
                                    reject(xhr.responseText);
                                }
                            }
                        };
                        xhr.send(); // executa a requisição configurada
                    });
                }
            };

            _export('HttpService', HttpService);
        }
    };
});
//# sourceMappingURL=HttpService.js.map