let names = [
    'marco',
    'david',
    'juan',
    'pedro'
];


/*
item++
item = item + 1;


*/
for (let item = 0; item < names.length; item++) {
    console.log(`Name: ${names[item]}, position : ${item}`)
}
for(let i of names){
    console.log(i)
}
for(let i in names){
    console.log(i)
}

/*
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
*/