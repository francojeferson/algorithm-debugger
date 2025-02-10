function generateRandomSortedArray(size, min, max) {
  debugger; // Debug Point 1: Array Generation
  const array = Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  return array.sort((a, b) => a - b);
}

function binarySearch(sortedArray, targetElement) {
  debugger; // Debug Point 2: Search Start
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  let currentElement;

  console.log("Initial Array:", sortedArray);
  console.log("Searching for:", targetElement);

  while (leftPointer <= rightPointer) {
    debugger; // Debug Point 3: New Iteration
    const middlePosition = Math.floor((leftPointer + rightPointer) / 2);
    currentElement = sortedArray[middlePosition];

    console.log("\nCurrent search range:", sortedArray.slice(leftPointer, rightPointer + 1));
    console.log(`Checking middle position ${middlePosition} with value ${currentElement}`);

    if (currentElement < targetElement) {
      debugger; // Debug Point 4: Moving Right
      console.log("Target is larger - moving right");
      leftPointer = middlePosition + 1;
    } else if (currentElement > targetElement) {
      debugger; // Debug Point 5: Moving Left
      console.log("Target is smaller - moving left");
      rightPointer = middlePosition - 1;
    } else {
      debugger; // Debug Point 6: Element Found
      console.log(`\nSuccess! ${targetElement} found at position ${middlePosition}`);
      return middlePosition;
    }
  }

  debugger; // Debug Point 7: Element Not Found
  console.log(`\nElement ${targetElement} not found in array`);
  return -1;
}

// Generate random sorted array
const arraySize = 15;
const minValue = 0;
const maxValue = 50;
const randomSortedArray = generateRandomSortedArray(arraySize, minValue, maxValue);

// Pick random element from array to search
const randomIndex = Math.floor(Math.random() * arraySize);
const elementToFind = randomSortedArray[randomIndex];

// Execute search
console.log("\n=== Binary Search Started ===\n");
const result = binarySearch(randomSortedArray, elementToFind);
