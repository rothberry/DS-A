// Learn to cache data

function addTo80(n) {
  return n + 80
}

// addTo80(5)

let cache = {}

function memoizeAddTo80(n) {
  if (!!cache[n]) {
    return cache[n]
  } else {
    console.log('long time')
    const answer = n + 80
    cache[n] = answer
    return answer
  }
}

console.log('1', memoizeAddTo80(5))
console.log('2', memoizeAddTo80(5))

function memoizeAddTo80DP() {
  let cache2 = {}
  return function(n) {
    if (!!cache2[n]) {
      return cache2[n]
    } else {
      console.log('more long time')
      const answer = n + 80
      cache2[n] = answer
      return answer
    }
  }
}

console.log('\n**********\n' )
const memoized = memoizeAddTo80DP()

console.log('3', memoized(5))
console.log('4', memoized(5))

