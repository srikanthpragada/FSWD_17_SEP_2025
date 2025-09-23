
let d1 = new Date("2025-01-01")
console.log(d1.toString())

let d2 = new Date(2025, 1, 1) // year, month, day
console.log(d2.toString()) 

let cd = new Date(); // system date 
console.log(cd.toString()) 
cd.setDate(cd.getDate() + 40)
console.log(cd.toString()) 

cd = new Date()
console.log(cd.toString())
console.log(cd.toLocaleDateString("en-US"))
console.log(cd.toLocaleDateString("es-ES"))

