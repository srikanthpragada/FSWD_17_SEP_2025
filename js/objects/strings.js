var s = "Hello"
console.log(s[0])
console.log(s.length)  // length property 

var rate = 100
console.log("Rate = " + rate)  // Concatenation 
console.log(`Rate = ${rate}`)  // template string 

// for (let i = 0; i < s.length; i ++) {
//     console.log(s[i] , s.charAt(i))
// }

// Methods 
console.log(s.includes('lo'))
console.log(s.indexOf('lo'))

var st = "abc,xyz,pqr"
var parts = st.split(",")
console.log(parts)

console.log(st.substring(0,3))
console.log(st.slice(3))

console.log("*".repeat(10))
console.log("   abc xyz  ".trim())

s  = "javascript"
console.log(s.toUpperCase())
console.log(s)

console.log(s.charCodeAt(0))






