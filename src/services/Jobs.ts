import { CompraDTO } from '../domain/DTO/compra.dto';
import { Compra } from '../domain/models/Compra';
import { ICompraService } from './Interfaces/ICompra.service';
import { BaseResponse } from '../domain/DTO/base.response';
import { badRequest, notfound, ok } from '../infra/helpers/http.helpers';

export class JobService implements IJobService {
    
    constructor (){}

    async EnviaPlataforma(DTO: CompraDTO) {
        return ok('Compra cadastrada com sucesso')
    }
}