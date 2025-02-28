<?php 


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
    $n = 15;
    $i = 1;
    while($i <= $n){
        if($i % 3 == 0 && $i % 5 == 0){
            echo "While => FizzBuzz \n";
        }else if($i % 3 == 0){
            echo "While => Fizz \n";
        }else if($i % 5 == 0){
            echo "While => Buzz \n";
        }else{
            echo "While => " . $i . " \n";
        }
        $i ++;
    }



        // or 
    echo "\n\n";
    echo "Vaue of i = " . $i . " and n = " . $n;
    echo "\n\n";


    // With for loop
    for ($j = 1; $j <= $n; $j++) {
        if ($j % 3 === 0 && $j % 5 === 0) {
            echo "For => FizzBuzz \n";
        } else if ($j % 3 === 0) {
            echo "For => Fizz \n";
        } else if ($j % 5 === 0) {
            echo "For => Buzz \n";
        } else {
            echo "For => " . $j . " \n";
        }
    }

    // With function
    // Access modifier(public, private, protected) not set because were outsied a class
    function FizzBuzz($argN){

        for ($f = 1; $f <= $argN; $f++) {
            if ($f % 3 === 0 && $f % 5 === 0) {
                echo "Funk => FizzBuzz \n";
            } else if ($f % 3 === 0) {
                echo "Funk => Fizz \n";
            } else if ($f % 5 === 0) {
                echo "Funk => Buzz \n";
            } else {
                echo "Funk => " . $f . " \n";
            }
        }

    }

    FizzBuzz(15);



    // OOP
    class FizzBuzzClass {
        public function FizzBuzzFunk($argN) {
            for ($j = 1; $j <= $argN; $j++) {
                if ($j % 3 === 0 && $j % 5 === 0) {
                    echo "Class Funk => FizzBuzz \n";
                } elseif ($j % 3 === 0) {
                    echo "Class Funk => Fizz \n";
                } elseif ($j % 5 === 0) {
                    echo "Class Funk => Buzz \n";
                } else {
                    echo "Class Funk => " . $j . " \n";
                }
            }
        }
    }
    
    // Create an object and call the function
    $fizzBuzzObj = new FizzBuzzClass();
    $fizzBuzzObj->FizzBuzzFunk(15);

?>