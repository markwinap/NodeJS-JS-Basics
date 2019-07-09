//- Promise: Async await

main();
async function main(){
    let a = await wait(1000)
    let b = await wait(1000).then(res => res).catch(err => err);
    let c = await wait(1000).then(res => {
        console.log('promise completed')
        return res;
    }).catch(err => err);
    console.log(a)
    console.log(b)
    console.log(c)
}


function wait(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Waited For ${time} MS`), time)
        //setTimeout(callback, ms dalay)
    })
}