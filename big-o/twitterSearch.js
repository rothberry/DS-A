// ! Find first tweet
// ! Find last(nth) tweet

const arr = [
  { tweet: "ayyy", date: 2019 },
  { tweet: "now", date: 2000 },
  { tweet: "sucka", date: 2020 }
]
arr[0] // * O(1)
arr[arr.length - 1] // * O(1)
// * Constant Time

"string".length // * O(1) in javascript because it's a property of the string, not a method