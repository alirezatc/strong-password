# strong-password
A simple method that takes a password and checks if it is strong.

The function takes a string as the argument and checks to see whether it meets 5 criteria
Its length is at least.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+

Here's the set of types of characters in a form:
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"


The output of the method is the least number of characters that needs to be added to satisfy the password.
In JavaScript it is best to write this method with Regular Expression. However, the purpose of this method is not to use RegEx.
This code is answer of one of the Hackerranks problems.

