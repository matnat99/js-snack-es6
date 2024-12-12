// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0 
    },
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    }
]
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < teams.length; i++) {
    teams[i].points = getRandomNumber(1, 100)
    teams[i].fouls = getRandomNumber(1, 50)
}

console.log(teams)
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const teamsFouls = [
    {
        name: "Milan",
        fouls: 0
    },
    {
        name: "Inter",
        fouls: 0 
    },
    {
        name: "Juventus",
        fouls: 0
    }
]

for (let i = 0; i < teams.length; i++) {
    teamsFouls[i].name = teams[i].name
    teamsFouls[i].fouls = teams[i].fouls
}

console.log(teamsFouls)