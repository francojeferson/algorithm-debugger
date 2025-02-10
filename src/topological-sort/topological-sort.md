# Topological Sort

In the field of computer science, a topological sort or
topological ordering of a directed graph is a linear ordering
of its vertices such that for every directed edge `uv` from
vertex `u` to vertex `v`, `u` comes before `v` in the ordering.

For instance, the vertices of the graph may represent tasks to
be performed, and the edges may represent constraints that one
task must be performed before another; in this application, a
topological ordering is just a valid sequence for the tasks.

A topological ordering is possible if and only if the graph has
no directed cycles, that is, if it is a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
(DAG). Any DAG has at least one topological ordering, and algorithms are
known for constructing a topological ordering of any DAG in linear time.

![Directed Acyclic Graph](https://upload.wikimedia.org/wikipedia/commons/c/c6/Topological_Ordering.svg)

A topological ordering of a directed acyclic graph: every edge goes from
earlier in the ordering (upper left) to later in the ordering (lower right).
A directed graph is acyclic if and only if it has a topological ordering.

## Time Complexity
The algorithm runs in O(V + E) time, where V is the number of vertices and E is the number of edges in the graph.

## Common Implementation Methods
1. Kahn's Algorithm - Uses a queue to track vertices with no incoming edges
2. Depth-First Search (DFS) - Uses recursive DFS traversal marking visited nodes

## Example

![Topologic Sorting](https://upload.wikimedia.org/wikipedia/commons/0/03/Directed_acyclic_graph_2.svg)

The graph shown above has many valid topological sorts, including:

- `5, 7, 3, 11, 8, 2, 9, 10` (visual left-to-right, top-to-bottom)
- `3, 5, 7, 8, 11, 2, 9, 10` (smallest-numbered available vertex first)
- `5, 7, 3, 8, 11, 10, 9, 2` (fewest edges first)
- `7, 5, 11, 3, 10, 8, 9, 2` (largest-numbered available vertex first)
- `5, 7, 11, 2, 3, 8, 9, 10` (attempting top-to-bottom, left-to-right)
- `3, 7, 8, 5, 11, 10, 2, 9` (arbitrary)

## Applications

Topological sorting finds practical use in various real-world scenarios:

1. Task Scheduling
   - Scheduling jobs based on dependencies
   - Project management critical path analysis
   - Build systems (like Make)

2. Academic Planning
   - Course prerequisites planning
   - Curriculum design
   - Learning path generation

3. Software Development
   - Dependency resolution in package managers
   - Build system dependency graphs
   - Data serialization
   - Symbol resolution in linkers

4. Data Processing
   - Data pipeline processing
   - ETL (Extract, Transform, Load) workflows
   - Batch processing systems

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/topological-sorting)
- [Wikipedia](https://en.wikipedia.org/wiki/Topological_sorting)
- [Topological Sorting on YouTube by Tushar Roy](https://www.youtube.com/watch?v=ddTC4Zovtbc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
