export function obrigatorio (param) {
    throw new Error(`${param} é um parâmetro obrigatório!`);
}
