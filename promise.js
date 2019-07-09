//- Promise: Async await

main();
async function main(){
    let a = await wait(1000)
    let b = await wait(2000).then(res => {
        console.log('Promise Completed')
        return res
    }).catch(err => err);
    console.log(a)
    console.log(b)

}
function wait(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Waited For ${time} MS`), time)
    })
}