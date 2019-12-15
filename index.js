const rand = n => Math.round(n * Math.random());
const coin = () => rand(2) > 1;
const rarely = () => rand(10) > 7;

function fail(test, reason) {
  return test() ? new Error(`Error: ${reason}`) : null;
}

function getPlayers(callback) {
  const players = ['Fry', 'Bender', 'Leela', 'Amy', 'Zoidberg'];
  setTimeout(() => callback(fail(coin, 'getPlayers'), players), 100);
}

function throwDice(callback) {
  setTimeout(() => callback(fail(rarely, 'throwDice'), 1 + rand(6)), 100);
}

const board = [];

function savePlayerScore(score, callback) {
  setTimeout(() => {
    if (coin())
      callback(new Error('Error: savePlayerScore'));
    else {
      board.push(score);
      callback(null);
    }
  }, 100);
}

function getScoreBoard(callback) {
  setTimeout(() => callback(fail(coin, 'getScoreBoard'), board), 100);
}

function getPlayersRo(){
  const players = getPlayers(err, players)
    if (players){
      const player = players[0]
      const value1 = throwDice(function(value){ value })
      if (value1){
        value2 = throwDice(function(value){value })
        if (value2) {
          const score = { player, score: [value1, value2]}
          save = savePlayerScore(score, function(score){null})
          if(save) {
            getScoreBoard(console.log)
          }
        }
      }
    }
}

getPlayersRo()

// teacher solution

// getPlayers((err, [player]) => {
//   throwDice((err, dice1) => {
//     throwDice((err, dice2) => {
//       const score = { player, score: [dice1, dice2]}
//       savePlayerScore(score, (err) => {
//         getScoreBoard(console.log)
//       })
//     })
//   })
// })

// console.log(getPlayers())
//console.log(players)
//const scoreTwice = throwDice(callback)
//console.log(scoreTwice)

// // en serie
// getPlayers((err, players) => {
//   for(let player of players){
//     throwDice((err, dice1) => {
//       throwDice((err, dice2) => {
//         const score = { player, score: [dice1, dice2]}
//         savePlayerScore(score, (err) => {
//           getScoreBoard(console.log)
//         })
//       })
//     })
//   }
// })
// console.log(getPlayers())

// // teacher solution

// getPlayers((err, players) => {
//   let savedPlayers = 0
//   players.forEach(play)
//   function play(player){
//     throwDice((err, dice1) => {
//       throwDice((err, dice2) => {
//         const score = { player, score: [dice1, dice2]}
//         savePlayerScore(score, (err) => {
//           savedPlayers += 1
//           if(savedPlayers === players.length)
//             getScoreBoard(console.log);
//         })
//       })
//     })
//   }
// }
