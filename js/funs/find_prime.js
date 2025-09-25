
function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0)
            return false
    }
    return true
}

nums = [10, 35, 78, 49, 13, 37]

console.log(nums.find(isPrime))
console.log(nums.filter(isPrime))