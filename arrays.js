var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray();
destructivelyAddElementToBeginningOfArray();
addElementToEndOfArray();
destructivelyAddElementToEndOfArray();

function addElementToBeginningOfArray(array, element) {
  [element, ...array]
  return array
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
