# The Module Pattern

The module pattern gives us a way to have private and public methods and variables within an object. This reduces the probability of functions and variables with conflicting names. The Module pattern provides privacy via closure.

## Advantages

Easy to read.
Supports private Advantage

## Disadvantages

Access public and private data differently
  If you want to change visibility, you have to make changes everywhere the member waws used

Can't access private member in methods that have been added outside of scope

Can't create automated unit test for private members
