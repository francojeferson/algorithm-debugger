function generateRandomArray(size, min, max) {
  return Array.from({ length: size }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function bottomUpMergeSort(inputArray) {
  const workingArrays = [
      [...inputArray],
      new Array(inputArray.length).fill(0)
  ];

  console.log('Original array:', workingArrays[0]);
  debugger;

  function mergeSort(startIndex, endIndex) {
      if (Math.abs(endIndex - startIndex) <= 1) return;

      let sourceArrayIndex = 0;
      let targetArrayIndex = 1;
      let subArrayWidth;
      let currentIndex;

      for (subArrayWidth = 1; subArrayWidth < endIndex; subArrayWidth *= 2) {
          console.log(`\n--- Merging subarrays of width: ${subArrayWidth} ---`);
          debugger;

          for (currentIndex = 0; currentIndex < endIndex; currentIndex += 2 * subArrayWidth) {
              merge(
                  sourceArrayIndex,
                  currentIndex,
                  Math.min(currentIndex + subArrayWidth, endIndex),
                  Math.min(currentIndex + 2 * subArrayWidth, endIndex),
                  targetArrayIndex
              );
          }

          sourceArrayIndex = (sourceArrayIndex === 0 ? 1 : 0);
          targetArrayIndex = 1 - sourceArrayIndex;
      }

      if (sourceArrayIndex !== 0) {
          copyArray(sourceArrayIndex, targetArrayIndex, startIndex, endIndex);
      }
  }

  function merge(sourceIndex, startPos, middlePos, endPos, targetIndex) {
      let leftArrayPointer = startPos;
      let rightArrayPointer = middlePos;
      let mergeArrayPointer;

      console.log(`\nMerging segments:`);
      console.log(`Left segment: [${workingArrays[sourceIndex].slice(startPos, middlePos)}]`);
      console.log(`Right segment: [${workingArrays[sourceIndex].slice(middlePos, endPos)}]`);

      for (mergeArrayPointer = startPos; mergeArrayPointer < endPos; mergeArrayPointer++) {
          if (leftArrayPointer < middlePos && rightArrayPointer < endPos) {
              const leftValue = workingArrays[sourceIndex][leftArrayPointer];
              const rightValue = workingArrays[sourceIndex][rightArrayPointer];
              console.log(`Comparing: ${leftValue} ↔ ${rightValue}`);
          }

          if (leftArrayPointer < middlePos &&
              (rightArrayPointer >= endPos ||
              workingArrays[sourceIndex][leftArrayPointer] <= workingArrays[sourceIndex][rightArrayPointer])) {

              const pickedValue = workingArrays[sourceIndex][leftArrayPointer];
              console.log(`Picking from left: ${pickedValue}`);
              workingArrays[targetIndex][mergeArrayPointer] = pickedValue;
              leftArrayPointer++;
          } else {
              const pickedValue = workingArrays[sourceIndex][rightArrayPointer];
              console.log(`Picking from right: ${pickedValue}`);
              workingArrays[targetIndex][mergeArrayPointer] = pickedValue;
              rightArrayPointer++;
          }
      }

      console.log(`Current result: [${workingArrays[targetIndex].slice(startPos, endPos)}]`);
  }

  function copyArray(sourceIndex, targetIndex, startPos, endPos) {
      console.log('\nFinal copy:');
      for (let i = startPos; i < endPos; i++) {
          const value = workingArrays[sourceIndex][i];
          console.log(`Copying: ${value}`);
          workingArrays[targetIndex][i] = value;
      }
  }

  mergeSort(0, inputArray.length);
  console.log('\nFinal sorted array:', workingArrays[0]);
  return workingArrays[0];
}

// Generate and test with random array
const randomArray = generateRandomArray(20, 0, 50); // 20 numbers between 0 and 50
bottomUpMergeSort(randomArray);
