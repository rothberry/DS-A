// * compare the n to n+1 and swap if greater
// * Keep looping until done
// * [6, 5, 3, 1, 8, 7, 2, 4]
// * Generally O(n^2)

const { performance } = require("perf_hooks")

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const bubbleSort = array => {
  let t0 = performance.now()

  const length = array.length
  for (let i = 0; i < array.length; i++) {
    // Times to loop the array
    for (let j = 0; j < array.length; j++) {
      // Loops through the array
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  let t1 = performance.now()
  console.log(t1 - t0, "milliseconds")
}

bubbleSort(numbers)
console.log(numbers)
