//REMEMBER THE PRIMITIVE DATE TYPES IN JAVASRCRIPT
//Number
//String
//Boolean
//Null
//Undefined
//Symbol
//bigInt
//-------------------------------------------------------------

//Numbers
//Javascript has ONE number type
//Positive numbers
//negative numbers
//whole numbers(integers)
//decimal numbers(floats)

//REMEMBER TO FOLLOW PEMDAS

let a = 1; // gives a the value of 1

let b = 2; // gives b the value of 2

let c = 43.56; // gives c the value of 43.56

let negativeNumber = -5; // gives negativeNumber the value of -5

//Simple operations with numbers

let additionExample = 50 + 5; // 55

let subtractionExample = 40 - 10; // 30

let multiplicationExample = 3 * 5; // 15

let divisionExample = 400 / 25; // 16

//modulo aka remainder 
let moduloExample = 12 % 5; // 2

let exponentExample = 2**3; // 8 
//x to the power of x (insert values into x placeholder)

//PEMDAS

let pemdasExample = 3 - 9 * 2; // -15
// 9 * 2 executes first then 3 -18 = -15

//-----------------------------------------------------------

//numbers cont:

//NaN and Infinity 

//NaN stands for NotaNumber, but indeed a 'number'
//its a numeric value that represents something that is not... a number

let notANumberExample1 = 0/0; // NaN because 0 cant be / by 0

let notANumberExample2 = 1 + NaN // 1 + NaN is is still not a number

//infinity can be postiive or negative 
//since infinity cant be stored as a number as the numbers are infinite
//javascript stores the value in Infinity
//0 and -0 are both numbers as well
//NaN isnt always a bad thing. sometimes youre expecting NaN as a result
//to confirm that the result is or is not a number.

let infinityExample = 1/0; // Infinity 

let negInfinityExample = -1/0 // -Infinity

// let enterNumber = a number
// if random number === NaN (meaning user didnt input a number)
// then prompt user with " please enter a number to start the game"

//numbers quiz

let question1 = 1.5 + 1.5 * 2; // 4.5
// 2 * 1.5 = 3.0 + 1.5 = 4.5

let question2 = (10 % 6) ** 2; // 16 
// 6 remainder of 10 = 4 to the power of 4 = 16

let question3 = 200 + 0/0; // NaN 
// 0/0 = NaN + 200 (NaN + a number is still not a number) = NaN


//------------------------------------------------------------

//Variables
//are like "labeled jars" for a value in javascript
//variables can be initialized with:
// let (general usage for a variable that may or may not change)
// const (general usage for a variable that will NEVER change)
// var (out dated replaced by let)
//variables are useful to store data in a name so that we can 
// recall it later
// use it 
// change it

//                             syntax

//                  let variableNameHere = value;
//                  const variableNameHere = value;
//                  var variableNameHere = value;

//for variable naming remember the reserved words, rules and naming practices
//                      hint: useCamelCase 

//ive declared numerous varibles up top already using let and const
//remember you can not declare variables with the same name
let myRealAge = 25;
console.log(myRealAge) // 25

let fish = 'nemo';
console.log(fish); // 'nemo'

const daysOfTheWeek = 7;
console.log(daysOfTheWeek) // 7 

const daysInAYear = 365; 
console.log(daysInAYear) // 365

let dogs = 10;
let cats = 5;
console.log(dogs);
console.log(dogs + cats); // 15

let numExample1 = 5;
console.log(numExample1); // 5

console.log(numExample1 + 3); // 8
console.log(numExample1); // 5

let numExample2 = 13;
numExample2 = numExample2++; // 14
console.log(numExample2); // 13

let numExample3 = numExample1 + numExample2;
console.log(numExample3); // 18
// numExample3 = numExample1 which is 5 + numExample2 which is 13 = 18 


//in the console you can change a variable like this 
// age = 25
// age = 26

//----------------------------------------------------------------------------

//Unary Operators

// += operator: adds the given value to the variable (here we used 1)
let newScore = 0;
console.log(newScore +=1); // 1
console.log(newScore);
// in the console just type score += 1;
console.log(newScore +=10); // 11
console.log(newScore); // 11

// -= operator: subtracts the given value to the variable
let minusScore = 0;
console.log(minusScore += 1); // 1
console.log(minusScore -= 1); // 0
console.log(minusScore); // 0

/* *= operand: multiples */
let baseScore = 5;
let bonusMultiplier = 3;
console.log(baseScore *= bonusMultiplier); // 15
console.log(baseScore) // 15 

/* come back to this I can only get it to work in the console
// ++ increments by one

let newGameScore = 0;
let incrementedNumber = newGameScore++;
console.log(incrementedNumber); 
*/

//----------------------------------------------------------------------------

//Boolean

// true or false values. thats it
// boolean comes in handy when we use logic and write logic in Javascript
// keep in mind booleans dont use quotes. "true" and "false" are strings
// NOT boolean values

let isLoggedOn = true; // true
let gameOver = false; // false
const isWaterWet = true; // true

let boolAge = 30;
    if (boolAge === 30) {
        console.log(true); // true
        {
            if (boolAge !== 30) { /* !== means IS NOT EQUAL TO */
                console.log(false) // doesnt execute cuz age IS = to 30
        };
    };
};

//variables can change types:
//ex: they can go from a string to a boolean. a number to a boolean a boolean
//to a string etc...

let numOfDouts = 12; // 12 (number type)
//in console: numOfDonuts = false; // false (boolean type)

// in a lot of other languages you cant change a variables type 
// just because you can doesnt mean you should. 
// above is just an example of how you can (in console)






















//string template literal practice
//string template literals always start with a backtick and the 
//template literal goes in between ${}
let username = 'dableb';
console.log(`Welcome back, ${username}!`);

const minAge = 21;
let yourAge = 19;
console.log(`you must be ${minAge} to enter. Please come back in ${minAge - yourAge} years`)


//some Math.method() examples 

//Math.random() always gives you a decimal between 0.000 repeating
//and 1 so its necessary to multiply it by 10 to get a whole number
//then in order to get rid of the deciamls you just 'floor' it
const step1 = Math.random();
console.log(step1);

const step2 = step1 *10;
console.log(step2);

const step3 = Math.floor(step2);
console.log(step3);

const step4 = step3 +1;
console.log(step4);
//the four steps above are the same as the line below
//the floor gives you the value without the deciaml points
//then you get a random number with deciamls that floor removes
//then you multiply it by 10 to get a whole number
//then you add one because computer does 0-9 rng cuz index
const randomNumberGenerator = Math.floor(Math.random() * 10) +1;
console.log(randomNumberGenerator);

//random roll of dice

let diceRoll = Math.floor(Math.random() *6) +1;
console.log(diceRoll);


