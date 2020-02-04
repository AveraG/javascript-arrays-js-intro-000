var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


var addElementToBeginningOfArray = function(array, element) {
  var array = []
  [element, ...array]
}

function destructivelyAddElementToBeginningOfArray() {

  array.unshift(element)
}

function addElementToEndOfArray() {
  [...array, element]

}

function destructivelyAddElementToEndOfArray() {
  array.pop(element)
}
