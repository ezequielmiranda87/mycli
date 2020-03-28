import { Command, flags } from '@oclif/command'

const projects_folder = "~/code"


export default class project extends Command {

    async run() {
        this.log(`Hello project cli `)
    }

    createFolder() {

    }

    createProject() {

    }

    listProjects() {

    }

}