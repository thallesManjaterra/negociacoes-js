    class NegociacaoService {
    constructor() {
        this._http = new HttpService();
    }
    obterNegociacoesDaSemana() {
        return this._http
        .get('negociacoes/semana')
        .then(
            dados => dados.map(x => new Negociacao(
                new Date(x.data),
                x.quantidade,
                x.valor
            )),
            err => {
                throw new Error('Não foi possível obter as negociações.');
            }
        );
    }
    obterNegociacoesDaSemanaAnterior() {
        return this._http
        .get('negociacoes/anterior')
        .then(
            dados => dados.map(x => new Negociacao(
                new Date(x.data),
                x.quantidade,
                x.valor
            )),
            err => {
                throw new Error('Não foi possível obter as negociações.');
            }
        );
    }
    obterNegociacoesDaSemanaRetrasada() {
        return this._http
        .get('negociacoes/retrasada')
        .then(
            dados => dados.map(x => new Negociacao(
                new Date(x.data),
                x.quantidade,
                x.valor
            )),
            err => {
                throw new Error('Não foi possível obter as negociações.');
            }
        );
    }
    obterNegociacoesDoPeriodo() {
        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ])
        .then(
            periodo => periodo.reduce((x, y) => x.concat(y))
            .sort((x, y) => y.data.getTime() - x.data.getTime())
        )
        .catch(
            err => {
                console.log(err);
                throw new Error('Não foi possível obter as negociações do período')
            }
        )
    }
}
/* ESTADOS
0: requisição ainda não iniciada;
1: conexão com o servidor estabelecida;
2: requisição recebida;
3: processando requisição;
4: requisição está concluída e a resposta está pronta.
*/
