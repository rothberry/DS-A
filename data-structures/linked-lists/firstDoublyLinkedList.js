class Node {
  constructor(value) {
    ;(this.value = value), (this.prev = null), (this.next = null)
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  printList() {
    const arr = []
    let currentNode = this.head
    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(arr)
    return arr
  }

  append(value) {
    let newNode = new Node(value)
    // * const newNode = {
    // *   value: value,
    // *   next: null,
    // *   prev: null
    // * }
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    let newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++
    return this
  }

  traverse(index) {
    let currentNode = this.head
    let i = 0
    while (i !== index) {
      currentNode = currentNode.next
      i++
    }
    return currentNode
  }

  insert(index, value) {
    // Check Params
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverse(index - 1)
    const follower = leader.next
    leader.next = newNode
    newNode.next = follower
    newNode.prev = leader
    follower.prev = newNode
    this.length++
    return this
  }

  remove(index) {
    // Check Params
    const removeNode = this.traverse(index)
    const leader = removeNode.prev
    const follower = removeNode.next
    leader.next = follower
    follower.prev = leader
    this.length--
    return this
  }
}

let myDoublyLinkedList = new DoublyLinkedList(10)

myDoublyLinkedList.append(5) // * 10 <--> 5
myDoublyLinkedList.append(16) // * 10 <--> 5 <--> 16
myDoublyLinkedList.prepend(1) // * 1 <--> 10 <--> 5 <--> 16
myDoublyLinkedList.insert(2, 99) // * 1 <--> 10 <--> 99 <--> 5 <--> 16
myDoublyLinkedList.printList()
console.log(
  myDoublyLinkedList.remove(2) // * 1 <--> 10 <--> 5 <--> 16
)
myDoublyLinkedList.printList()
