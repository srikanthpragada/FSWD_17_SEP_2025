
function print() {
    console.log("Hello!")
}

function wish(name){
    console.log("Hi " + name)
}

function doSomething(func, value) {
    func(value)
}

//doSomething(print)
doSomething(wish, "Bill")

// Passing a function expression where function is needed 
doSomething( function(name) { console.log("Passed", name)} , 
            "Larry")

// Passing an arrow function where function is needed 
doSomething( name => console.log("Arrow", name), 
            "Larry")            