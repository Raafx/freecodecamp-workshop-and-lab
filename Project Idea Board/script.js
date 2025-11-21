const projectStatus  = {
    PENDING : {
        description: "Pending Execution"
    },
    SUCCESS : {
        description: "Executed Successfully"
    },
    FAILURE : {
        description: "Execution Failed"
    }
}

class ProjectIdea {
    constructor(title,description) {
        this.title = title
        this.description = description
        this.status = projectStatus.PENDING
    }

    updateProjectStatus(newStatus){
        this.status = newStatus
    }


}

class ProjectIdeaBoard {
    constructor(title) {
        this.title = title
        this.ideas = []
    }

    pin(project){
        this.ideas.push(project) 
    }

    unpin(project){
        this.ideas.splice(
            this.ideas.indexOf(project),1
        )    
    }

    count(){
        return this.ideas.length
    }

    formatToString(){
        let projectList = ""
        this.ideas.forEach((project) => {
            projectList+= `${project.title} (${project.status.description}) - ${project.description}\n`
        })

        return `${this.title} has ${this.count()} idea(s)\n${projectList}`
    }


}

const project1 = new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions.")

const project2 = new ProjectIdea("Breakfast Chef Robot", "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.")


const emptyBoard = new ProjectIdeaBoard("Empty Board")
const TechProject = new ProjectIdeaBoard("Tech Project Board")
const smartHome = new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")

TechProject.pin(smartHome)

console.log(TechProject.formatToString())

console.log(emptyBoard.formatToString())


