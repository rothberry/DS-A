const findNemo = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found NEMO!")
      break
    }
  }
}

// ! O(n) === Linear Time
const nemo = ["nemo"] // * O(n=1)
// findNemo(nemo)
const everyone = ['dory', 'bruce', 'marlin', "nemo", 'gill', 'bloat', 'nigel'] // * O(n=4)
// findNemo(everyone)
const large = new Array(100000).fill('nemo') // * O(n=100000)
findNemo(large)