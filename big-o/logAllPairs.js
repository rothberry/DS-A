// ! Log all pairs of array

const findAllPairs = arr => {
  let counter = 0
  arr.forEach(x => { 
    counter++
    arr.forEach(y => { 
      counter++
      console.log(counter, x, y)
    })
  })
  console.log(counter)
}

let boxes = ['a', 'b', 'c', 'd', 'e', 'f']
// boxes = new Array(100).fill("a")
findAllPairs(boxes)