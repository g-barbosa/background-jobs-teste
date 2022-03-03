import { Request, response, Response } from 'express'
import { RequestHelper } from '../infra/helpers/http.helpers';
import { CompraService  } from '../services/compra.service';

export class CompraController {

    constructor(
        private service: CompraService,
    ){}

    async finalizar (request: RequestHelper, response: Response): Promise<Response> {
        try {
            const { codigo, valor, cpf, data  } = request.body
            
            const resultado = await this.service.finalizar({ codigo, valor, cpf, data })

            return response.status(resultado.statusCode).send(resultado)

        } catch(err){
          return response.status(500).json({ message: 'Houve um erro interno no servidor' })
      }
    }
}
