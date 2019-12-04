/*
  ? First Recurring Character
 * Google Question
 * Given an array = [2,5,1,2,3,5,1,2,4]
 * It should return 2
 
 * Given an array = [2,1,1,2,3,5,1,2,4]
 * It should return 1

 * Given an array = [2,3,4,5]
 * It should return undefined
*/

const firstRecurringCharacter = arr => {
  // * Create Obj
  // * push new key of arr[0] and value of whatever
  // * for arr[i] check if obj[arr[i]] exists
  // * if so, break function and return arr[i]
  // * if not, obj[arr[i]] = whatever

  const newObj = {}
  let result
  let i = 0

  while (!result && i <= arr.length) {
    if (!newObj[arr[i]]) {
      newObj[arr[i]] = "wowow"
      // console.log("obj: ", newObj)
    } else {
      // console.log("new: ", arr[i])
      result = arr[i]
    }
    i++
  }
  return result
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
const arr3 = [2, 3, 4, 5]

console.log(firstRecurringCharacter(arr1)) // 2
console.log(firstRecurringCharacter(arr2)) // 2
console.log(firstRecurringCharacter(arr3)) // 2
