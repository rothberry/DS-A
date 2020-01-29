# Recursion Notes

More of a concept than a algorithm.

Recursion: Define something in terms of itself. A function that refers to itself.


Ex:
let counter = 0
function inception() {
  if (counter > 3) { // Recursive case
    return 'done!'
  }
  counter++ // Base case
  // Need to return recursive function to bubble up final return
  return inception()
}

inception(
  inception(
    inception(
      inception() => 'done'
    )
  )
)

Good for tasks that how repeated sub-tasks to perform

Used in searching and sorting algorithms

Needs a stop point to end the recursion or else it will reach a stack overflow.

Rules of Recursion

1: Identify the base case
2: Identify the recursive case
3: Get closer and closer and return when needed. Usually you have 2 returns for the base case and the recursive case

Merge Sort
Quick Sort
Tree Traversal
Graph Traversal