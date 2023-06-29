import { Section } from './interfaces'
import editjsonfile from 'edit-json-file'
import dotenv from 'dotenv'
dotenv.config()

const data_path = process.env.DATA_PATH

if (data_path == undefined) {
    console.log(`Error: Add 'DATA_PATH' to '.env'!`)
    process.exit(1)
}

export class DB {
    private key: string
    private config: editjsonfile.JsonEditor
    public sections_list: Section[]

    constructor() {
        this.key = "sections"
        this.config = editjsonfile(data_path!)
        this.sections_list = this.config.get(this.key)
    }

    load() {
        this.config = editjsonfile(data_path!)
        this.sections_list = this.config.get(this.key)
    }

    get_all(): Section[] {
        return this.sections_list
    }

    find(id: string): Section | undefined {
        for (let i = 0; i<this.sections_list.length; i++) {
            let section = this.sections_list[i]

            if (section.id === id) {
                return section
            }
        }

        return undefined
    }

    remove(id: string): boolean {
        for (let i = 0; i<this.sections_list.length; i++) {
            let section = this.sections_list[i]

            if (section.id === id) {
                this.sections_list.splice(i, 1)
                this.save()
                return true
            }
        }

        return false
    }

    update(id: string, section: Section) {
        let index = this.sections_list.findIndex((v) => v.id === id)

        this.sections_list[index] = section

        this.save()
    }

    add(section: Section) {
        this.sections_list.push(section)
        this.save()
    }

    save() {
        this.config.set(this.key, this.sections_list)
        this.config.save()
    }
}
