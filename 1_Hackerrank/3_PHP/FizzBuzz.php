<?php    


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


    for ($j = 1; $j <= $n; $j++) {
        if ($j % 3 === 0 && $j % 5 === 0) {
            echo "For => FizzBuzz \n";
        } else if ($j % 3 === 0) {
            echo "For => Fizz \n";
        } else if ($j % 5 === 0) {
            echo "For => Buzz \n";
        } else {
            echo "For => " . $i . " \n";
        }
    }

    ?>