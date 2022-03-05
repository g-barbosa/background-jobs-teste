require('dotenv/config')
import Queue from './jobs/queue'
import finalizarCompra from './jobs/finalizarCompra'

Queue.process(finalizarCompra.handle)