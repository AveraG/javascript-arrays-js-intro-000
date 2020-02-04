var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray();
destructivelyAddElementToBeginningOfArray();
addElementToEndOfArray();
destructivelyAddElementToEndOfArray();

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]

}

function destructivelyAddElementToBeginningOfArray() {
  return array.unshift(element)
}

function addElementToEndOfArray() {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray() {
  return array.pop(element)
}
