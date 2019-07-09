//- Nested functions, Arrow Functions, Anonymous Function

let test = function(){
    return 'OK'
}
function test2(){
    return 'OK'
}

let nameArr = ['marco', 'martinez'];

console.log(//Another Function
    joinNames(nameArr, displayName)
)

console.log(//Anonymous Function
    joinNames(nameArr, function(name){
        return `Your name is ${name}`;
    })
)

console.log(//Arrow Function
    joinNames(nameArr, name => `Your name is ${name}`)
)

console.log(//Arrow Function
    joinNames(nameArr, (name) => `Your name is ${name}`)
)

console.log(//Arrow Function
    joinNames(nameArr, (name) => {return `Your name is ${name}`} )
)

function joinNames(array, callback){
    return callback(array.join(', '))//marco, martinez
}
function displayName(name){
    return `Your name is ${name}`;
}
