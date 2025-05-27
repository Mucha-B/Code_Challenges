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
        args[i].sort();

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
                // splice use => array.splice(start, deleteCount, item1, item2, ...)
                                // start	The index where to start changing the array
                                // deleteCount	The number of elements to remove starting from start
                                // item1, item2…	(Optional) Elements to add at the start index
                const index = args[i].indexOf(args[i][k]);
                args[i].splice(index, 1);
            }
            count = 0;
        }
    }

    let array1 = [];
    let array2 = [];
    let combinedArray = [];

    for(let aaa = 0;  aaa < args.length; aaa++){

        // if(args[aaa] < args.length){
        if(2 < args.length){

            for(let bbb = 0; bbb < args[aaa].length; bbb++){

                for(let ccc = 0; ccc < args[aaa + 1].length; ccc++){

                    if (args[aaa][bbb] == args[aaa + 1][ccc]){
                            count += 1;
                    }
                }
                if(count == 0){
                    for(let ddd; ddd < myArr.length; ddd++){
                        if(myArr[ddd] == args[aaa][bbb]){
                            break;
                        }else{
                            myArr.push(args[aaa][bbb]);
                        }
                    }

                }
                count = 0;
            }
        }
        // [ 2, 3, 5 ],
        // [ 1, 2, 5, 7 ],
        // [ 3, 4, 6 ],
        // [ 1, 2, 3 ],
        // [ 3, 5, 8, 9 ],
        // [ 1 ]
    }

    // return args;
    // return myArr;
    console.log(myArr);
    // console.log(args);

}


// console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));
// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7, 2], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
sym([3, 3, 3, 2, 5], [2, 1, 5, 7, 2], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);






  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // GPT Answer
  // Helper to get symmetric difference between two arrays
 function sym(...args) {
  // Helper to remove duplicates from an array
  function unique(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      var found = false;
      for (var j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  // Helper to get symmetric difference between two arrays
  function symDiff(arr1, arr2) {
    var result = [];
    arr1 = unique(arr1);
    arr2 = unique(arr2);

    // Add elements from arr1 that are not in arr2
    for (var i = 0; i < arr1.length; i++) {
      var found = false;
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(arr1[i]);
      }
    }

    // Add elements from arr2 that are not in arr1
    for (var i = 0; i < arr2.length; i++) {
      var found = false;
      for (var j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(arr2[i]);
      }
    }

    return result;
  }

  // Process each array pairwise
  var result = args[0];
  for (var i = 1; i < args.length; i++) {
    result = symDiff(result, args[i]);
  }

  return unique(result); // Final cleanup of duplicates
}
