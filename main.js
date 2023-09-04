const queens = []
const tributeChest = []

const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }

    queens.push(queenObject)
}

const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`; 
}


const createTribute = (tributeId, tributeDiscription, queenId) => {
    tributeObject = {
        id : tributeId,
        discription : tributeDiscription,
        queenId :  queenId
    }

    tributeChest.push(tributeObject)
}

// Create some queens
createQueen(1, "Trinity Terry")
createQueen(2, "Sydney Noh")
createQueen(3, "Christina Ashworth")
createQueen(4, "Aja Washington")

//Hail all of the queens 
for (const queenObject of queens) {
    
    const hailMessage = hailTheQueen(queenObject.name) // What  pass as an arguments?
    console.log(hailMessage)
}
 
// Create some Tributes
createTribute(1,"Barrel of Wine", 3)
createTribute(2, "Grain stores", 2)
createTribute(3, "Extra harvest", 1)
createTribute(3, "Gold from Expedtion", 4)
createTribute(4, "Silk and Furs,", 3)

// Iterate the queen objects to show tribute for each one 
for (const queenObject of queens) {
    
    // Each queen will look at every item to see if it is hers
    for (const tributeObject of tributeChest) {
        if (tributeObject.queenId === queenObject.id) {
        console.log(`${queenObject.name} gets tribute of ${tributeObject.discription}.`)
         }
    }
    
}


