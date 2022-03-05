import { CompraDTO } from '../domain/DTO/compra.dto';
import { ICompraService } from './Interfaces/ICompra.service';
import Queue from '../jobs/queue'
import { ok } from '../infra/helpers/http.helpers';

export class CompraService implements ICompraService {
    
    constructor (){}

    async finalizar(DTO: CompraDTO) {
        await Queue.add(DTO)
        return ok('Estamos processando a sua compra. Em breve você recebera em email com mais informações')
    }
}