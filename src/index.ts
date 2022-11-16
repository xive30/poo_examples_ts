import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

let helloWorld = function() {
    return 'Hello world !';
}

const app = express()

app.use(express.json())

app.use(cors())


app.get('/hello', (req, res) => {
    res.send(helloWorld())
  })

app.listen(process.env.PORT, () => console.log('Running.'))

