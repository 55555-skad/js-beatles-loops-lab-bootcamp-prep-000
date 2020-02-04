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

johnLennonFacts(facts){
  let newArray = []
  increment = 0
  while(increment < facts.length){
  increment++
  newArray.push(facts[i] + "!!!")
}
  return newArray
}