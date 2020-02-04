var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
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
