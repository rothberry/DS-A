# Trees

A Hierarchy of parent to  child realtionships

Root, Parent, Child, Leaf, Sibling

Uses the same node principal as Linked Lists.

## Binary Trees

Has a vaue and a left & right property

Perfect Binary tree: has all the leaf nodes full, 
- Number of total nodes doubles on each level
- Number of nodes on the last level equals all the node above it minus 1

Full Binary Tree: a node has either 0 or 2 children

lookup =>   O(log(N))
insert =>   O(log(N))
delete =>   O(log(N))

### O(log(N))

(Perfect Binary Tree)
Number of nodes at: 

- Level 0: 2^0 = 1
- Level 1: 2^1 = 2
- Level 2: 2^2 = 4
- Level 3: 2^3 = 8
- Level n: 2^ - 1
log nodes = height

log 100 = 2 : 10^2 = 100

## Binary Search Tree

Preserves relationships

Rule 1: all child nodes to the right must be greater than the left
Rule 2: node can only have 2 children

Search and lookup is easy.