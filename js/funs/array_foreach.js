let a = [10, 20, 30]

// for(let v of a)
//   console.log(v)

function square(v) {
    console.log(v * v)
}

a.forEach(square)

// Using arrow function 
a.forEach(v => console.log(v + v))

