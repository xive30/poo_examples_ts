import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { apiRouter } from '../api/routers/api.router'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use(apiRouter)

app.listen(process.env.PORT, () => console.log('Running.'))

