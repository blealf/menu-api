import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import chalk from 'chalk'
import { itemsRouter } from './routes/items.routes'
import { errorHandler } from './middleware/error.middleware'
import { notFoundHandler } from './middleware/not-found.middleware'

dotenv.config()

if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT)
const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use('/api/menu/items', itemsRouter)

app.use(errorHandler)
app.use(notFoundHandler)

app.listen(PORT, () => {
  console.log(chalk.blue(`Server Started ...`))
  console.log(chalk.yellow(`Listening on port: `) + chalk.green(PORT))
})

