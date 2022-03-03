import { BaseResponse } from '../../domain/DTO/base.response';
import { CompraDTO } from '../../domain/DTO/compra.dto';

export interface ICompraService {
  finalizar(DTO: CompraDTO, cpf: string): Promise<BaseResponse>;
}