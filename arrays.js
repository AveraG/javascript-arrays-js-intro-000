var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

// addElementToBeginningOfArray();
// destructivelyAddElementToBeginningOfArray();
// addElementToEndOfArray();
// destructivelyAddElementToEndOfArray();
// accessElementInArray();

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]

};

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
};

function addElementToEndOfArray(array, element) {
  return [...array, element]
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
};

// function accessElementInArray(array. index) {
//   return array[i];
// };
