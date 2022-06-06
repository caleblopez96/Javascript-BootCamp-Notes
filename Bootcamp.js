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

let notANumberExample2 = 1 + NaN; // 1 + NaN is is still not a number

//infinity can be postiive or negative 
//since infinity cant be stored as a number as the numbers are infinite
//javascript stores the value in Infinity
//0 and -0 are both numbers as well
//NaN isnt always a bad thing. sometimes youre expecting NaN as a result
//to confirm that the result is or is not a number.

let infinityExample = 1/0; // Infinity 

let negInfinityExample = -1/0; // -Infinity

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
console.log(myRealAge); // 25

let fish = 'nemo';
console.log(fish); // 'nemo'

const daysOfTheWeek = 7;
console.log(daysOfTheWeek); // 7 

const daysInAYear = 365; 
console.log(daysInAYear); // 365

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
for (let j = 5; j <= 30; j += 5) {
    console.log( 'the +=5 adds 5 to the current value of i. think of it as i=i+5', + j); // logs string to the console 6 times
};

/* *= operand: multiples */
let baseScore = 5;
let bonusMultiplier = 3;
console.log(baseScore *= bonusMultiplier); // 15
console.log(baseScore); // 15 

/* come back to this I can only get it to work in the console
++ increments by one

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

//-----------------------------------------------------------------------------

//Strings

//Strings are pieces of text, or strings of characters
//strings are always wrapped in quotes i.e: 'imAString'
//Single or double quotes work, but be consistent
//if you start with a single quote and dont end with a single quote the 
//string technically doesnt end, so open the string and close the string with
//the same set of quotation marks

let stringExample1 = 'i am a string :)';
console.log(stringExample1); // i am a string :)

let msg = "Please do not feed the 'animals'!";
console.log(msg); // Please do not feed the 'animals'!

//string concatenation
//adding two strings together to make one string

let stringFirstName = 'Caleb ';
let stringLastName = 'Lopez';
console.log(stringFirstName + stringLastName); // 'Caleb Lopez'

let stringConcat = "I love ";
let stringConcat2 = "Javascript";
console.log(stringConcat + stringConcat2); // "I love Javascript" 
console.log(`${stringConcat + stringConcat2}`); // I love javascript
//use the string template literal method seen above in order to concatenate strings

// in the last word of your string, include a space if you want it to concatenate them with a string. notice above "i love ". the love has a space after it so that when javascripts concatenates them we get 2 separate words instead of two seperate words merged to one





// String Indices
// strings are indexed by characters
// each character is assigned its own numbers based off position in string
//left to right starting at 0

//example:
//                  C H I C K E N
//                  0 1 2 3 4 5 6

//Strings come with properties 

//.length property gives you the length in characters of the string

let hello = 'hello';
console.log(hello.length); // 5 ('hello' has 5 characters)
//note every character including spacing and periods etc are a character

let mySong = "Surfin' USA";
console.log(mySong.length); // 11

//how to access individual characters by their indices
console.log(mySong[0]); // S
console.log(mySong[3]); // f
console.log(mySong[12]); //undefined (there is no character at index 12
//so technically its undefined)

//since strings are indexed and the .length is not, if you need to find the 
//last character of a long string you can do it like this
let gibberish = 'alkdjflkasjdfij;ls0  dkdjso 4';
console.log(gibberish[gibberish.length - 1]); // 4

//----------------------------------------------------------------------------

//String Methods 
//Strings come with a set of built-in methods, which are actions that can be
//performed on or with that particular string
//we can do things like 
// searching within a string
// replacing parts of a string
// changing case (upper/lowercase)

//syntax for string methods
//                          string.method();

//toUpperCase() / toLowerCase()

let lowerToUpper = 'lower cased to upper case'
console.log(lowerToUpper.toUpperCase()); // LOWER CASE TO UPPER CASE

let upperToLower = 'UPPER CASE TO LOWER CASE';
console.log(upperToLower.toLowerCase()); // upper case to lower case

let newMsg = 'welcome to my website';
console.log(newMsg.toUpperCase()); // WELCOME TO MY WEBSITE

// below im getting my variable newMsg after its been upper cased, 
// and assigning it to a new variable called yell. then calling yell which
// gives me the value of newMsg uppercased printed to the console.

let yell = newMsg.toUpperCase(); 
console.log(yell); // WELCOME TO MY WEBSITE

// DONT FORGET THE PARENTHESIS AFTER .toUpperCase/.toLowerCase


// .trim()
// trims the extra white space preceeding and following the string
// trim will NOT remove white space between words, no matter how much 
// space is present. it only removes the white space before and 
// after the string, not anything in the middle

let trimMe = "      get rid of the white space please      ";
console.log(trimMe.trim()); //get rid of the white space please//
// (with no white space)


//using two methods on one string executes the first method listed, then 
//proceeds to other methods if there are any
let trimToUpper = trimMe.trim().toUpperCase();
console.log(trimToUpper); //GET RID OF THE WHITE SPACE PLEASE//


// some methods require arguments to be passed to it. arguments are essentially
// extra values needed to complete the method
// these arguments are passed into the method via the parenthesis

// syntax
//                      thing.method(arguments)

//.indexOf
// basically gives you the index of something
// in the examples below we're finding the index of a string within in a string
// aka a substring

let tvShow = 'catdog';
console.log(tvShow.indexOf('cat')); // 0 (cat starts at index 0)
console.log(tvShow.indexOf('dog')); // 3 (dog starts at index 3)
console.log(tvShow.indexOf('z')); // -1 (the 'not found' value)

let sport = 'baseball';
console.log(sport.indexOf('ball')); // 4 (ball starts at indec 4)

// if indexOf something is = -1 then you know its not there. this is used 
// when writing logic to see if the thing youre looking for is there


//.slice()
// slice takes 'slices' of an exisiting string and gives you pieces 
//                       thing.slice(start, end)
//first value passed to slice is where it starts and the last value is where it
// ends. note if no ending value is given

let longStr = 'supercalifragilisticexpialidocious';
console.log(longStr.slice(0,5)); // 'super'
// the console logs 'super' because of the values 0, and 5 that were passed
// to the method. 
// it starts at index 0 and ends at index 5 but stops at 5 and returns
// everything before it
console.log(longStr.slice(5)); // califragilisticexpialidocious

let superhero = 'spiderman';
console.log(superhero.slice(0,6)); // spider
console.log(superhero.slice(6)); // man
console.log(superhero.slice(7,9)); // an
console.log(superhero.slice(1,3)); // pi


console.log(sport.slice(4)); // ball(starts at index 4 & goes to end of string)

console.log(sport.slice(40)); // '' theres nothing at index 40 so it returns 
//nothing;

let shortStr = (sport.slice(5));
let sliced = shortStr;
console.log(sliced); // all
// the variable sliced is now equal to 'all'

let savings = '$50.60';
console.log(savings.slice(1)); // 50.60 (slices the dollar sign)
//this is a common use case when you have data that follows a pattern and
//youre trying to isolate a certain protion of it


// .replace()
// replaces a value with another value 

//if the values passed in are not found, it just wont replace anything.


let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh.replace('teehee', 'haha')); // haha so funny! teehee!
//replaces teehee with haha
//notice it only replaces the first instance of teehee
// replace(this, with this)
console.log(sport.replace('ball','bull')); // basebull
console.log(sport);
// This does not change the value of the variable

//                           string quiz

// const age = "5" + "4"
//console.log(age) // "54" (it concatenates strings)

//let pecanPie = "pecan pie";
//console.log(pecanPie [7]); // i (i is in index position 7)

//let pup = 'pup';
//console.log(pup[3]); // undefined (there is no letter at index 3 in variable 
//pup)

//let song = 'london calling';
//console.log(song.toUpperCase()); // LONDON CALLING (.toUpperCase() does not 
//require a value to be given inside the parenthesis)

//let userEmail = '   CALEBLOPEZ96@gmail.com          ';
//console.log(userEmail.trim().toLowerCase()); // caleblopez96@gmail.com (trims //the white space and the lowercases everything)

//let park = 'yellowstone';
//const parkIndex = park.indexOf('stone');
//console.log(parkIndex); // 6

let yelling = 'GO AWAY!!';
let yellingIndex = yelling.indexOf('!');
console.log(yellingIndex); // 7

let trash = 'GARBAGE';
console.log(trash.toLowerCase().slice(2).replace('b', '')); // rage
// the case sensitivity of 'b' matters. due to using the method .toLowerCase,
//i had to make the replace method look for a lower case b even tho the 
// original variable of GARBAGE had a capital B.


// String Escapes (aka escape characters, escape notation, escape sequence etc)
// they allow you to use other wise illegal or functional (/,-) characters
// so javascript wont recognize them

// 'he said 'lalal'' // this is invalid because we used single quotes twice 
// in a string javascript intrerprets it as 'he said 'lalal ''
//                               he said with a space lalal then empty quotes
// the simple solution is to do this "he said 'lalala'"// this is valid

// \n - is a new line
// \' - single quote
// \" - double quote
// \\ - backslash


//single quote escape
let saying = 'he said he ain\'t happy';
console.log(saying); // he said he ain't happy
// the \' allowed me to use a single quote inside a single quote because
// it told javascript to ignore it


//double quote escape
let sayingTwo = "he said \"he aint happy\"";
console.log(sayingTwo); // he said "he aint happy"

//new line escape
let sayingThree = 'he said\nthis is a new line';
console.log(sayingThree); // he said
//                           this is a new line

//backslash example
let sayingFour = 'he said this \\ is a backslash';
console.log(sayingFour);


//-----------------------------------------------------------------------------

//string template literals `${}`
//template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
//special strings that take in information expressions, other variables, data etc, and spit out one value at the end
//data is being interpolated inside the string
// syntax:
//                              `${}` 
//(back ticks, dollar sign, open/close curly braces)
// `i am a template literal` (cuz the backticks) 

// not supported in internet explorer

let numSheep = 3 + 4;
console.log(`I counted ${numSheep} sheep`); // I counted 7 sheep 

let username = 'dableb';
console.log(`Welcome back, ${username}!`);

let endGameMsg = `GAME OVER ${username.toUpperCase()}.\nTRY AGAIN?`;
console.log(endGameMsg); // GAME OVER DABLEB.
//                          TRY AGAIN?

let item = 'cucumbers';
let price = 1.50;
let quantity = 4;
console.log(`You bought ${quantity} ${item}, total price: $${price * quantity}`);
// price * quantity has 2 dollar signs because once the data is interpolated
// and returned as a string, I still want a dollar sign there to represent
// that the price is in dollars

let elapsedTime = 3;
// let username = 'dableb' (commented out because already declared this var)
console.log(`posted ${elapsedTime} minutes ago by ${username}`); 
// posted 3 minutes ago by dableb

const minAge = 21;
let yourAge = 19;
console.log(`you must be ${minAge} to enter. Please come back in ${minAge - yourAge} years`);


// Null and Undefined
// both represent the idea of nothingness, or the lack of a value, but 
// theyre different
// one of the main differences is we dont normally set values to undefined. // you can, but we dont usually do it. normally undefined is a line we get 
// back from Javascript telling us a that the var refrenced is undefined

//null - "intentional absence of any value"
//  null must be assigned
let nothing = null;
console.log(nothing); // null

// pretend no one is logged in
let loggedInUser = null;
// a user logs in, the variable is given a value & it no longer is undefined
loggedInUser = 'Alan Rickman'; // null is now assinged 'alan rickman'
console.log(`Welcome Back ${loggedInUser}!`); // Alan Rickman


// undefined - variables that do not have an assigned value are undefined

let nothingness;
console.log(nothingness); // undefined 
// when i declared the variable nothingness i didnt intialize a value
// so its currently undefined. i havent defined a value for the variable yet

let unLaugh = 'lol';
console.log(unLaugh[5]); // undefined (there is no character at index 5)



//Math Object
//just a collection of math functionality
//contains properties and methods for mathematical constants and fucntions
//most the time you use the math object it will be for its methods like
//rounding or finding absolute value or generating a random number

//syntax
//                          Math.method()
// the M is capital ALWAYS

//Math.PI
//representation of pi
let pi = Math.PI; 
console.log(pi); // 3.141592653589793

let pi3 = 3 + Math.PI; // ads the value of 3 to pi
console.log(pi3); // 6.141592653589793

//Math.round()
//rounds your number up or down to the nearest whole number
let floatNumber = 4.5;
console.log(Math.round(floatNumber)); // 5

let floatNumber2 = 3.2;
console.log(Math.round(floatNumber2)); // 3

//Math.abs()
//gives you absolute value of number
//always returns a positive number
//good way to turn a negative number positive
let absNum = -456;
console.log(Math.abs(absNum)); // 456

//Math.pow()
//raises to the power of 
//aka exponent
//the two values passed in are seperated by a comma
let powerOf = 6;
console.log(Math.pow(powerOf, 2)); // 36 (6 to the power of 2)

let powerOfTwo = 2;
console.log(Math.pow(powerOfTwo, 4)); // 16

//Math.floor()
//Removes the decimal points from the number
//floor doesnt round, it just removes all the decimal numbers

let floatNumber3 = 34.560865;
console.log(Math.floor(floatNumber3)); // 34

let floatNumber4 = 99.99;
console.log(Math.floor(floatNumber4)); // 99

//Math.random() always gives you a random decimal between 0-1 
//(non-inclusive) so its necessary to multiply it by 10 to get a whole 
//number
//then in order to get rid of the deciamls you just 'floor' it

// start with Math.random() to get a decimal number
const step1 = Math.random();
console.log(step1);

//multiply it by 10 to get a whole number with deciaml points
const step2 = step1 *10;
console.log(step2);

//Math.floor the previous step to remove the decimal numbers
const step3 = Math.floor(step2);
console.log(step3);

//add one to the previous step because indexs start at 0 and we want 1-10 
//not 0-9
const step4 = step3 +1;
console.log(step4); // random number between 1-10
//the four steps above are the same as the line below

const randomNumberGenerator = Math.floor(Math.random() * 10) +1;
console.log(randomNumberGenerator); // random number between 1-10

let diceRoll = Math.floor(Math.random() *6) +1;
console.log(diceRoll); // random number between 1-6


//typeof !not camelCase! and does not require parthensis with values
//its an operator like the + or - or / sign.
//typeof operator is used to determine the type of a given value ie. number,
//string, boolean etc
//tells you what type of data something is

let str5 = 'string :)';
console.log(typeof str5); // string

let floatNumber5 = 4.7;
console.log(typeof floatNumber5); // number

let boolean2 = true;
console.log(typeof boolean2); // boolean

//typeof undefined returns undefined
//typeof null returns object (weird quirk)



//parseInt & parseFloat
//extracts a number from a string and turns it into a number as long as the first character of the string is a valid digit

//form data comes as a string. this is one way to extract the numbers to use
//them mathematically or just to store as a number

// parseInt extracts a whole number from the string its in and makes
//it a number (of the number type)
// this comes in handy when a user inputs a number and its receveied as
// a string
// mathmatical operators only concatenate strings. so if you need to perform
// a calculation on a number but its a string, use parseInt to extract the 
// number from the string
let num24 = '24';
console.log(parseInt(num24)); // 24

console.log(parseInt(num24) - 1); // 23

let num25 = '25.975';
console.log(parseInt(num25)); // 25

let example4 = '28 days later';
console.log(parseInt(example4)); // 28

//parseFloat does everything parseInt does, except it returns the number 
//as a float(with all decimal numbers)

let floatNumber6 = '23.456';
console.log(parseFloat(floatNumber6)); //23.456

//if the number is a whole number it will just display the whole number
let floatNumber7 = '7';
console.log(parseFloat(floatNumber7)); // 7

//first character of the string is not a digit so the result is NaN
let sayingFive = 'i ate 3 shrimp';
console.log(parseFloat(sayingFive)); // NaN



//---------------------------------------------------------------------------
//Making decisions with logic


//Comparison Operators
//allows you to compare values in order to make decisions

// > - greater than 

// < - less than

// >= - greater than or equal to

// <= - less than or equal to 

// == - equality 

// != - not equal / dont use this unless you HAVE to

// === - strict equality

// !== strict non-equality


// 10 > 1 // true
// 0.2 > 0.3 // false
// -10 < 0 // true
// 50.5 < 5 // false
// 0.5 <= 0.5 // true
// 99 >= 4 // true
// 99 >= 99 // true
// 'a' < 'b' // true
// 'A' > 'a' // true 

// these comparison operators will always return a boolean: true or false

// though its uncommon, you can compare strings. Just be careful, things
// get dicey when dealing with case, special characters and accents

// these operators can be used to make decisions in order to change the code
// thats being read 

let message1 = 'hello';
let message2 = 'hello!';
console.log(message1.length >= message2.length); // false
//hello! has greater length in characters than hello so message1 is not
//greater than or equal to hello! its 1 character less making it false

//----------------------------------------------------------------------------

// == (double equals) vs === (tripple equals)

// == (double equals)
//Checks for equality of value, but not equality of type. 
//it coerces (converts) both values to the same type and then compares them
//(like boolean or number or string).
//using == will usually give you unexpected results due to type coercion, so
//its best to not use it
//DONT USE THIS UNLESS YOU HAVE TO (which should be around 1% of the time)


/* to the console:
5==5; // true
'b' == 'c' // false
7 == '7'; // true
0 == ''; // true
true == false; // false 
0 == false; // true
null == undefined; // true
*/


