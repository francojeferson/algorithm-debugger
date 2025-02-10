const binarySearchTree = {};

// First debugger to inspect initial array
debugger;
const numbersToInsert = Array.from({ length: 11 }, () => Math.floor(Math.random() * 21));
console.log('Numbers to be inserted:', numbersToInsert);

function insertIntoBST(currentNode, elementToInsert, parentNode) {
    // Debug insertion attempt
    debugger;
    console.log(`Attempting to insert ${elementToInsert} (Current node: ${currentNode}, Parent: ${parentNode || 'none'})`);

    const treeNode = binarySearchTree[currentNode];
    let childPosition = '';

    // Debug decision making point
    debugger;
    if (elementToInsert < currentNode) {
        childPosition = 'left';
    } else if (elementToInsert > currentNode) {
        childPosition = 'right';
    }

    if (childPosition !== '') {
        // Debug new node creation
        debugger;
        if (!(childPosition in treeNode)) {
            treeNode[childPosition] = elementToInsert;
            binarySearchTree[elementToInsert] = {};
            console.log(`Inserted ${elementToInsert} as ${childPosition} child of ${currentNode}`);
        } else {
            insertIntoBST(treeNode[childPosition], elementToInsert, currentNode);
        }
    }
}

// Debug root node creation
debugger;
const rootNode = numbersToInsert[0];
binarySearchTree[rootNode] = {};
console.log(`\nRoot node created: ${rootNode}`);

// Debug main insertion loop
for (let i = 1; i < numbersToInsert.length; i++) {
    debugger;
    const currentNumber = numbersToInsert[i];
    console.log(`\nProcessing number ${i}: ${currentNumber}`);
    insertIntoBST(rootNode, currentNumber);
}

console.log('\nFinal Binary Search Tree Structure:');
console.log(JSON.stringify(binarySearchTree, null, 2));
