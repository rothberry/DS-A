# Searching

Linear Search
Binary
Depth First
Breadth First

### Linear Search

[6, 12, 1, 34, 4, 9]
O(1) ---> O(N)

.find => return item
.findIndex => return index
.includes => return boolean

### Binary Search

?better way to find number in sorted list?

start in middle of list, and compare

[1, 4,  6,  9,  12, 34, 45]
target(34)
check 9 ? 12
remove all to the left
    9
  4   34
1 6   (12) 45

Divide & Conquer approach
O(log(n))

### Breadth First Search/Traversal (BFS)

Start with the root, and move left to right across all the levels

9 => 4 => 34 => 1 => 6 => 12 => 45

!!Scans horizontally!!

Pros:
- Shortest Path
- Closer Nodes

Cons:
- More Memory


### Depth First Search (BFS)

Follows on branch of the tree as far down

9 => 6 => 1 (^6) => 4 (^9) => 12 => 34 (^12) => 45

!!Scans Vertically!!

Pros:
- Less Memory
- Does Path Exist?

Cons:
- Can Get Slow

### BFS vs DFS

- If you know a solution is not far from the root of the tree: **BFS**

- If the tree is very deep and solutions are rare: **BFS**

- If the tree is very wide: **DFS**

- If solutions are frequent but located deep in the tree: **DFS**

- Determining whether a path exists between two nodes: **DFS**

- Finding the shortest path: **BFS**

### Graphes