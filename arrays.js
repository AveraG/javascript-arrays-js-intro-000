var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray();
destructivelyAddElementToBeginningOfArray();
addElementToEndOfArray();
destructivelyAddElementToEndOfArray();

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.pop(element)
}
