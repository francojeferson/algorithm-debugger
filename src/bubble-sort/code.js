// Generate random array helper function
const generateRandomArray = (arraySize) => {
  return Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100));
};

// Initialize array
const numberArray = generateRandomArray(15);
let activeArrayLength = numberArray.length;
let hasSwappedElements;

// Log initial state
console.log(`Original array = [${numberArray.join(', ')}]`);

do {
  hasSwappedElements = false;
  debugger;

  for (let iterationIndex = 1; iterationIndex < activeArrayLength; iterationIndex++) {
    console.log(`Processing number: ${numberArray[iterationIndex]}`);
    debugger;

    if (numberArray[iterationIndex - 1] > numberArray[iterationIndex]) {
      const temporaryValue = numberArray[iterationIndex - 1];
      numberArray[iterationIndex - 1] = numberArray[iterationIndex];
      numberArray[iterationIndex] = temporaryValue;
      hasSwappedElements = true;

      console.log(`Updated array: [${numberArray.join(', ')}]`);
      debugger;
    }
  }
  activeArrayLength--;
} while (hasSwappedElements);

console.log(`\nFinal sorted array = [${numberArray.join(', ')}]`);
