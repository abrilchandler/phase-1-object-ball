const gameObject = () => {
    return {
    home:  {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            }
        }
    },
    away: 
    {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10,
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0,
            }
        }
    },
}
}

// console.log(gameObject);

function numPointsScored(playerName) {
    let object = gameObject();
  let awayTeam = Object.keys(object.away.players).includes(playerName)
    if (awayTeam) {
       return object.away.players[playerName].points

 }    return object.home.players[playerName].points
 }

// console.log(numPointsScored("Jeff Adrien"));

function shoeSize(playerName) {
    let object = gameObject();
  let awayTeam = Object.keys(object.away.players).includes(playerName)
    if (awayTeam) {
       return object.away.players[playerName].shoe

 }    return object.home.players[playerName].shoe
 }
//  console.log(shoeSize("Jeff Adrien"));

function teamColors(name) {
    let object = gameObject();
     {
        return object.away.colors
    }  
        return object.home.colors
}
// console.log(teamColors("Charlotte Hornets"));


function teamNames() {
    const names = [gameObject().away.teamName, gameObject().home.teamName];

    return names
}   
// console.log(teamNames());


function playerNumbers(teamName) {
    let object = gameObject();
    if (object.away.teamName === teamName) {
        const awayPlayersStats = Object.values(object.away.players)
        return awayPlayersStats.map((statsObject) => statsObject.number)
    } 
    const homePlayerStats = Object.values(object.home.players)
    return homePlayerStats.map((statsObject) => statsObject.number)
}    
console.log(playerNumbers("Brooklyn Nets"));


function playerStats(playerName) {
    let object = gameObject();
    let awayTeam = Object.keys(object.away.players).includes(playerName)
    if (awayTeam) {
       return object.away.players[playerName]

 }    return object.home.players[playerName]
 }

console.log(playerStats("Jeff Adrien"));


function bigShoeRebounds() {
    const object = gameObject()
    // find player with largest shoe size
    const allPlayers = Object.entries({...object.home.players, ...object.away.players})
    
    let biggestShoeSize = 0;
    let biggestShoeSizePlayerName;
    allPlayers.forEach((playerInfo) => {
        if (playerInfo[1].shoe > biggestShoeSize) {
            biggestShoeSize = playerInfo[1].shoe
            biggestShoeSizePlayerName = playerInfo[0]
        }
    })
    // return that player's rebounds
   return playerStats(biggestShoeSizePlayerName).rebounds

}

console.log(bigShoeRebounds())