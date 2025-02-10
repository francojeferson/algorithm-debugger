# Binary Search Tree

In computer science, **binary search trees** (BST), sometimes called
ordered or sorted binary trees, are a particular type of container:
data structures that store "items" (such as numbers, names etc.)
in memory. They allow fast lookup, addition and removal of
items, and can be used to implement either dynamic sets of
items, or lookup tables that allow finding an item by its key
(e.g., finding the phone number of a person by name).

## BST Property (Invariant)
For any given node in a binary search tree:
- All nodes in the left subtree have values less than the node's value
- All nodes in the right subtree have values greater than the node's value
- Both the left and right subtrees must also be binary search trees

## Visual Representation

A binary search tree of size 9 and depth 3, with 8 at the root.
The leaves are not drawn.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## Common Applications
- Implementing database indices
- File system directories
- Priority queues
- Symbol tables in compilers
- Game decision trees

## Pseudocode for Basic Operations

### Insertion

```text
insert(value)
  Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

```text
insertNode(current, value)
  Pre: current is the node to start from
  Post: value has been placed in the correct location in the tree
  if value < current.value
    if current.left = ø
      current.left ← node(value)
    else
      InsertNode(current.left, value)
    end if
  else
    if current.right = ø
      current.right ← node(value)
    else
      InsertNode(current.right, value)
    end if
  end if
end insertNode
```

### Searching

```text
contains(root, value)
  Pre: root is the root node of the tree, value is what we would like to locate
  Post: value is either located or not
  if root = ø
    return false
  end if
  if root.value = value
    return true
  else if value < root.value
    return contains(root.left, value)
  else
    return contains(root.right, value)
  end if
end contains
```


### Deletion

```text
remove(value)
  Pre: value is the value of the node to remove, root is the node of the BST
      count is the number of items in the BST
  Post: node with value is removed if found in which case yields true, otherwise false
  nodeToRemove ← findNode(value)
  if nodeToRemove = ø
    return false
  end if
  parent ← findParent(value)
  if count = 1
    root ← ø
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
    if nodeToRemove.value < parent.value
      parent.left ←  nodeToRemove.right
    else
      parent.right ← nodeToRemove.right
    end if
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
   if nodeToRemove.value < parent.value
     parent.left ←  nodeToRemove.left
   else
     parent.right ← nodeToRemove.left
   end if
  else
   largestValue ← nodeToRemove.left
   while largestValue.right = ø
     largestValue ← largestValue.right
   end while
   findParent(largestValue.value).right ← ø
   nodeToRemove.value ← largestValue.value
  end if
  count ← count - 1
  return true
end remove
```

### Find Parent of Node

```text
findParent(value, root)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST and is != ø
  Post: a reference to the prent node of value if found; otherwise ø
  if value = root.value
    return ø
  end if
  if value < root.value
    if root.left = ø
      return ø
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = ø
      return ø
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
```

### Find Node

```text
findNode(root, value)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
  Post: a reference to the node of value if found; otherwise ø
  if root = ø
    return ø
  end if
  if root.value = value
    return root
  else if value < root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
```

### Find Minimum

```text
findMin(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the smallest value in the BST is located
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

### Find Maximum

```text
findMax(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the largest value in the BST is located
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

### Traversal

#### InOrder Traversal (Left -> Root -> Right)
```text
inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root ≠ ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

Example: For tree with root=8: 1 -> 3 -> 4 -> 6 -> 7 -> 8 -> 10 -> 13 -> 14

#### PreOrder Traversal (Root -> Left -> Right)

```text
preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root ≠ ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

Example: For tree with root=8: 8 -> 3 -> 1 -> 6 -> 4 -> 7 -> 10 -> 14 -> 13

#### PostOrder Traversal (Left -> Right -> Root)

```text
postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root ≠ ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```

Example: For tree with root=8: 1 -> 4 -> 7 -> 6 -> 3 -> 13 -> 14 -> 10 -> 8

## Tree Balancing

While BST operations are O(log n) in the average case, an unbalanced tree can degrade to O(n) performance. Self-balancing BST variants address this:

- AVL Trees
- Red-Black Trees
- B-Trees

These maintain balance by performing rotations after insertions and deletions.

## Complexities

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### Space Complexity

O(n)

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
