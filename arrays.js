var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray()
function addElementToBeginningOfArray(array, element) {
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
