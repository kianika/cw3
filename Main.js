//ex1
/* function last(arr, n){
    if(n === null){
        return arr[arr.length - 1];
    }
    if(arr === null){
        return 0;
    }
    let element = arr.slice(Math.max(arr.lenght -2, 0));
    return element

}
console.log(last[1, 4, 9, -2], 6) */

//ex2

function join(arr, n){
    let c = arr.join(n);
    return c;
}

console.log(join(["Red", "Green", "White", "Black"], "+"));