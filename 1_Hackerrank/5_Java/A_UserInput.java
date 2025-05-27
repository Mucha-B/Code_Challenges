
/*
 * One popular way to read input from stdin is by using the Scanner class and specifying the Input Stream as System.in.
 * Scanner scanner = new Scanner(System.in);
 * String myString = scanner.next();
 * int myInt = scanner.nextInt();
 * scanner.close();
 * 
 * System.out.println("myString is: " + myString);
 * System.out.println("myInt is: " + myInt);
 * 
*/

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class A_UserInput {

    // throws IOException added for buffer reader
    public static void main(String[] args) throws IOException {

        // scanner.nextLine()
        // Reads the entire line of input, including spaces, until the user hits Enter.
        // Returns a String with everything typed on that line.

        // scanner.next()
        // Reads only one word (token), stopping at the first space or newline.
        // Ignores the rest of the line.

        // The code below creates a Scanner object named  and uses it to read a String and an int. It then closes the Scanner object because there is no more input to read, and prints to stdout using System.out.println(String).
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter String: ");
        String myString = scanner.nextLine();

        System.out.print("Enter Int: ");
        int myInt = scanner.nextInt();

        // Closing the scanner up her will throw an exception when we try to open Stream in the BufferReader code
        // scanner.close();

        System.out.println("myString is: " + myString);
        System.out.println("myInt is: " + myInt);


        // Alternatively, you can use the BufferedReader class instead of Scanner
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Buffereader Enter your name: ");
        String name = reader.readLine();
        
        System.out.println("Hello, " + name + "!");
        
        scanner.close();
        reader.close();
    

        // Since we have closed the stream up there, an exception will be thrown when we try to run the code below
        // Scanner scan = new Scanner(System.in);
        // System.out.print("Enter a number: ");
        // int a = scan.nextInt();
        // // Complete this line
        // // Complete this line
        // scan.close();

        // System.out.println("You entered: " + a);
        // // Complete this line
        // // Complete this line
    }
    
}
