let a = [10, 20, 30]
let b = a   // assign address to create an alias 

a[0]  = 100 
console.log(b)

// Making copy using spread operator 
let c = [5, ...a, 40]
a[0] = 1
console.log(c)
