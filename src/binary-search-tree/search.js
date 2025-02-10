// Create a random binary search tree adjacency matrix
function generateRandomBST(size) {
  const matrix = Array(size).fill().map(() => Array(size).fill(0));
  const treeMapping = Array(size).fill().map(() => [-1, -1]);

  // Start from root (5) and randomly add nodes
  for(let i = 0; i < size; i++) {
      if (i === 5) continue; // Skip root
      let current = 5; // Start from root
      while (true) {
          if (i < current) {
              if (treeMapping[current][0] === -1) {
                  treeMapping[current][0] = i;
                  matrix[current][i] = 1;
                  matrix[i][current] = 1;
                  break;
              }
              current = treeMapping[current][0];
          } else {
              if (treeMapping[current][1] === -1) {
                  treeMapping[current][1] = i;
                  matrix[current][i] = 1;
                  matrix[i][current] = 1;
                  break;
              }
              current = treeMapping[current][1];
          }
      }
  }

  return { adjacencyMatrix: matrix, treeStructure: treeMapping };
}

// Generate random tree with 11 nodes
const { adjacencyMatrix, treeStructure } = generateRandomBST(11);
console.log('Generated Adjacency Matrix:', adjacencyMatrix);
console.log('Generated Tree Structure:', treeStructure);

// Generate random number to search
const numberToSearch = Math.floor(Math.random() * 11);
console.log('\nSearching for number:', numberToSearch);

function binarySearchTree(searchValue, currentNode, parentNode = null) {
  debugger; // Debugger breakpoint

  console.log(`Visiting node: ${currentNode} (Parent: ${parentNode})`);

  if (searchValue === currentNode) {
      console.log(`✅ Match Found! Value ${searchValue} at node ${currentNode}`);
      return true;
  } else if (searchValue < currentNode) {
      const leftChild = treeStructure[currentNode][0];
      if (leftChild === -1) {
          console.log(`❌ Value ${searchValue} not found in left subtree of ${currentNode}`);
          return false;
      }
      return binarySearchTree(searchValue, leftChild, currentNode);
  } else {
      const rightChild = treeStructure[currentNode][1];
      if (rightChild === -1) {
          console.log(`❌ Value ${searchValue} not found in right subtree of ${currentNode}`);
          return false;
      }
      return binarySearchTree(searchValue, rightChild, currentNode);
  }
}

// Start search from root node (5)
console.log('\nStarting Binary Search Tree traversal:');
const found = binarySearchTree(numberToSearch, 5);
console.log(`\nFinal Result: ${found ? 'Number was found!' : 'Number was not found.'}`);
