function isEven(n) {
    return n % 2 == 0 
}

function isOdd(n) {
    return n % 2 == 0 
}

// Export functions so that they can be imported in other modules 
exports.isEven = isEven 
exports.isOdd = isOdd 
exports.SIZE = 100

