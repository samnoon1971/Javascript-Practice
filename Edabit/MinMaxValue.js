
let func = (arr) => [Math.min(...arr), Math.max(...arr)];

let data = [];
for(let i=2; i<24; i+=2){
    data.push(i);
}
console.log(func(data));
