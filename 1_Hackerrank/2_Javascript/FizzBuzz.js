let n = 15;
let i = 1;

while(i <= n){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("While => FizzBuzz");
    }else if(i % 3 === 0){
        console.log("While => Fizz")
    }else if(i % 5 === 0){
        console.log("While => Buzz");
    }else{
        console.log("While => " + i);
    }
    i++;
    }



// or 
console.log("\n");
console.log("Vaue of i = " + i + " and n = " + n);
console.log("\n");


for (let j = 1; j <= n; j++) {
    if (j % 3 === 0 && j % 5 === 0) {
        console.log("For => FizzBuzz");
    } else if (j % 3 === 0) {
        console.log("For => Fizz");
    } else if (j % 5 === 0) {
        console.log("For => Buzz");
    } else {
        console.log("For => " + i);
    }
}