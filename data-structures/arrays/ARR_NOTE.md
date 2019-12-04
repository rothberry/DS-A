# Data Structures Notes

## Intro
What is a Data Structure?

Programs are Modeling real life scenarios.

How to Understand DS?
1. How to Build One
2. How to Use it
---
How Computers store data

* CPU
* RAM
* Storage

Integers are 32 bits

### Data Structures
* Arrays
* Stacks
* Queues
* Linked Lists
* Trees
* Tries
* Graphs
* Hash Tables

### JavaScript Data Types:
* Number => 1
* String => 'string'
* Boolean => true
* undefined
* Array => []
* Object => {}

---

Operations

* Insertion
* Deletion
* Traversal
* Searching
* Sorting
* Access

--- 
## Array (Lists)

Organizes Items sequentially
Big O
- Lookup: O(1)
- Push: O(1)
- Insert: O(n)
- Delete: O(n)

const strings = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 bytes of storage

// strings.push('e') => O(1)

// strings.pop() => O(1)
 
// strings.unshift('x') => O(n)
 
// strings.splice(2, 0, 'alien') => O(n)


### Static vs Dynamic Arrays

Static => Fixed in size

Dynamic  => Copy Static array and add space that is requested