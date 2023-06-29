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

app.get('/sections/:id', (req: Request, res: Response) => {
    let id = req.params.id

    let rd = db.find(id)

    res.json(rd)
})

app.delete('/sections/:id', (req: Request, res: Response) => {
    let id = req.params.id

    let rd = db.remove(id)

    res.json(rd)
})

app.post('/sections', (req: Request, res: Response) => {
    let new_section: Section = req.body

    let rd = db.add(new_section)

    res.json(rd)
})

app.put('/sections/:id', (req: Request, res: Response) => {
    let id = req.params.id
    let section: Section = req.body

    let rd = db.update(id, section)

    res.json(rd)
})

app.listen(port, () => {
    console.log(`[Server]: I am running at http://localhost:${port}`)
})