// === (tripple equals)
//checks for equality of value AND type (boolean number string etc..)
//you 99% of the time use === because you need the performed operation to
//to ensure that its checking not only equality of value, but equality of 
//type as well.
//using == will usually give you unexpected results due to type coercion, so
//its best to not use it

//to the console:
// 2 === '2'; // false (=== checks for the same value and same type like number to number)

// BUT

// 2=='2'; // true (== converts one of the values so that both values are the same type) 

// note these difference as well :

// 0 == false; // true
// 0 === false; // false (same value but not the same type so false)

// undefined == null; // true
// undefined === null; // false
// 3===3; // true
// null === null // true

let numberExample3 = 5;
console.log(numberExample3 === 5); // true
console.log(numberExample3 === 20); // false

let stringExample2 = 'is logged in';
console.log(stringExample2 === 'is logged in'); // true

let logInStatus = false;
console.log(logInStatus === true); // false
console.log(logInStatus === false); // true


// non equality vs strict non equality

// != vs !==
// These are the exact same as the examples above, they just are checking


/* console logged:
10 != '10';  // false
10 !== '10' // true
*/

// != - not equal to
// checks to see if the value is NOt equal using type coercion

// !== -strict inequality
// checks to see if the value is NOT equal NOT using type coercion

console.log(logInStatus !== false); // false (log in status IS set to false)
console.log(logInStatus !== true); // true (is NOT equal to true so is true)

let logInStatus2 = true;
console.log(logInStatus !== logInStatus2); // true (one is false other true)
console.log(logInStatus === logInStatus2); // false
console.log(logInStatus !== true); // true

let num10 = 10;
console.log(num10 === 10); // true
console.log(num10 !== 10); // false
console.log(num10 === '10'); // false
console.log(num10 !== '10'); // true

// its a good rule of thumb to NEVER use == and !=


//----------------------------------------------------------------------------

//conditional statement - making decisions with code
// conditional statments can have an:


/* IF - Run code if a given condition is true */

/* ELSE IF - if not the first thing, then maybe this other thing */

/* ELSE - if nothing else was true, do this */



//if statements
// run certain code 'if' a given condition is true
//syntax:
/*              
                if () {
                
                }
*/

let newRating = 3;

// if newRating is equal to 3 console.log the string
if (newRating === 3) {
    console.log('you are a superstar!'); // you are a superstar
};

// newRating is greater than or equal to 3 console.log the string
if (newRating >= 3) {
    console.log('you exceed expectations'); // 'you exceed expectations'
};

// if newRating is less than or equal to 3 console.log the string
if (newRating <= 3) {
    console.log('you dont meet expectations') // nothing runs in console
};                                            // cuz statement is not true

// if newRating is less than 4 console.log the variable badRatingMsg
let badRatingMsg = 'you didnt quite make it to 4'
if (newRating < 4) {
    console.log(badRatingMsg) // you didnt quite make it to 4
};

