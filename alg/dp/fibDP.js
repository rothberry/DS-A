// fibonacci sequence
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233......]

let calc = 0
const fibonacciRec = (n) => {
  calc++
  // console.log(`n:\t ${n}`)
  if (n < 2) {
    return n
  } else {
    return fibonacciRec(n - 1) + fibonacciRec(n - 2)
  }
}


let calc2 = 0
const fibonacciDP = () => {
  let cache = {}

  return function fib(n) {
    calc2++
    if (!!cache[n]) {
      return cache[n]
    } else {
      if (n < 2) {
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n - 2)
        return cache[n]
      }
    }
  }
}

const fasterFib = fibonacciDP()

console.log(`DP:\t${fibonacciRec(35)}\tcalc2:\t${calc}`)
console.log("\n###########\n")
console.log(`DP:\t${fasterFib(35)}\tcalc2:\t${calc2}`)
