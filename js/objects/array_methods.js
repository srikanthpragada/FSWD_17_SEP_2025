let names = ["JavaScript", "Java", "Python", "Ruby", "c" ]

names.push("TypeScript")
console.log(names)

names.splice(0, 2)   // Delete 0th and 1st elements
console.log(names)

console.log(names.indexOf("Python"))

names.sort()
console.log(names)

// Keys are indexes 
for (let k of names.keys())
    console.log(k)

var a = [1,2,3,4, 5]
a = a.fill(1, 0, 3)
console.log(a)