// if 1 is equal to 1 console.log the string
if (1===1) {
    console.log('its true!') // its true!
};

// if 5 is not equal to 10 console.log the string
if (5!== 10) {
    console.log('5 is not equal to 10.'); // 5 is not equal to 10.
};

//checking if a number is false
let num37 = 37;

// if a number can go in even there will be no remainder
// so if modulus is equal to 0 then its an equal number
// if modulus as a remainder its an odd number
// if 37 is not equal to 0 meaning it has a remainder 
// then it has to be an odd number
// so 2 can go into 37 18 times with 1 remainder so 37 is odd
if (num37 % 2 !== 0) {
    console.log('odd number'); // odd number
};



/*

if (3===5) {
    console.log('not true'); // doesnt log to console cuz not true
}

this 'if' statement will not run because the code executed inside the
parenthesis is not true. the condition must be true in order to run the
if statement in order to make this work you could do: 

if (3!==5) {
    console.log('not true'); // 'not true'
}
*/

/* console logged examples 
10 > 1; // true
0.2 > 0.3; // false
-10 < 0; // true
50.5 < 5; // false
0.5 <= 0.5; // true
99 >= 4; // true
99 >= 99; // true
'a' < 'b'; // true
'A' > 'a'; // false
*/

/* though its uncommon, you can compare strings. Just be careful,
things get dicey when dealing with character case, special characters
and accents. */




// else if 
// if the 'if' statement is false, then the 'else if' statement will run 

//syntax:

/*

if () {
    console.log()
}
else if () {
    console.log();
}

replace the 'console.log' with the code that needs to be executed
*/

// if newRating1's value is true execute that code, else if do the next
let newRating1 = 0;

// if newRating1 is greater than or equal to 3 run the 'if' statement
// if its false, then run the 'else if' statement
if (newRating1 >= 3) {
    console.log('you exceed expectations'); // not true doesnt run
}
else if (newRating1 === 1, newRating1 === 2) {
    console.log('meets expectations'); // not true doesnt run
}
else if (newRating1 === 0) {
    console.log('not enough reviews to generate rating'); // not enough reviews to generate rating
                                                        // the two prior statements were false
                                                        // this one is true, so it gets logged
};




// else 

// think of it as 'otherwise'
// runs if nothing else before it is true.
// no conditions are needed because the conditions are already set as in if the code above is not 
// executed, then the else is ran.
// it wont work if there is not an initial 'if' statement.
// else does not require parenthesis like 'if' and 'else if' because we dont set the condition
// else to operate. the condition is 'else' only operates if no other lines of code above it
// are executed
// you can only have one 'else' per 'if' statement
// else is used as kind of like an escape from the expression

// syntax:

/*  

with 'if' and 'else if':

if () {
    console.log()
}
else if () {
    console.log();
}
else {
    console.log()
}

just 'if' and 'else':

if () {
    console.log()
}
else {
    console.log()
}

replace the 'console.log' with the code that needs to be executed
*/

let newRating2 = 'a';

if (newRating2 >= 3) {
    console.log('you exceed expectations'); // not true doesnt run
}
else if (newRating2 === 1, newRating2 === 2) {
    console.log('meets expectations'); // not true doesnt run
}
else if (newRating2 === 0) {
    console.log('not enough reviews to generate rating'); // not true doesnt run 
}
else {
    console.log ('invalid rating'); // invalid rating
};
// the 'else' above is ran and logged to the console because the other 3 statments above were
// all false

let highScore = 1500;
let userScore = 1250;

//'if' userScore is greater than or equal to 1500 console.log the string
if (userScore >= highScore) {
    console.log('congrats, you got a new high score!'); // doesnt run not true
    console.log(`Your score of ${userScore} is now the new high score!`);
    // doesnt run not true
    highScore = userScore; // if user beats high score than their score is the new high score
}
else {
    console.log(`Your score of ${userScore} did not beat the high score of ${highScore}.`);
    console.log(`You were only ${highScore - userScore} points away from the high score! Try Again?`);
    // you were only 250 points away from the high score! Try Again?
};




// nesting conditonals

// nesting is essentially putting conditional statements within 
// other conditional statements
// nested means its inside something 
// allows you to have multiple layers of conditions



// here we have an 'if' statement inside and 'if' statement
// and we're basically checking two things before we move onto other 
// statements. here its the 'if' statements. 
// if one of the 'if' statements are false, then it will move to the 
// 'else' statements
// we use indexOf to ensure it meets the 6 character minimum
// then we look for indexOf a space (' ') and we check if its not equal to
// one because if its equal to any number but -1 that means that what youre 
// looking for is there and in this case we want to check to make sure a 
// space character is not there
let password = 'catdog';
if (password.length >=6) {
    if (password.indexOf (' ') !== -1) {
        console.log('Password cannot include spaces.');
    }
    else {
        console.log('valid password!'); // valid password
    }
}
else {
    console.log('Password is too short.');
};



//----------------------------------------------------------------------------

// truthy and falsy values

// all values have an inherent truthy or falsy boolean value
/* falsy values:

    * false
    * 0
    * '' (empty string)
    * null
    * undefined
    * NaN
*everything else is truthy

*/ 

// the first 'if' statement is true because 5 is a 'truthy' value

let mystery = 5;

if (mystery) {
    console.log('truthy') // truthy
}
else {
    console.log('falsy') // does not run because first line is true
};

// every number except 0 is truthy
// 0 is falsy

// this is pretty common. displaying a certain page. we're just checking if the variable is truthy


if (loggedInUser) {
    console.log('you are logged in'); // you are logged in
} 
else {
    console.log('please sign in');
};

let loggedInUser2 = 'thomas123';

if (loggedInUser2) {
    console.log(`you are logged in ${loggedInUser2}`);
}
else {
    console.log('please log in');
};

let loggedInUser3; 
// since this is an 'undefined' variable, the first 'if' statement is false. if the variable had a value then it wouldnt inherently be falsy and the first line would have ran like the example above

if (loggedInUser3) {
    console.log('you are logged in');
}
else {
    console.log('please log in')
};

// truthy is commonly used as a way of checking if something has content, if it exist, if its not false, 0 ,'', null, undefined, NaN




//----------------------------------------------------------------------------

/* logical operators: 
Allow you to add more than one condition inside parenthesis

&& - AND

|| - OR

! - NOT

*/



// logical AND (&&)
// takes two seperate boolean expressions (the left and right side of the   locigal operator (&&)) the entire line will only be true only if both sides is true. if one is false, the entire thing is false
//  Both sides must be true in order for the whole things to be true
// if you start to need multiple conditions and the line of code becomes to hard to read, or is too long, you're going to have to use nesting.
// this is great when you just need two things



console.log( false && false ); // false
console.log( true & false ); // false
console.log( true && true ); // true

console.log( 1 <= 2 && 5 === 5); // true
//           true        true       true

console.log(1 <= 4 && 'a' === 'a'); // true
// 1 is less than or equal to four and 'a' is === 'a';

console.log(9 > 10 && 9 >= 9); // false
// 9 is not greater than 10, but 9 is greater than or equal to 9. both sides have to be true in order to receive a true value which is why the console prints false for the above example

console.log('abc'.length === 3 && 1 + 1 === 4); // false
//abc.length === 3 which is true but 1 + 1 does not equal 4. since both sides arent true, console logs false 

let someExample = 25;
let someExample2 = 'caleb';
console.log(someExample === 25 && someExample2 !== 'caleb'); // false

console.log(someExample === 25 && someExample2 === 'caleb'); // true

console.log(someExample <= 40 && someExample2.length === 5 ); // true
//someExample is less than or equal to 40 && someExample2.length is === 5


// 'if' passwordExample is less than or equal to 6 && passwordExample does not contain a space 

// passwordExample.indexOf(' ') searches for a space in the password because indexOf returns the value -1 if it is unable to find the index of whatever you're looking for, in this case its a space (represented as a string that only has a space inside it)

// so we want to check if indexOf passwordExample contains a space. if it does it'll tell you where the index is located with a positive number. if its unable to find it, itll return -1. so we want it to be === -1 because if its === -1 then that means it could not find a space in the indexOf whatever you searched

let passwordExample = 'taco tuesday';

if (passwordExample.length >= 6 && passwordExample.indexOf(' ') === -1) {
    console.log('valid password');
}
else {
    console.log('invalid password');
};

let passwordExample2 = "chickenGal";

if (passwordExample2.length >= 6 && passwordExample2.indexOf(' ') === -1) {
    console.log ('your password is valid');
}
else {
    console.log('please enter a valid password');
};

// if you start to need multiple conditions and the line of code becomes to hard to read, or is too long, you're going to have to use nesting 

// this is great when you just need two things


//checks to see if user picked a number between 1-10
let num3 = 3;

//if num3 is greater than or equal to 1 and less than 11
if (num3 >= 1 && num3 < 11) {
    console.log('you picked a valid number') // you picked a valid number
}
else {
    console.log('please pick a number between 1 - 10')
};


let num99 = 99;
if (num99 >= 1 && num99 < 11) {
    console.log('you picked a valid number');
}
else {
    console.log('please pick a number between 1 - 10'); // please pick a number between 1-10
};



// logical OR (||)
// if one side is true, the whole thing is true
// it takes two sides, but only one side needs to be true
// if one or both are true, you will get true 

console.log(1 !== 1 || 10 === 10); // true
// 1 is not equal to 1 (false)
// 10 === 10 (true)
// only one side needs to be true

console.log(10/2 === 5 || null); // true
// 10 / 2 is === 5 (true)
// null evaluates to false, but since the left is true, it prints true to the console

console.log(0 || undefined); // false 
// 0 is a falsy value 
// undefined is a falsy value
// since neither side are true it prints false to the console

console.log(true || false); // true
// true is a truthy value
// false is falsy 
// since one side is true it evalutes to true

console.log(false || false); // false
// both sides are false so false is logged to the console


//below code checks to see if someone is 6 or younger OR (||) 65 and older to give a discounted ticket price
// it calculates the users age and runs code based of the age in order to let the person know what their ticket price will be

