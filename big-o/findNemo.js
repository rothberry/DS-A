const { performance } = require("perf_hooks")

const findNemo = arr => {
  // let t0 = performance.now()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found NEMO!")
    }
  }
  let t1 = performance.now()
  console.log("it took: ", t1 - t0, "milliseconds")
}

// const nemo = ["nemo"]
// findNemo(nemo)
// const everyone = ['dory', 'bruce', 'marlin', "nemo"]
// findNemo(everyone)
const large = new Array(1000).fill('nemo')
findNemo(large)