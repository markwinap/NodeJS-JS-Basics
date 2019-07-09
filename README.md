## JS BIBLE
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/

## BASIC
- console.log()
- Comments
- Variable Types
- var, let, const
- Conditions: if, else if, else
- Comparison and Logical Operators == === && || >=	<= !
- Strings: Concatenate String, String Decorators
- Functions
- Arrays: LOOPs
- Objects:
- JSON: JSON.stringify() and  JSON.parse();

## ADVANCED
- Ternary:  Conditional Operator
- Nested functions, Arrow Functions, Anonymous Function
- Classes
- use libraries

## ADVANCED 2
- fetch and hhtp request

- REST API


### let
```js
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```



### for loops

```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}
while
let test = ['a', 'b', 'c']
for(let i in test){
  console.log(i)
}
for(let j of test){
  console.log(j)
}
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```