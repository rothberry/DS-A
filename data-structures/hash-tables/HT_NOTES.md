# Hash Tables

Ruby => Hashes
JavaScript => Objects

Has Key and Value pairs

Hash Function 

A function that generates a value for each input

Insert:   O(1)
Lookup:   O(1)
Delete:   O(1)
Search:   O(1)

Hash Collision

When more than one key value pair occupies the same memory address

let user = {
  age: 54,
  name: 'Kyile',
  magic: true,
  scream: () => {console.log('ahhhhhh!')}
}

user.age // O(1)
user.spell = 'abra kadabra' // O(n)

[Wiki](https://en.wikipedia.org/wiki/Hash_table)

Map vs Sets

A Map allows you to save any datatype as keys
Maintains insertion order
const a = new Map()

Only Stores the keys
const b = new Set()
