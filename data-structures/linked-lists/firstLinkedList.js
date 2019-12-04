// * 10 --> 5 --> 16

// let myLL = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
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
    // *   next: null
    // * }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    let newNode = new Node(value)
    newNode.next = this.head
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
    /*
     * o1 -> o2 -> o3, insert o4 @ index 2
     * Follower: current Node at index  => o2
     * Leader: Node Before current Node => o1
     * 1st step:
     *    o1 -> o4
     * 2nd step:
     *    o4 -> o2
     * Result
     *    o1 -> o4 -> o2 -> o3
    */
    // * If index is greater than length, then append to list
    if (index >= this.length) {
      return this.append(value)
    }
    // * If index is less than 0, prepend
    if (index <= 0) {
      return this.prepend(value)
    }
    const newNode = new Node(value)
    // * Travel to node that will be before the inserted Node
    const leader = this.traverse(index - 1)
    // * Find Node after leader
    const follower = leader.next
    // * Point the previous node to inserted Node
    leader.next = newNode
    // * Point newNode to follower
    newNode.next = follower
    this.length++
    return this
  }

  remove(index) {
    // Check Params
    const leader = this.traverse(index)
    const removeNode = leader.next
    leader.next = removeNode.next
    this.length--
    return this
  }
  reverse() {
    // * 1 --> 10 --> 99 --> 5 --> 16
    // * Becomes 16 --> 5 --> 99 --> 10 --> 1
    if (!this.head.next) {
      return this
    }
    let first = this.head
    this.tail = this.head
    let second = first.next
    while (!!second) {
      const temp = second.next
      second.next = first
      first = second
      second = temp
    }
    this.head.next = null
    this.head = first
    return this
  }
}

let myLinkedList = new LinkedList(10)

// console.log(myLinkedList)
myLinkedList.append(5) // * 10 --> 5
myLinkedList.append(16) // * 10 --> 5 --> 16
myLinkedList.prepend(1) // * 1 --> 10 --> 5 --> 16
myLinkedList.insert(2, 99) // * 1 --> 10 --> 99 --> 5 --> 16
// myLinkedList.printList()
// myLinkedList.remove(2) // * 1 --> 10 --> 99 --> 5 --> 16
myLinkedList.printList()
myLinkedList.reverse()
myLinkedList.printList()
// console.log(myLinkedList)
