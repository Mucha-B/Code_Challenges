<?php 

// PROBLEM
// Query the Name of any student in STUDENTS who scored higher than  Marks.
// Order your output by the last three characters of each name. 
// If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.


// SOLUTION
// WHERE Marks > some_value → Filters students who scored higher than the specified marks.
// RIGHT(Name, 3) → Extracts the last three characters of the Name column.
/* ORDER BY RIGHT(Name, 3), ID ASC
    // First sorts the names based on the last three characters.
    // If two or more names have the same last three characters, it sorts them by ID in ascending order.
*/
$sql_RIGHT = "SELECT NAME  
FROM STUDENTS  
WHERE Marks > 75  
ORDER BY RIGHT(Name, 3), ID ASC;";


// SOLUTION
// SUBSTRING(string, start_position, length)
// string ==> The text or column from which you want to extract a portion.
// start_position ==> The position in the string where extraction begins (1-based index).
// length ==> The number of characters to extract.
// LENGTH(NAME) - 2  ==> Finds the position of the last three characters in the name. Subtract two becaue the third last character comes before the second last character
// SUBSTRING(NAME, LENGTH(NAME) - 2, 3)  ==> Extracts the last three characters from NAME.
// Sorting Order:
//           ==> Primary: Sorts by the last three characters.
//           ==> Secondary: If two names have the same last three characters, they are sorted alphabetically (NAME ASC).
$sql_SUBSTRING = "SELECT NAME 
                    FROM STUDENTS 
                    WHERE MARKS > 75 
                    ORDER BY SUBSTRING(NAME, LENGTH(NAME) - 2, 3) ASC, ID ASC;";



?>