// ## Leetspeak
//
// Given a paragraph of text as a string, print the paragraph in leetspeak. To translate a string to leetspeak, you need to replace make the following character replacements (treat all input characters as uppercase):
//
// ```
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// ```
//
// Example: LEET => l337
//
// Hint: you can convert a string to an array of characters with .split('')

var par = "get so tait";
var caps = par.toUpperCase();
var unjoined = caps.split('');
var leeted = unjoined.map(function(char) {
    if (char === 'A') {
     char = '4';
  } else if (char === 'E') {
      char = '3';
  } else if (char === 'G') {
      char = '6';
  } else if (char === 'I') {
      char = '1';
  } else if (char === 'O') {
      char = '0';
  } else if (char === 'S') {
      char = '5';
  } else if (char === 'T') {
      char = '7';
  } else {
  }

  return char;

});
console.log(leeted);

var togetherAgain = leeted.join('');
console.log(togetherAgain);

///object version
var str = "DO YOU SPEAK LEET";
var mapping = {
  A: '4',
  E: '3',
  G: '6',
  I: '1',
  O: '0',
  S: '5',
  T: '7'
};
var letters = str.split('');
var changedLetters = letters.map(function(letter) {
  if (mapping[letter]) {
    return mapping[letter];
  } else {
    return letter;
  }
});
// ## Basketball Players
//
// Given an array of objects representing basketball players:
//
// ```
// var players = [
//   {
//     name: 'Paul Millsap',
//     position: 'PF',
//     avgMinutesPlayed: 36,
//     avgPoints: 16.4,
//     avgRebounds: 9.4,
//     starter: true
//   },
//   {
//     name: 'Jeff Teague',
//     position: 'PG',
//     avgMinutesPlayed: 28.6,
//     avgPoints: 15.6,
//     avgRebounds: 1.9,
//     starter: true
//   },
//   {
//     name: 'Al Horford',
//     position: 'C',
//     avgMinutesPlayed: 32,
//     avgPoints: 13.2,
//     avgRebounds: 6.8,
//     starter: true
//   },
//   {
//     name: 'Kent Bazemore',
//     position: 'SF',
//     avgMinutesPlayed: 31.8,
//     avgPoints: 12,
//     avgRebounds: 6.6,
//     starter: true
//   },
//   {
//     name: 'Kyle Korver',
//     position: 'SG',
//     avgMinutesPlayed: 32.4,
//     avgPoints: 11.2,
//     avgRebounds: 4.9,
//     starter: true
//   },
//   {
//     name: 'Dennis Schroder',
//     position: 'PG',
//     avgMinutesPlayed: 18.3,
//     avgPoints: 10.7,
//     avgRebounds: 1.8,
//     starter: false
//   },
//   {
//     name: 'Kris Humphries',
//     position: 'PF',
//     avgMinutesPlayed: 14.7,
//     avgPoints: 9.7,
//     avgRebounds: 5.7,
//     starter: false
//   },
//   {
//     name: 'Mike Scott',
//     position: 'PF',
//     avgMinutesPlayed: 17.6,
//     avgPoints: 7.0,
//     avgRebounds: 3.6,
//     starter: false
//   },
//   {
//     name: 'Thabo Sefolosha',
//     position: 'SF',
//     avgMinutesPlayed: 18.9,
//     avgPoints: 4.8,
//     avgRebounds: 3.9,
//     starter: false
//   },
//   {
//     name: 'Mike Muscala',
//     position: 'PF',
//     avgMinutesPlayed: 7.4,
//     avgPoints: 2.7,
//     avgRebounds: 1.9,
//     starter: false
//   },
//   {
//     name: 'Tim Hardaway Jr.',
//     position: 'SG',
//     avgMinutesPlayed: 9.7,
//     avgPoints: 2.2,
//     avgRebounds: 1.0,
//     starter: false
//   },
//   {
//     name: 'Lamar Patterson',
//     position: 'SG',
//     avgMinutesPlayed: 5.0,
//     avgPoints: 1.5,
//     avgRebounds: 1.3,
//     starter: false
//   },
//   {
//     name: 'Kirk Hinrich',
//     position: 'SG',
//     avgMinutesPlayed: 4.5,
//     avgPoints: 0.8,
//     avgRebounds: 0.7,
//     starter: false
//   }
// ];
// ```
//
// 1. Write a function that takes the players array and returns a new array containing only the starters.
// 2. Write a function that takes the players array and returns only the point guards (position = 'PG').
// 3. Write a function that takes the players array and returns a new array containing the names of each player.
// 4. Write a function that takes the players array and returns a new array
// containing the names of the starters.
// 5. Write a function that takes the players array and returns a new array containing the names of the point guards.
// 6. Write a function that takes the players array and returns the sum of the avgPoints for each player.
// 7. Write a function that takes the players array and returns the sum of the avgPoints of the starters.
// 8. Write a function that takes the players array and returns true if each player gets at leas 10 minutes of average playing time, and returns false otherwise
// 9. Write a function that takes the players array and returns true if each starter gets at least 30 minutes of average playing time, and returns false otherwise
// 10. Write a function that takes the players array and returns a tally object. The tally object should count the number of players in each position. It should look like:
//
//         {
//           PG: 2,
//           SG: 4,
//           PF: 3,
//           SF: 3,
//           C: 1
//         }


