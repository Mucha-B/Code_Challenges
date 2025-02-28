    /*
    Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

    If i is a multiple of both 3 and 5, print FizzBuzz.
    If i is a multiple of 3 (but not 5), print Fizz.
    If i is a multiple of 5 (but not 3), print Buzz.
    If i is not a multiple of 3 or 5, print the value of i.

    Prints:
    The function must print the appropriate response for each value i in the set {1, 2, ..., n} in order, each on a new line.

    */

    // With while loop
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



    
    console.log("\n");
    console.log("Vaue of i = " + i + " and n = " + n);
    console.log("\n");


    // with for loop
    for (let j = 1; j <= n; j++) {
        if (j % 3 === 0 && j % 5 === 0) {
            console.log("For => FizzBuzz");
        } else if (j % 3 === 0) {
            console.log("For => Fizz");
        } else if (j % 5 === 0) {
            console.log("For => Buzz");
        } else {
            console.log("For => " + j);
        }
    }



    // With Function
    function FizzBuzz(argN){
        for (let f = 1; f <= argN; f++) {
            if (f % 3 === 0 && f % 5 === 0) {
                console.log("Funk => FizzBuzz");
            } else if (f % 3 === 0) {
                console.log("Funk => Fizz");
            } else if (f % 5 === 0) {
                console.log("Funk => Buzz");
            } else {
                console.log("Funk => " + f);
            }
        }
    }

    FizzBuzz(15);