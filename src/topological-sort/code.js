// Create a random adjacency matrix for DAG
function createRandomDAG(size) {
  const matrix = Array(size).fill().map(() => Array(size).fill(0));

  // Fill with random edges while maintaining DAG properties
  for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
          // Only create edges forward to maintain acyclic property
          matrix[i][j] = Math.random() < 0.3 ? 1 : 0;
      }
  }
  return matrix;
}

// Generate random graph
const graphSize = 6;
const adjacencyMatrix = createRandomDAG(graphSize);

console.log('Initial Random Graph Adjacency Matrix:');
console.log(adjacencyMatrix);

// Initialize in-degree counter for each node
const nodeInDegrees = Array(adjacencyMatrix.length).fill(0);
const processingQueue = [];
let iterationCount = 0;

console.log('\nCalculating in-degrees for each node...');
debugger;

// Calculate in-degrees
for (let currentNode = 0; currentNode < adjacencyMatrix.length; currentNode++) {
  for (let neighborNode = 0; neighborNode < adjacencyMatrix.length; neighborNode++) {
      if (adjacencyMatrix[currentNode][neighborNode]) {
          console.log(`Node ${neighborNode} has an incoming edge from node ${currentNode}`);
          nodeInDegrees[neighborNode]++;
      }
  }
}

console.log(`Node in-degrees: [${nodeInDegrees}]`);
console.log('\nFinding source nodes (nodes with no incoming edges)...');
debugger;

// Find source nodes
nodeInDegrees.forEach((inDegree, node) => {
  if (inDegree === 0) {
      console.log(`Node ${node} is a source node (no incoming edges)`);
      processingQueue.push(node);
  }
});

console.log(`Initial processing queue: [${processingQueue}]`);
console.log('\nStarting topological sort...');
debugger;

// Perform topological sort
while (processingQueue.length > 0) {
  console.log(`\nIteration ${iterationCount + 1}`);
  console.log(`Current queue state: [${processingQueue}]`);

  const currentNode = processingQueue.shift();
  console.log(`Processing node ${currentNode}`);
  debugger;

  // Process neighbors
  for (let neighbor = 0; neighbor < adjacencyMatrix.length; neighbor++) {
      if (adjacencyMatrix[currentNode][neighbor]) {
          console.log(`Found edge: ${currentNode} -> ${neighbor}`);
          nodeInDegrees[neighbor]--;
          console.log(`Decreased in-degree of node ${neighbor} to ${nodeInDegrees[neighbor]}`);

          if (nodeInDegrees[neighbor] === 0) {
              console.log(`Node ${neighbor} has no more incoming edges, adding to queue`);
              processingQueue.push(neighbor);
          }
      }
  }

  console.log(`Updated in-degrees: [${nodeInDegrees}]`);
  iterationCount++;
}

console.log('\nTopological sort completed');
