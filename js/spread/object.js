let obj = {x : 10, y : 20}

let obj2 = obj 
let obj3 = {...obj, z : 30}

obj.x = 100 

console.log(obj2)
console.log(obj3)

let obj4 = {...obj, x : 100}
console.log(obj4)

