/**
 * Not the most efficent, but useful for almost sorted lists
 * can get O(n) if list is sorted
 * works well with smaller data sets
 */

const { performance } = require("perf_hooks")

const insertionSort = array => {
  let t0 = performance.now()

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move number to the first spot
      array.unshift(array.splice(i, 1)[0])
    } else {
      for (let j = 0; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the orrect spot
          array.splice(j, 0, array.splice(i, 1)[0])
        }
      }
    }
  }

  let t1 = performance.now()
  console.log(t1 - t0, "milliseconds")
  return array
}
const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(insertionSort(array))
