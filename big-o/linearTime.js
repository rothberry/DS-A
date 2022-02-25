// ! O(N) === Linear Time

const logAllBoxes = boxes => {
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    console.log(box)
  }
}
const boxes = [0, 1, 2, 3, 4, 5]
logAllBoxes(boxes) 