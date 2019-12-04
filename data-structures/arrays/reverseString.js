/* 
 ? Create a function that reverse a string
*/

const reverseString = str => {
  // Check Input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'lololololol'
  }
  let strArr = str.split('')
  let revArr = []

  let i = str.length
  while (i >= 0) {
    revArr.push(strArr[i])
    i--
  }
  return revArr.join('')
}

const reverseString2 = str => {
  return [...str].reverse().join('')
  return str.split('').reverse().join('')
}

const s1 = "hello"
const s2 = "botches"

console.log(reverseString2(s1))
console.log(reverseString2(s2))
