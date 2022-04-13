<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Code Challenges JS</h3>

  <br /><br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A few small projects to work on conding skills

### Built With

* [ExpressJS](https://getbootstrap.com)
* [Playwright](https://jquery.com)

---
<!-- GETTING STARTED -->
## Getting Started
<br />

### Prerequisites

NodeJS is needed to run this project. Installing NodeJS will install NPM. If you need to update NPM you can run the following command.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone //TODO: add URL
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the app
   ```JS
   npm start
   ```


---
<!-- USAGE EXAMPLES -->
## Usage
To verify everything is working use the following url

[http://localhost:3000/hello?name=YourName](http://localhost:3000/hello?name=YourName)


### Challenge 1
With the app running go to [http://localhost:3000/simpleMath](http://localhost:3000/simpleMath)


### Challenge 2
Continue from where you left off on challenge one and do the following:
Add another operation so if the operation parameter is ‘D' or 'd', then return operandOne / operandTwo and return the result.
Note:  When you divide integers you end up losing numbers after the decimal place.  So if you divide 10 by 2, you will get 5.  If you divide 5 by 10, and your variable types are integer, you will get zero.  Well we know the answer if 0.5, so to get 0.5 we need to use the float data type instead of integer.  Modify the signature of the end point to take in operandOne and operandTwo as floats, and return a float.  
 
Try it both ways, as int and float, and you will see the two different results, and one that you expect.
 
You are getting exposure to how variable types matter, and how they interact with basic operations, and how those interactions can be different based on data type.


### Challenge 3
Let’s introduce you to another operator: % (MOD).  The % operator divides the operandOne by operandTwo and gives you the remainder.
So let’s add this to the simpleMath method and add an operation of ‘R' or 'r’ for remainder and use the % operator.
So if I use 15 as the value for operandOne and 4 as the value for operandTwo the method should return 3.



### Challenge 4
You’ll find the near empty method for magic8Ball in Magic8BallController.cs
Running the solution in this state works and it will return the message “My Magic 8 Ball is Broken. :( -- Sadness...”
What we want to do is generate a random number and return one of 8 random messages.
Notice the return type for the method is String.  This is the most common data type for working with text.



### Challenge 5
So, my solutions so far have kind of been not necessarily following some best practice.  The Magic 8 Ball had a long method, and everything was done in the controller.  
Often we will want to use other classes to do certain scopes of work, or store data  or properties related to an object.  In this challenge, we need to create a class called PrimeFactors.cs.  In the solution I’ve added it to the folder MathHelpers.  In it I’ve created a public method that accepts an integer.  We need to add code to the method that will find all of the prime factors for the integer and return a string that represents all of the factors with a “x” between the primes so it looks like a math problem, with an equals “=” symbol and then the number that was passed in.
For example, if I pass in 6 the output should be 2 x 3 = 6.
If I pass in 13 the output should be 13 = 13.
If I pass in 16 the output should be 2 x 2 x 2 x 2 = 16.
 
In addition to classes, this is a good time to introduce the concept of unit testing.  The best way to solve this problem is to use unit tests.  
 
If you open the TestCoreAPITests you will find the file PrimeFactorTests.cs.  If you right click on the “[Test]” text it should run and you will end up with a green check stating that the test passed.
If you look in the file PrimeFactors.cs you will see two methods.  One method takes the number you are passing in and assembles a List<int>.  This is a list of integers.  Think of a train.  These train cars can hold one number.  If you want to add another car to the train to hold a number, you add one more.  Together they become a train of increasing length each time you add another number.  That’s what we are doing here.  The code here creates the variable of type List<int> called primeFactors.  We can then add numbers to this list.  We can only add integers.  We can’t add floats, or Strings.  Only integers.
The core of this challenge will be here, in this method.  We have to write code that will take any number and return it’s prime factors.  Right now this only returns the same number we pass in.  
Right now if you created another test called PrimesOf2, and changed the target to “2 = 2”, it would pass, because 2 is the prime factor of 2.  We would get the same for 3.  But that’s where the GetPrimeFactors method end working. 
If we do another test called PrimesOf4 and change the target to “2 x 2 = 4”, the method as it is returns “4 = 4” so our test would fail.
So we need to modify GetPrimeFactors to get the primes for 4 without breaking all the tests.
Also, the GetPrimeFactorsAsEquation method should be complete.  It’s there to translate the List<int> into the text output.  
I also added unit tests for numbers 1 - 17.  You should try adding 18 - 21.  And a few large numbers.
We’ve taken up the complexity with this challenge so it’s going to take some time.  If you get stuck, Google Prime Factors Kata.  You’ll find some videos that can help.  Or ask your peers, or myself of course.

---
<!-- ROADMAP -->
## Roadmap

More to come...

---
<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.