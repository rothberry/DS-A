/**
 * O(nlog(n))
 * Divide and Conquer!
 * does not have neted for loops
 * Divde array into single items
 * compare them 2 items at a time and merge
 * uses recursion
 * a stable algorithm
 */

const { performance } = require("perf_hooks")

const mergeSort = array => {
  // let t0 = performance.now()
  if (array.length === 1) {
    return array
  }
  const length = array.length
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  console.log("left: ", left)
  console.log("right: ", right)
  // let t1 = performance.now()
  // console.log(t1 - t0, "milliseconds")
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
console.log(mergeSort(array))