// if exampleAge is less than 6 OR (||) greater than 65 log the string to console 
let exampleAge = 76;
if (exampleAge < 6 || exampleAge >= 65) {
    console.log('you get in for free! :)'); // you get in for free! :)
}
else {
    console.log('please enter your age to calculate ticket price');
};

// this is the same code above, just extra lines because we didnt use the OR (||) logical operator which required us to write an 'if', an 'else if', and an 'else'
if (exampleAge < 6) {
    console.log('you get in for free');
}
else if (exampleAge >= 65) {
    console.log('you get in for free');
}
else {
    console.log('please enter your age to calculate ticket price');
};

// if favColor is === green OR lime green OR neon green then log to console the string
// only one of these in the 'if' statement needs to be true in order for the log to console to actually happen

let favColor = 'green';
if (favColor === 'green' || favColor ==='lime green' || favColor === 'neon green' ) {
    console.log('Great choice!'); // Great choice!
};



// logical NOT(!) operator 
// expression returns true if the expression is false
// logical NOT(!) operates on a SINGLE expression and evalutes to true if the expression is false


console.log(!(3===4)); // true
//          3 IS NOT === 4
// we know 3 is NOT === 4, so true is logged to the console

console.log(!(3===3)); // false
//          3 IS NOT === 3
// we know that 3 IS === to 3, so false is logged to the console

console.log(!null); // true
//          NOT null(false)
//          its false, but since we used NOT it logs true to console

console.log(!(45)); // false
//           NOT 45 (truthy value)
//           this basically reads NOT true
//           we know that 45 is a truthy value so false is logged to the 
//           console

// checking if there is NOT a logged in user so we can boot them off the webpage
// if there isnt a logged in user, kick em out
let loggedInUser4;

// since loggedInUser wasnt given a value, its currently null. since its null, there is no loggedInUser4 so the string is logged to the console
if (!loggedInUser4) {
    console.log('please sign in to gain access to this page'); // please sing in to gain access to this page
};

// simluating a user being logged in 
// the code below does not run because loggedInUser4 now has a logged user stored inside of it so loggedInUser4 is now a user and not not null

loggedInUser4 = `${username} logged in`;

if (!loggedInUser4) {
    console.log('please sign in'); // this code does not execute
};



let flavor = 'watermelon';

if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log('we dont have that flavor'); // we dont have that flavor
};
// heres another way to check if the flavor is grape or cherry using NOT(!)
// so the string is logged to the console because it is NOT grape or NOT cherry
if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log('we dont have that flavor'); // we dont have that flavor
};

// since flavor2 === 'grape' nothing is logged to the console
let flavor2 = 'grape';

if (flavor2 !== 'grape' && flavor2 !== 'cherry') {
    console.log('we dont have that flavor'); 
};




// Operator precedence 
// operator precedence will run in the order below unless there are parenthesis. expressions inside the parenthesis will evaluate first regardless of operator precedence. you can use this to your advantage by using parenthesis to dictates what runs first.
// precedence order :
// NOT (!) has higher precendence than 
// and (&&) has higher precendece than 
// OR (||)
// this order can be alterted by using parenthesis

let num7 = 7;
console.log(num7 == 7 || num7 === 3 && num7 > 10); // true
// operator precedence turns the expression to this: 
//              EVALUATES RIGHT SIDE FIRST CUZ THE &&
// num7 == 7 || (num7===3 && num7 > 10)
//             num 7 is not === 3 and num7 is not greater than 10
//             so the RIGHT SIDE OF THE EQUATION IS FALSE.
//             next we go to the or: 
//             num7==7 OR(||) false
//                 true || false
// since there is 1 true value in this expression and its with an OR (||), the expression evaluates to true and logs true to the console because with logical OR(||) only one side needs to be true





//----------------------------------------------------------------------------

// switch statements
// syntax:
/*

        switch (variableToBeSwitched) {
            case 1:
                expression;
                break;
            case 2: 
                expression;
                break;
            case 3: 
                expression;
                break;
            default:                   (like else: ends the switch)
                expression;
        }

*/ 
// this is long, but works. switch statements are useful in scenarios like this

let dayOfWeek = 3;

if (dayOfWeek === 1) {
    console.log('monday');
}
else if (dayOfWeek === 2) {
    console.log('tuesday');
}
else if (dayOfWeek === 3) {
    console.log('wednesday'); // wednesday
}
else if (dayOfWeek === 4) {
    console.log('thursday');
}
else if (dayOfWeek === 5) {
    console.log('friday');
}
else if (dayOfWeek === 6) {
    console.log('saturday');
}
else if (dayOfWeek === 7) {
    console.log('sunday');
}
else if (dayOfWeek > 7) {
    console.log('invalid day');
};

// heres how to write the above code with a switch statement
// if you do not use the break; after the code has run and it has found one of the case's to be true, it will log every case after that. In order to stop that we use break; at the end of every case so that it only logs the one that is correct. since dayOfWeek currently === 3, wednesday is logged to the console. without the break, wednesday, thursday, friday, saturday and sunday would also be logged to the console.

switch (dayOfWeek) {
    case 1: 
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday'); // wednesday
        break;
    case 4: 
        console.log('thursday');
        break;
    case 5: 
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
    default: 
        console.log('invalid day');
}

// the default value in a switch expression is kinda like else in a sense that it kinda terminates or gives a default value to go off of if none of the above expressions are ran.


// recreated example above but if you save $20 to your account with each case

let savingsAccount; // the value assigned here should be 1 and the cases below should contain the expressions for each case. in this example the value is left as null, so it longs the default value to the console

switch (savingsAccount) {
    case 1:
        console.log(`your savings is ${savingsAccount + 20}`);
        break;
    case 2:
        console.log(`your savings balance is ${savingsAccount + 40}`);
        break;
    case 3: 
        console.log(`your savings is ${savingsAccount + 60}`);
    default:
        console.log('enter starting balance'); // enter starting balance
}

let emoji = 'eggplant';

switch (emoji) {
    case 'happy face':
        console.log('yellow');
        break;
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple'); // purple
        break;
    case 'heart':
        console.log('red');
        break;
    case 'lips':
        console.log('red');
        break;
    default:
        console.log('enter emoji');
}

// the code above is the same as the code below. since we had emoji's that were the same color as each other we can combine them into 1 case by specifying the case and listing out the cases before the case expression
// heres an example using the code above

switch (emoji) {
    case 'happy face':
    case 'sad face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple'); // purple
        break;
    case 'heart':
    case 'lips':
        console.log('red')
        break;
    default:
        console.log('enter emoji');
};





//----------------------------------------------------------------------------

//ternary operator (three pieces 'ternary')
// if this condition is true this code runs, if not this other code runs

// condition ? expressionIfTrue: expressionIfFalse

//takes an 'if' and 'else' statement and combines them to one line of code
// this only works with simple yes or no (so 'if' and 'else')

// regular expression without the ternary operator
let num9 = 9;

if (num9 === 9) {
    console.log('lucky');
}
else {
    console.log('unlucky');
}

// above expression with ternary operator

num9 === 9 ? console.log('lucky') :console.log('unlucky'); // lucky
// condition  ?  expressionIfTrue : expressionIfFalse
// condition  ?  expression       : expression
// logs lucky to the console


// status offline / online

let status1 = 'offLine';
let onlineColor ='green';
let offlineColor = 'red';

status1 === 'offLine' ? console.log(`${offlineColor}`) :console.log(`${onlineColor}`); // red

let status2 = 'onLine';
let color2 = status2 === 'offline' ? 'red' : 'green'; // green
// if you type color2 into the console you get green back because on this example the status is set to online. if you change the variable value to anything other than 'online' itll log red
console.log(color2); // green 
// because status is online and its checking to see if youre offline make color red, if youre online make color green







//-----------------------------------------------------------------------

// arrays & objects - collections of data


// arrays - ordered colletions of values
//ex of things that may be stored in an array:
//list of comments on an IG post
//collection of levels in a game 
//songs in a playlist 
// javascript arrays dont have to contain data of the same type: they can include strings, numbers, booleans etc. other programming languages only allow one type of data to go in 1 array
// use const to declare arrays. Since arrays are not primitive data, the values inside of the array can change, as long as the variable name does not

//creating arrays

// syntax:
//                            const arrayName = [];
//                            new Array(value, value, value);            
// the new Array() is not used often. its better to use []

// to make an empty array
let students = [];

// to make an array of strings
let colorArray = ['red', 'yellow', 'green'];

// to make an array of numbers
let numberArray  = [12, 24, 45, 7, 18];

// to make a mixed array 
let mixedArray = [true, 13, 'string', null, 'string', 47];

//examples 

let shoppingList = ['cheese', 'bread', 'cereal', 'ice'];
console.log(shoppingList); // (4) ['cheese', 'bread', 'cereal', 'ice'];
//                  (num of items in array) [array items]

// the console logs the amount of items in the array, and also list the items in the array

let lottoNumbers = [54, 16, 91, 18, 7];
console.log(lottoNumbers.length); // 5 
// there are 5 values in the array




// array indices
// arrays are index'd meaning they start counting the corresponding num at 0

//                      let array = [5, 10, 15, 20]
//                                   0  1   2   3
//.length will give you 5 because there are 5 values
//.indexOf(10) will give you 1 because 1 is at index 1

let colorArray2 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', 'white']
console.log(colorArray2.length); // 8
console.log(colorArray2.indexOf('yellow')); // 2
console.log(colorArray2);

// Moddifying arrays
// syntax:                                                       arrayName[indexNumber] = 'the value you want to change at the specified index';

colorArray2[0] = 'black';
console.log(colorArray2[0]); // black
console.log(colorArray2); // full array with black at index 0

colorArray2[7] = 1; // 1
console.log(colorArray2); // full array with 1 at index 7
// ['black', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', '1']
// we modified the array by changing index 0 to black and index 7 to a number (1)

//arrays are mutable and can be modified at any time 

let shoppingList2 = ['cheese', 'milk'];
shoppingList2[1] = 'whole milk';
console.log(shoppingList2); // cheddar cheese, whole milk

//in order to add an item to the array we need to know the last index of the array. we can find that by using .length - 1.
console.log(shoppingList2.length - 1); // 1 (cheddar cheese at index 0, milk at index 1)

