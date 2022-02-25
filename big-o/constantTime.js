// ! O(1) === Constant Time
// * Takes in any number of inputs, but only has one output
// * In terms of scalability, constant time is always O(1)

const logFirstTwoBoxes = boxes => {
  console.log(boxes[0])
  console.log(boxes[1])
}
const boxes = [0, 1, 2, 3, 4, 5]
logFirstTwoBoxes(boxes)