// const getFormFields = require('../../lib/get-form-fields')    error path
const api = require('./api.js')
const ui = require('./ui.js')

const clicked = function (event) {
  event.preventDefault()
  console.log('it is clicked' + this.id)
  // $('#res1').html('')
  switch (this.id) {
    case 'click1':
      $('#res1').append('1')
      break
    case 'click2':
      $('#res2').append('2')
      break
    case 'click3':
      $('#res3').append('3')
      break
    case 'click4':
      $('#res4').append('4')
      break
    case 'click5':
      $('#res5').append('5')
      break
    case 'click6':
      $('#res6').append('6')
      break
    case 'click7':
      $('#res7').append('7')
      break
    case 'click8':
      $('#res8').append('X')
      break
    case 'click9':
      $('#res9').append('9')
      break
  }
  ui.onClick(this)
}

module.exports = {
  clicked
}
