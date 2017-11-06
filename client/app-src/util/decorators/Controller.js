export function controller(...seletores) {
    const elements = seletores.map(seletor =>
        document.querySelector(seletor));
        return function(constructor) {
            const constructorOriginal = constructor;
            const constructorNovo = function() {
                return new constructorOriginal(...elements);
            }
            // ajustando o prototype
            constructorNovo.prototype = constructorOriginal.prototype;
            // retornando o novo constructor
            return constructorNovo;
        }
    }
