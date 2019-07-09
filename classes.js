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

const person_1 = new Person('marco', 33);
const person_2 = new Person('David', 13);

person_1.email('markwinap@gmail.com')
person_2.email('test@gmail.com')
console.log(person_1.string)
console.log(person_2.string)
