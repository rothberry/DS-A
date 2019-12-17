//*Implement a function that reverses a string using iteration...and then recursion!

function revStrIter(str) {
  let output = []
  let i = str.length
  while (i >= 0) {
    output.push(str[i])
    i--
  }
  return output.join("")
}

function revStrRec(str) {
  if (str === "") {
    return ""
  } else {
    // Takes the first letter and adds it to the string
    return revStrRec(str.substr(1)) + str.charAt(0)
  }
}
let testRes = "yretsam oyoy"
let testOne = revStrIter("yoyo mastery")
let testTwo = revStrRec("yoyo mastery")

console.log(
  // testOne,
  // testOne === testRes,
  testTwo,
  testTwo === testRes
)
