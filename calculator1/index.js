
var del = require('./calc/sub');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var a = 0, b = 0;
rl.question("Enter number 1: ", function (a){
    rl.question("Enter number 2: ", function (b) {
        console.log(del(a, b));
    });
});