// add an item to the array
shoppingList2[2] = 'water';
shoppingList2[3] = 'candy';
console.log(shoppingList2); // cheese, whole milk, water, candy
// we added items at index 2 and 3 even though those index's never exisited

//another way if you dont know the length of the array
shoppingList2[shoppingList2.length] = 'eggs';
console.log(shoppingList2); // [cheese, whole milk, water, candy, eggs]
// eggs is now the last item in the array



// common array methods

// push() - adds to end (specify what to add in parenthesis)

// pop() - remove from end (parenthesis stay empty- removes from end) and returns new length of array 

// shift() - remove from start

// unshift() - add to start


let topSongs = [
    'first time i ever saw your face', 
    'god only knows',
    'a day in the life', 
    'life on mars'
];

// push() - adding to end
topSongs.push('fortunate sun')
console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life, life on mars, fortunate sun]


// pop() - take value from end
topSongs.pop();
console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life, life on mars,] it removed forutnate sun from arrray

console.log(topSongs.pop()); // life on mars 
// returns to the console the value it removed

console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life]

let nextSong = topSongs.pop(); // took the value of the last song in the array and stored it in a variable


console.log(nextSong); // a day in the life 

// notice once you 'pop' an item its gone
// its great for things like to do list where, once you do something, its removed forever


// unshift() always adds the value to the very first item of the array. seperate multiple values in the parenthses with commas

let dishesToDo = ['baking pan'];

dishesToDo.unshift('large plate'); // adds 'large plate' to the first item in the array

dishesToDo.unshift('small plate'); // adds 'small plate' to the first item
console.log(dishesToDo) // ['small plate', 'large plate', 'baking pan']

// shift() removes first item from array. seperate multiple values in the parentheses with a comma

console.log(dishesToDo.shift()); // small plate (returns item it removed)
console.log(dishesToDo); // ['large plate', 'baking pan'];
// it removed the first item 'small plate' from the array

dishesToDo.push('cookie sheet', 'cutting board');
console.log(dishesToDo); // ['large plate', 'baking pan', 'cookie sheet', 'cutting board']

dishesToDo.unshift('knife', 'spoon');
console.log(dishesToDo); // ['knife', 'spoon', 'large plate', 'baking pan', 'cookie sheet', 'cutting board']




// more array methods 

// concat() - merges array (concatnates arrays)

// includes() - helps look for value in array and returns true or false

// indexOf() - gives you index number of value

// join() - creates a string from array 

// reverse() - reverses an array 

// slice() - copy portion of an array

// splice() - remove/replace elements

// sort() - sorts an array 



// concat()
const array1 = ['a', 'b', 'c']; // [a, b, c]
const array2 = ['d', 'e', 'f']; // [d, e, f,]
console.log(array1.concat(array2)); // [a, b, c, d, e, f]
// this creates a new 'copy' of the array but does not store the values into the original arrays 

// notice array 1 remains unchanged after we concatenated them
console.log(array1); // [a, b, c]

// same with array 2 
console.log(array2); // [d, e, f]


//saving the concatenated array to a new variable
const arrayConcat = array1.concat(array2);
console.log(arrayConcat); // [a, b, c, d, e, f]

let fruits = ['apples', 'bananas'];
let veggies = ['asparagus', 'brussel sprouts'];
console.log(fruits.concat(veggies)); // [apples, bananas, asparagus, brussel sprouts]
console.log(veggies.concat(fruits)); // [asparagus, brussel sprouts, apples, bananas]


// concatenating multiple arrays (combining arrays)
// concatenating the fruit array, veggie array and meat array
let meats = ['steak', 'chicken'];
console.log(fruits.concat(veggies, meats)); // ['apples', 'bananas', 'asparagus', 'brussel sprouts', 'steak', 'chicken']

// storing all three concatenated variables into one

let allFood = meats.concat(fruits, veggies);
console.log(allFood); // ['steak', 'chicken', 'apples', 'bananas', 'asparagus', 'brussel sprouts']




// includes()
// searches the array for a value and returns boolean value
// if multiple values are received, it only needs to find one in order for it to return true 
//syntax:
//             array.includes(value youre looking for)
//             array.includes(value youre looking for, fromIndex)
//             from index allows you to specify where your search starts from in terms of index position

// searches the array allFood and looks for the string 'steak'
console.log(allFood.includes('steak')); // true
console.log(allFood.includes(1)); // false 

console.log(allFood.includes('chicken')); // true
console.log(allFood.includes('chicken', 3)); // false
//checking to see if chicken exist in the array after index 3 which is after bananas. chicken only exist in index 1 so it returns false because chicken cant be found in index 3 or any index after 3

let petList = ['dog', 'cat', 'bird'];
console.log(petList.includes('pig')); // false
console.log(petList.includes('dog', 'pig')); // true
console.log(petList.includes('cat', 1)); // true 

// using an array and .includes() in a conditional
if(petList.includes('bird')) {
    console.log('im allergic!'); // im alergic!
}
else {
    console.log('i have no allergy to that pet');
};
// im allergic logs to the console.



// indexOf()
// Searches for value and returns its index position
// if value is not present, it returns -1

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'sugar',
    'shrimp',
    'butter'
];

console.log(ingredients.indexOf('water')); // 0
console.log(ingredients.indexOf('sugar')); // 4
console.log(ingredients.indexOf(3)); // -1
// index of 3 does not exist (theres only strings in ingredients array)
console.log(ingredients.indexOf('candy')); // -1 
// index of 'candy' does not exist in the array
console.log(ingredients.indexOf('cheese', 2)); // 3
// butter is located after index 2 in index 3
console.log(ingredients.indexOf('cheese', 5)); // -1
//cheese exist, but not if we start counting at index 5 
console.log(ingredients.indexOf('flour') !== -1); // true
// flour is not equal to -1 because -1 is the value it returns when it cannot find an items index. since flour is indexed in the array it is not equal to -1 its equal to 2




// reverse()
// reverses order of array
// mutates original array

let letters = ['t', 'c', 'e', 'p', 's', 'e', 'r'];
console.log(letters.reverse()); // ['r', 'e', 's', 'p', 'e', 'c', 't']
console.log(letters); // ['r', 'e', 's', 'p', 'e', 'c', 't']
// notice after we used .reverse(), it stored the reversed array into the original variable


// join()
// 'joins' the elements of an array into a string
// turns all values into a string, then 'joins' them to 1 string
// the default value to seperate values inside of the string is commas, but you can change it to whatever you want as long as you specify in the .join() parentheses

let elements = [
    'fire',
    'water',
    'air'
]

console.log(elements.join()); // fire,water,air
console.log(elements.join('')) // firewaterair
console.log(elements.join('-')); // fire-water-air
console.log(elements.join(' ')); // fire water air
console.log(elements.join(', ')) // fire, water, air

console.log(letters.join('')); // respect
console.log(letters.join(' ')); // r e s p e c t
console.log(letters.join('&')) // r&e&s&p&e&c&t
console.log(letters.reverse().reverse().join('.').toUpperCase()); // R.E.S.P.E.C.T
// since the original was already reversed, i had to reverse it twice to get back to the original.

console.log([12.5, false, 'yellow'].join()); // '12.5,false,yellow'
// regardless of value type, join always returns a string value
console.log([12.5, false, 'yellow'].join(', ')) // 12.5, false, yellow




// slice()
// takes portion of array, and makes new array with the specified portion(whats inside the parentheses) with the index of the values
//                        array.slice(start, end);
// if you dont specify an end value it will slice until the end of the array
// if no values are given to the parenthesis it makes a new copy of the entire array. no values specify entire array. allows you to make a quick copy of an array because it doesnt impact the original

let zooAnimals = ['bison', 'zebra', 'lion', 'tiger', 'duck', 'fish','eel'];
console.log(zooAnimals.slice(2, 4)); // [lion, tiger]
console.log(zooAnimals.slice(0, 2)); // [bison, zebra]
console.log(zooAnimals.slice(3, 6)); // [tiger, duck, fish]
console.log(zooAnimals.slice(3)); // [tiger, duck, fish, eel]
//since no end was specified it just returned the start and assumed the stop was the end of the array

// storing the slice 2, 4 of the array zooAnimals to an array called jungleAnimals
let jungleAnimals = (zooAnimals.slice(2, 4));
console.log(jungleAnimals); // [lion, tiger]

let swimmers = zooAnimals.slice(-2);
console.log(swimmers) // [fish, eel]
// the negative value tells it to count backwards at the end of the array

console.log(zooAnimals.slice(-4, -2)); // [tiger, duck]
// starts at the -4 index value so tiger, and goes to the -2 index value which is duck




// splice()
// remove/replace elements in an array that are not at the beggingng or end because thats what push(), pop(), shift() and unshift() are for

//syntax:
//   array.splice(index start, how many to delete, item to be put in)

// start at index 1
// delete 0 items
// add 'buffalo'
console.log(zooAnimals.splice(1, 0, 'buffalo')); // [] logs empty array
//          array.splice(start, deleting nothing so 0, what we want to add)

console.log(zooAnimals); // ['bison', 'buffalo', 'zebra', 'lion', 'tiger', 'duck', 'fish', 'eel']

// deleting a value returns the deleted value to the console
// starting at index 1
// delete 1 
console.log(zooAnimals.splice(1, 1)); // buffalo
console.log(zooAnimals) // ['bison', 'zebra', 'lion', 'tiger', 'duck', 'fish', 'eel'] returns the original array before we added buffalo


// started at the last item in array (-1)
// replaced the 1 item where im starting
// replaces it with 'shark'
console.log(zooAnimals.splice(-1, 1, 'shark'));
console.log(zooAnimals); // ['bison', 'zebra', 'lion', 'tiger', 'duck', 'fish', 'shark']

// started at index item 3
// deleted nothing
// added in 'liger'
console.log(zooAnimals.splice(3, 0, 'liger')); // [] logs empty array
console.log(zooAnimals); // ['bison', 'zebra', 'lion', 'liger', 'tiger', 'duck', 'fish', 'shark']

