const fs = require('fs');


const getnote = function (){
  console.log('getting the notes... ')
  console.log(loadnote())
}

const addnote = function(title,body){

  const notes = loadnote()

 const duplicate =   notes.filter((element) => {
    if(element.title === title){
       return element.title == title;
   }
   })
   if (duplicate.length > 0) {
     console.log('title is taken!')
     return false;
   }

  notes.push({
    title:title,
    body:body
  })
  savenote(notes)
}

const savenote = function(notes){
   fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadnote = function(){
try {
  const dataBuffer = fs.readFileSync('notes.json')
  const dataJson = dataBuffer.toString()
  return JSON.parse(dataJson)
}
 catch (e) {
  return []
}
}

addnote('t1','b1')
// getnote()
