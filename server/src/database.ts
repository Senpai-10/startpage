import { Section, RData } from './interfaces'
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
        this.key = 'sections'
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

    find(uuid: string): RData {
        for (let i = 0; i < this.sections_list.length; i++) {
            let section = this.sections_list[i]

            if (section.uuid === uuid) {
                return { success_message: 'Section found', data: section }
            }
        }

        return { error_message: 'Section not found' }
    }

    remove(uuid: string): RData {
        for (let i = 0; i < this.sections_list.length; i++) {
            let section = this.sections_list[i]

            if (section.uuid === uuid) {
                this.sections_list.splice(i, 1)
                this.save()
                return { success_message: 'Section removed', data: section }
            }
        }

        return { error_message: 'Section not found' }
    }

    update(uuid: string, section: Section): RData {
        let index = this.find_index(uuid)

        if (index != -1) {
            this.sections_list[index] = section
            this.save()
            return { success_message: 'Section updated', data: section }
        }

        return { error_message: 'Section not found!' }
    }

    private find_index(uuid: string): number {
        return this.sections_list.findIndex((v) => v.uuid === uuid)
    }

    add(section: Section): RData {
        let uuid = section.uuid

        let index = this.find_index(uuid)

        if (index === -1) {
            this.sections_list.push(section)
            this.save()

            return { success_message: 'New section added', data: section }
        }

        return { error_message: 'Section already exists' }
    }

    save() {
        this.config.set(this.key, this.sections_list)
        this.config.save()
    }
}