// starting at index 0 
// deleting that value
// replacing it with 'BISON!'
console.log(zooAnimals.splice(0, 1, 'BISON!')); // [bison] logs what it removed
console.log(zooAnimals); // ['BISON!', 'zebra', 'lion', 'liger', 'tiger', 'duck', 'fish', 'shark']





// sort()
// array.sort()
// if you dont pass in a function to specify how it sorts, then it sorts alphabetically for strings and UTF-16 character codes for numbers which results in a weird sort

let people = ['robinson', 'angie', 'jolene', 'maggie', 'roxanne'];
console.log(people.sort()); // [angie, jolene, maggie, robinson, roxanne]
// sorted alphabetically

console.log(people); // [angie, jolene, maggie, robinson, roxanne] is the new value stored in the variable people

let numArray = [12, 17, 81, 0, 5, 73];
console.log(numArray.sort()); // [0, 12, 17, 5, 73, 81]
// converts every number to a string then sorts them based on their UTF-16 codes
// this can lead to unexpected results




//----------------------------------------------------------------------

//Refrence types 

// primitive types are value type vaiables
// javascript stores the actual value  

// non primitive data types like arrays and objects are stored as refrences. the variable doesnt actually hold the array, it just holds the 'label' of the array as reference to its place in memory 
// think of it like this 
// let array = [1, 2, 3]  #refrence ID :129966
// the variable "array" points to the refrence and the reference is where the actual array is stored

//when you put an array in variable, the variable does NOT hold the array, it holds an arrow (or reference) pointing to the array

let nums = [5, 6, 7, 8];
let otherNums = nums; 
console.log(otherNums); // [5, 6, 7, 8]
nums.push(9); // add 9 to the end of the array
console.log(nums); // [5, 6, 7, 8, 9]
console.log(otherNums); // [5, 6, 7, 8, 9]
//notice when we changed nums with .push(9) we updated the value of the array, but the refrence that javascript points to didnt change which is why nums and otherNums output the same array, but only num recevied the push (on line 2010);

// same happens if you change otherNums. since nums and otherNums are equal to each other, if one changes they both change

console.log(otherNums.pop()); // 9
// logs the removed value to the console 
console.log(nums); // [5, 6, 7, 8]

// the changes happen to both despite only one receiving the method. thats because the array value changes, however the refrence to the array that javascript is pointing to does not change. so since both variables are pointing to the same value(the same array), and arrays arent primitive, they change values but keep the same pointer. 




// Const with arrays

// even if you declare an array using const, the values stored inside the array can change. the values are being changed inside of the array, but since the const is pointing to a reference, and not the variable or variable name its self, it can change

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
console.log(myEggs); // ['brown', 'brown', 'purple']
// the only thing that is const about the myEggs is its refernce to its value, and its name. the values of the array can change.

// adding values to an array 
// inserts green at index 0 of the array myEggs
// logging to make sure 'green' is at index 0 confirming the first line works
//if myEggs array includes the word 'green'then its equal to true
// so the console logs the string
myEggs[0]= 'green';
console.log(myEggs.indexOf('green')); // 0
if (myEggs.includes('green') === true) {
    console.log('green egg was added to front of the array');
    console.log(myEggs); // ['green, 'brown', 'purple']
};





// nested arrays
// we can store arrays inside other arrays:
//syntax:

//      const arrayName = [ 
//        [value,value],                    element 0
//        [value,value,value],              element 1
//        [value, value]                    element 2
//        [value, value, value, value]      element 3
//      ];


const colorArray3 = [
    ['red', 'crimson'],                 // element 0
    ['orange', 'dark orange'],          // element 1
    ['yellow', 'golden rod'],           // element 2
    ['green', 'olive'],                 // element 3
    ['blue', 'navy blue'],              // element 4
    ['purple', 'orchid']                // element 5
];
//each array, or item, or object inside of the array is considered 1 element. and for something like an array inside of an array, the nested array's items are indexed

//extracting items from array
// how to pull the blue colors outside of the array  
console.log(colorArray3[4]); // ['blue', 'navy blue']
// the blue colors are the 4th indexed item 

//how to pull the purple colors
console.log(colorArray3[5]); // [purple, orchid]


// how to pull the word blue outside of the array 
console.log(colorArray3[4][0]); // blue
//         colorArray3[element][index of the element]
//                      [4]              [0]

// how to pull olive
console.log(colorArray3[3][1]); //olive

const animalPairs = [
    ['doe' ['buck', 'ram']],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
];
//nested arrays inside an array




const ticTacToeBoard = [
    ['O', null, 'X'], // element 0 with 3 elements inside 
    [null, 'X', 'O'], // element 1 with 3 elements inside
    ['X', 'O', null], // element 2 with 3 elements inside
];
// above is a 3x3 tic tac toe board 









// Javascript Objects
// curly braces signify an object
//syntax:
//                         let myObject = {}

// objects allow us to store data that we can assciate in groups of things by specifying labels (properties)
// objects are collections of properties
// properties are a key-value pair
// and properties are pairs of information 
// PROPERTIES ALWAYS EXIST AS KEY VALUE PAIRS
// commas go after all key value pairs except the last. if there is only one property inside of the object, there is no need for a comma. for every property after the first and excluding the very last, must have a comma

// an object is just a container that holds information in the form of key-value pairs

// objects are NON PRIMITIVE data types meaning the value is stored in the refrence to the object. meaning you can change things inside of the object even if its declared as a const. 

// rather than accessing data using an index, we use custom keys

// javascript doesnt care what you name your property. it can be a number or a string. no matter what it is, the key is converted TO A STRING.

// syntax:

/* 
const object = {
    property1: value,
    property2: value,
    property3: value
}

const object = {
    property1: value,
     -key-   -value                           key value pair
    property2: value
};
*/ 

//                             username: -----> dableb
//                                key           value

//                              upvotes: -----> 7
//                                key         value

//                                text: -----> 'great post'
//                                 key            value


// object literals
/*

{
                                object literal
}

*/ 
//creates an empty object with no key value pairs


const fitBitData = {
    totalSteps: 305077,
    totalMiles: 211.5,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'fourty five'
};
console.log(fitBitData); // {45: 'fourty five', totalSteps: 305077, totalMiles: 211.5, avgCalorieBurn: 5755, workoutsThisWeek: '5 of 7', avgGoodSleep: '2:13'}

// how to access an individual property in an object

//getting totalSteps 
console.log(fitBitData.totalSteps); // 305077

// getting avgCalorieBurn
console.log(fitBitData.avgCalorieBurn); // 5755

// getting avgGoodSleep
console.log(fitBitData.avgGoodSleep); // 2:13


const comment = {
    username: `${username}`,
    downVotes: 19,
    upVotes: 214,
    netScore: 195,
    commentText: 'taste like chicken lol',
    tags: ['#hilarious', '#delicious', '#lol'],
    isLoggedIn: true
};


// accessing object properties

const numberObject = {
    100: 'one hundred',
    200: 'two hundred',
    37: 'thirty seven'
};

// how to extract values out of an object
// syntax:
//                objectName[property]
console.log(numberObject[100]); // one hundred 

// heres how the above worked nehind the scenes:
/* 
    const numberObject = {
        '100': 'one hundred'
        '200': 'two hundred'

}

it converts the key to a string then searches for that string. 
the number you put inside the brackets (above its 100) is what it converts into a string. 
then it searches the object for it. in the example above it converts the 100 inside the brackets to '100' and its able to find that property inside of the object because the same thing happened inside the object, the 100: became '100'. 
you dont have to do the string conversion inside of the brackets, it does it for you.

*/

// this is how to access 'other wise' invalid javascript characters.
// notice we have an object key value pair that are both strings, however that doesnt matter to javascript 

// normally you wouldnt be able to start the name of something in javascript with a number. for example:

// const 76Names = {}      is invalid because you cant start a variable name with a number, however, you can inside of objects

const numberObject2 = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!' // string stored as both key value pair
};
console.log(numberObject2); // {16: 'sixteen', 
//                              100: 'one hundred', 
//                              76 trombones: 'great song!'}

// the brackets allow us to access a key or value that would otherwise throw an error in javascript 

// dot notation example: 
// numberObject2.76 trombones            would throw an error because of the space in between 76 trombones

// dot notation (period syntax) does not work. instead, include the string inside of brackets
// example:
console.log(numberObject2['76 trombones']); // great song!

const colorPalette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

// getting the VALUE of red key using dot notation
console.log(colorPalette.red) // #eb4bd4b
//getting the VALUE of red key using brackets
console.log(colorPalette['red']); // #eb4bd4b

// declaring a variable with its value being an obect property:
// in order to declare a variable that has the value of a property of a string, you use the property name inside of quotes

// declaring the variable color equal to the value of 'yellow' inside of the object
let color = 'yellow';
console.log(colorPalette[color]); // #f9ca24
// the value of 'yellow' inside of our object is #f9ca24 thats why the console printed the hex code. here color's value isnt a string that says 'yellow', its the value of the yellow key in the object colorPalette

console.log(colorPalette.blue); //#30336b
console.log(colorPalette.yellow); // #f9ca24
console.log(colorPalette['yellow']); // #f9ca24
// console.log(colorPalette[yellow]) 
// without the quotes would look for a variable called yellow. theres no variable called yellow, so it wont find anything. if I want to find the property inside the object it has to be in quotes

let mysteryColor = 'red';
console.log(colorPalette['red']); // #ed4bd4b

// below we stored the value of 'red' from our object colorPalette into the variable of mystery color. then we logged the variable and it returned the value of 'red' inside of the object because thats what we declared our variable to be equal to
console.log(colorPalette[mysteryColor]); // #ed4bdb4
// console.log(colorPalette.mysteryColor) // would not work because with dot notation its looking for a key called 'mystery color' and inside of our colorPalette, there is not.
// it wont throw an error, but it will throw undefined if you were to use dot notation



// we're forced to use the square brackets when the name of the property we are trying to access has invalid identifiers (illegal characters)

// good rule of thumb is to use dot notation whenever possible and use the square brackets when you have to. I guess a good way to learn would be that if one way doesnt work try the other. i.e: if dot notation doesnt work, try using square brackets and vice versa. if youre using a variable or some other dynamic value as your key, you have to use square brackets





