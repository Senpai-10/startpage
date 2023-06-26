import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

interface Section {
    uuid: string
    name: string
    links: Array<Link>
}

interface Link {
    uuid: string
    name: string
    url: string
    website_icon: string
}

const data_path = process.env.DATA_PATH

if (data_path == undefined) {
    console.log(`Error: Add 'DATA_PATH' to '.env'!`)
    process.exit(1)
}

const app: Express = express()
const port = 3333

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/', (req: Request, res: Response) => {
    res.json({ name: 'senpai' })
})

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`)
})
