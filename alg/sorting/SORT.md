# Sorting Algorithms

Most common interview questions at high level companies

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

The issue w/ .sort():

Sorts by converting to string and charCodeAt(0)

const letters = ['a', 'd', 'z', 'e', 'r', 'b']
const numbers = [2, 65, 34, 2, 1, 7, 8]

letters.sort() => ['a', 'b', 'd', 'e', 'r', 'z']

numbers.sort() => [1, 2, 2, 34, 65, 7, 8]

.sort() is different in different broswers

String.localeCompare() to fix language sorting


### Can improve on O(log(n)) with no comparison sorts

Counting Sort
Radix Sort

Uses the way that the data is stored to sort