// adding and updating properties inside of objects

//take fitbit example:
/* 

const fitBitData = {
    totalSteps: 305077,
    totalMiles: 211.5,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13',
    45: 'fourty five'
};


*/

//updating properties inside the object.
fitBitData.workoutsThisWeek = '6 of 7';
console.log(fitBitData.workoutsThisWeek); // 6 of 7
// the property workoutsThisWeek inside of the fitBitData objet was updated to 6 of 7 from 5 of 7. the new permanent value of workoutsThisWeek is now 6 of 7 until it is changed again.

// adding 7.5 to the value of totalMiles 
fitBitData.totalMiles += 7.5;
console.log(fitBitData.totalMiles); // 219
// 7.5 was added to the value of fitBitData.totalMiles leaving the new permanent value of totalMiles to 219

// adding a new property inside of an object
fitBitData.heartStillBeating = true;
console.log(fitBitData); // {45: 'fourty five', totalSteps: 305077, totalMiles: 219, avgCalorieBurn: 5755, workoutsThisWeek: '6 of 7', avgGoodSleep: '2:13', heartStillBeating: true'}

// adding property to empty object
//syntax:

// myObject['key name'] = value;

const userReviews = {};

userReviews[`${username}`] = 5.0;
console.log(userReviews); // {dableb: 5}
// the object now has a key --> dableb and value --> 5
userReviews.username = `${username}`;
//             key           value
console.log(userReviews); // {dableb: 5, username: 'dableb'}


//changing the value of key username
userReviews.username = 'your username';
console.log(userReviews); // {dableb: 5, username: 'your username'}

//add 2 to the username key value pair
userReviews[`${username}`] += 2;
console.log(userReviews); // {dableb: 7, username: 'your username', gender: 'male'}


// adding a new key and value pair to the object userReviews
userReviews.gender = 'male';
console.log(userReviews); // {dableb: 7, username: 'your username', gender: 'male'}

//deleting a property (key value pair) out of an object

//deleting the key value of gender
//deleting the key deletes the value because a property cannot exist without a key value pair
//syntax:
//                        delete myObject.key;
delete userReviews.gender;
console.log(userReviews); // {dableb: 7, username: 'your username'}




// nested arrays & objects

// you can nest objects inside of an array
// you can nest an array inside an object 

// nesting objects inside of an array
// also referred to as an array of objects
const shoppingCart = [
    {
        product: 'jenga classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Amazon Fire Stick',
        price: 39.99,
        quantity: 2
    }
];
console.log(shoppingCart) // [{…}, {…}, {…}] (3 objects inside an array)
// expanded console.log:
/* (3) [{…}, {…}, {…}]
0: {product: 'jenga classic', price: 6.88, quantity: 1}
1: {product: 'Echo Dot', price: 29.99, quantity: 3}
2: {product: 'Amazon Fire Stick', price: 39.99, quantity: 2}
length: 3
*/

