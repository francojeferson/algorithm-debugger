# Merge Sort

## Overview
Merge sort is an efficient, stable, comparison-based sorting algorithm that uses a divide-and-conquer strategy. Developed by John von Neumann in 1945, it has become one of the most reliable sorting methods in computer science.

## Key Features
- Stable sorting algorithm
- Predictable performance
- Divide-and-conquer approach
- Excellent for large datasets

## How It Works
The algorithm divides the input array into two halves, recursively sorts them, and then merges the sorted halves. The merging process combines two sorted subarrays into a single sorted array.

![Merge Sort Process](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

## Visual Representation
The following diagram shows a complete recursive merge sort process:

![Merge Sort Steps](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Performance Characteristics

| Aspect               | Performance        |
|---------------------|:------------------:|
| Time Complexity     | O(n log n)         |
| Space Complexity    | O(n)               |
| Stability          | Yes                |
| In-place           | No                 |

## Use Cases
- Large dataset sorting
- External sorting
- Custom object sorting where stability matters
- Linked list sorting

## References
1. [Wikipedia - Merge Sort](https://en.wikipedia.org/wiki/Merge_sort)
2. [Visualization Tutorial](https://www.youtube.com/watch?v=KF2j-9iSf4Q)
3. [JavaScript Implementation Examples](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
