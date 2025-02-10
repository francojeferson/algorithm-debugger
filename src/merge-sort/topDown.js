// Create a helper function to generate random array
function generateRandomArray(size, min = 1, max = 100) {
  return Array.from({ length: size }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );
}

// Initialize array with random numbers
const originalArray = generateRandomArray(15);
console.log('\x1b[36m%s\x1b[0m', `Original Array: [${originalArray.join(', ')}]`);

function mergeSort(startIndex, endIndex) {
  debugger; // Track recursive calls and partition boundaries
  if (Math.abs(endIndex - startIndex) <= 1) return [];

  const middleIndex = Math.ceil((startIndex + endIndex) / 2);

  console.log('\x1b[33m%s\x1b[0m', `Dividing array at indices: ${startIndex} to ${endIndex}`);
  console.log(`Left partition: [${originalArray.slice(startIndex, middleIndex).join(', ')}]`);
  console.log(`Right partition: [${originalArray.slice(middleIndex, endIndex).join(', ')}]`);

  mergeSort(startIndex, middleIndex);
  mergeSort(middleIndex, endIndex);

  return merge(startIndex, middleIndex, endIndex);
}

function merge(startIndex, middleIndex, endIndex) {
  debugger; // Track merge operations
  const leftPartitionSize = middleIndex - startIndex;
  const rightPartitionSize = endIndex - middleIndex;
  const totalSize = endIndex - startIndex;

  const leftArray = [];
  const rightArray = [];

  console.log('\n\x1b[35m%s\x1b[0m', 'Merging Process:');

  debugger; // Track array filling process
  for (let i = 0; i < Math.max(leftPartitionSize, rightPartitionSize); i++) {
      if (i < leftPartitionSize) {
          leftArray.push(originalArray[startIndex + i]);
          console.log(`Picking left element[${i}]: ${originalArray[startIndex + i]}`);
      }
      if (i < rightPartitionSize) {
          rightArray.push(originalArray[middleIndex + i]);
          console.log(`Picking right element[${i}]: ${originalArray[middleIndex + i]}`);
      }
  }

  console.log('\x1b[32m%s\x1b[0m', `Current left array: [${leftArray.join(', ')}]`);
  console.log('\x1b[32m%s\x1b[0m', `Current right array: [${rightArray.join(', ')}]`);

  let currentIndex = 0;
  debugger; // Track merging comparison process
  while (currentIndex < totalSize) {
      if (leftArray[0] && rightArray[0]) {
          if (leftArray[0] > rightArray[0]) {
              originalArray[startIndex + currentIndex] = rightArray.shift();
              console.log(`Placing from right: ${originalArray[startIndex + currentIndex]}`);
          } else {
              originalArray[startIndex + currentIndex] = leftArray.shift();
              console.log(`Placing from left: ${originalArray[startIndex + currentIndex]}`);
          }
      } else if (leftArray[0]) {
          originalArray[startIndex + currentIndex] = leftArray.shift();
          console.log(`Placing remaining left: ${originalArray[startIndex + currentIndex]}`);
      } else {
          originalArray[startIndex + currentIndex] = rightArray.shift();
          console.log(`Placing remaining right: ${originalArray[startIndex + currentIndex]}`);
      }
      currentIndex++;
  }

  const mergedSection = originalArray.slice(startIndex, endIndex);
  console.log('\x1b[34m%s\x1b[0m', `Merged section: [${mergedSection.join(', ')}]\n`);
}

// Execute merge sort
debugger; // Track initial call
mergeSort(0, originalArray.length);

console.log('\x1b[36m%s\x1b[0m', `Final Sorted Array: [${originalArray.join(', ')}]`);
