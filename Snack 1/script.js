// Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
const bikes = [
    {
        name: "Bianchi",
        weight: 35
    },
    {
        name: "Atala",
        weight: 30
    },
    {
        name:"Casati",
        weight: 45
    }
]

// Stampare a schermo la bici con peso minore.
let minWeightBike = bikes[0]

for (let i = 1; i < bikes.length; i++) {
    if (bikes[i].weight < minWeightBike.weight) {
        minWeightBike = bikes[i]
    }
}

console.log(`La bici con il peso minore è la ${minWeightBike.name} che pesa ${minWeightBike.weight}kg`)
