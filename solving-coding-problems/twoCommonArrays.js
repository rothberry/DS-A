/*
  Given 2 Arrays, create a function that let's a user know (true/false)
  whether these arrays contain common items

  Ex1:
    const arr1 = ['a', 'b', 'c', 'x']
    const arr2 = ['z', 'y', 'i']
    => false
  Ex2:
    const arr1 = ['a', 'b', 'c', 'x']
    const arr2 = ['z', 'y', 'x']
    => true
*/

const arr1 = ["a", "b", "c", "x"]
const arr2 = ["z", "y", "i"]
const arr3 = ["z", "y", "x"]

// ! O(A * B)
const isCommonItems1 = (arr1, arr2) => {
  arr1.forEach(x => {
    arr1.forEach(y => {
      if (x === y) {
        return true
      }
    })
  })
  return false
}
// console.log("test1: ", isCommonItems1(arr1, arr2))
// console.log("test2: ", isCommonItems1(arr1, arr3))

// arr1 => Obj {
//   a: true,
//   b: true,
//   c: true,
//   x: true,
// }
// ! O(A + B)
const isCommonItems2 = (array1, array2) => {
  // loop through first array and create obj where prop equals key of items, value of true
  let map = {}
  // for (let x = 0; x < array1.length; x++) {
  array1.forEach(x => {
    if (!map[x]) {
      map[x] = true
    }
  })
  // loop through second array, check if item in 2nd array exsits in object
  array1.forEach(y => {
    if (map[y]) {
      return true
    }
  })
  return false
}
// console.log("test1: ", isCommonItems2(arr1, arr2))
// console.log("test2: ", isCommonItems2(arr1, arr3))

const isCommonItems3 = (array1, array2) => {
  // is the same as '2'
  return array1.some(item => array2.includes(item))
}

console.log("test1: ", isCommonItems3(arr1, arr2))
console.log("test2: ", isCommonItems3(arr1, arr3))