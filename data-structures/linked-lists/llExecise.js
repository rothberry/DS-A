

let obj1 = { a: true }

let obj2 = obj1
// * not a copy of the Object, obj2 just points to the location of obj1
obj1.a = 'wowows'
delete obj1
obj2 = 'hello'
// console.log(obj1)
console.log(obj2)
