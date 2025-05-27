import random

print("Random numbers guessing game")

# Generate a random number between 1 and 100
accurate_Realnumber = random.randint(1, 100)
trials = 0
trialsLimit = 3

print(f"{accurate_Realnumber} Haha {trialsLimit}")

"""
while trials < trialsLimit:
    try:
        players_trial = int(input("Enter a random number (1-100): "))
    except ValueError:
        print("Please enter a valid integer.")
        continue

    if players_trial <= 30:
        print("The entered number is too small. Try again.")
    elif 31 <= players_trial <= 60:
        print("You win!")
        break
    elif 61 <= players_trial <= 100:
        print("The entered number is too large. Try again.")
    else:
        print("Invalid number. The entered number is out of range.")

    trials += 1

if trials == trialsLimit:
    print("Failed. You have reached the maximum number of trials.")

"""
