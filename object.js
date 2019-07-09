let person = {
    name: 'Marco',//key - value
    age: 33,
    student: false
};
let item = 'age';
console.log(person.name)
console.log(person['name'])
console.log(person[item])

person.name = 'david';
person.color = 'red';
console.log(person)