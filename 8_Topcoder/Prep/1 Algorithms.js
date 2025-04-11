/*


The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

Tests
Waiting:sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
Waiting:sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
Waiting:sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
Waiting:sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
Waiting:sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
Waiting:sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
Waiting:sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].
Waiting:sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
Waiting:sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
Waiting:sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
Waiting:sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.


*/


// Neex to fix code below
function symWrong(...args) {

    args = args.flat();
    args = args.sort();

    let myArr = [];
    let count = 0;

    for(let i = 0;  i < args.length; i++ ){
        
        for(let j = 0;  j < args.length; j++ ){
            if(args[i] == args[j]){
                count += 1;
            }
        }
        if(count == 1){
            myArr.push(args[i]);
        }
        count = 0;
    }
  
  
    
    return myArr;
  }
  
//   console.log(symWrong([1, 2, 3], [5, 2, 1, 4]));    // Output => [ 3, 4, 5 ]
//   console.log(symWrong([1, 2, 3, 3], [5, 2, 1, 4])); // Output => [ 4, 5 ] (Wrong) Should be => [ 3, 4, 5 ]

//   sym([1, 2, 3], [5, 2, 1, 4])


function sym(...args) {

    let myArr = [];
    // args = args.sort();
    let count = 0;
    let val;

    for(let i = 0; i < args.length; i++){
        // console.log(args[i]);

        for(let k = 0; k < args[i].length; k++){
            // console.log(args[i][k]);
            for(let l = 0; l < args[i].length; l++){
                if(args[i][k] == args[i][l]){
                    count += 1;
                }else{
                    val = args[i][l];
                }
            }
            // Remove duplicate values in all the arrays
            if(count > 1){
                // Combining indexOf() and splice() Methods
                // Pass the value of the element you wish to remove from your array into the indexOf() method to return the index of the element that matches that value in the array.
                // Then make use of the splice() method to remove the element at the returned index.
                const index = args[i].indexOf(args[i][k]);
                args[i].splice(index, 1);
            }
            count = 0;
        }
    }

    // Now process the arrays to find the symmetric difference

    return args;
    // return myArr;

}


console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7, 2], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));


