const express = require('express')
import { compraController } from '../controllers'

const routes = express.Router()

routes.post('/api/finalizarCompra', (request, response) => {
    return compraController.finalizar(request, response)
})

export  { routes }