const moment = require('moment');


console.log(moment().startOf('month').format());
console.log(moment().startOf('year').format());

const past = moment().valueOf();

setInterval(function(){
    let now = moment().valueOf();
    console.log(moment.duration(now -  past).seconds())
}, 1000)