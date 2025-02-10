function generateRandomSortedArray(length, min, max) {
  debugger; // Debug point 1: Array generation
  const randomArray = Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  return randomArray.sort((a, b) => a - b);
}

function binarySearchRecursive(sortedArray, targetElement, startIndex, endIndex) {
  debugger; // Debug point 2: Start of each recursive call
  console.log(`\nCurrent array slice: [${sortedArray.slice(startIndex, endIndex + 1)}]`);
  console.log(`Searching for target: ${targetElement}`);
  console.log(`Search range: ${startIndex} to ${endIndex}`);

  if (startIndex > endIndex) {
    debugger; // Debug point 3: Not found case
    console.log(`❌ ${targetElement} is not found in the array!`);
    return -1;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const currentElement = sortedArray[middleIndex];

  debugger; // Debug point 4: Middle element comparison
  console.log(`Checking middle index ${middleIndex} with value ${currentElement}`);

  if (currentElement === targetElement) {
    debugger; // Debug point 5: Element found
    console.log(`✅ Found ${targetElement} at position ${middleIndex}!`);
    return middleIndex;
  }

  if (currentElement < targetElement) {
    debugger; // Debug point 6: Going right
    console.log(`${currentElement} is too small, searching right half`);
    return binarySearchRecursive(sortedArray, targetElement, middleIndex + 1, endIndex);
  }

  debugger; // Debug point 7: Going left
  console.log(`${currentElement} is too large, searching left half`);
  return binarySearchRecursive(sortedArray, targetElement, startIndex, middleIndex - 1);
}

// Main execution
debugger; // Debug point 8: Initial setup
const arrayLength = 15;
const minValue = 0;
const maxValue = 50;
const randomSortedArray = generateRandomSortedArray(arrayLength, minValue, maxValue);

const randomIndex = Math.floor(Math.random() * arrayLength);
const targetElement = randomSortedArray[randomIndex];

console.log("\nInitial Array:", randomSortedArray);
console.log("Searching for:", targetElement);
console.log("-------------------");

const result = binarySearchRecursive(randomSortedArray, targetElement, 0, randomSortedArray.length - 1);

debugger; // Debug point 9: Final result
if (result !== -1) {
  console.log(`\nFinal Result: Element ${targetElement} found at index ${result}`);
} else {
  console.log(`\nFinal Result: Element ${targetElement} not found in array`);
}
