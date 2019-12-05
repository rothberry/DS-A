class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

const traverse = node => {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        // LEFT
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        }
        // Right
        else {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  lookup(value) {
    if (!this.isEmpty()) {
      let currentNode = this.root
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left
        } else if (value > currentNode.value) {
          currentNode = currentNode.right
        } else if (value === currentNode.value) {
          return currentNode
        }
      }
    } else {
      return "nah"
    }
    return false
  }
  remove(value){
    
  }

  isEmpty() {
    if (this.root === null) {
      return true
    } else {
      return false
    }
  }
}

const tree = new BinarySearchTree()
// console.log(tree.isEmpty())
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(
  tree.lookup(0)
)
// console.log(JSON.stringify(traverse(tree.root)))

//      9
//   4      20
// 1  6   15  170
