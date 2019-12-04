const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach(box => {
    console.log(box)
  })

  boxes2.forEach(box => {
    console.log(box)
  })
}

const boxesOne = [0,1,2,3,4,5]
const boxesTwo = [6,7]
compressBoxesTwice(boxesOne, boxesTwo)
// * O(a + b)

const compressBoxesTwiceNested = (boxes, boxes2) => {
  boxes.forEach(box => {
    console.log(box)
    boxes2.forEach(box2 => {
      console.log(box2)
    })
  })

}

compressBoxesTwiceNested(boxesOne, boxesTwo)
// * O(a*b)