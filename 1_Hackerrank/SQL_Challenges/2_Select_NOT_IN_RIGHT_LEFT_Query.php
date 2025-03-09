<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "hackerrank_db";

$conn = new mysqli($host, $user, $pass, $db) or die("Unable to connect to DataBase");

/*
echo "<pre>";
print_r($conn);
echo "</pre>";
*/

// Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
$sql_not_like = "SELECT DISTINCT CITY
                FROM STATION  
                WHERE CITY NOT LIKE 'A%'  
                AND CITY NOT LIKE 'E%'  
                AND CITY NOT LIKE 'I%'  
                AND CITY NOT LIKE 'O%'  
                AND CITY NOT LIKE 'U%'
                OR CITY NOT LIKE '%A'  
                AND CITY NOT LIKE '%E'  
                AND CITY NOT LIKE '%I'  
                AND CITY NOT LIKE '%O'  
                AND CITY NOT LIKE '%U';";


// Does the same as NOT LIKE with or above
// RIGHT keyword indicates where to start checking from. Right side first character of City column
$sql_not_in = "SELECT DISTINCT CITY 
                FROM STATION 
                WHERE RIGHT(CITY, 1) 
                NOT IN ('A', 'E', 'I', 'O', 'U')
                OR LEFT(CITY, 1) 
                NOT IN ('A', 'E', 'I', 'O', 'U');";


$conn->close();

?>