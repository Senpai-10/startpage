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

    let result = db.find(id)

    if (result != undefined) {
        res.json(result)
    } else {
        res.json({ msg: 'Section not found!' })
    }
})

app.delete('/sections/:id', (req: Request, res: Response) => {
    let id = req.params.id

    let result = db.remove(id)

    if (result == true) {
        res.json({ msg: 'Section removed' })
    } else {
        res.json({ msg: 'Section not found!' })
    }
})

app.post('/sections', (req: Request, res: Response) => {
    let new_section: Section = req.body

    db.add(new_section)

    res.json({ msg: 'New section added' })
})

app.put('/sections', (req: Request, res: Response) => {
    let section: Section = req.body

    db.update(section.id, section)

    res.json({ msg: 'section updated' })
})

app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`)
})
