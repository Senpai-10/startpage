import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { Section } from './interfaces'
import { DB } from './database'

const db = new DB()

const app: Express = express()
const port = 3333

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/sections', (_: Request, res: Response) => {
    let secs = db.get_all()

    res.json(secs)
})

app.get('/sections/:uuid', (req: Request, res: Response) => {
    let uuid = req.params.uuid

    let rd = db.find(uuid)

    res.json(rd)
})

app.delete('/sections/:uuid', (req: Request, res: Response) => {
    let uuid = req.params.uuid

    let rd = db.remove(uuid)

    res.json(rd)
})

app.post('/sections', (req: Request, res: Response) => {
    let new_section: Section = req.body

    let rd = db.add(new_section)

    res.json(rd)
})

app.put('/sections/:uuid', (req: Request, res: Response) => {
    let uuid = req.params.uuid
    let section: Section = req.body

    let rd = db.update(uuid, section)

    res.json(rd)
})

app.listen(port, () => {
    console.log(`[Server]: I am running at http://localhost:${port}`)
})
