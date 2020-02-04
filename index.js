// add solution here
// const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// function theBeatlesPlay(musicians, instruments){
//   var variable = [];
//   for(let i = 0; i < musicians.length; i++){
//     variable.push(`musicians${musicians}, " plays " + instruments${instruments}`)
//   }
//   return variable
// }

function theBeatlesPlay(musicians, instruments){
  var newArray = []
  
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  
  return newArray
}

function johnLennonFacts(facts){
  var factArray = []
  var count = 0
  while(count < facts.length){
    factArray.push(facts[count] + "!!!")
    count++
  }
  return factArray
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!")
  }
  while (number < 15 ){
    number++
  }
  return array
  }
  