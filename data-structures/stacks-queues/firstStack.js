class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
    const newNode = new Node(value)
    // if stack is empty, then value is top and bottom
    if (this.isEmpty()) {
      this.top = newNode
      this.bottom = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }
    this.length++
  }
  pop() {
    // Removes the top of the stack
    if (this.isEmpty()){
      return null
    }
    if (this.length === 1)  {
      this.bottom = null
    }
    this.top = this.top.next
    this.length--
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
console.log(myStack.isEmpty())
myStack.push("google")
myStack.push("Udemy")
myStack.push("Discord")
myStack.show()
myStack.pop()
myStack.pop()
myStack.pop()
myStack.show()