// get players
function getStarters() {
   var starters = players.filter(function(player) {
    return player.starter;
   });
 }

 getStarters();

 // get all point guards
 function getPG() {
     var pointGuards = players.filter(function(player) {
      return player.position === 'PG';
     });
     console.log(pointGuards);
   }

   getPG();

 // get player names
 function getPlayerNames() {
    var playerNames = players.map(function(player) {
     return player.name;
    });
    console.log(playerNames);
  }

  getPlayerNames();

  // get players that are starters
  function getStarterNames() {
    var checkStarter = players.filter(function(player) {
     return player.starter;
    });
    var starterNames = checkStarter.map(function(player) {
      return player.name;
    });
    console.log(starterNames);
  }

  getStarterNames();

//get point guard names
function getPgNames() {
     var pointGuards = players.filter(function(player) {
      return player.position === 'PG';
     });
     var pointGuardName = pointGuards.map(function(player) {
       return player.name;
     });
     console.log(pointGuardName);
   }

   getPgNames();

// sum avg points for each player
function getAvgPts() {
   var playerAvgPts = players.map(function(player) {
    return player.avgPoints;
   });
   var sumAvg = playerAvgPts.reduce(function(current, next) {
    return current + next;
  }, 0);
  console.log(sumAvg);
  }
  getAvgPts();

    //another way

    var avgTeamPoints = players.reduce(function(sum, player) {
        return sum + player.avgPoints;
    }, 0);

  //sum avg points for the starters

  function getStarterAvgPts() {
   var starters = players.filter(function(player) {
    return player.starter;
   });
   console.log(starters);
  // var starterNames = starters.map(function(player) {
  //   return player.name;
  // });
  // console.log(starterNames);
  var starterAvgPts = starters.map(function(player) {
    return player.avgPoints;
  });
  console.log(starterAvgPts);
   var sumStarterAvgPts = starterAvgPts.reduce(function(current, next) {
    return current + next;
  }, 0);
  console.log(sumStarterAvgPts);
  }
  getStarterAvgPts();

  //return true if playing time is > 10
  function playerPlaytime() {
    var playerTime = players.filter(function(player) {
      if (player.avgMinutesPlayed > 10) {
        return true;
      } else {
        return false;
      }
    });
    console.log(playerTime);
  }
  playerPlaytime();

  //function playerPlaytime() {
    var playerTime = players.filter(function(player) {
      if (player.avgMinutesPlayed > 10) {
        return true;
      } else {
        return false;
      }
    });
    console.log(playerTime);
  }
  playerPlaytime();
  // another way

  var every1gets10mins = players.every(function(player) {
    return player.avgMinutesPlayed > 10;
  });

  console.log(every1gets10mins);

  //starter  playtime > 30 mins
  function starterPlaytime() {
    var starters = players.filter(function(player) {
    return player.starter;
   });
    var playerTime = starters.filter(function(player) {
      if (player.avgMinutesPlayed > 30) {
        return true;
      } else {
        return false;
      }
    });
    console.log(playerTime);
  }
  starterPlaytime();


// number 10

function tallyObject() {
    var positions = players.map(function(player) {
      return player.position;
    })

      var tally = positions.reduce(function(tally, position) {
        if(!tally[position]) {
          tally[position] = 1;
        } else {
          tally[position] += 1;
        }
        return tally;
      }, {});
  }
  tallyObject();
