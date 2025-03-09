<?php


$host = "localhost";
$user = "root";
$pass = "";
$db = "hackerrank_db";

$conn = new mysqli($host, $user, $pass, $db) or die("Unable to connect to DataBase");


// Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
// ^ → Start of the string.
// [AEIOU] → Matches a vowel at the beginning.
// .* → Matches any characters in between.
// [AEIOU]$ → Matches a vowel at the end.
// NOT REGEXP → Ensures that the city name does not both start and end with a vowel.
$sql_REGEXP = "SELECT DISTINCT CITY  
                FROM STATION  
                WHERE CITY NOT REGEXP '^[AEIOU].*[AEIOU]$';";


?>