class DateConverter {
    constructor() {
        throw new Error('Esta classe não pode ser instanciada')
    }
    static paraTexto(data) {
        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + (data.getFullYear(  ))
    }
}
