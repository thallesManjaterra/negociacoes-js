import { View } from './View.js';
import { DateConverter } from '../converters/DateConverter.js';

export class NegociacoesView extends View{
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
    _template(model) {
        return `
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.getArray().map(negociacao =>
                    `
                    <tr>
                        <td>${DateConverter.paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `
                ).join('')}
            </tbody>
            <tfoot>
                <tr>
                      <td colspan="3"></td>
                      <td>${model.volumeTotal}</td>
                </tr>
            </tfoot>
        </table>
        `
    }
}
