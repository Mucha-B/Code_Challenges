
/*
 * if-else conditional statements to automate decision-making processes
 * Task
    Given an integer, , perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird

    Complete the stub code provided in your editor to print whether or not  is weird.

* Input Format
    A single line containing a positive integer, n.
    Constraints
    1 <= n <= 100

    Output Format

    Print Weird if the number is weird; otherwise, print Not Weird.
 *
*/

import java.util.*;


public class B_IfElseAutomation {

    
        private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.print("Enter an integer: ");
        int N = scanner.nextInt();

        // In Java, the Scanner.skip() method is used to skip (ignore) a portion of the input that matches a given pattern (regular expression).
        // scanner.skip(String pattern)
        // It advances the scanner past the input that matches the specified regular expression.
        // If the pattern does not match the next input, it throws a NoSuchElementException.
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        scanner.close();

        if(N >= 1 && N <= 100){
            if(N % 2 == 1){
                System.out.println("Weird");
            }else if (N % 2 == 0 && N >= 2 && N <= 5) {
                System.out.println("Not Weird");
            }else if (N % 2 == 0 && N >= 6 && N <= 20) {
                System.out.println("Weird");
            }else if (N % 2 == 0 && N > 20) {
                System.out.println("Not Weird");
            }
        }else{
            System.out.println("Integer not in range");
        }

        // Example of skip()
        // Scanner scanner = new Scanner("123-456-789");
        // scanner.skip("\\d{3}-"); // skips "123-"
        // System.out.println(scanner.next()); // prints "456-789"
    }
    
}
