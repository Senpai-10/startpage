import express, { Express, Request, Response } from 'express'

const app: Express = express()
const port = 3333

import cors from 'cors'

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/', (req: Request, res: Response) => {
    res.json({ name: 'senpai' })
})

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`)
})
