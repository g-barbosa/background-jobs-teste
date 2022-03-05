const Queue = require('bull')
import finalizarCompra from './finalizarCompra'

const finalizarCompraQueue = new Queue(finalizarCompra.key, 
  { redis: 
    { port: process.env.REDIS_PORT, 
      host: process.env.REDIS_HOST, 
      password: process.env.REDIS_PASS  
    } 
  })

finalizarCompraQueue.on('failed', (job) => {
  console.log('failed')
})

export default finalizarCompraQueue