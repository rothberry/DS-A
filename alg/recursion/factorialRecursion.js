/*
 * Write 2 functions that finds the factorial of any number
 * One should be recursive and One non-recursive
 */

const factorialNonRecursive = num => { // O(n)
  let fact = 1
  let next = 1
  while (next <= num) {
    fact = fact * next
    next++
  }
  return fact
}

const factorialRecursive = num => { // O(n)
  if (num === 2) return 2
  console.log(num)
  return num * factorialRecursive(num - 1)
}

// console.log("non: ", factorialNonRecursive(0))
// console.log("non: ", factorialNonRecursive(10))
console.log('yay: ', factorialRecursive(6))
/*
 *5! = 5*4*3*2*1  = 5*4! = 120
 *4! = 4*3*2*1    = 24
 *3! = 3*2*1      = 6
 *0! = 1
 */
