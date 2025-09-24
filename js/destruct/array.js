
let a = [10, 20, 30]

let [x, y, z] = a

console.log(x, y, z)

let [p, q] = a
console.log(p, q)

let [n1, n2, n3, n4 = -1] = a
console.log(n1, n2, n3, n4)

let [v1, ...v2] = a
console.log(v1, v2)

