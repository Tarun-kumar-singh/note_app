const fs = require('fs');
const chalk = require('chalk');

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
     console.log(chalk.blue.inverse('title is taken!'))
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

// addnote('t2','b1')

const removenote = function(title){
    notes = loadnote()
    newnotes = notes.filter((element) => {
      return element.title != title
    })
    if (notes.length > newnotes.length) {
      console.log(chalk.green.inverse('Note removed'))
      savenote(newnotes)
    }
    else {
      console.log(chalk.red.inverse('Note is not available!'));
    }
 }
// removenote('t2')
// getnote()

const listnotes = () => {
  console.log(chalk.inverse('Listing notes...'))
  notes = loadnote()
  if (notes.length === 0) {
    console.log(chalk.red.inverse("No note is available!"));
  }
  notes.filter((element)=>{
    console.log(element.title)
  })
}

// listnotes()

const readnote = (title) => {

    const notes = loadnote()
    const note = notes.find((note) =>  note.title === title )

    console.log('Reading note...')

    if (note) {
      console.log(`Title : ${chalk.green.inverse(note.title)}`)
      console.log(note.body)
    }
    else {
      console.log(chalk.red.inverse('Note not found for the given title!'))
    }
}

readnote("t")
