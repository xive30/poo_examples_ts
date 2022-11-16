import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import { apiRouter } from '../api/routers/api.router'
import unexpectedErrorMiddleware from '~~/api/middlewares/error.global'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use(apiRouter)

app.use(unexpectedErrorMiddleware)

app.listen(process.env.PORT, () => console.log('Running.'))

