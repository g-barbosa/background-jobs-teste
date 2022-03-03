import { compraService } from '../services'
    
import { CompraController } from './compra.controller'

const compraController = new CompraController(compraService)


export { compraController }