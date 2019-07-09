let person = {
    name: 'Marco',//key - value
    age: 33,
    student: false
};

console.log(JSON.stringify(person))

let person2 = '{"name":"Marco","age":33,"student":false}';

let person2 = '{"name":"Marco","age":33,"student":false}';
let obj = JSON.parse(person2);
console.log(obj.name)

