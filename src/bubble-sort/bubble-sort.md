# Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly traverses through a list, comparing adjacent elements and swapping them if they're in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list with each iteration.

The sorting process continues until no more swaps are needed, indicating the list is fully sorted.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Complexity

| Name            | Best  | Average        | Worst          | Memory | Stable | Comments                                    |
| -------------- | :---: | :------------: | :------------: | :----: | :----: | :----------------------------------------- |
| **Bubble sort**| n     | n<sup>2</sup>  | n<sup>2</sup>  | 1      | Yes    | Best case: Already sorted array             |
|                |       |                |                |        |        | Worst case: Reverse sorted array            |

## Key Characteristics

- Simple implementation
- Stable sorting algorithm
- In-place algorithm (requires only a constant amount O(1) of additional memory space)
- Adaptive: becomes faster when array is already partially sorted

## Use Cases

- Educational purposes to teach sorting concepts
- Small datasets where implementation simplicity is preferred
- When stable sorting is required
- When memory usage is a concern

## References

- [Wikipedia - Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort)
- [GeeksforGeeks - Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
- [Visualgo - Sorting Visualization](https://visualgo.net/en/sorting)
- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
- [YouTube Tutorial](https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
