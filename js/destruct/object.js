// Object literal 
let lang = {name : 'JavaScript', version : 2022,
    show : function() { console.log('Showing')}
}

let {name : n, version : v} = lang 
console.log(n, v)

let {name, version, type} = lang
console.log(name, version, type)


