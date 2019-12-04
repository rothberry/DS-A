// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

class Stack {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }
  push(value) {
    this.array.push(value)
    // return this
  }
  pop() {
    this.array.pop()
  }
  show() {
    console.log(this)
  }
  isEmpty() {
    if (this.length > 0) {
      return false
    } else {
      return true
    }
  }
}

const myStack = new Stack()
myStack.push("google")
myStack.push("Udemy")
myStack.push("Discord")
myStack.show()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.show()
