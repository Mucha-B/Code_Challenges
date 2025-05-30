/*

    One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos.
    They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem.

    Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal.
    The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.

    Input
    The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.

    Output
    Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.


    Example:
    Input = 8
    Output = YES

    Input = 5
    Output = NO

*/

// Function takes in Watermelon size in KG
let canDivideWatermelon = function (melonWeight) {
    // Check if melonWeight is even and greater than 2
    // === Compares both values and types                               // "5" === 5 → false
    // == Only compares values (performs type conversion if needed)     // "5" == 5 → true
    if (melonWeight > 2 && melonWeight % 2 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

// Test case from example
canDivideWatermelon(8);
canDivideWatermelon(5);