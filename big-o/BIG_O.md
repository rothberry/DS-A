# Big O Notation

What is the O stand for?
- Operations
- Operations(Number of Operations)

What is Big O Notation used for?
- Calculate space/time complexity
- Determine how Efficent an algo is
- Have efficent algos for scalability

What can cause time in a function?
- Loops
- Variable Assignment
- Comparing data
- Calling Variables






## Time Complexity

### Constant Time: O(1)

No loops, will only do constant operations. 
Takes in any number of inputs, but only has one output
In terms of scalability, constant time is always O(1)

```javascript
  //  * N = boxes.length = 6
  const logFirstTwoBoxes = boxes => {
    console.log(boxes[0]) // * O(1)
    console.log(boxes[1]) // * O(1)
  }
  const boxes = [0, 1, 2, 3, 4, 5]
  // * O(1 + 1)  => O(2) => O(1)
  logFirstTwoBoxes(boxes) 
```

Examples:
- Setting variables
- Calling variables
- Comparisons


### Linear Time: O(N)

Looping in any fashion will give you N number of operations

```javascript
  //  * N = boxes.length = 6
  const logAllBoxes = boxes => {
    for (let i = 0; i < boxes.length; i++) { // * O(N)
      const box = boxes[i]; // * O(1)
      console.log(box) // * O(1)
    }
  }
  const boxes = [0, 1, 2, 3, 4, 5]
  // * O(1 + 1 + N) => O(2 + N) => O(N)
  logAllBoxes(boxes)
```

Examples:
- Loops


### Quadratic Time: O(N^2)

Nesting a loop inside another loop means that you will in the worst case go through the same loop twice for each element or O(n * n) == O(n^2)

```javascript
// * N = arr.length = 5
const findAllPairs = arr => {
  let counter = 0 // * O(1)
  arr.forEach(x => { // * O(N)
    counter++
    arr.forEach(y => { // * O(N)
      counter++
      console.log(counter, x, y)
    })
  })
  console.log(counter)
}

const boxes = ['a', 'b', 'c', 'd', 'e']
// * O(N * N) => O(N^2)
findAllPairs(boxes)
```

### Cubic Time: O(N^3)

```javascript
// * N = arr.length = 5
const findAllPairs = arr => {
  let counter = 0 // * O(1)
  arr.forEach(x => { // * O(N)
    counter++
    arr.forEach(y => { // * O(N)
      counter++
      arr.forEach(z => {// * O(N)
        counter++
        console.log(counter, x, y, z)
      })
    })
  })
  console.log(counter)
}

const boxes = ['a', 'b', 'c', 'd', 'e']
// * O(N * N * N) => O(N^3)
findAllPairs(boxes)
```



### Nested vs Parallel

```javascript
const boxesOne = [0,1,2,3,4,5]
const boxesTwo = [6,7]

const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach(box => {
    console.log(box)
  })
  boxes2.forEach(box => {
    console.log(box)
  })
}
compressBoxesTwice(boxesOne, boxesTwo)

const compressBoxesTwiceNested = (boxes, boxes2) => {
  boxes.forEach(box => {
    console.log(box)
    boxes2.forEach(box2 => {
      console.log(box2)
    })
  })
}
compressBoxesTwiceNested(boxesOne, boxesTwo)

```