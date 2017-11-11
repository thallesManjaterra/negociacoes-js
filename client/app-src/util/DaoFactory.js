import { ConnectionFactory } from './ConnectionFactory';
import { NegociacaoDao } from '../domain/negociacao/NegociacaoDao';

export async function getNegociacaoDao() {
    let connection = await ConnectionFactory.getConnection()
    return new NegociacaoDao(connection);
}
