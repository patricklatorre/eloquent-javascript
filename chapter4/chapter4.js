// Tests
startExercise('sum of range');
console.log(sum(range(1, 5)));

startExercise('reversing an array');
reverseArray(range(1, 5));

startExercise('array to list');
let rangeList = arrayToList(range(1, 5));
rangeList = prepend(rangeList, 6);

startExercise('list to array');
let rangeArr = listToArray(rangeList);

startExercise('nth of list')
console.log(nth(rangeList, 3));

//////////////////////////////////////////////////////////////////

/**
 * Gets the sum of an array of numbers
 * @param {Array.<Number>} range the array of numbers to be summed
 * @return {Number} the sum of the array
 */
function sum(range) {
  let sum = 0;
  for (let n of range) sum += n;
  return sum;
}

/**
 * Generates an ordered array of numbers
 * @param {Number} start start of the range (index 0)
 * @param {Number} end end of the range
 * @param {Number} step increment or decrement amount
 */
function range(start, end, step) {
  let result = [];
  if (step === undefined) {
    if (start <= end) step = 1;
    else step = -1;
  }

  if (start <= end) {
    while (start <= end) {
      result.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      result.push(start);
      start += step;
    }
  }
  console.log(result);
  return result;
}

/**
 * Creates an array with the reverse order of a given array.
 * @param {Array} arr the array to be reversed
 * @return {Array} the reversed array
 */
function reverseArray(arr) {
  console.log('Normal: ' + arr);
  let reversedArr = [];
  while (arr.length > 0) reversedArr.push(arr.pop());
  console.log('Reversed: ' + reversedArr);
}

/**
 * Reverses the order of a given array.
 * @param {Array} arr the array to be reversed
 * @return {Array} the reversed array 
 */
function reverseArrayInPlace(arr) {
  // TODO: done last
}

/**
 * Creates a linked list from a given array
 * @param {Array} arr the array to be converted
 * @return {Object} the head of the linked list
 */
function arrayToList(arr) {
  let result = {};
  let current = result;
  for (let i = 0; i < arr.length; i++) {
    current.value = arr[i];

    // if i is at the end of the arr, assign null
    current.rest = (i + 1 < arr.length) ? {} : null;
    current = current.rest;
  }
  console.log(result);
  return result;
}

/**
 * Creates an array from a given linked list
 * @param {Object} list the head of the linked list
 * @return {Array} the list in array form
 */
function listToArray(list) {
  let current = list;
  let result = [];
  while (current != null) {
    result.push(current.value);
    current = current.rest;
  }
  console.log(result);
  return result;
}

/**
 * Adds a node at the head of a given linked
 * list, making it the new head. 
 * @param {Object} list the head of the linked list 
 * @param {*} valueOfNode the value of the new node
 * @return {Object} the new head of the linked list
 */
function prepend(list, valueOfNode) {
  return {
    value: valueOfNode,
    rest: list,
  };
}

/**
 * Traverses a given linked list and returns a
 * node at position n.
 * @param {Object} list the head of the linked list
 * @param {Number} n the position of the node
 * @return {Object} the node at position n
 */
function nth(list, n) {
  console.log('LIST TAKEN: ', list);
  for (let currentNode = list, currentPosition = 0; currentNode != null; currentPosition++) {
    if (currentPosition == n) return currentNode;
    currentNode = currentNode.rest;
  }
  return undefined;
}

/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}