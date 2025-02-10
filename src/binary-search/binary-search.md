# Binary Search

Binary search is a highly efficient search algorithm that finds a target value within a sorted array. It works by repeatedly dividing the search interval in half, comparing the middle element with the target value, and eliminating the half where the target cannot be.

## How It Works

1. Find the middle element of the sorted array
2. If target equals middle element, return its position
3. If target is greater, search the right half
4. If target is smaller, search the left half
5. Repeat until target is found or search space is empty

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Complexity

- **Time Complexity**: `O(log n)` - The search space is halved in each step
- **Space Complexity**: `O(1)` - Only requires a constant amount of extra space
- **Best Case**: `O(1)` - Target is found at the middle element
- **Worst Case**: `O(log n)` - Target is at the end or not present

## Prerequisites

- Array must be sorted
- Random access to elements (index-based access)

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube Tutorial](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
