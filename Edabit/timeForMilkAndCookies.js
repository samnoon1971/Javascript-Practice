


let func = (date) => {
    return date.getDate() == 24 && date.getMonth() == 11;
}

let res = func(new Date(2013, 11, 24));
console.log(res);