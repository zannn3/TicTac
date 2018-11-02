const click2 = function myFunction () {
  document.getElementById('demo').innerHTML = 'YOU CLICKED ME!'
}

const click = function (event) {
  console.log('got into onGetAllBooks...about to prevent default')
  event.preventDefault()
}
