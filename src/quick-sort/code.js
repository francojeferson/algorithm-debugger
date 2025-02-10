function generateRandomArray(size, min = 1, max = 100) {
  return Array.from({ length: size }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function partition(arrayToSort, lowerBound, upperBound) {
  debugger; // Entry point of partition function
  let leftPointer;
  let rightPointer;
  let pivotElement;

  while (upperBound > lowerBound) {
      leftPointer = lowerBound;
      rightPointer = upperBound;
      pivotElement = arrayToSort[lowerBound];

      console.log(`\nPivot element: ${pivotElement}`);
      console.log(`Current subarray: [${arrayToSort.slice(lowerBound, upperBound + 1)}]`);
      debugger; // Before starting the partition process

      while (leftPointer < rightPointer) {
          debugger; // Before right pointer movement
          while (arrayToSort[rightPointer] > pivotElement) {
              console.log(`Comparing right element ${arrayToSort[rightPointer]} with pivot ${pivotElement}`);
              rightPointer--;
          }
          arrayToSort[leftPointer] = arrayToSort[rightPointer];

          debugger; // Before left pointer movement
          while (pivotElement >= arrayToSort[leftPointer] && leftPointer < rightPointer) {
              console.log(`Comparing left element ${arrayToSort[leftPointer]} with pivot ${pivotElement}`);
              leftPointer++;
          }
          arrayToSort[rightPointer] = arrayToSort[leftPointer];
      }

      arrayToSort[leftPointer] = pivotElement;
      console.log(`Placed pivot ${pivotElement} at position ${leftPointer}`);
      console.log(`Array after partition: [${arrayToSort}]`);
      debugger; // After completing one partition

      partition(arrayToSort, lowerBound, leftPointer - 1);
      lowerBound = leftPointer + 1;
  }
}

function quickSort(arrayToSort) {
  debugger; // Start of quickSort
  console.log('Starting Quick Sort');
  console.log(`Initial array: [${arrayToSort}]`);
  partition(arrayToSort, 0, arrayToSort.length - 1);
  debugger; // End of quickSort
  return arrayToSort;
}

// Generate and sort a random array
const arraySize = 15;
const randomArray = generateRandomArray(arraySize);
console.log(`\nOriginal random array: [${randomArray}]`);

const sortedArray = quickSort(randomArray);
console.log(`\nFinal sorted array: [${sortedArray}]`);
