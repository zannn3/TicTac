'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./templates/books/events.js')
console.log('outside')
$(() => {
  // your JS code goes here
  //  $('#create-game').on('click', events.onCreateGameClick)
  console.log('in index js')
  $('#demo').on('click', events.clicked)
})
//
