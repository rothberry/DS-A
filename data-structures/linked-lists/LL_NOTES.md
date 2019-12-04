# Linked Lists

Contains a set of Nodes
Nodes have 2 elements, 
the Value
and Pointer points to the next element

A Pointer is: reference to another point in memory

First Node called the Head. Last node is the tail

Null terminated, which signifies the end of the list

const basketArray = ['apples', 'grapes', 'pears']

linked list: apples --> grapes --> pears
apples 
1236  --> grapes 
          8428  --> pears
                    1222 --> null

Prepend:  O(1)
Append:   O(1)
Lookup:   O(n)
Insert:   O(n)
Delete:   O(n)


## Doubly Linked List

Points to next and previous node.

Tail still points to null.

Prepend:  O(1)
Append:   O(1)
Lookup:   O(n/2) => O(n)
Insert:   O(n)
Delete:   O(n)

Holds more data
