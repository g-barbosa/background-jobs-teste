const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config')

import { routes } from './routes/routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(process.env.PORT || 3000)

export default app