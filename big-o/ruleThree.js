const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach(box => { // * O(N = boxes.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
  boxes.forEach(box => { // * O(M = boxes2.length)
    console.log(box)
  })
}

const boxesOne = [0,1,2,3,4,5]
const boxesTwo = ["a", "b"]
// * O(N + N + N + N + N + 3) => round off to O(N)
compressBoxesTwice(boxesOne, boxesTwo)

const compressBoxesTwiceNested = (boxes, boxes2) => {
  boxes.forEach(box => { // * O(N=boxes.length)
    console.log(box)
    boxes2.forEach(box2 => { // * O(M=boxes.length)
      console.log(box2)
    })
  })
}

// * O(N * M) => O(N^2)
compressBoxesTwiceNested(boxesOne, boxesTwo)