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

//approach 1
/* function join(arr, n){
    let c = arr.toString();
    return c.join(n);
}

console.log(join(["Red", "Green", "White", "Black"], ",")); */

//approach 2
/* let arr =["Red", "Green", "White", "Black"]
let oneString =arr.reduce(function(acc , item){ return acc + item +"," },'');
alert(oneString); */

//approach 3
/* myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+')); */

//ex 3
//approach 1
/* let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for(let i = 0; i < a.length - 1; i++){
    console.log("row " + (i + 1));
   let c = a[i].map(function(element){
       
    console.log(element);
   });

} */
//approach 2
/* const priint =a.map(function(item , index){
console.log("row " + index);
item.map(function(itemofindex){
console.log(itemofindex);
})
})
 */

//ex4

/* data = [
    ["The","red", "horse"],
    ["Plane","over","the","ocean"],
    ["Chocolate","ice","cream","is","awesome"],
    ["this","is","a","long","sentence"]
    ]
    
  
  const dateItemToOneString = data.map(function(item){
    console.log(item.reduce(function(acc ,item){
    return acc + item + " ";
    },""));
    });
 */