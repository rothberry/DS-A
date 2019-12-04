/* 
  ? Given Two sorted arrays, merge into one larger sorted array
*/

const mergeSortedArrays = (arr1, arr2) => {
  // * Outliers
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }
  // * create output array
  const outputArr = []
  let i = 0
  let j = 0
  while (arr1[i] || arr2[j]) {
    // * Compare 1st index of both arrays and push minimum into outputArr
    // * Then increase the index of minimum value by 1
    // * Loop until both indeces are undefined
    console.log(arr1[i], arr2[j])
    let firstCheck = !arr2[j] || arr1[i] <= arr2[j]

    if (firstCheck) {
      console.log("1")
      outputArr.push(arr1[i])
      i++
    } else {
      console.log("2")
      outputArr.push(arr2[j])
      j++
    }
  }
  console.log("output: ", outputArr)
  return outputArr
}

const arr1 = [1, 3, 4, 31]
const arr2 = [4, 6, 30]
const arr3 = [1, 2]
//  * Output => [0,3,4,4,6,30,31]

mergeSortedArrays(arr1, arr2)
mergeSortedArrays(arr3, arr1)