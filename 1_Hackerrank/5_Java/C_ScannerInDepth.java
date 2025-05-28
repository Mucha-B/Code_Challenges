
/*
 * In this challenge, you must read an integer, a double, and a String from stdin, then print the values according to the instructions in the Output Format section below.
 * 
 * Input Format
 * There are three lines of input:
    The first line contains an integer.
    The second line contains a double.
    The third line contains a String.

 * Output Format
 * There are three lines of output:
    On the first line, print String: followed by the unaltered String read from stdin.
    On the second line, print Double: followed by the unaltered double read from stdin.
    On the third line, print Int: followed by the unaltered integer read from stdin.
 *
 * Note: If you use the nextLine() method immediately following the nextInt() method, recall that nextInt() reads integer tokens; because of this, the last newline character for that line of integer input is still queued in the input buffer and the next nextLine() will be reading the remainder of the integer line (which is empty).
*/

import java.util.Scanner;

public class C_ScannerInDepth {

    public static void main(String[] args)  {
        // Scanner scan = new Scanner(System.in);

        // System.out.print("Enter Integer: ");
        // int i = scan.nextInt();

        // System.out.print("Enter Double: ");
        // double d = scan.nextDouble();

        // // After reading a number (like nextInt() or nextDouble()), the newline character (\n) is not consumed. So you need an extra scan.nextLine() to skip it before reading the actual line you want to read with String s = scan.nextLine().
        // scan.nextLine();

        // System.out.print("Enter String: ");
        // String s = scan.nextLine();

        // scan.close();

        // System.out.println("String: " + s);
        // System.out.println("Double: " + d);
        // System.out.println("Int: " + i);

        Scanner scan = new Scanner(System.in);
        System.out.print("Enter Integer: ");
        int i = scan.nextInt();

        System.out.print("Enter Double: ");
        double d = scan.nextDouble();

        // If the line below isn't included, the String s scan line won't run. Code will skip to Enter String: line because reading a number doesn't jump to the next line
        // After reading a number (like nextInt() or nextDouble()), the newline character (\n)  is not consumed. So you need an extra scan.nextLine() to skip it before reading the actual line you want to read with String s = scan.nextLine().
        scan.nextLine();    // Consume the leftover newline after reading a double/int, before reading the next full line of text.
        
        System.out.print("Enter String: ");
        String s = scan.nextLine();

        scan.close();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
    
}
