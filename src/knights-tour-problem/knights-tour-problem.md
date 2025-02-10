# Knight's Tour Problem

A **knight's tour** is a sequence of moves of a knight on a chessboard such that the knight visits every square exactly once. There are two types of tours:

- **Closed Tour**: The knight ends on a square that is one knight's move away from its starting position
- **Open Tour**: The knight ends on any other square

## Problem Description

The **knight's tour problem** is a mathematical challenge of finding a valid knight's tour on a given board. It's frequently used as:
- A classic computer science exercise
- An example of backtracking algorithms
- A practical application of graph theory

The problem can be solved on:
- Standard 8×8 chessboards
- Custom-sized boards (e.g., 5×5, 6×6)
- Irregular or non-rectangular boards

## Mathematical Context

This problem is a specific instance of the **Hamiltonian path problem** in graph theory:
- Open tours correspond to Hamiltonian paths
- Closed tours correspond to Hamiltonian cycles

## Visual Examples

![Open Knight's Tour on 8x8](https://upload.wikimedia.org/wikipedia/commons/d/da/Knight%27s_tour_anim_2.gif)
*Animation of an open knight's tour on a standard 8×8 chessboard*

![Knight's Tour on 5x5](https://upload.wikimedia.org/wikipedia/commons/c/ca/Knights-Tour-Animation.gif)
*Animation of an open knight's tour on a 5×5 board*

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/uncategorized/knight-tour)
- [Wikipedia - Knight's Tour](https://en.wikipedia.org/wiki/Knight%27s_tour)
- [GeeksForGeeks - Knight's Tour Problem](https://www.geeksforgeeks.org/backtracking-set-1-the-knights-tour-problem/)
