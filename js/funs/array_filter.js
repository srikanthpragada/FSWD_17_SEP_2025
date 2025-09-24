let a = [1, 3, 4, 5, 10, 30]

function isOdd(n) {
    return n % 2 == 1
}

// Using normal callback function 
odd_nums = a.filter(isOdd)
console.log(odd_nums)

// Using arrow function for callback
odd_nums = a.filter(v => v % 2 === 0)
console.log(odd_nums)

// Using index with filter 
console.log(a.filter( (v, idx) => idx % 2 == 1))