// nesting the strength array and exam object inside an the object student
const student = {
    firstName: 'david',
    lastName: 'jones',
    age: 20,
    strengths: ['music', 'art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

//accessing values inside the object student using keys
// syntax:
//           object.object.key       object.object.key
console.log(student.exams.midterm + student.exams.final); // 180
console.log((student.exams.midterm + student.exams.final) / 2); // 90

// accessing the array inside the object
// syntax:   object.key[]             use brackets and index to access array
console.log(student.strengths[0]); // music
console.log(student.strengths[1]); // art

console.log(student); // {firstName: 'david', lastName: 'jones', age: 20, strengths: Array(2), exams: {…}}
// console log expanded
/* 
{firstName: 'david', lastName: 'jones', age: 20, strengths: Array(2), exams: {…}}
age: 20
exams: {midterm: 92, final: 88}
firstName: "david"
lastName: "jones"
strengths: (2) ['music', 'art']
*/

// in student object we have student as an object. strengths is an array. and exams: {} is an object. so inside the object student there is an array represented by the key strengths and there is another object represented by the key exam.

//object with an array represented by the key 'board' and inside that 'board' array we have 3 more arrays
const TicTacToeGame = {
    player1: 'player',
    player2: 'playee',
    board: [
        ['O', null, 'X'], 
        ['X', 'O', 'X'], 
        [null, 'X', 'O']
    ]
};

console.log(TicTacToeGame); // {player1: 'player', player2: 'playee', board: Array(3)}
// expanded console log
/* {player1: 'player', player2: 'playee', board: Array(3)}
board: (3) [Array(3), Array(3), Array(3)]
player1: "player"
player2: "playee"
[[Prototype]]: Object
*/ 


// nesting arrays and objects gives us a pretty good way to model almost any data set efficently
// nesting can get pretty crazy, so its important you take a moment to think of the best way to represent the data
// heres an example of a fairly efficient and 'nice' way of modeling data
const ticTacToeGame2 = {
    player1: {
        username: 'player',
        team: 'O'
    },
    player2: {
        username: 'player2',
        team: 'X'
    },
    board: [
        ['O', null, 'X'],
        ['X', 'O', 'X'],
        [null, 'X', 'O']
    ] 
};

const astros = {
    pitcher: {
        playerName: 'john knap',
        gamesPlayed: 41,
        pitchesThrown: 135,
        battingAverage: 174,
        lineUpNum: '8th',
        walkoutSong: 'stayin alive'
    },
    catcher: {
        playerName: 'justin james',
        gamesPlayed: 41,
        pitchesThrown: null,
        battingAverage: 325,
        lineUpNum: '7th',
        walkoutSong: 'gangnam style'
    },
    firstbaseMan: {
        playerName: 'ben rothwell',
        gamesPlayed: 54,
        pitchesThrown: null,
        battingAverage: 400,
        lineUpNum: '4th',
        walkoutSong: 'final countdown'
    }
};

// adding key 'injured' and value false to the object firstbaseMan inside of the object astros
astros.firstbaseMan.injured = false;
//object.object. new key = value;
console.log(astros); // {pitcher: {…}, catcher: {…}, firstbaseMan: {…}}
//expanded console log of firstbaseMan: battingAverage: 400
/*
gamesPlayed: 54
injured: false
lineUpNum: "4th"
pitchesThrown: null
playerName: "ben rothwell"
walkoutSong: "final countdown"
*/ 




//objects and reference types 

//the reason arrays and objects are stored as 'refrences' is because normally the value's put inside of them are too much for the computer memory. a variable is stored straight to the computers memory because its usually not any where near the size of some arrays or objects and that particular place in memory can hold a value such as a string or a number. this is why objects and array's are normally declared with const. since javascript points to the refrence of the actual array/object, the values inside of the objects and arrays are mutable regardless of being declared by const.

//making two objects with the same data inside of them. when you compare them to see if theyre equal, although they have the exact same keys and pairs, THEY ARE NOT EQUAL. Javascript is not checking the keys and value pairs when it compares the two objects. its looking at the reference of the object. since each object has its own reference, javascript says they are not equal

// remember this does not compare key and value pairs!!!!!!!!!!!!!!! this is not how you check to see if array values are equal
// it only compares the refrence in memory

const colorPalette2 = {
    red: '#eb4dbd',
    yellow: '#f9ca24',
    blue: '#30336b'
};

const fakeColorPalette = {
    red: '#eb4dbd',
    yellow: '#f9ca24',
    blue: '#30336b'
};

console.log(colorPalette2 == fakeColorPalette); // false
console.log(colorPalette2 === fakeColorPalette); // false


// in order to make them equal we would have to declare a variable and make it equal to the object so that they end up having the same reference in memory as each other
const realColorPalette = colorPalette2;
console.log(colorPalette2); // {red: '#eb4dbd', yellow: '#f9ca24', blue: '#30336b'}

console.log(realColorPalette); // {red: '#eb4dbd', yellow: '#f9ca24', blue: '#30336b'}

// to prove this, lets add a new key value pair to colorPallette2, and not to realColorPalette and youll see they both change. 

colorPalette2.green = '#ebf876'; // added they key of 'green' with a value of '#ebf876' to colorPalette2. Since we made realColorPalette to be equal to colorPalette2, it also received the change.

console.log(colorPalette2); // {red: '#eb4dbd', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}

console.log(realColorPalette); //{red: '#eb4dbd', yellow: '#f9ca24', blue: '#30336b', green: '#ebf876'}

// now these will be true
console.log(colorPalette2 == realColorPalette); // true
console.log(colorPalette2 === realColorPalette); // true.
// now colorPalette2 and realColorPalette hold the same reference to the same place in memory. the two objects are now equal to each other because they have the exact same reference

let randomArray = [1, 2, 3];
let randomArray2 = [1, 2, 3];
let actualRandomArray = randomArray;

//adding 4 to the array randomArray
actualRandomArray.push(4);
//both arrays receive the push because they have the same refrence address in memory (line 2566)
console.log(randomArray); // [1, 2, 3, 4]
console.log(actualRandomArray); // [1, 2, 3, 4]

// when you compare with == or === youre checking for matching reference addresses. if found, itll return true

console.log(randomArray == randomArray2); // false
// the above console log is false, because although the arrays contain the same key value pairs, randomArray and randomArray2 are two seperate arrays, and have their own unique reference stored in memory. regardless of equality or strict inequality

console.log(randomArray === randomArray2); // false 
// the above console log is false, because although the arrays contain the same key value pairs, randomArray and randomArray2 are two seperate arrays, and have their own unique reference stored in memory. regardless of equality or strict inequality

console.log(randomArray == actualRandomArray); // true
console.log(randomArray === actualRandomArray); // true
// these two variables both reference the same address to the array that they contain, therefore they are equal. they are equal in terms of equality and strict equality 

const user = {
    username: 'cherrygarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

// this example below will NOT print anything to the console. user.notifications contains an empty array, and it would appear that we are asking if its equal to an empty array, but remember, each array has its own unique reference in memory. they are both blank arrays, but they are not the same blank array because they both hold different spots in memory. you would need to do something like create a new variable and set that new variable to be equal to the variable with the array you want to copy
/* 

if (user.notifications === []) {
    console.log('no new notifications')
};

*/ 

// instead use this:
if (user.notifications.length === 0) {
    console.log('this is how you do it')
};
// here we are checking if user.notifications length is === to 0 and since its an empty array, its currently === to 0 which is why the above code logs to the console

console.log(user.notifications); // []
console.log(user.notifications.length); // 0
// so, user.notifications.length is equal to 0






// Javascript looping 
// its how you repeat code. allows logic to be ran over and over.
// loops are essentially reapeted logic
// they allow us to do things like print hello 10 times, or add all numbers in an array
// there are 4 different loops:


// for loops - 

// while loops - 

// for of - 

// for in -




// for loops
//syntax*
//similair to if statements

/* 


for (initialExpression; conditon; incrementExpression) {
    code to be run goes here,
    code to be run goes here,
    code to be run goes here
};


initial expression is what number youre staring at. think of it as a counter. if we are trying to run a for loop on an array, and we wanted to start at the first item in the array, our initial expression would be: 
let i = 0;
for an object we would most likely do this:
let i = 1;

condition is the condition of the for loop. what condition do we want to meet? do we need to print 'hello' to the console 5 times?
if we wanted to print 'hello' to the console 5 times it would look like this:
for(let i = 1; i <= 5;)

increment expression is how much we want to increment by each iteration of the loop. if i needed 5 hellos to the console i would start my counter at 1. go until its less than or equal to 5, then increment the count by 1 each time. that would look like this:

for (let i = 1; i <= 5; i++) {
    code to be run here,
    you can put more code here
};


*/

// if you want to print console.log('hello') 10 times without a for loop, you would have to type out 10 consonle.log statements. 

// its good practice to define a variable and use it as your counter. a lot of the times people use 'i',

/* 

think of it like this:
10 total times 

50 initial value 
60 what condition to meet for the loop
+1 how to change value each time

for(i = 50; i <= 60; i++)
so we start at 50
we go until we hit 60
and we add 1 to the value each time 
50 + 1 = 51
51 + 1 = 52
52 + 1 = 53
53 + 1 = 54
54 + 1 = 55
55 + 1 = 56
57 + 1 = 56
58 + 1 = 57
58 + 1 = 58
58 + 1 = 59
59 + 1 = 60 
STOPS RUNNING BECAUSE CONDITION TO MEET FOR LOOP HAS BEEN MET.
We went over each item in the array 1 time and added 1 to the value each time. we specified that we only wanted to go until 60 so we got 10 iterations


*/ 


// initial value; iterations; what to add to the iteration     
// i = 1 ; while 1 is less than 10; add 1 to 'i'
//  ! start at 1; stop at 10; add 1 each time !
for (let i = 1; i <= 10; i++) {
    console.log('hello:', i); // hello: 1, hello: 2, hello: 3, hello: 4, hello: 5, hello: 6, hello: 7, hello: 8, hello: 9, hello: 10
};
//console logs 'hello' every time 1 is less than 10. after it prints hello, it adds 1 to i increasing the variable of i's value by 1 each iteration. after 10 iterations of adding 1, i will equal 10 and the code will no longer execute


//  ! start at 1; stop at <=27; add 3 each time !
for (i = 1; i <= 27; i += 3) {
    console.log('this is 3 added to i until we get to 28:', + i);
};
// this is 3 added to i until we get to 28: 1
// this is 3 added to i until we get to 28: 4
// this is 3 added to i until we get to 28: 7
// this is 3 added to i until we get to 28: 10
// this is 3 added to i until we get to 28: 13
// this is 3 added to i until we get to 28: 16
// this is 3 added to i until we get to 28: 19
// this is 3 added to i until we get to 28: 22
// this is 3 added to i until we get to 28: 25

//  ! start at 5; stop at <=15; add 1 each time !
for (i = 5; i <= 15; i++) {
    console.log(i <= 15) // the expression i <= 15 doesnt do any calculation really it just checks to see if i is less than 15 and if its true, itll log 'true' to the console until it gets to 15. so in this case it prints true  11 times because the loop ensures the value of 5 is never greater than 15. since it takes 11 iterations of adding 1 to 5 to get to 15, it prints 'true' 11 times to the console
};

// in the console log below we use the string template literal to make a string of our math equation i.e: 2 x 2 = 4. we use the two template literals with an 'x' to represent multiplication, then we have set the string = to our math inside the other template literal
for (i = 1; i <= 20; i++) {
console.log(`${i}x${i} = ${i * i}`); 
//         i 'x' i     = i * i inside the template literal
};
/* 
2x2 = 4
3x3 = 9
4x4 = 16
5x5 = 25
6x6 = 36
7x7 = 49
8x8 = 64
9x9 = 81
10x10 = 100
11x11 = 121
12x12 = 144
13x13 = 169
14x14 = 196
15x15 = 225
16x16 = 256
17x17 = 289
18x18 = 324
19x19 = 361
20x20 = 400

*/

// using a loop to count backwards from 50 to 10 in increments of 10 starting at 50.
//   starting i at 50; while i is greater than or equal to 0, take 10 away from the value of i
//   start i at 50; subtract 10 each iteration; keep going as long as i >= 0
for (i = 50; i >= 0; i -= 10) {
    console.log(`the value is ${i}`);
};
/*

the value is 50
the value is 40
the value is 30
the value is 20
the value is 10
the value is 0

*/

// starting at 200; while i is greater than 100; subtract 25 from the value of i
for (i = 200; i >= 100; i -= 25) {
    console.log(`let see: ${i}`);
};
/*

let see: 200
let see: 175
let see: 150
let see: 125
let see: 100

*/

for (i = 5; i <= 20; i += 5) {
    console.log('im logged according to the for loop'); // 'im logged according to the for loop' is printed to the console 4 times 
};
console.log('after the loop');




// infinite loops 
// run forever...
// infinite loops are something you want to avoid
// an infinite loops is a loop where the second condition is never met
/*
!while i is less than or equal to 0 (which is always because 20 is always greater than or equal to 0) and add 1 to the value of i. so it will run forever
for (let i = 20; i >=0; i++){
    console.log (i)
}

if you console log an infinite loop to your browser it will be unhappy as itll be doing infinite calculations basically forever until you stop it 
*/

// its a good rule of thumb to never use equality (!=, !==) in for loops. you can acheive the same results but better if you use <=, >= 
// use <=, >= whenever possible and equality only when you HAVE to

/*

for (let i = 1; i !== 20; i += 2)
the !not operator makes it where the code wont run if it hits 20. its better to use greater than or equal to just in case you need to access the value that you specified as !not running

*/





// for loops & arrays
// to loop over an array, start at 0 (because arrays are indexed) and continue to the last index (.length - 1) is an easy way to specifiy the end of the array
// ! array.length - 1 = the way to find the last index of an array !
// ! array.length - 1 allows you to loop through the entire array.
const animalList = [
    'lions',
    'tigers',
    'bears'
];

for (i = 0; i < animalList.length; i++) {
    console.log(i, animalList); // this will output the arrays 
    console.log(i, animalList[i]); // the [i] makes it where we get the values inside of the array printed instead of the array itself
}

/*
the i in the parenthesis prints out the 3 you see. then we call the animalList array so the arrays are displayed in the console. 
console.log(i, animalList) outputs the array itsself:
(3) ['lions', 'tigers', 'bears']
(3) ['lions', 'tigers', 'bears']
(3) ['lions', 'tigers', 'bears']

the i in the parenthesis prints out the index number next to the value stored inside the array. then we called the animalList[i] which displayed  the animals inside the animalList array.
console.log(i, animalList[i]) output:
0 'lions'
1 'tigers'
2 'bears'
*/ 
//iterating over the array to print each value

const examScores = [98, 77, 85, 91, 100, 66];
// start at index 0; while i is less than the length of the array; add 1 array item to the console.log
for(i = 0; i < examScores.length; i++) {
    console.log(examScores[i]); 
    /*
    below is whats logged to console:

    98
    77
    85
    91
    100
    66

    */
};

for(i = 0; i < examScores.length; i++) {
    console.log(i, examScores[i]); 
    /*
    the first i inside the parenthesis is telling the console to log the index number and the i inside the brackets [i] is telling it to log the value inside each index
    
    below is whats logged to console:

    0   98
    1   77
    2   85
    3   91
    4   100
    5   66

    */
};

// this for loop iterates 5 times
// ONLY if 3 - 2 === 1 (due to the 'if' statement)
// if the condition inside the 'if' statement is true it'll log true to the console 5 times
for (i = 5; i <= 50; i += 10) {
    if (3 - 2 === 1) {
        console.log(true); // true true true true true
    };
};

if (3 - 2 === 1) {
    for (i = 5; i <= 50; i += 10) {
        console.log(false);
    };
};

// notice both of the code blocks above execute in the console. im not sure if theres rules or formality to which statement comes first in regards to a 'for' and 'if' statement, but they both function properly


let exampleArray = [43, 09, 17, 54, 76, 6, 3];
for(i = 0; i <= exampleArray.length - 1; i++) {
    console.log(exampleArray[i]); // 43 9 17 54 76 6 3
};


exampleArray = [43, 09, 17, 54, 76, 6, 3];
for(i = 3; i <= exampleArray.length - 1; i++) {
    console.log(exampleArray[i]); // 54 76 6 3
};
// this starts the loop at the 3 indexed number because 'i' our counter variable is set to 3 here


// extra practice 
let carsInDriveWay = {
    Caleb: {
        make: 'honda',
        model: 'civic',
        trim: 'si',
        color: 'red',
        year: 2018
    },
    Cheyanne: {
        make: 'toyota',
        model: 'CH-R',
        trim: 'base', 
        color: 'blue',
        year: 2018
    }
};

console.log(carsInDriveWay.Caleb.model.toUpperCase()); // CIVIC


for (i = 1; i <= 3; i++) {
    if (carsInDriveWay.Caleb.year <= 2015) {
        console.log(`your car is ${2022 - carsInDriveWay.Caleb.year} years old, it may be time to upgrade soon`) // this string logs to console
    }
    else if (carsInDriveWay.Caleb.year >= 2015) {
        console.log(`your car is ${2022 - carsInDriveWay.Caleb.year} years old. Theres no need to upgrade right now`)
    }
    else {
        console.log('please input your vehicle year make')
    }
};




















