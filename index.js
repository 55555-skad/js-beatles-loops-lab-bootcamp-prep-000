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
  let newArray = []
  for(var i = 0; i < musicians.length; i++){
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  
  return newArray
}

function johnLennonFacts(facts){
  let newArray = []
  let increment = 0
  while(increment < facts.length){
  newArray.push(facts[increment] + "!!!")
  increment++
}
  return newArray
}

function iLoveTheBeatles(number){
  var newArray = []
  var number = 0
  do {
    newArray.push("I love the Beatles!")
    number++
  }
  while(number < 5)
  
  
 return newArray 
}