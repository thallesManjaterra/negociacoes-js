import { ConnectionFactory } from './ConnectionFactory.js';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao.js';

export function getNegociacaoDao() {
    return ConnectionFactory
    .getConnection()
    .then( x => new NegociacaoDao(x));
}
