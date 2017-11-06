function getNegociacaoDao() {
    return ConnectionFactory
    .getConnection()
    .then( x => new NegociacaoDao(x));
}
