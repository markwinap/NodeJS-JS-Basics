class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    email(email){
        this.email = email;
    }
    get string(){
        return JSON.stringify(this);
    }
}

const person = new Person('marco', 33);

console.log(person.name)
person.email('markwinap@gmail.com')
console.log(person.string)