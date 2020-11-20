
let arr = [];

const myFunc = (num, length) => {
    return Array.from({length}, (_, i) => num * (i + 1));
}

arr = myFunc(3, 19);

arr.forEach(x => console.log(x));