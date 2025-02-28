"""
    Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows:

    If i is a multiple of both 3 and 5, print FizzBuzz.
    If i is a multiple of 3 (but not 5), print Fizz.
    If i is a multiple of 5 (but not 3), print Buzz.
    If i is not a multiple of 3 or 5, print the value of i.

    Prints:
    The function must print the appropriate response for each value i in the set {1, 2, ..., n} in order, each on a new line.
"""

'''
Multi Line Comment
'''
"""
Multi line comment
"""
# Single line comment


# With while loop
# Indentation matter in Python
n = int(15)     # Specify data type. You can also do type casting like this
i = 1

# or
# Assignment below and assignment above to the same thing
n, i, pi = (15, 1, 3.14159)

while i <= n:
 if i % 3 == 0 and i % 5 == 0:
    print('While => FizzBuzz')
 elif i % 3 == 0:
            print("While => Fizz")
 elif(i % 5 == 0):
            print("While => Buzz")
 else:
    print(f"While => {i}")       # f-strings, also known as formatted string literals.
                                 # An f-string is a string prefixed with f or F, allowing you to embed expressions inside curly braces {}.
                                 # Mathematical Expressions Inside f-strings ...  print(f"Sum: {i + n}") ==> Output is  ...  Sum: 16
                                 # Formatting Numbers   ... print(f"Pi rounded to 2 decimal places: {pi:.2f}")  ==> Output is  ...  Pi rounded to 2 decimal places: 3.14
                                 # Check below how to call a function from print with f-string
 i+=1                            # Increment needs to be indented inside the while loop to work




# With for loop
for j in range(1, n):
    if j % 3 == 0 and j % 5 == 0:
        print("For => FizzBuzz")
    elif j % 3 == 0:
        print("For => Fizz")
    elif j % 5 == 0:
        print("For => Buzz")
    else:
        print(f"For => {j}")

# Functions are declared using the key word def
def FizzBuzz(argN):
     for f in range(1, argN + 1):
        if f % 3 == 0 and f % 5 == 0:
            print("Funk => FizzBuzz")
        elif f % 3 == 0:
            print("Funk => Fizz")
        elif f % 5 == 0:
            print("Funk => Buzz")
        else:
            print(f"Funk => {f}")

# Function call and input arg
FizzBuzz(15);

# Calling a function from print with f-string
def SquareFunk(intVal):
     return intVal * intVal

print(f"Calling function from print with f-string is: {SquareFunk(5)}")


# Access modifiers in Python
"""
==> Access Modifier	Syntax and Access Level
- Public variable Accessible from anywhere
- Protected _variable Accessible within class and subclasses (convention)
- Private	__variable Not directly accessible (name mangling applies)
"""

# OOP
class FizzBuzzClass:
    # Method of the class
    # self is a reference to the current instance of a class. It must be the first parameter of any instance method in a class.
    # Snake case (fizz_buzz_funk) follows Python naming conventions.
    def fizz_buzz_funk(self, argN):
        for j in range(1, argN + 1):
            if j % 3 == 0 and j % 5 == 0:
                print("Class Funk => FizzBuzz")
            elif j % 3 == 0:
                print("Class Funk => Fizz")
            elif j % 5 == 0:
                print("Class Funk => Buzz")
            else:
                print(f"Class Funk => {j}")

# Create an object and call the method
fizz_buzz_obj = FizzBuzzClass()
fizz_buzz_obj.fizz_buzz_funk(15)
