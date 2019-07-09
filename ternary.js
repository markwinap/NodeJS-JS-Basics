//- Ternary:  Conditional Operator

let condition = 1 == 2;//true

let result = condition ? 'OK' : 'Not OK';


console.log(result)


if(condition){
    console.log('OK')
}
else{
    console.log('Not OK')
}


let calls = 5;


console.log(
 `You have ${calls} ${calls > 1 ? 'calls' : 'call'} waiting in queue`
)
