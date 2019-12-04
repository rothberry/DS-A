class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }
  peek() {
    return this.first
  }
  enqueue(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
  }
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
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

const myQueue = new Queue()
console.log(myQueue.isEmpty())
myQueue.enqueue("joy")
myQueue.enqueue("matt")
myQueue.enqueue("pavel")
myQueue.enqueue("samir")
myQueue.show()
myQueue.dequeue()
myQueue.dequeue()
myQueue.show()
myQueue.dequeue()
