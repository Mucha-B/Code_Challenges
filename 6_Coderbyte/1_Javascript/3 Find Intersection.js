/*

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted).
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
If there is no intersection, return the string false.

Examples:
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10

*/


function FindIntersection(strArr){

    let firstArr = strArr[0];
    let secondArr = strArr[1];

    firstArr = firstArr.split(", ");
    secondArr = secondArr.split(", ");

    // firstArr = firstArr.map(Number);
    // secondArr = secondArr.map(Number);


    let store = [];

    for(let i = 0; i < firstArr.length; i++){
        for(let j = 0; j < secondArr.length; j++){
            if(firstArr[i] == secondArr[j]){
                store.push(secondArr[j]);
            }
        }
    }

    return store;


}


let strArr = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

console.log(FindIntersection(strArr));