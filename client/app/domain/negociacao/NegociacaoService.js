class NegociacaoService {
    obterNegociacoesDaSemana(callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                if(xhr.status == 200) {
                    console.log('Obtendo as negociacoes do servidor!');
                    //JSON.parse - convertendo json de string para objeto
                    const negociacoes = JSON.parse(xhr.responseText)
                    .map(x => new Negociacao(
                        new Date(x.data),
                        x.quantidade,
                        x.valor
                    ));
                    callback(null, negociacoes)
                } else {
                    console.log(xhr.responseText);
                    callback('Não foi possível obter negociações da semana')
                }
            }
        };
        xhr.send();
    }
}
/* ESTADOS
0: requisição ainda não iniciada;
1: conexão com o servidor estabelecida;
2: requisição recebida;
3: processando requisição;
4: requisição está concluída e a resposta está pronta.
*/
