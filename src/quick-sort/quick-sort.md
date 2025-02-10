# Quicksort

Quicksort is a highly efficient divide-and-conquer sorting algorithm. It works by:

1. Selecting a 'pivot' element from the array
2. Partitioning other elements into two sub-arrays:
   - Elements less than the pivot
   - Elements greater than the pivot
3. Recursively applying the same steps to the sub-arrays

## How It Works

1. **Choose Pivot**: Pick an element, called a pivot, from the array
2. **Partition**: Reorder the array so that:
   - All elements < pivot move before it
   - All elements > pivot move after it
   - Elements = pivot can go either way
3. **Recursive Sort**: Apply steps 1-2 to both sub-arrays

## Visual Demonstration

![Quicksort Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)
*Horizontal lines indicate pivot values*

## Performance Characteristics

| Aspect               | Best Case      | Average Case   | Worst Case     | Space     | Stable |
|---------------------|----------------|----------------|----------------|-----------|--------|
| **Complexity**      | O(n log n)     | O(n log n)     | O(n²)         | O(log n)  | No     |

**Key Features:**
- In-place sorting (minimal extra space)
- Efficient for large datasets
- Widely used in practice
- Not stable (may reorder equal elements)

## References

- [Implementation Examples (GitHub)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort)
- [Theoretical Background (Wikipedia)](https://en.wikipedia.org/wiki/Quicksort)
- [Visual Explanation (YouTube)](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
