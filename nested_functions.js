function combineName(a, callback){
    return callback(a.join(' '));
}
let test = combineName(['Marco', 'David'], function(res){
    return ({
        name: res
    });
});
let test2 = combineName(['Marco', 'David'], res => {return {name: res}});

console.log(test)
console.log(test2)