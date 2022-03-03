import Queue from 'bull'
import redis from '../configs/redis'

import finalizarCompra from './finalizarCompra'

const finalizarCompraQueu = new Queue(finalizarCompra.key, redis)