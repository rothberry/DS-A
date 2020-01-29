/**
 Simpler way to sort a list
 scans list of items for the smallest Element, and place that into the first slot of the array
 then loop through until completed
 Still time complexity of O(n^2)
 */
const { performance } = require("perf_hooks")

const selectionSort = array => {
  let t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    let min = i
    let temp = array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    array[i] = array[min]
    array[min] = temp
  }
  let t1 = performance.now()
  console.log(t1 - t0, "milliseconds")
  return array
}
const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(selectionSort(arr))
