// ! Log all pairs of array

const findAllPairs = arr => {
  let counter = 0
  arr.forEach(x => { // * O(n)
    counter++
    arr.forEach(y => { // * O(n)
      counter++
      console.log(counter, x, y)
    })
  })
  console.log(counter)
}

// ! QUADRATIC TIME
// ! O(n * n) == O(n^2)


const boxes = ['a', 'b', 'c', 'd', 'e']
findAllPairs(boxes)