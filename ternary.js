//- Ternary:  Conditional Operator

let condition = 1 == 2;

let result = condition ? 'OK' : 'Not OK';

if(condition){
    console.log('OK')
}
else{
    console.log('Not OK')
}


let calls = 1;
console.log(
 `You have ${calls} ${calls > 1 ? 'calls' : 'call'} waiting in queue`
)