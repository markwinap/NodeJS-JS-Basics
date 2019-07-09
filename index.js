let person =  {
    name: 'Marco Martinez',
    age: 33,
    sleep: false
};

console.log(JSON.stringify(person))
let personJSON = '{"name":"Marco Martinez","age":33,"sleep":false}';
console.log(JSON.parse(personJSON))