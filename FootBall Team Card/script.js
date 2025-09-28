
const headCoachElement = document.getElementById("head-coach")

const teamElement = document.getElementById("team")

const yearElement = document.getElementById("year")

const selectPlayersElement = document.getElementById("players")

const playerCardsElement = document.getElementById("player-cards")



const footballTeam = {
    team: "Liverpool",
    year: 2025,
    headCoach: "Arne Slot",
    players: [
        {
            name: "Sergio Ramoz",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Mohammed Salah",
            position: "midfielder",
            isCaptain: true
        },
        {
            name: "Luis Diaz",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Darwin Nunez",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Ben Doak",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Virgil van Djik",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Joe Gomez",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Alisson",
            position: "goalkeeper",
            isCaptain: false
        },
    ]
}

headCoachElement.innerText = footballTeam.headCoach

teamElement.innerText = footballTeam.team

yearElement.innerText = footballTeam.year

const playersList = footballTeam.players

function displayPlayers(position) {
    
    playerCardsElement.innerHTML = ""
    playersList.forEach((players) => {
        if(position === "all" || position === players.position){
            let divNode = document.createElement("div")
            divNode.className = "player-card"
            playerCardsElement.appendChild(divNode)

            let h2Node = document.createElement("h2")
            let pNode = document.createElement("p")
            if(players.isCaptain){
                h2Node.innerText = `(Captain) ${players.name}`
            } else {
                h2Node.innerText = players.name
            }
            
            pNode.innerText = `Position: ${players.position}`

            divNode.appendChild(h2Node)
            divNode.appendChild(pNode)
            

        }
    })
}

selectPlayersElement.addEventListener("change", () => {
    displayPlayers(selectPlayersElement.value)
})
