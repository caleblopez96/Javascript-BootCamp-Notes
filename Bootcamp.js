//REMEMBER THE PRIMITIVE DATE TYPES IN JAVASRCRIPT:
//Number
//String
//Boolean
//Null
//Undefined
//Symbol
//bigInt
//-------------------------------------------------------------//

//! Numbers
// Javascript has ONE number type
// Positive numbers
// negative numbers
// whole numbers(integers)
// decimal numbers(floats)

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

//! NaN and Infinity 

//? NaN stands for NotaNumber, but indeed a 'number'
//? its a numeric value that represents something that is not... a number

let notANumberExample1 = 0/0; // NaN because 0 cant be / by 0

let notANumberExample2 = 1 + NaN; // 1 + NaN is is still not a number

//? infinity can be postiive or negative 
//? since infinity cant be stored as a number as the numbers are infinite
//? javascript stores the value in Infinity
//? 0 and -0 are both numbers as well
//? NaN isnt always a bad thing. sometimes youre expecting NaN as a result
//? to confirm that the result is or is not a number.

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

//! Variables
//? are like "labeled jars" for a value in javascript
//? variables can be initialized with:
//? let (general usage for a variable that may or may not change)
//? const (general usage for a variable that will NEVER change)
//? var (out dated replaced by let)
//? variables are useful to store data in a name so that we can 
//? recall it later
//? use it 
//? change it

//* syntax

//*                 let variableNameHere = value;
//*                  const variableNameHere = value;
//*                  var variableNameHere = value;

//? for variable naming remember the reserved words, rules and naming practices
//? hint: useCamelCase 

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

//-------------------------------------------------------------------------











//! Unary Operators

//? += operator: adds the given value to the variable (here we used 1)
let newScore = 0;
console.log(newScore +=1); // 1
console.log(newScore);
// in the console just type score += 1;
console.log(newScore +=10); // 11
console.log(newScore); // 11

//? -= operator: subtracts the given value to the variable
let minusScore = 0;
console.log(minusScore += 1); // 1
console.log(minusScore -= 1); // 0
console.log(minusScore); // 0
for (let j = 5; j <= 30; j += 5) {
    console.log( 'the +=5 adds 5 to the current value of i. think of it as i=i+5', + j); // logs string to the console 6 times
};

//? *= operand: multiples 
let baseScore = 5;
let bonusMultiplier = 3;
console.log(baseScore *= bonusMultiplier); // 15
console.log(baseScore); // 15 


//------------------------------------------------------------------------










//! Boolean

//? true or false values. thats it
//? boolean comes in handy when we use logic and write logic in Javascript
//? keep in mind booleans dont use quotes. "true" and "false" are strings
//? NOT boolean values

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

//? variables can change types:
//? ex: they can go from a string to a boolean. a number to a boolean a boolean
//? to a string etc...

let numOfDouts = 12; // 12 (number type)
//in console: numOfDonuts = false; // false (boolean type)

//? in a lot of other languages you cant change a variables type 
//? just because you can doesnt mean you should. 
//? above is just an example of how you can (in console)

//------------------------------------------------------------------------









//! Strings

//? Strings are pieces of text, or strings of characters
//? strings are always wrapped in quotes i.e: 'imAString'
//? Single or double quotes work, but be consistent
//? if you start with a single quote and dont end with a single quote the 
//? string technically doesnt end, so open the string and close the string with
//? the same set of quotation marks

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
// use the string template literal method seen above in order to concatenate strings

// in the last word of your string, include a space if you want it to concatenate them with a string. notice above "i love ". the love has a space after it so that when javascripts concatenates them we get 2 separate words instead of two seperate words merged to one










//! String Indices
//? strings are indexed by characters
//? each character is assigned its own numbers based off position in string
//? left to right starting at 0

//example:
//                  C H I C K E N
//                  0 1 2 3 4 5 6

//? Strings come with properties 





//? .length() property gives you the length in characters of the string

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










//! String Methods 
//? Strings come with a set of built-in methods, which are actions that can be
//? performed on or with that particular string
//? we can do things like 
//? searching within a string
//? replacing parts of a string
//? changing case (upper/lowercase)

//* syntax:
//* string.method();

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










//! .trim()
//? trims the extra white space preceeding and following the string
//? trim will NOT remove white space between words, no matter how much 
//? space is present. it only removes the white space before and 
//? after the string, not anything in the middle

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

//* syntax
//* thing.method(arguments)










//! .indexOf()
//? basically gives you the index of something
//? in the examples below we're finding the index of a string within in a string
//? aka a substring

let tvShow = 'catdog';
console.log(tvShow.indexOf('cat')); // 0 (cat starts at index 0)
console.log(tvShow.indexOf('dog')); // 3 (dog starts at index 3)
console.log(tvShow.indexOf('z')); // -1 (the 'not found' value)

let sport = 'baseball';
console.log(sport.indexOf('ball')); // 4 (ball starts at indec 4)

// if indexOf something is = -1 then you know its not there. this is used 
// when writing logic to see if the thing youre looking for is there










//! .slice()
//? slice takes 'slices' of an exisiting string and gives you pieces 
//* thing.slice(start, end)
//? first value passed to slice is where it starts and the last value is where it
//? ends. note if no ending value is given

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









//! .replace()
//? replaces a value with another value 

//? if the values passed in are not found, it just wont replace anything.


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











//! String Escapes (aka escape characters, escape notation, escape sequence etc)
//? they allow you to use other wise illegal or functional (/,-) characters
//? so javascript wont recognize them

//? 'he said 'lalal'' // this is invalid because we used single quotes twice 
//? in a string javascript intrerprets it as 'he said 'lalal ''
//? he said with a space lalal then empty quotes
//? the simple solution is to do this "he said 'lalala'"// this is valid
//? \n - is a new line
//? \' - single quote
//? \" - double quote
//? \\ - backslash


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


//-------------------------------------------------------------------------










//! string template literals `${}`
//? template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
//? special strings that take in information expressions, other variables, data etc, and spit out one value at the end
//? data is being interpolated inside the string
//* syntax:
//* `${}` 
//(back ticks, dollar sign, open/close curly braces)
// `i am a template literal` (cuz the backticks) 

// not supported in internet explorer

let numSheep = 3 + 4;
console.log(`I counted ${numSheep} sheep`); // I counted 7 sheep 

let username = 'dableb'
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












//! Null and Undefined
//? both represent the idea of nothingness, or the lack of a value, but 
//? theyre different
//? one of the main differences is we dont normally set values to undefined. 
//? you can, but we dont usually do it. normally undefined is a line we get 
//? back from Javascript telling us a that the var refrenced is undefined

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










//! Math Object
//? just a collection of math functionality
//? contains properties and methods for mathematical constants and fucntions
//? most the time you use the math object it will be for its methods like
//? rounding or finding absolute value or generating a random number

//* syntax:
//* Math.method()
// the M is capital ALWAYS


// Math.PI
// representation of pi
let pi = Math.PI; 
console.log(pi); // 3.141592653589793

let pi3 = 3 + Math.PI; // ads the value of 3 to pi
console.log(pi3); // 6.141592653589793





// Math.round()
// rounds your number up or down to the nearest whole number
let floatNumber = 4.5;
console.log(Math.round(floatNumber)); // 5

let floatNumber2 = 3.2;
console.log(Math.round(floatNumber2)); // 3





// Math.abs()
// gives you absolute value of number
// always returns a positive number
// good way to turn a negative number positive
let absNum = -456;
console.log(Math.abs(absNum)); // 456





// Math.pow()
// raises to the power of 
// aka exponent
// the two values passed in are seperated by a comma
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





// Math.random() always gives you a random decimal between 0-1 
// (non-inclusive) so its necessary to multiply it by 10 to get a whole 
// number
// then in order to get rid of the deciamls you just 'floor' it

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










//! typeof !not camelCase! and does not require parthensis with values
//? its an operator like the + or - or / sign.
//? typeof operator is used to determine the type of a given value ie. number,
//? string, boolean etc
//? tells you what type of data something is

let str5 = 'string :)';
console.log(typeof str5); // string

let floatNumber5 = 4.7;
console.log(typeof floatNumber5); // number

let boolean2 = true;
console.log(typeof boolean2); // boolean

//typeof undefined returns undefined
//typeof null returns object (weird quirk)










//! parseInt & parseFloat
//? extracts a number from a string and turns it into a number as long as the first character of the string is a valid digit

//? form data comes as a string. this is one way to extract the numbers to use
//? them mathematically or just to store as a number





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




// parseFloat does everything parseInt does, except it returns the number 
// as a float(with all decimal numbers)

let floatNumber6 = '23.456';
console.log(parseFloat(floatNumber6)); //23.456

//if the number is a whole number it will just display the whole number
let floatNumber7 = '7';
console.log(parseFloat(floatNumber7)); // 7

//first character of the string is not a digit so the result is NaN
let sayingFive = 'i ate 3 shrimp';
console.log(parseFloat(sayingFive)); // NaN



//------------------------------------------------------------------------










//! Making decisions with logic


//? Comparison Operators
//? allows you to compare values in order to make decisions

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

//-----------------------------------------------------------------------

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









//! non equality vs strict non equality

//? != vs !==
//? These are the exact same as the examples above, they just are checking


/* console logged:
10 != '10';  // false
10 !== '10' // true
*/

//? != - not equal to
// checks to see if the value is NOt equal using type coercion

//? !== -strict inequality
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


//----------------------------------------------------------------------










//! conditional statement - making decisions with code
//? conditional statments can have an:


/* IF - Run code if a given condition is true */

/* ELSE IF - if not the first thing, then maybe this other thing */

/* ELSE - if nothing else was true, do this */



//! if statements
//? run certain code 'if' a given condition is true
//* syntax:
//* if () {
//*     code to be execueted goes here
//* }


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




//! else if 
// if the 'if' statement is false, then the 'else if' statement will run 

//* syntax:


//* if () {
//* console.log()
//* }
//* else if () {
//* console.log();
//* }

// replace the 'console.log' with the code that needs to be executed


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










//! else 

//? think of it as 'otherwise'
//? runs if nothing else before it is true.
//? no conditions are needed because the conditions are already set as in if the code above is not 
//? executed, then the else is ran.
//? it wont work if there is not an initial 'if' statement.
//? else does not require parenthesis like 'if' and 'else if' because we dont set the condition
//? else to operate. the condition is 'else' only operates if no other lines of code above it
//? are executed
//? you can only have one 'else' per 'if' statement
//? else is used as kind of like an escape from the expression

//* syntax:

// with: 'if' and 'else if':

//? if () {
//?     console.log()
//? }
//? else if () {
//?     console.log();
//? }
//? else {
//?     console.log()
//? }
//? 
//? just 'if' and 'else':
//? 
//? if () {
//?     console.log()
//? }
//? else {
//?     console.log()
//? }
//? 
//? replace the 'console.log' with the code that needs to be executed


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










//! nesting conditonals

//? nesting is essentially putting conditional statements within 
//? other conditional statements.
//? nested means its inside something. 
//? allows you to have multiple layers of conditions.
//? here we have an 'if' statement inside and 'if' statement
//? and we're basically checking two things before we move onto other 
//? statements. here its the 'if' statements. 
//? if one of the 'if' statements are false, then it will move to the 
//? 'else' statements
//? we use indexOf to ensure it meets the 6 character minimum
//? then we look for indexOf a space (' ') and we check if its not equal to
//? one because if its equal to any number but -1 that means that what youre 
//? looking for is there and in this case we want to check to make sure a 
//? space character is not there
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

//------------------------------------------------------------------------









//! truthy and falsy values

//? all values have an inherent truthy or falsy boolean value
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




//-----------------------------------------------------------------------










//! logical operators: 
//? Allow you to add more than one condition inside parenthesis

//* && - AND

//* || - OR

//* ! - NOT





//? logical AND (&&)
//? takes two seperate boolean expressions (the left and right side of the   locigal operator (&&)) the entire line will only be true only if both sides is true. if one is false, the entire thing is false
//?  Both sides must be true in order for the whole things to be true
//? if you start to need multiple conditions and the line of code becomes to hard to read, or is too long, you're going to have to use nesting.
//? this is great when you just need two things



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

// passwordExample.indexOf(' ') searches for a space in the password because indexOf returns the value -1.
// if it is unable to find the index of whatever you're looking for, in this case its a space (represented as a string that only has a space inside it)

// so we want to check if indexOf passwordExample contains a space. 
// if it does it'll tell you where the index is located with a positive number. 
// if its unable to find it, itll return -1. 
// so we want it to be === -1 because if its === -1 then that means it could not find a space in the indexOf whatever you searched.

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



//? logical OR (||)
//? if one side is true, the whole thing is true
//? it takes two sides, but only one side needs to be true
//? if one or both are true, you will get true 

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



//? logical NOT(!) operator 
//? expression returns true if the expression is false
//? logical NOT(!) operates on a SINGLE expression and evalutes to true if the expression is false


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









//! Operator precedence 
//? operator precedence will run in the order below unless there are parenthesis. expressions inside the parenthesis will evaluate first regardless of operator precedence. you can use this to your advantage by using parenthesis to dictates what runs first.
//? precedence order :
//? NOT (!) has higher precendence than 
//? and (&&) has higher precendece than 
//? OR (||)
//? this order can be alterted by using parenthesis

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



//-----------------------------------------------------------------------










//! switch statements
//* syntax:
/*

//* switch (variableToBeSwitched) {
//* case 1:
//*    expression;
//*    break;
//* case 2: 
//*    expression;
//*    break;
//* case 3: 
//*    expression;
//*    break;
//* default:                   (like 'else': ends the switch)
//*    expression;
//* }

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

//? heres how to write the above code with a switch statement
//? if you do not use the break; after the code has run and it has found, 
//? one of the case's to be true, it will log every case after that. 
//? In order to stop that we use break; at the end of every case so that,// it only logs the one that is correct. since dayOfWeek currently ===, 
//? wednesday is logged to the console. 
//? without the break, wednesday, thursday, friday, saturday and sunday would also be logged to the console.

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

// the default value in a switch expression is kinda like else:
// in a sense that it kinda terminates or gives a default value to go off of if none of the above expressions are ran.


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

// the code above is the same as the code below. 
// since we had emoji's that were the same color as each other 
// we can combine them into 1 case by specifying the case and listing out the cases before the case expression
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





//----------------------------------------------------------------------










//! ternary operator (three pieces 'ternary')
//? if this condition is true this code runs, if not this other code runs

//* condition ? expressionIfTrue: expressionIfFalse

//? takes an 'if' and 'else' statement and combines them to one line of code
//? this only works with simple yes or no (so 'if' and 'else')

// regular expression without the ternary operator
let num9 = 9;

if (num9 === 9) {
    console.log('lucky');
}
else {
    console.log('unlucky');
}




// above expression with ternary operator
// if num9 === 9 ? console.log(lucky) : else console.log(unlucky)

num9 === 9 ? console.log('lucky') : console.log('unlucky'); // lucky
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










//! arrays & objects - collections of data


//? arrays - ordered colletions of values
//? ex of things that may be stored in an array:
//? list of comments on an IG post
//? collection of levels in a game 
//? songs in a playlist 
//? javascript arrays dont have to contain data of the same type: they can include strings, numbers, booleans etc. other programming languages only allow one type of data to go in 1 array
//? use const to declare arrays. 
//? Since arrays are not primitive data, 
//? the values inside of the array can change, as long as the variable name does not

//creating arrays

//* syntax:
//* const arrayName = [];
// new Array(value, value, value);            
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










//! array indices
//? arrays are index'd meaning they start counting the corresponding num at 0

//? let array = [5, 10, 15, 20]
//?              0  1   2   3
//? .length will give you 5 because there are 5 values
//? .indexOf(10) will give you 1 because 1 is at index 1

let colorArray2 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', 'white']
console.log(colorArray2.length); // 8
console.log(colorArray2.indexOf('yellow')); // 2
console.log(colorArray2);







//? Moddifying arrays
//* syntax:
//* arrayName[indexNumber] = 'the value you want to change at the specified index';

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









//! common array methods

//? push() - adds to end (specify what to add in parenthesis)

//? pop() - remove from end (parenthesis stay empty- removes from end)
//? and returns new length of array 

//? shift() - remove from start

//? unshift() - add to start


let topSongs = [
    'first time i ever saw your face', 
    'god only knows',
    'a day in the life', 
    'life on mars'
];





//! push() 
//? adding to end
topSongs.push('fortunate sun')
console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life, life on mars, fortunate sun]






//? pop() - take value from end
topSongs.pop();
console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life, life on mars,] it removed forutnate sun from arrray

console.log(topSongs.pop()); // life on mars 
// returns to the console the value it removed

console.log(topSongs); // [first time i ever saw your face, god only knows, a day in the life]

let nextSong = topSongs.pop(); // took the value of the last song in the array and stored it in a variable


console.log(nextSong); // a day in the life 

// notice once you 'pop' an item its gone
// its great for things like to do list where, once you do something, its removed forever







//! unshift() 
//? always adds the value to the very first item of the array. 
//? seperate multiple values in the parenthses with commas

let dishesToDo = ['baking pan'];

dishesToDo.unshift('large plate'); // adds 'large plate' to the first item in the array

dishesToDo.unshift('small plate'); // adds 'small plate' to the first item
console.log(dishesToDo) // ['small plate', 'large plate', 'baking pan']







//! shift() removes first item from array. seperate multiple values in the parentheses with a comma

console.log(dishesToDo.shift()); // small plate (returns item it removed)
console.log(dishesToDo); // ['large plate', 'baking pan'];
// it removed the first item 'small plate' from the array

dishesToDo.push('cookie sheet', 'cutting board');
console.log(dishesToDo); // ['large plate', 'baking pan', 'cookie sheet', 'cutting board']

dishesToDo.unshift('knife', 'spoon');
console.log(dishesToDo); // ['knife', 'spoon', 'large plate', 'baking pan', 'cookie sheet', 'cutting board']




//! more array methods 

//? concat() - merges array (concatnates arrays)

//? includes() - helps look for value in array and returns true or false

//? indexOf() - gives you index number of value

//? join() - creates a string from array 

//? reverse() - reverses an array 

//? slice() - copy portion of an array

//? splice() - remove/replace elements

//? sort() - sorts an array 







//! concat()
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








//! includes()
//? searches the array for a value and returns boolean value
//? if multiple values are received, it only needs to find one in order for it to return true 
//* syntax:
//* array.includes(value youre looking for)
//* array.includes(value youre looking for, fromIndex)
//? from index allows you to specify where your search starts from in terms of index position

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








//! indexOf()
//? Searches for value and returns its index position
//? if value is not present, it returns -1

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









//! reverse()
//? reverses order of array
//? mutates original array

let letters = ['t', 'c', 'e', 'p', 's', 'e', 'r'];
console.log(letters.reverse()); // ['r', 'e', 's', 'p', 'e', 'c', 't']
console.log(letters); // ['r', 'e', 's', 'p', 'e', 'c', 't']
// notice after we used .reverse(), it stored the reversed array into the original variable









//! join()
//? 'joins' the elements of an array into a string
//? turns all values into a string, then 'joins' them to 1 string
//? the default value to seperate values inside of the string is commas,
//? but you can change it to whatever you want as long as you specify in the .join() parentheses

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








//! slice()
//? takes portion of array, and makes new array
//? with the specified portion(whats inside the parentheses) with the index of the values

//* syntax:
//* array.slice(start, end);

//? if you dont specify an end value it will slice until the end of the array
//? if no values are given to the parenthesis it makes a new copy of the entire array. 
//? no values specify entire array. 
//? allows you to make a quick copy of an array because it doesnt impact the original

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








//! splice()
//? remove/replace elements in an array that are not at the beggingng or end 
//? because thats what push(), pop(), shift() and unshift() are for

//* syntax:
//* array.splice(index start, how many to delete, item to be put in)

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









//! sort()
//? array.sort()
//? if you dont pass in a function to specify how it sorts, 
//? then it sorts alphabetically for strings by UTF-16 character codes for numbers which results in a weird sort

let people = ['robinson', 'angie', 'jolene', 'maggie', 'roxanne'];
console.log(people.sort()); // [angie, jolene, maggie, robinson, roxanne]
// sorted alphabetically

console.log(people); // [angie, jolene, maggie, robinson, roxanne] is the new value stored in the variable people

let numArray = [12, 17, 81, 0, 5, 73];
console.log(numArray.sort()); // [0, 12, 17, 5, 73, 81]
// converts every number to a string then sorts them based on their UTF-16 codes
// this can lead to unexpected results




//----------------------------------------------------------------------









//! Refrence types 

//? primitive types are value type variables
//? javascript stores the actual value  

//? non primitive data types like arrays and objects are stored as refrences. the variable doesnt actually hold the array,
//? it just holds the 'label' of the array as reference to its place in memory 
//? think of it like this 
//? let array = [1, 2, 3]  #refrence ID :129966
//? the variable "array" points to the refrence and the reference is where the actual array is stored

//? when you put an array in variable, the variable does NOT hold the array, it holds an arrow (or reference) pointing to the array

let nums = [5, 6, 7, 8];
let otherNums = nums; 
console.log(otherNums); // [5, 6, 7, 8]
nums.push(9); // add 9 to the end of the array
console.log(nums); // [5, 6, 7, 8, 9]
console.log(otherNums); // [5, 6, 7, 8, 9]
//notice when we changed nums with .push(9) we updated the value of the array, but the refrence that javascript points to didnt change which is why nums and otherNums output the same array, but only num recevied the push (on line 2010);

// same happens if you change otherNums. 
// since nums and otherNums are equal to each other, 
// if one changes they both change

console.log(otherNums.pop()); // 9
// logs the removed value to the console 
console.log(nums); // [5, 6, 7, 8]

//? the changes happen to both despite only one receiving the method.
//? thats because the array value changes, however the refrence to the array that javascript is pointing to does not change. 
//? so since both variables are pointing to the same value(the same array,
//? and arrays arent primitive, they change values but keep the same pointer. 









//! Const with arrays

//? even if you declare an array using const, 
//? the values stored inside the array can change. 
//? the values are being changed inside of the array, 
//? but since the const is pointing to a reference, and not the variable
//? or variable name its self, it can change

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











//! nested arrays
//? we can store arrays inside other arrays:
//* syntax:

//*      const arrayName = [ 
//*        [value,value],                    element 0
//*        [value,value,value],              element 1
//*        [value, value]                    element 2
//*        [value, value, value, value]      element 3
//*       ];


const colorArray3 = [
    ['red', 'crimson'],                 // element 0
    ['orange', 'dark orange'],          // element 1
    ['yellow', 'golden rod'],           // element 2
    ['green', 'olive'],                 // element 3
    ['blue', 'navy blue'],              // element 4
    ['purple', 'orchid']                // element 5
];
//each array, or item, or object inside of the array is considered 1 element. 
// and for something like an array inside of an array, 
// the nested array's items are indexed

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









//! Javascript Objects
//? curly braces signify an object
//* syntax:
//* let myObject = {}

//? objects allow us to store data that we can assciate in groups of things by specifying labels (properties)
//? objects are collections of properties
//? properties are a key-value pair
//? and properties are pairs of information 
//? PROPERTIES ALWAYS EXIST AS KEY VALUE PAIRS
//? commas go after all key value pairs except the last. 
//? if there is only one property inside of the object, 
//? there is no need for a comma. 
//? for every property after the first and excluding the very last, must have a comma

//? an object is just a container that holds information in the form of key-value pairs

//? objects are NON PRIMITIVE data types:
//? meaning the value is stored in the refrence to the object. 
//? meaning you can change things inside of the object even if its declared as a const. 

//? rather than accessing data using an index, we use custom keys

//? javascript doesnt care what you name your property. 
//? it can be a number or a string. 
//? no matter what it is, the key is converted TO A STRING.

//* syntax:

//* const object = {
//*    property1: value,
//*    property2: value,
//*    property3: value
//* }

//* const object = {
//*    property1: value,
//*     -key-   -value-                           key value pair
//*    property2: value
//* };


//                             username: -----> dableb
//                                key           value

//                              upvotes: -----> 7
//                                key         value

//                                text: -----> 'great post'
//                                 key            value









//! object literals


//* {

//* }


//? creates an empty object with no key value pairs


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

// getting totalSteps 
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
//* syntax:
//* objectName[property]
console.log(numberObject[100]); // one hundred 

// heres how the above worked nehind the scenes:

//*    const numberObject = {
//*        '100': 'one hundred'
//*        '200': 'two hundred'
//*     }

// it converts the key to a string then searches for that string. 
// the number you put inside the brackets (above its 100) is what it converts into a string. 

// then it searches the object for it. 
// in the example above it converts the 100 inside the brackets to '100'
// and its able to find that property inside of the object because 
// the same thing happened inside the object, the 100: became '100'. 
// you dont have to do the string conversion inside of the brackets, it does it for you.


// this is how to access 'other wise' invalid javascript characters.
// notice we have an object key value pair that are both strings, however that doesnt matter to javascript 

// normally you wouldnt be able to start the name of something in javascript with a number. for example:

// const 76Names = {} is invalid:
// because you cant start a variable name with a number, however, you can inside of objects

const numberObject2 = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!' // string stored as both key value pair
};
console.log(numberObject2); 
// {16: 'sixteen', 
// 100: 'one hundred', 
// 76 trombones: 'great song!'}

// the brackets allow us to access a key or value that would otherwise throw an error in javascript 

// dot notation example: 
// numberObject2.76 trombones            
// would throw an error because of the space in between 76 trombones

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
// in order to declare a variable that has the value of a property of a string,
// you use the property name inside of quotes

// declaring the variable color equal to the value of 'yellow' inside of the object
let color = 'yellow';
console.log(colorPalette[color]); // #f9ca24
// the value of 'yellow' inside of our object is #f9ca24 thats why the console printed the hex code. here color's value isnt a string that says 'yellow', its the value of the yellow key in the object colorPalette

console.log(colorPalette.blue); //#30336b
console.log(colorPalette.yellow); // #f9ca24
console.log(colorPalette['yellow']); // #f9ca24
// console.log(colorPalette[yellow]) 
// without the quotes would look for a variable called yellow. 
// theres no variable called yellow, so it wont find anything. 
// if I want to find the property inside the object it has to be in quotes

let mysteryColor = 'red';
console.log(colorPalette['red']); // #ed4bd4b

// below we stored the value of 'red' from our object colorPalette into the variable of mystery color. 
// then we logged the variable and it returned the value of 'red' inside of the object 
// because thats what we declared our variable to be equal to.

console.log(colorPalette[mysteryColor]); // #ed4bdb4

// console.log(colorPalette.mysteryColor) 
// would not work because with dot notation its looking for a key called 'mystery color' 
// and inside of our colorPalette, there is not.
// it wont throw an error, but it will throw undefined if you were to use dot notation



// we're forced to use the square brackets when the name of the property we are trying to access has invalid identifiers (illegal characters)

// good rule of thumb is to use dot notation whenever possible 
//and use the square brackets when you have to. 






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

// updating properties inside the object.
fitBitData.workoutsThisWeek = '6 of 7';
console.log(fitBitData.workoutsThisWeek); // 6 of 7
// the property workoutsThisWeek inside of the fitBitData objet was updated to 6 of 7 from 5 of 7. 
// the new permanent value of workoutsThisWeek is now 6 of 7 
// until it is changed again.

// adding 7.5 to the value of totalMiles 
fitBitData.totalMiles += 7.5;
console.log(fitBitData.totalMiles); // 219
// 7.5 was added to the value of fitBitData.totalMiles leaving the new permanent value of totalMiles to 219

// adding a new property inside of an object
fitBitData.heartStillBeating = true;
console.log(fitBitData); // {45: 'fourty five', totalSteps: 305077, totalMiles: 219, avgCalorieBurn: 5755, workoutsThisWeek: '6 of 7', avgGoodSleep: '2:13', heartStillBeating: true'}

// adding property to empty object
//* syntax:
//* myObject['key name'] = value;

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

// deleting a property (key value pair) out of an object

// deleting the key value of gender
// deleting the key deletes the value because a property cannot exist without a key value pair

//* syntax:
//* delete myObject.key;
delete userReviews.gender;
console.log(userReviews); // {dableb: 7, username: 'your username'}











//! nested arrays & objects

//? you can nest objects inside of an array
//? you can nest an array inside an object 

//? nesting objects inside of an array
//? also referred to as an array of objects
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

// accessing values inside the object student using keys
//* syntax:
//* object.object.key       object.object.key
console.log(student.exams.midterm + student.exams.final); // 180
console.log((student.exams.midterm + student.exams.final) / 2); // 90

// accessing the array inside the object
//* syntax:   object.key[]             
//(use brackets and index to access array)

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

// in student object we have student as an object. 
// strengths is an array. 
// and exams: {} is an object. 
// so inside the object 'student' there is an array represented by the key strengths and there is another object represented by the key exam.

// object with an array represented by the key 'board' and inside that 'board' array we have 3 more arrays
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









//! objects and reference types 

//the reason arrays and objects are stored as 'refrences' is because normally the value's put inside of them are too much for the computer memory.

//? a variable is stored straight to the computers memory because
//? its usually not any where near the size of some arrays or objects,
//? and that particular place in memory can hold a value such as a string or a number. 
//? this is why objects and array's are normally declared with const. since javascript points to the refrence of the actual array/object, 
//? the values inside of the objects and arrays are mutable regardless of being declared by const.

//making two objects with the same data inside of them. 
// when you compare them to see if theyre equal, although they have the exact same keys and pairs, THEY ARE NOT EQUAL. 
// Javascript is not checking the keys and value pairs when it compares the two objects. 
// its looking at the reference of the object. 
// since each object has its own reference, javascript says they are not equal

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

// adding 4 to the array randomArray
actualRandomArray.push(4);
// both arrays receive the push because they have the same refrence address in memory (line 2566)
console.log(randomArray); // [1, 2, 3, 4]
console.log(actualRandomArray); // [1, 2, 3, 4]

// when you compare with == or === youre checking for matching reference addresses. if found, itll return true

console.log(randomArray == randomArray2); // false
// the above console log is false, 
// because although the arrays contain the same key value pairs,
// randomArray and randomArray2 are two seperate arrays, 
// and have their own unique reference stored in memory. 
// regardless of equality or strict inequality

console.log(randomArray === randomArray2); // false 
// the above console log is false, because although the arrays contain the same key value pairs, 
// randomArray and randomArray2 are two seperate arrays, and have their own unique reference stored in memory. 
// regardless of equality or strict inequality

console.log(randomArray == actualRandomArray); // true
console.log(randomArray === actualRandomArray); // true
// these two variables both reference the same address to the array that they contain, therefore they are equal. 
// they are equal in terms of equality and strict equality 

const user = {
    username: 'cherrygarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

// this example below will NOT print anything to the console. 
// user.notifications contains an empty array, 
// and it would appear that we are asking if its equal to an empty array, 
// but remember, each array has its own unique reference in memory. 
// they are both blank arrays, but they are not the same blank array because they both hold different spots in memory. 
// you would need to do something like create a new variable and set that new variable to be equal to the variable with the array you want to copy
/* 

if (user.notifications === []) {
    console.log('no new notifications')
};

*/ 

// instead use this:
if (user.notifications.length === 0) {
    console.log('this is how you do it') // this is how you do it 
};
// here we are checking if user.notifications length is === to 0 
// and since its an empty array, its currently === to 0 
// which is why the above code logs to the console

console.log(user.notifications); // []
console.log(user.notifications.length); // 0
// so, user.notifications.length is equal to 0













//?! Javascript looping 
//? its how you repeat code. 
//? allows logic to be ran over and over.
//? loops are essentially reapeted logic
//? they allow us to do things like print hello 10 times, or add all numbers in an array
//? there are 4 different loops:


//?? for loops - 

//? while loops - 

//? for of - 

//? for in -









//? for loops
//* syntax:
//? similair to if statements




// *for (initialExpression; conditon; incrementExpression) {
//*     code to be run goes here,
//*     code to be run goes here,
//*     code to be run goes here
//*  };


//? initial expression is what number youre staring at. 
//? think of it as a counter. 


//? if we are trying to run a for loop on an array, 
//? and we wanted to start at the first item in the array, 
//? our initial expression would be: 
//? let i = 0;

//? for an object we would most likely do this:
//? let i = 1;

//? condition is the condition of the for loop. 
//? what condition do we want to meet? 
//? do we need to print 'hello' to the console 5 times?
//? if we wanted to print 'hello' to the console 5 times it would look like this:

//? for(let i = 1; i <= 5;)

//? increment expression is how much we want to increment by each iteration of the loop. 
//? if i needed 5 hellos to the console i would start my counter at 1. 
//? go until its less than or equal to 5, 
//? then increment the count by 1 each time. that would look like this:

// for (let i = 1; i <= 5; i++) {
//    code to be run here,
//    you can put more code here
// };




// if you want to print console.log('hello') 10 times without a for loop, 
// you would have to type out 10 consonle.log statements. 

// its good practice to define a variable and use it as your counter. 
// a lot of the times people use 'i',

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
// start at 1; stop at 10; add 1 each time 


for (let i = 1; i <= 10; i++) {
    console.log('hello:', i);
}; 


// hello: 1, hello: 2, hello: 3, hello: 4, hello: 5, hello: 6, hello: 7, hello: 8, hello: 9, hello: 10

//console logs 'hello' every time 1 is less than 10. 
// after it prints hello, it adds 1 to i increasing the variable of i's value by 1 each iteration. 
// after 10 iterations of adding 1, i will equal 10 and the code will no longer execute


//  start at 1; stop at <=27; add 3 each time !
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

//  start at 5; stop at <=15; add 1 each time !
for (i = 5; i <= 15; i++) {
    console.log(i <= 15) 
};

// the expression i <= 15 doesnt do any calculation.
//  it just checks to see if 'i' is less than 15 and if its true,
//  itll log 'true' to the console until it gets to 15. 
// so in this case it prints true  11 times because the loop ensures the value of 5 is never greater than 15. 
// since it takes 11 iterations of adding 1 to 5 to get to 15,
// it prints 'true' 11 times to the console


// in the console log below we use the string template literal to make a string of our math equation i.e: 2 x 2 = 4. 
// we use the two template literals with an 'x' to represent multiplication, 
// then we have set the string = to our math inside the other template literal
for (i = 1; i <= 20; i++) {
console.log(`${i}x${i} = ${i * i}`); 
//         i 'x' i     =   i * i inside the template literal
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
// starting i at 50; while i is greater than or equal to 0, take 10 away from the value of i
// start i at 50; subtract 10 each iteration; keep going as long as i >= 0
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









//! infinite loops 
//? run forever...
//? infinite loops are something you want to avoid
//? an infinite loops is a loop where the second condition is never met
/*
while i is less than or equal to 0 (which is always because 20 is always greater than or equal to 0) and add 1 to the value of i. so it will run forever
for (let i = 20; i >=0; i++){
    console.log (i)
}

if you console log an infinite loop to your browser 
it will be unhappy as itll be doing infinite calculations
forever until you stop it 
*/

// its a good rule of thumb to never use equality (!=, !==) in for loops. you can acheive the same results but better if you use <=, >= 
// use <=, >= whenever possible and equality only when you HAVE to

/*

for (let i = 1; i !== 20; i += 2)
the !not operator makes it where the code wont run if it hits 20. its better to use greater than or equal to just in case you need to access the value that you specified as !not running

*/










//! for loops & arrays
//? to loop over an array, start at 0 (because arrays are indexed) 
//? and continue to the last index.
//? (.length - 1) is an easy way to specifiy the end of the array
//? array.length - 1 = the way to find the last index of an array.
//? array.length - 1 allows you to loop through the entire array.
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
    the first i inside the parenthesis is telling the console to log the
    index number and the i inside the brackets [i] is telling it to log
    the value inside each index
    
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
// if the condition inside the 'if' statement is true 
// it'll log true to the console 5 times
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

// notice both of the code blocks above execute in the console. 
// im not sure if theres rules or formality to which statement comes first in regards to a 'for' and 'if' statement, 
// but they both function properly


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
        year: 2020
    }
};

console.log(carsInDriveWay.Caleb.model.toUpperCase()); // CIVIC


for (i = 1; i <= 3; i++) {
    if (carsInDriveWay.Caleb.year <= 2015) {
        console.log(`your car is ${2022 - carsInDriveWay.Caleb.year} years old, it may be time to upgrade soon`) // this string logs to console 3 times due to the 'for' statement being true for 3 iterations
    }
    else if (carsInDriveWay.Caleb.year >= 2015) {
        console.log(`your car is ${2022 - carsInDriveWay.Caleb.year} years old. Theres no need to upgrade right now`)
    }
    else {
        console.log('please input your vehicle year make')
    }
};

const myStudents = [
    {
        firstName: 'zeus',
        grade: 86
    },

    {
        firstName: 'artemis',
        grade: 97
    },

    {
        firstName: 'hera',
        grade: 72
    },

    {
        firstName: 'Apollo',
        grade: 90
    }
];

// how to access object inside of array
// we have to get the index of myStudents because its an array and the items are indexed. so in order to access the object, we use the index because each object is indexed in the array just like numbers
for (i = 0; i < myStudents.length; i++) {
    console.log(myStudents[i]); 
    /* 
    {firstName: 'zeus', grade: 86}
    {firstName: 'artemis', grade: 97}
    {firstName: 'hera', grade: 72}
    {firstName: 'Apollo', grade: 90}
    
    */
};

// the code below is the same as the code above. 
// here we take each object inside of the array and turn it into a variable,
// so our string template literal doesnt look like this:
// `${myStudents[i].firstName.grade} scored {grade}`

for (i = 0; i < myStudents.length; i++) {
    let studentTestScore = myStudents[i];
    console.log(`${studentTestScore.firstName} scored ${studentTestScore.grade}`);
};

/*
zeus scored 86
artemis scored 97
hera scored 72
Apollo scored 90
*/


// we stored the objects of the array inside the variable studentTestSCore 
// because we need a way to access the objects of the array. 

// And since we're going to be referring to just the objects multiple times we stored it in the variable.

// We still have to access the key value pairs with dot notation, 
// but getting the index of each object is key to getting the actual object to display and not the word 'object'



// looping through a string letter by letter starting from the end of the string. 
// which is why we set i to be word5.length - 1.
// because .length gives us the amount of characters and we need the index so we just minus one from the .length of the variable

const word5 = 'stressed';
let reversedWord5 = '';
for(i = word5.length - 1; i >= 0; i--) {
    // console.log(i) //  7 6 5 4 3 2 1 0 (tells u index position)
    // console.log(word5[i]); // d e s s e r t s (index position of each character in the variable)
    reversedWord5 += word5[i];
    console.log(reversedWord5); 
    /*
    d
    de
    des
    dess
    desse
    desser
    dessert
    desserts
    */
};


// averaging the grades in the myStudents array
// set a new variable called total to 0
// set counter to 0
// while 0 is less than the length of the array(myStudents.length = 4) (common way to loop through the entirety of something is to use that object.length)
// define new variable studentObj and set it to equal the object so we can easily refer to the objects inside of the array
// set total to be += the grades of the student so is equal to the value of grade inside of the object
// console log studentObj.grade to ensure we got the right values
// outside of the 'for' statement:
// console.log total to ensure we get the total of the grades 

let total = 0;

for (i = 0; i < myStudents.length; i++) {
    let studentObj = myStudents[i]; // setting a variable to represent each object inside of the array
    total += studentObj.grade; // total += the value of key grade
    console.log(studentObj.grade); // 86 97 72 90
};
console.log(total); // 345
console.log(total / myStudents.length); // 86.25
//          345  / 4
// if the two pervious logged statements are logged inside of the loop,
// youll get each answer logged to the console 4 times as thats how much the loop iterates. 
// so in order to just get our answer once, 
// we log it outside of the for statment so it doesnt get caught in the loop










//! nested loops



let str = 'lol';
for(i = 0; i <= 4; i++) {
    console.log('outer:', i);
};

/*
'outer:' 0
'outer:' 1
'outer:' 2
'outer:' 3
'outer:' 4
*/


for (i = 0; i <= 4; i++) {
    console.log('outer:', i);
    for (let j = 0; j < str.length; j++) {
        console.log(' inner:', [j]);
    }
};
/* 
the console log:
outer: 0
inner: [0]
inner: [1]
inner: [2]
outer: 1
inner: [0]
inner: [1]
inner: [2]
outer: 2
inner: [0]
inner: [1]
inner: [2]
outer: 3
inner: [0]
inner: [1]
inner: [2]
uter: 4
inner: [0]
inner: [1]
inner: [2]
*/

for (let i = 1; i <= 10; i++) {
    console.log('outter loop:', i);
    for (j = 10; j >= 0; j -= 2) {
        console.log('       Inner loop:', j);
    }
};

const gameBoard = [
    [ 4, 32, 8, 4 ],
    [ 64, 8, 32, 2 ],
    [ 8, 32, 16, 4 ],
    [ 2, 8, 4, 2 ]
];

let totalScore = 0;
for (i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i];
    for (j = 0; j < row.length; j++) {
        totalScore += row[j];
    }
};
console.log(totalScore); // 230
// the total score variable now holds the row[j] 
// which is calling each individual value in each array row

// we need to have at least two loops to access each element because we have two arrays that are nested. 
// for every sub array we would need another loop

// the outer for loop will iterate once, 
// then the nested loop will iterate in its entirety
// before it returns back to the first nested 'for' loop










//! while loops
//? a while loop continues to run as long as its condition is true 
//? "do 'this' while 'this' is true"

//* syntax:

//* while (this statement is true) {
//*    run this code
//* }


let num0 = 0;

while (num0 < 10) {
    console.log(num0); // 1 2 3 4 5 6 7 8 9 
    num0++; // adds one num0 while the 0 is less than 10
};

for (i =0; i <= 5; i++) {
    console.log(i) // 0 1 2 3 4 5 
};

// the for loop above is the same as the while statement below 
i = 0;
while (i <= 5) {
    console.log(i); // 0 1 2 3 4 5 s
    i++;
};

// for loops are the better option out of the two above.
// 'while' excels when you have a loop that you dont know how many iterations it needs
// good for continuing logic


//computer guesses a number until it guesses the right number
const target = (Math.floor(Math.random() * 10)); 
// target variable is the correct number. 
// generates a random number 1 - 10 that is to be guessed 

let guesses = (Math.floor(Math.random() * 10)); 
// generates another random number this time as a guess to the target
// while the guess is not equal to the target
while (guesses !== target) {
    console.log(`target: ${target} guess: ${guesses}`)
    guesses = (Math.floor(Math.random() * 10));
};
console.log(`target: ${target} guess: ${guesses}`);
console.log(`congrats, you guessed the number`);
// if you dont have the console log with the template literal coded twice, 
// once inside the 'while' loop and once outside the loop, 
// once the number is guessed, it wont log the target and guess 
// because once the guess is === to the target, 
// the loop stops to execute when we actually need it to log one more thing

/*

while (some condition) {
    in the loop, updaste or attempt to make that condition false
}

if theres nothing to to make the condition false, itll run forever

*/ 








//! break;
//? used inside of loops to break out of the loop and stop its execution.
//? whenever javascript encounters break, the loop that was executing is now done
//? uncommon in for loops because we write the exact rules of how many times it should run


for (i = 0; i <= 10; i++) {
    console.log(i); // 0 1 2 3 4 5
    if (i === 5) {
        break;
    }
};

// the code above stopped at 5 
// although the for loop specified rules that said it should go to 10.

// break is a good way to force yourself out of a loop, 
// but its not commonly used with 'for' loops 
// because in a for loop you can set the iterations as you make the rules. 
// break is much more commonly used in 'while' loops 
// because 'while' loops typically are constructed 
// when you dont know how many times a loop will iterate

// the break will only stop the loop that its in. 
// it wont break the entirety of the loop.

while (true) {
    if (target === guesses) break;
    console.log(`target: ${target} guess: ${guesses}`);
    guesses = (Math.floor(Math.random() * 10));
};
console.log(`target: ${target} guess: ${guesses}`);
console.log(`congrats, you guessed the number`);










//! for...of
//? a nice and easy way to iterate over array and other iterable 
//? for of will only work on an iterable object:
//? i.e. a string by getting the characters, or an array by getting a value

//* syntax: 

//* for (variable of iterable) {
//*     statement
//* }

// the variable inside the 'for' statement
// will store each individual element of the array, or of the string(the iterable)




let subreddits = [ 'soccer', 'popheads', 'cringe', 'books', ];
for (i = 0; i < subreddits.length; i++) {
console.log(subreddits[i]); // soccer popheads cringe books
};

// when we use i to access each element it can be a lot of work and is honestly a litte confusing at least at first


// this is the same as the for loop above
// sub is the new variable that is going to hold the elements of the array
//   let sub of subreddits (the array or iterable)
for (let sub of subreddits) {
    console.log(sub); // soccer popheads cringe books
};
// the above result is the same as the first for loop just much easier
// to write, read, and its a lot less lines of code.

let facebookStatus = [ 'happy', 'sad', 'mad', 'glad', 'gloom' ]
for (let fbStatus of facebookStatus) {
    console.log(fbStatus); // happy sad mad glad gloom
};
// 'fbStatus' is the variable that we stored the extracted array information in

for (let char of "hello everyone") {
    console.log(char.toUpperCase()); // H E L L O  E V E R Y O N E
};
// the above code iterates over the string 'hello everyone' 
// by displaying each letter of the string


const magicSquare = [
    [ 2, 7, 6 ],
    [ 9, 5, 1 ],
    [ 4, 3, 8 ]
];

for (i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (j = 0; j < row.length; j++) {
    console.log(row[j]); // 2 9 4 
    sum += row[j];  
}
console.log(`${row} summed to ${sum}`);
};
/*

2
7
6
2,7,6 summed to 15
9
5
1
9,5,1 summed to 15
4
3
8
4,3,8 summed to 15


*/ 

// rewrote as a for of loop 
for (row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
};
/*

4,3,8 summed to 15
2,7,6 summed to 15
9,5,1 summed to 15
4,3,8 summed to 15

*/

// here is where a for loop is better
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (i = 0; i < words1.length; i++) {
    // console.log(words1[i], words2[i]);
    console.log(`${words1[i]}${words2[i]}`); // mailbox milkshake bathtub blackberry
};

const words3 = ['this', 'just', 'for', 'of'];
const words4 = ['is', 'practice', 'for', 'loops']
for (i = 0; i < words3.length; i++) {
console.log(words3[i], words4[i]);
};









//! for of with objects
//? 'for of's' dont work with objects 
//? because in Javascript objects are not iterable like arrays or strings. 
//? instead javascript has Object.keys() and Object.values() 
//? which can help you loop over keys inside an object because they are iterable 
 
//* syntax:

//* Object.keys()
// inside partenthesis goes the name of the object you want to get the keys from 


// to get the values use:

//* Object.values()
// inside the parenthesis goes the name of the object you want to get the values from

/*
the code below does not work because javascript can not loop over an object as it is not iterable

for (let x of movieReviews) {
    console.log(x);
}

*/ 



const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10, 
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    Coraline: 7.5
};

// how to access the keys
console.log(Object.keys(movieReviews)); // ['Arrival', 'Alien', 'Amelie', 'In Bruges', 'Amadeus', 'Kill Bill', 'Little Miss Sunshine', 'Coraline']

// how to access the values
console.log(Object.values(movieReviews)); //[9.5, 9, 8, 9, 10, 8, 8.5, 7.5]


// using a for of loop with Object.keys() and Object.values()
// step 1: use 'for' then declare new variable that youre going to use to refer to the keys. you declare a variable so you dont have to type out Object.keys() the entire time.
// step 2: console.log movie because our Object.keys(movieReviews) aka our keys are stored in the variable movie as its what we declared in our for (of) loop
// step 3: 

for (let movie of Object.keys(movieReviews)) {
    console.log(movie, movieReviews[movie]); 
}

// we cant use dot notation. 
// if we need to access part of an object and the keys are stored in a variable like we have done with 'movie' 
// then you MUST use square brackets, dot notation WILL NOT WORK

// this is how to read the expression in the console.log
// movie, ( which is just a variable holding the keys of our object)
// movieReviews aka our object 
// inside the brackets goes the variable holding the keys aka movie


/* 

the console log of the above expression:   
Arrival 9.5
Alien 9
Amelie 8
In Bruges 9
Amadeus 10
Kill Bill 8
Little Miss Sunshine 8.5
Coraline 7.5


*/ 

// the above is how to successfully iterate over an objects keys-value pairs

// something to note on keyvalue pairs. 
// I can set all keys to strings 
// because theyre turned into strings anyways 
// because thats how javascript works with objects

const hotelReviews = {
    'Marriot': 7,
    'Motel 6': 3,
    'Holiday Inn': 7,
    'Sheraton': 9,
    'Days Inn': 7
}

for (let hotel of Object.keys(hotelReviews)) {
    console.log(hotel, hotelReviews[hotel]);
}
// finding average of hotelReview scores


// we have to iterate over the object, but just the values now
// declare a varaible to be equal to the values of your object
// declare a total variable to keep count
// for let r aka our new variable 'of' ratings aka our object
// total is equal to total + r
// declare new variable and set it equal to total is equal to total divided by the length of ratings aka 5

const ratings = Object.values(hotelReviews)
total = 0; 
for (let r of ratings) {
    total += r
};
let avg = total /= ratings.length; // here we're saying total is equal to total divided by ratings.length. in the case above 33 divided by 5
console.log(avg);


const movieRatings = {
    Amadeus: 10,
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8
};

for (let movie of Object.keys(movieRatings)) {
    let score = movieRatings[movie];
    console.log(`I rated ${movie} a ${score}`);
};

/*

I rated Amadeus a 10
I rated Arrival a 9.5
I rated Alien a 9
I rated Amelie a 8

*/ 

// remember the only reason we're able to iterate over the object is
// because we used the Object.keys() and Object.values() methods. 
// We can use a for of loop to iterate an object 
// ONLY with the Object.keys() method and the Object.values() in conjuction with it










//! 'for in' loops
//? the syntax is similiar to a for of loop, 
//?except its 'in' instead of 'of'

//? the 'for of' will iterate over the actual values inside of the array,
//? or the iterable-- in a string each character, in an array, each value.
//? the 'for in' loop will loop over the keys or properties inside of an object
//? 'for in' is looking for an object and will NOT work on an iterable

//* syntax:

//* for (variable IN object) {
//*    code to be ran here 
//*    code to be ran here
//* }



const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

// the word 'in' allows this code to execute 
// and returns the keys 'in'side of jeopardyWinnings



// getting the keys of an object with a for in loop:
// step 1: for
// step 2: (declare a variable 'in' theNameOfTheObject)
// log the newly created variable 'property' that holds our keys
for (let property in jeopardyWinnings) {
    console.log(property);
    // regularPlay
    // watsonChallenge
    // tournamentOfChampions
    // battleOfTheDecades
};


// getting the values of the keys using a for in loop
// step 1: for 
// step 2: declare varaiable 'in' theNameOfTheObject
// console log the objects values by using the name of the object
// and inside brackets putting the newly declared variable that holds the keys of the object

for (let property in jeopardyWinnings) {
    console.log(jeopardyWinnings[property]); 
};

// this reads backwards property of jeopardyWinnings
// (its only nammed 'property' because I gave the variable name the name of what I was trying to get) 
// the variable name can be anything and is typically declared using let and words like 'prop' 'key' etc...
// 2522700
// 300000
// 500000
// 100000






// getting the key value pairs using a for in loop
// for ()
// declare variable 'in' theNameOfTheObject
// console log the newly declared variable , 
// the object with the newly declared variable inside of the brackets

for (let property in jeopardyWinnings) {
    console.log(property, jeopardyWinnings[property]);
    // regularPLay 2522700
    // watsonChallenge 300000
    // tournamentOfChampions 500000
    // battleOfTheDecades 100000
};


// adding the values to calcualte total earnings from Jeopardy
// declare a counter variable
// for 
// declare variable 'in' theNameOfTheObject
// set counter plus equal to the jeopardyWinnings[property]
// console log newly declared variable



let gameEarnings = 0;
for (let property in jeopardyWinnings) {
    gameEarnings += jeopardyWinnings[property]
};
console.log(`Ken jennings total earnings from playing jeopardy: ${gameEarnings}`); 
// this gets logged outside of the 'for in' loop to ensure its not totalted and printed every time. 
// we only want the total after all values have been calculated 
// which means we have to put the console log outside of the loop.
// putting it inside of the loop will print the console log each iteration, 
// and the totals wont be correct until the very last iteration of the loop. 
// If you notice something is being calculated too many times, try maybe removing it from the loop.


// bonus:
// since arrays are technically objects 
// we can use a for in to iterate an array, 
// BUT YOU CANNOT USE A FOR OF TO ITERATE AN OBJECT. 
// Arrays are more flexible when it comes to this. 
// There are better and much more effecient ways to iterate an array. DONT USE THIS METHOD FOR ARRAYS ITS NOT GOOD.

for (let k in [ 88, 99, 77, 66]) {
    console.log(k);
    // 0 
    // 1
    // 2
    // 3
};

// the reason it prints the indices and not the actual values is because its treating the array as an object. 
// we're not looping over the actual elements, we're looping over the properties. 
// what javascript does is assign the key to be in the indice number.
// All this is happening because the array is being treated like an object 
// because its being run through a 'for 'in' instead of a 'for' loop.













//! functions 

//? a function is a resuable procedure. 
//? it allows us to write reusable, modular code.

//? we define a function as 'chunk' of code 
//? that we can then execute at a later point 
//? aka its a chunk of code thats been wrapped in a function


//? think of a function as a little machine- 
//? its a bunch of code that we put together 
//? and we wrap it up into a package and that 'package' is our function


//? THE TWO STEP PROCCESS FOR EVERY FUNCTION:

//? step 1: define the function - kinda like registering it, 
//? we tell Javascript how its going to work and what its going to do.

//? step 2: execute the function (run it) 



//? things like .toUpperCase() is a great example of a function. 
//? its a bunch of code wrapped into 'toUpperCase' 
//? that tells javascript that when the function is ran, 
//? to upper case all letters. 
//? toUpperCase is a built in method/function in javascript

//? since .toUpperCase is an already defined function, 
//? when we use it, we are only executing step 2 of the process for functions which is running it.


//* syntax: regular function expression

//* function functionName() {
//*     what function does  
//* }




//* syntax:

//* const varName = functionName() {
//*     what function does  
//* }




//* syntax: anonymous arrow functions

//* const varName = () => {
//*     what function does 
//* }




//* syntax: arrow function implicit return

//* varName = () => (
//*     implicit return statement
//* )












//! parameters vs arguments:
//? parameters are the words listed in the functions parenthesis
//? arguments are the real value passed to the parameter

//? the parameter is the placeholder for the arguments


//? 'num' is the parameter

function square(num) {
    console.log(num * num);
}

console.log(square(4, 4)) // 16 
//? 4 and 4 are the arguments because they are the values being passed to the function





//? step 1:
//? function declaration (function statement)


//* syntax:

//* function functionName() {
//*     defining what the function does
//*     with your code here
//* }

// whatever code that is inside of the function 
// is what is ran when we call the function



//? step 2: 
//? calling the function:

//* syntax:

//* functionName(); // run once
//* functionName(); // run again




// the function below is called 'grumpus'
// from here on out, everytime we call the function 'grumpus' 
// the three statements will be logged to the console.


// defining the function 'grumpus'

function grumpus(){
    console.log('ugh...you again...')
    console.log('for the last time...!');
    console.log('LEAVE ME ALONE!!!');
}

// calling the function and console.logging it

console.log(grumpus());

// calling the function again just without the console.log. 
// I dont need to console.log it because 
// inside of the function are rules that already state
// to log the three strings to the console every time the function is called
grumpus();




// using the function in a loop

// defining a 'for' loop 
// starting at 0 while the counter(i) is less than 5, then execute the function, and add 1 to the iterations each time so we only get 5 loops
// this logs the three console.log statements already defined in the function except it completes 5 iterations before it stops using the function because 5 was defined in our for loop.
for (i = 0; i <= 5; i++) {
    grumpus()
};

function dieRoll() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`rolled ${roll}`);
}

// if we wanted to use the dieRoll function numerous times 
// for a game like yahtzee where you roll 5 dice, 
// this is how youd do it:

function throwDice() {
    dieRoll();
    dieRoll();
    dieRoll();
    dieRoll();
    dieRoll();
    dieRoll();
};

// when calling throwDice, 
// itll call the dieRoll function 6 times which is why we get 6 console logs

console.log(throwDice());











//! function arguments
//? 'arguements' is a fancy term for inputs to a function
//? 'arguments' are passed to the functions parameters

function greet () {
    console.log('hi');
}
greet(); // hi

// the same function above with arguments 
// the expression or values inside of the functions parenthesis are arguments to the function
/* 

function greet ('tim') {                        tim is the argument 
    console.log('hi tim')
}

function greet ('anya) {                        anya is the argument
    console.log('hi anya')
}


another example of a function with multiple arguments

function avg (20, 25) {
-----------------------------------> 22.5
}

function avg (3, 2, 5, 6) {
    --------------------------------> 4
}
*/


/* 

hello.toUpperCase() is a function that doesnt accept arguments

'hello'.indexOf('h') accepts arguments and takes 'h' as the argument 
'hello'.indexOf('o') accepts arguments and takes 'o' as the argument

*/

// 'person' is a placeholder for the argument that is going to be put into the function. 
// now the placeholder person, will change to whatever value is passed into the fucntion
function greeting (person) { 
    console.log(`hi ${person}`); // hi tim
};


console.log(greeting('tim')); 
// 'person' has the value of 'tim' 
// because thats what was input as an argument to the function.


console.log(greeting('anya')); 
// 'person' has the value of 'anya' 
// because I input anya as an argument. 
// the function was called, and took in anya as the argument.


console.log(greeting('dableb')); 
// dableb was passed in as the argument 
// which is now the value for the placeholder 'person' 

//? AGAIN 'PERSON' IS JUST A PLACEHOLDER 
//? AND THE FUNCTION CAN TAKE ANYTHING IN AS AN ARGUMENT TO BE PLACED INSIDE OF THE PLACEHOLDER. 
//? IT WOULD REPLACE THE VALUE 'PERSON' IN THE STRING TEMPLATE LITERAL



// defining function (function name can be whaterver you want)
// placing a parameter inside of the function. 'numRolls' is currently a placeholder
// for i  = 0; while i is < than numRolls (which is the parameter set inside the parenthesis); add 1 to the counter variable 'i'
function throwDice2(numRolls) {
    for (i = 0; i < numRolls; i++) {
        dieRoll();
    }
};


// calling the function throwDice2 
// and giving it the parameter 2 meaning the code will execute twice

throwDice2(2); 

// the PARAMETER is 2 meaning the function throwDice2 will run 2 times
// because i < numRolls.
// meaning numRolls is going to set the value of how many times to call the function 
// by accepting a parameter in this case its 2. 
// so while i is less than 2 (which is just saying two iterations) 
// we would run the function twice giving us two randomly rolled numbers
// displayed to the console via the string template literal 
// that was defined inside of the function dieRoll() 


throwDice2(3); // rolled randomnumber
//                rolled randomnumber
//                rolled randomnumber

// we get 3 rolled numbers returned to the console because 3 was the parameter passed into the function.


// declare our function with an argument. 
// the argument is the input of the number and is currently blank.
// tell javascript that the variable n = n + '' to turn it into a string.
// return the inputted number aka 'n', split it, reverse it, and join the array into 1 string of numbers
function reverseNum (n) {
    n = n + '';
    return n.split('').reverse().join('')
    console.log(Number(reverseNum(n)));
};
// the parameter 'n' can take in any input
console.log(reverseNum(321)); // 123
console.log(reverseNum(934543)); // 345439



function numLessThan(n) {
    let inputNum = n
    if (inputNum <= 0) {
        console.log(`your number ${n} is equal to 0`)
    } 
    else
        console.log('not less than 0')
    };

console.log(numLessThan(5)); // not less than 0
console.log(numLessThan(0)); // your number 0 is equal to 0











//! functions with multiple arguments

//? parameters vs arguments:
//? parameters - are the names listed in the functions definition
//? arguments - are the real value passed to the function

//? the order in which parameters are defined 
//? dictates the order that they are filled in from left to right. 
//? the left value will always evaluate first


// in the example below, 
// 'num' inside parenthesis is the parameter
//  and the values 4 and 4 being passed to the function of square(), are the arguments
function square(num) {
    console.log(num * num);
};
square(3) // 9


// defining a function that expects multiple arguments to be passed in

function sum(x, y) {   // use comma to seperate multiple parameters
    console.log(x + y);
};
sum(5, 10); // 15 use commas to seperate multiple arguments

// as long as we place a valid identifier aka a valid variable name (here we use x, y) 
// inside of the functions parenthsis as a parameter, 
// it will act as the place holder inside of the function 
// waiting for actual arguments to be passed in

// the parameters a and b are placeholders for future arguments. 
// in this case the arguments are values to be divided
function divide(a, b) {
    console.log(a / b); 
};

divide(10, 2);
// divide(10, 2); // 5
// the values above were values that replaced the a, b placeholders in the function

// if we declare that the function takes in two parameters, 
// and it doesn't receive the correct amount of arguments, 
// it can display something like this:

console.log(divide(5)); // undefined
// the divide function has been set two have two arguments 
// and only one is passed to the function as an argumment 
// aka 5 was passed to the placeholders as arguments. 
// since 5 / undefined = undefined, we get undefined printed to the console

// a function with three parameters
function divideAndAdd(i, j, k) {
    console.log(i / j + k);
}
//           i   j  k
divideAndAdd(10, 5, 2); // 4
// 10 / 5 = 2 
// 2 + 2 = 4

// function that accepts four parameters

function addFourNumbersTogether(a, b, c, d) {
console.log(a + b + c + d);
};
addFourNumbersTogether( 4, 3, 2, 1 ) // 10
// 4 + 3 + 2 + 1













//! return()
//? a built-in method that 'returns' values when we call them. 
//? This is great for storing results or the 'return' into a variable

//? printing to the console and returning a value may seem similair, but theyre very different

//? console.log is used for testing something or debugging.

//? return statements define what will be returned when your function is executed
//? return statements also end the function execution after 'return' is encountered


//* syntax:

//* function functionName() {
//*    return 
//* }


//* syntax: 

//* const varName = () => {
//*    return
//* }



const meanYell = 'i will end you'.toUpperCase();
console.log(meanYell); // I WILL END YOU

const idx = [ 'a', 'b', 'c' ].indexOf('c');
console.log(idx); // 2
// 'c' is at index 2 in the array idx

function subtractNums(x, y) {
    console.log(x - y);
};
// by typing subtractNums (some argument, some argument) into the console
// we get an answer like this  
/* 

function subtractNumx(x, y); {
    console.log(x - y);
}
subtractNum(10 - 4) we get 

if we tried to store subtractNum in a variable it would look like subtractNum = (10 - 4) THIS WILL RETURN UNDEFINED


*/

// capturing and storing a return in a variable
// defining the function of addXY
// it will take in two parameters (the placeholders of 'x' and 'y')
// return x + y
function addXY (x, y) {
    return x + y;
};

// storing the return in a variable
// declaring new const sum1 
// making it equal to
// the function addXY(x, y) which takes two parameters
// passing 2 arguments to the function. argument 1: 5, and argument 2: 10
const sum1 = addXY(5, 10); // 15
// typing sum1 in the console gives you 15


// the function 'squared' takes a parameter ('x' is just being used as a placeholder)
// we are returning the parameter * the parameter
function squared (x) {
    return x * x;
};
// if you type in the console: squared() and pass in an argument like 5:
// squared(5) the console will show 25




function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false;
    }
};

// the reason we added toLowerCase is so we dont have to code a rule for if the string was in caps.

// what this does is it takes the argument
// and lowercases it before checking to see if its equal to our specific string which is 'purple' in all lower case.
// this helps because no matter what color you enter, it wont be case senstitve.
// the function has a rule coded in the if() statement that takes every argument 
// and lower cases it no matter what

/* in the console:

isPurple('blue') returns false
isPurple('purple') returns true
isPurple('PURPLE') returns true

because before the argument was checked against the string we passed in the .toLowerCase() 
so make the string all lowercase so it can be checked against our all lowercase string.

*/




// the function of isPurple can be written better and heres how:
function isRed(color) {
    if (color.toLowerCase() === 'red') {
        return true;
    }
    return false;
}

// we took out the else statement because 'return' ends function exection
// the only way to get to the next line is if the 'if' statement is false



// the function isPurple() and isRed can be written BETTER and heres how:
function isGreen(color) {
    return color.toLowerCase() === 'green';
}
// since the expression color.toLowerCase() === 'green' is a boolean expression,
// we dont have to code in the true and false return statements. 
// javascript knows its a boolean expression and can only have two answers: 'yes' or 'no'.
// so we simply just use 'return' and then the boolean expression


function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false; // this has to be removed from the 'for' and 'if' statments
}

// if we dont return the false boolean outside of the for and if statments 
// then it wont be able to check both values.
// one of the returns will be true / false and halt the function entirely.
// it doesnt matter if the return is inside of a loop, nested 10 times
// once javascript finds a true return statement anywhere inside of the function,
// the function stops execution






// function practice
// password validator

function isValidPassword(username, password) {
    if (password.length < 8) {
        return false;
    }
    if (password.indexOf(' ') !== -1) { 
        return false;
    }
    if (password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

/* 
Step 1: define function isValidPassword and give it two parameters
step 2: if password.length is less than 8
step 3: return false

step 4: if password.indexOf(' ') !== -1 meaning if we search the string and find a space inside then. 
the reason we set it to !== -1 is because if javascript searches for a character in a string in indexOf() and cannot find it, 
it returns the value of -1.

step 5: return false

The logic behind this one was to reverse the order of thought. 
Instead of checking to see if all three conditions are met on one line,
we try to see if all three conditons are not met, then return true.

we can get away with this because in this specific example, 
if any of the return statements actually return false, 
the code stops and thats good, thats what we want. 
if any of the above statemenets are actually false, 
then they dont meet the password requirements. 
it doesnt need to keep executing because it already found a return statement that was true 
(in the scenario the ' true' statement was just false)

in the console:

isValidPassword('meat', 'meatball') // false (password contains username)
meat is in the parameter of username and is being passed as the username argument.
meatball is in the parameter of password and is being passed as the password argument.

isValidPassword('meat', 'ginger5') // false (password is not 8 characters)

isValidPassword('meat', 'RandomPassword1') // true

*/

// another way to write the isValidPassword function
// the one liner 

function isValidPassword2(username, password) {
    if (password.length < 8 ||
        password.indexOf(' ') !== -1 ||
        password.indexOf(username) !== -1) {
        return false;
    }
    return true;
    }

/* 

the above method is the way i approached it at first. 
It kinda gets jumbled all being on one line, 
and with multiple OR's going on it can kinda be hard to write

*/



// another way to write isValidPassword
// this time we're just assigning variables to the values of:
// password.length, password.indexOf(' ') and password.indexOf(username)

function isValidPassword3(username, password) {
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1;
    if (tooShort || hasSpace || tooSimilar) return false;
    return true;
}





// a function that finds the average of items in an array
// using a for of loop because its the easiest and basically made for looping iterables

function avg2 (arr) {
    let total = 0
    // loop over each value
    for (let value of arr) {
    // add them together
    total += value
    }
    let results = total / arr.length;
    return results;
}
/* 
in the console:
avg2([0, 50, 25, 79, 56]) // 42
whatver arguments are given to the function is whats averaged

*/





// pangram function 
// pangram is a sentence that contains every letter of the alphabet

function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

/* 

in console:

isPangram('the five boxing wizards jump quickly') // true

isPangram('five boxing wizards jump quickly') // false

*/




// get playing card

function getCard() {
    const values = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]
    const idx = Math.floor(Math.random() * values.length);
    return idx;
}

// getCard() in the console picks a random number from the list of values


// finding count of vowels in string:
// step 1: define function 
// step 2: declare variable to keep track of count (or redfine like we did here)
// step 3: make sure that the string is lowercased after its received 
// step 4: loop the the string.length starting at 0 and adding 1 each iteration
// step 5: if the string contains a value at any of the index numbers
// step 6: add 1 to the count
// step 7: return count(of vowels);
function countVowels(string) {
    count = 0
    string = str.toLowerCase();
    for (i = 0; i < string.length; i++) {
        if (str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i)=='u') {
            count++;   
        }
    }
return count;
}




function isCussWord(string) {
    count = 0;
    for(i = 0; i < string.length; i++) {
        if (string.includes('shit') || string.includes('fuck')) {
        return true
    }
    return false
    }
}

console.log(isCussWord('fuck')); // true
console.log(isCussWord('hello')); // false





let num
function isOddNum(num) {
    num = num % 2;
    if(num > 0) {
        if(num === 1) {
        console.log(`your number is odd`)
    }
        return true
    } else {
        console.log(`your number was even`)
    }
    return false
}

console.log(isOddNum(7)); // true
console.log(isOddNum(16)); //  false





// function that takes a string and checks if its male or female 
// based off the string thats recevied
// expected input: 'Male', 'male', 'Female', 'female'

function genderIs(string) {
    gender1 = string.toLowerCase();
    gender2 = string.toLowerCase();
    if (!(string.includes('male') || string.includes('female'))) {
        return `Please enter gender`
    }
    if (string.includes('fe')) {
        return `Gender: ${gender2.charAt(0).toUpperCase() + gender2.slice(1)}`
        }
    return `Gender: ${gender1.charAt(0).toUpperCase() + gender1.slice(1)}`
}

// user must input string 
console.log(genderIs('male')); // Gender: Male
console.log(genderIs('female')); // Gender: Female





// 50/50 coin flip

function headsOrTails() {
    randomCoinSide = Math.floor(Math.random() * 10) +1;
    if (randomCoinSide <= 5) {
        return `heads`
    }
    return 'tails'
}














//! function scope
//? is like variable visibility.
//? depending on where you define a variable 
//? depends on where it can be used.
//? the location of where the variable is defined dictates where we have access to it

function helpMe() {
    let helpMeMsg = 'im on fire!';
    return helpMeMsg
}

// console.log(helpMeMsg) Reference Error: helpMeMsg is not defined
// the variable help me is not defined outside of the function
// the variable can only be used inside the function as its scoped to the function




let birdie = 'cardinal'

function birdWatch() {
    let birdie = 'duck'
    console.log(birdie)
}
birdWatch(); // duck
console.log(birdie);// cardinal

// above we have two variables with the same name, but different values
// the variable birdie inside of the function exist only inside that function
// when birdWatch() is called, birdie is logged to the console and we see duck
// when we log the variable birdie outside of the scope of the function
// it has the value of 'cardinal' the globally scoped variable






//! block scope 

let radius = 8;

if (radius > 0) {
    const PI = 3.14;
    let circ = 2 * PI * radius
}

// console.log(radius); // 8 (defined outside of the block) 
// console.log(PI); // not defined
// console.log(circ); // not defined
// circ and PI are scoped to the block

if(true) {
    let animal = 'eel'
    // console.log(animal) inside of the block logs eel
}
// console.log(animal) outside of the block returns undefined

// the variable animal is scoped to the block
// since it was declared inside of the curly braces with let




if(true) {
    var animal = 'eel'
    console.log(animal); // eel
}
console.log(animal); // eel
// eel prints to the console even though animal was declared in the scope of the block.
// var has a different scope of let and const.
// a variable declared with var is not scoped to the block, or conditional, for loop etc...
// this can be problematic :





let animalArray = ['grizzly bear', 'panda bear', 'spectacled bear'];
for(i = 0; i < animalArray.length; i++) {
    console.log(i, animalArray[i]); // how to access array items without getting entire array
}

console.log(i) // 3: our counter variable is now 3 because we iterated the array 3 times
// even though our counter variable i was declared inside of the for loop
// var isnt block scoped, so it doesnt automatically scope to the for loop






// function that doubles the array indexs and stores them in a new array 

function doubleArray(arr) {
    const result = []; // const only exist inside of the function
    for (let num of arr) {
        let double = num * 2 // double only exist inside of the for loop and can not
        // be accessed outside of the for loop
        result.push(double);
    }
    return result;
}

console.log(doubleArray([1, 2, 3])) // [2, 4, 6]









//?! lexical scope
//? nested functions are lexically bound to the scope of the parent or 'outer' function.

//? when we have nested functions like innerFunction() below,
//? the variable in outerFunction is defined in the function, 
//? and theres no access to it outside of the function

//? however, the nested function innerFunction() has access to the variable hero 


function outerFunction() {
    let hero = 'spiderman';
    
    function innerFunction() {
        let cryForHelp = `${hero} please save me!`;
        console.log(cryForHelp);
        // console.log(hero) // spiderman (hero variable can be accessed here)
    }
    innerFunction(); // undefined
}

// if you try to use the inner function outside of the scope its undefined
// due to it being in the scope of the variable
// the innerFunction can only be accessed by the outerFunction




function outerFunction2() {
    let movie = 'airbud';

    function innerFunction2() {
        let movie ='matilda';

        function moreInner() {
            console.log(movie); // the matilda
        }
        moreInner();
    }
    innerFunction2();
}
// since the moreInner function did not have a variable movie declared inside of it,
// its able to access the parent functions variable of movie and log it to the console.
// if the innerFunction2 did NOT have a movie variable declared inside of it,
// it would move up to the next parent function of outerFunction2 
// and look for a variable called movie














//! function expressions 
//? a different syntax for writing functions

//? ANONYMOUS FUNCTIONS: function is declared without a name: 'function (num)'
//? the name is being taken from the variable that the function was defined in

//? since functions are objects in javascript
//? the can be declared inside of a variable much like a string or an array

//? TLDR: just storing the function inside a variable.
//? the important thing to remember is the syntax changes:
//? as you declare the function name with the variable that its stored in.
//? these are called anonymous functions

//? storing a function inside a variable helps passing functions to other functions as arguments
//? you dont to include all of the function syntax, you can just use the variable name



// function expression (anonymous expression)
const square2 = function(num) {
    return num * num;
}
// call the variable and pass in an argument
square2(4); // 16




// normal function 
function square3(num) {
    return num * num;
}
// call the function and pass in an argument
square3(4); // 16





// function expressions (anonymous function)
const sumExpression = function(x,y) {
    return x + y;
}
sumExpression(5, 3); // 8

// normal function
function add2Nums(x,y) {
    return x + y;
}
add2Nums(5, 3); // 8




// you can add a name to the function even if its been declared inside of a variable
// NAMED FUNCTION EXPRESSION

const product = function multiply(x,y) {
    return x * y
}
product(5, 2); // 10
// cant call the named function by the function name
// multiply(5, 2) // undefined














//! higher order functions 

function addition(x,y) {
    return x + y;
}

const subtraction = function(x,y) {
    return x - y;
}

const multiplication2 = function(x,y) {
    return x * y;
}

function division(x,y) {
    return x / y;
}

//? storing the above 4 functions inside of an array 

const operations = [addition, subtraction, multiplication2, division];

// accessing a function from an array of functions.
// in order to access a function inside of an array, 
// use the index of the function


//* syntax:

//* variableNameHoldingTheArray[array index of function](arguments)

//*  arrayName[index](arguments)




// accessing just the function 
operations[1]; // returns the function (does not call it or execute it or pass arguments) 




// accessing the function and passing arguments to execute the function
operations[1](100, 50); // 50




// accessing the addition function inside of the array of operations
operations[0](30, 50); // 80 




// accessing the multiplication2 function inside of the array of operations
operations[2](5, 4); // 20




// accessing the division function from inside of the array of operations
operations[3](40, 4); // 10







// looping over each function inside of the array and executing the function. 
// this is done by calling the placeholder func which represents each function in the array.
// then we pass arguments to the placeholder 
// so it can then give those arguments to each of the functions it encounters inside of the loop.

for (let func of operations) {
    let result = func(30, 5);
    console.log(result); // 35, 25, 150, 6
};
// passed the arguments 30, and 5 to every function inside of array.






//? by adding a function to an Object, we create our very own method 
//? like toUpperCase(), .length(), .indexOf() etc..

const thing1 = {
    doSomething: multiplication2, // sets the function multiply as a value inside of the object
    doSomethingElse: division // sets the function division as a value inside of object
}

thing1.doSomething(50, 2); // 100
thing1.doSomethingElse(50, 2) // 25
//object.key(arguments)






function checkEven (n) {
    let num = n
    if (num % 2 !== 1) {
        return 'even'
    }
    return 'odd'
}





function celsiusToFarenheit (n) {
    n = n * 9 / 5 + 32
    return n
}
console.log(celsiusToFarenheit(0)); // 32





const objectMethodPractice =  {
    operation1: multiplication2,
    operation2: addition,
    operation3: subtraction,
    operation4: division
}

// use object.theKey associated with the function,
// then pass in your arguments (if any).
// the arguments are passed to the key 
// because they key is holding the function as its value.

console.log(objectMethodPractice.operation1(5, 2)); // 10

console.log(objectMethodPractice.operation2(40, 5)); // 45

console.log(objectMethodPractice.operation3(100, 50)); // 50

console.log(objectMethodPractice.operation4(25, 5)) // 5














//! higher order functions -
//? functions that operate on/with other functions.
//? they can accept other functions are arguments. 
//? a function that returns a function.




//? function that accepts a function as an argument.
//? the placeholder here is 'func'.

//? the placeholder is going to accept a function as an argument, 
//? so we leave the placeholder 'func' with nothing in parthenthesis.

//? the func() inside of the function is left blank 
//? because its just going to call it twice

//? the other function will define what it does
//? after its been called twice by the 'callTwice' function.



// this function will call our next function twice
function callTwice(func) {
    func(); // calling, but leaving 'func' placeholder blank
    func(); // calling, but leaving 'func' placeholder blank
}



// defining another function to be used with the callTwice function

function laugh() {
    console.log('hahahahahahahahahahahahahaha')
}

// here it executes the callTwice function with the laugh function. 
// the 'callTwice' function just set the rules for the call to happen twice.
// anytime the callTwice function is called,
// its going to process whatever function was passed to it, twice

callTwice(laugh); // hahahahahahahahahahahahahaha
//                   hahahahahahahahahahahahahaha





// here the function callThreeTimes accepts an argument 
// the placeholder argument is called 'f'
// we call the placeholder 3 times because we want this function to call another function 3 times
function callThreeTimes(f) {
    f();
    f();
    f();
}


function cry() {
    console.log('boohoo im sad')
}


function rage() {
    console.log('im angry')
}

// call three times is called and passed in the argument cry which is another function
// since callThreeTimes was made to call the function passed to it three times,
// we get three logs of boohoo im sad below 
// the first function defined how many times something would be called
// the second function defined the function that was going to be called 

callThreeTimes(cry); // boohoo im sad 
//                      boohoo im sad 
//                      boohoo im sad

callThreeTimes(rage); // im angry
//                       im angry 
//                       im angry






// this function repeatNTimes.
// takes two paramteres ('action' and 'num').
// in this example its going to take a function, 
// and a number thats why i used those placeholders.
// we are repeating the action by the num times input
function repeatNTimes(action, num) {
    for (i = 0; i < num; i++) { // this makes it where we can input any number and have the function repeat that many times
        action();
    }
}

// here we pass in the argument 'cry' to the parameter 'func'.
// then we pass in how many times to the 'num' parameter.
// this function repeats the cry function 5 times when called
repeatNTimes(cry, 5); // boohoo im sad (*5)

// here we pass in the argument 'rage' which is a function, 
// to the parameter of the function.
// then we pass in a number of how many times to loop in the second parameter 'n'.
// this function repeats the rage function 2 times when called
repeatNTimes(rage, 2); // im angry (*2)


// the function pickOne accepts two arguments. 
// here the arguments are functions. 
// we define rand to be a random number.
// then we say:
// if random number is less than .5 to do func1, 
// else call func2
// we basically just want one of the functions above to run. 
function pickOne(func1, func2) {
    let rand = Math.random();
    console.log(rand)
    if (rand < 0.5) {
        func1();
    } else {
        func2();
    }
}
console.log(pickOne(cry, rage));

// the parameters 'func1' and 'func2' were replaced with the arguments 'cry' and 'rage'.
// since the arguments 'cry' and 'rage' are both functions,
// when one is picked, it will execute the function inside.
// in the example above, only 'cry' or 'rage' will execute due to the 'if' statement.















//! functions as return values
//? you basically give the function a permanent argument, 
//? and the function returns a value of the function executed inside

//? the first function 'multiplyBy' takes 1 parameter
//? what the function does is returns another function

//? the return function with the parameter 'x' is an anonymous function 
//? since its inside the outer function and only gonna be used in there
//? it can remain without a name (anonymous function)
//? what this function does is returns the value of 'x' * 'num'

function multiplyBy(num) {
    return function(x){
        return x * num;
    }
}

//? to make it easier to work with, we store the function multiplyBy in a variable.
//? notice here we stored the function in the variable triple.
//? notice that the function 'multiplyBy' was stored with an argument.
//? this is possible because the function has a return function inside. 
//? so what it does is it calls multiply by which takes a parameter 'num' 
//? and then due to the return function 'x * num',
//? it takes the argument given to the parameter num and multiplies it by 3
const triple = multiplyBy(3);
console.log(triple(9)); // 27


// storing the same function in a new variable 'double'
// and giving it the argument of 2
// to be ran against whatever is called with the variable
const double = multiplyBy(2);
console.log(double(4)); // 8

const halve = multiplyBy(0.5)
console.log(halve(10)); // 5







// this function checks to see if a number is within a range
// step 1: define our function with 2 parameters
// step 2: define a return function with 1 parameter
// step 3: 'if' param1 is <
function makeBetweenFunc(param1,param2) {
    return function(num) {
        if (num >= param1 && num <= param2) {
            return true 
    } 
            return false
    }
};

// now we need to assign it to a variable
// once we assign it to a variable we can pass in the permanent parameters 
// and then pass in our num parameter into the variable 
// like this:

const isChildRange = makeBetweenFunc(0,18); // 0 and 18 are the arguments used to check
// the value given to the variable:
console.log(isChildRange(15)); // true
console.log(isChildRange(99)); // false

// we passed in our permamnent arguments to the param1 and param2 when we assigned it to the isChildRange variable
// and we check it against the value passed to the variable holding the function
// above we passed in 15. since 15 is between 0 and 18
// it meets the function rule to return true




const isAdultRange = makeBetweenFunc(21,99);
console.log(isAdultRange(45)); // true
console.log(isAdultRange(11)); // false


const isNiceWeather = makeBetweenFunc(65,85);
console.log(isNiceWeather(50)); // false
console.log(isNiceWeather(74)); // true




function checkInBetween(param1, param2) {
    return function(num) {
        if(num >= param1 && num <= param2) {
            return true
        }
        return false
    }
};

const checkInBetweenVariable = checkInBetween(21, 100);

console.log(checkInBetweenVariable(50)); // true 

console.log(checkInBetweenVariable(15)); // false



// the arguments passed to the function thats being assigned to the variable 
// has their parameters "baked in". 
// meaning the next parameter, the one given to the return function is the only value that will change
// in the example above the ranges in the functions are "baked in", 
// and the parameter given to the return function is the value that changes

















//! callbacks
//? a callback is a function passed as an argument to a parameter in another function.
//? anytime we pass a function to another fucntion 
//? and its executed in that function, its a callback.

//? you can write your own function that accepts callbacks,
//? and also built in methods

//? tons of useful javascript methods require callback functions








//! setTimeout()
//? sets a timer which executes a function or specified piece of code once the time expires

//* syntax:

//* setTimeout(function, miliseconds)




function grumpus2() {
    console.log('go away! but with a callback');
}

/*         
           callback    ms
setTimeout(grumpus2, 1000); // 'go away! 
- recevies the argument which is the grumpus2 function
- alerts to the browser 5 seconds after the page loads

- you can use setTime() with an anonymous function:

* setTimeout(function() {
*    console.log('welcome')
* }, 1000)

*/ 



// declaring variable btn 
// setting btn to equal html element button
// adding an event listener to listen for a 'click'
// when clicked:
// callback function of grumpus 2 is executed
// which alerts 'go away'
const btn = document.querySelector('button');
btn.addEventListener('click', grumpus2)





// declaring variable btn2
// setting btn 2 to equal html element button
// adding event listener to listen for a 'click'
// then we pass an anoymous call back function to the event listener
// which just logs, 'they clicked a button'
const btn2 = document.querySelector('button');
btn.addEventListener('click', function(){
        console.log('they clicked a button')
})

//? the reason to use an anonymous function:
//? when you dont plan to reuse the function anywhere else,
//? theres no point in naming it and storing it in memory in a variable.


















//! hoisting
//? declaring variables with var can be hoisted.
//? which means it can be accessed as long as the code is available somewhere in the file.
//? hoisting can be confusing.
//? let/const is the better variable declaration 
//? because it let and const do not get hoisted.

howl();

function howl() {
    console.log('rawr')
};

//? the code above still works because functions are hoisted. 
//? calling the function howl(); before it was declared would normally give us an error.
//? since functions are hoisted,
//? its able to be called before declaration due to how JS interprets things.


//? function expressions are NOT hoisted

//? console.log(hoot); throws error: 
//? unlike above example, the function is not hoisted
//? due to declaration being a function expression.
console.log(hoot)
var hoot = function() {
    console.log('hoot hoot')
};

//? with var, the function is not hoisted, but the variable is.
//? javascript knows the variable exist, but it doesnt know its a function.
//? let and const are not hoisted.
//? if you define a function expression with let and const, it wont be hoisted
//? let and const exist to bypass some of the quirkness of hoisting
//? use let and const to avoid unexpected hoisting


//-----------------------------------------------------------------------













//! array callback methods
//? arrays come with many built-in methods 
//? that expect callback functions to be passed to them.

//? all these methods have to do with arrays,
//? and expect you to pass in a callback (function passed to a parameter as an argument)

//? general pattern is that the function will execute once per every element in an array

//? built in methods for arrays that EXPECT callbacks:

//? forEach()
//? map()
//? filter()
//? find()
//? reduce()
//? some()
//? every()








//! forEach()
//? accepts a callback function. 
//? calls the function ONCE per element in the array. 
//? used to apply a function to each element inside an array 
//? by passing that function to the 'forEach' as an argument

//* syntax:

//* arrayName.forEach(function () {
//* code to be run here
//* })


//? a lot of the times forEach() is given an anonymous function 
//? because the function being use is normally only made to be run in that specific instance.
//? so, since it only needs to be used in that specific instance and wont be reused throught the file
//? you can use an anoymous function 






// forEach value inside of the array, the function of multiply the array value
// times the array value, will be logged to the console
// function expression with anonymous function
const exampleArray2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];



// squaring the number forEach() element in the array 
// where 'n' represents each element in the array 
exampleArray2.forEach(function (n) {
    console.log(n * n); // 81, 64, 49, 36, 25, 16, 9, 4, 1
});




// forEach value inside of the array, 
// the 'if' statement will check if each value in the array is equal to modulo 2 === 0
// if the number given to the parameter is modulo 2 === 0 (an even number)
// console.log() the value
exampleArray2.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element); // 8, 6, 4, 2
    }
});
// only the even numbers printed to the console
// because if a number is not even it will NOT be equal to modulo zero 



// forEach value inside of the array 
// run the function and take a parameter(if one is needed)
// if() odd modulo 2 is greater than 0 (an odd number)
// console.log() the values
exampleArray2.forEach(function (odd) {
    if (odd % 2 > 0) {
        console.log(odd) // 9, 7, 5, 3, 1
    }
})


const moreNumbers = [20, 21, 22, 23, 24, 25, 26, 27];
moreNumbers.forEach(function (n) {
    console.log(n * 2); // 40, 42, 44, 46, 48, 40, 52, 54
})

// passing a named function as a callback

const printsTriple = function printTriple(n) {
    console.log(n * 3); // 60, 63, 66, 69, 72, 75, 78, 81
}




// printing the array and then the index using forEach()
// its always passed in, its just not always visible, 
// to make the index visible, pass in a parameter for it
// when the parameter is given the array value as the argument
// it will print the array value and the index of the value
moreNumbers.forEach(function (num, index) {
    console.log(index, num)
});
// 0 20
// 1 21
// 2 22
// 3 23
// 4 24
// 5 25
// 6 26
// 7 27





const bookShelf = [{
    title: 'good omen',
    authors: ['terry pratchett', 'neil gaiman'],
    rating: 4.25
},
{
    title: 'bone: the complete edition',
    authors: ['jeff smith'],
    rating: 4.42
},
{
    title: 'american gods',
    author: ['neil gaiman'],
    rating: 4.11
},
{
    title: 'a gentleman in moscow',
    author: ['amor towles'],
    ratings: 4.36
}
]





// printing each title using forEach() and function
bookShelf.forEach(function(book){
    console.log(book.title.toUpperCase()); 
});

// GOOD OMEN, BONE THE COMPLETE EDITION,
// AMERICAN GODS, A GENTLEMAN IN MOSCOW


// the above can be achieved with a 'for of' loop
for (let book of bookShelf) {
    console.log(book.title.toLowerCase());
}

// the 2 above can be achieved with a 'for' loop
// using the arrays index to access each element
for (i = 0; i < bookShelf.length; i++) {
    console.log(bookShelf[i].title.toUpperCase());
};

// the two examples above are the same thing, 
// but one is just a block of code and cant be called.
// the other is a function which can be called and used as a function.





// printing the index and title
// passing in call back function 
// second parameter is the index (idx)
// in forEach() the second parameter is alwauys the index
bookShelf.forEach(function(book, idx) {
    console.log(idx, book.title,)
})

/* 
the console log:
0 'good omen'
1 'bone: the complete edition'
2 'american gods'
3 'a gentleman in moscow'
*/

// 'for of' loops dont allow access to index numbers as easy as forEach()










//! map()
//? creates a new array from exisiting array.
//? with the results of calling a callback on every element in the array.
//? map() can be used to duplicate array, extract portions, transform array values into new array.
//? the callback function will accept 1 parameter minimum.
//? the second parameter given to the function is always the index.


//* syntax:                   

//* const varName = arrayName.map(function(){
//*     code the function here
//*     return'statment
//* })


//? since map always creates a new array, 
//? the function thats used to create it  must be stored in a NEW variable. 
//? SO THAT when map() creates the new array,
//? we have a name and a way to call/ work with that array.
//? in order to get the new array returned inside of the function
//? you must have a return statement: example below:

/* 

Below is a valid function on our bookshelf example below. 
Its a valid, working function, but theres no way to call the new mapped array.

bookShelf2.map(function(book) {
    return book.title
})

We would need to just assign it to a variable

const bookTitles = bookShelf2.map(function(book) {
    return book.title
})


without our variable we have no way to work with our newly mapped array.
without a return statement, javascript will just return a newly created
array with its values as undefined: [undefined, undefined, undefined, undefined].
this is because it doesnt know what you want to return based off of your
function unless you tell it what to return.

*/






// using map() to create a new array from an existing array
// but returning the new array with .toUpperCase()

// step 1: define the array
// step 2: define the function to take place on the array and store in variable:
// create anonymous function: caps = arrayName.map(function (){})
// the parameter 't' represents each value inside of the array
// step 2: return the parameter 't' which is every element in the array 
// with .toUpperCase()
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function(t) {
    return t.toUpperCase();
});

// the original array remains the same
console.log(texts); // ['rofl', 'lol', 'omg', 'ttyl']

// a new array is created and the new values are stored in it
console.log(caps); // ['ROFL', 'LOL', 'OMG', 'TTYL']





const numberList = [10, 20, 30, 40, 50];

// the new array will need somewhere to go: YOU HAVE TO STORE IT IN A NEW VARIABLE below we stored it in doubleValues
// if you dont store it in an array, you wont be able to call it because YOU didnt
// give it something to be called by
const doubleValues = numberList.map(function(num){
    return num * 2
});

console.log(numberList); // [10, 20, 30, 40, 50]

console.log(doubleValues); // [20, 40, 60, 80, 100]




const numDetail = numberList.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0
    }
});

// returns an object containing the objects 
// because we used curly braces after the return statement.
// the object with the keys as 'value', and 'isEven' is created
// because we defined those above. 

console.log(numDetail); // [{…}, {…}, {…}, {…}, {…}]
// 0: {value: 10, isEven: true}
// 1: {value: 20, isEven: true}
// 2: {value: 30, isEven: true}
// 3: {value: 40, isEven: true}
// 4: {value: 50, isEven: true}



const words = ['asap', 'byob', 'rsvp', 'diy'];

const upperCasedWords = words.map(function(word){
    return word.toUpperCase();
});
console.log(upperCasedWords);



// same results as above, just an block of code, not a function:
// defining a new variable to be an empty array for(let num of numbers).
// 'num' represents each item in the array.  
// calling the array we want to .push() the change to 
// define the change inside of the push()
const doubles2 = [];
for (let num of doubles2) {
    doubles2.push(num * 2);
};



// step 1: define variable that will hold our new array
// arrayName.map(function (parameter))
// step 2: return parameter.toUpperCase().split('').join('.')
const abbreviations = words.map(function(word){
    return word.toUpperCase().split('').join('.')
});

console.log(words);

console.log(abbreviations);

// what the above does is:
// takes the parameter word which represents every individual element in the array.
// it toUpperCase() each element. 
// then split('') with an empty string, split each character into its own array.
// we then join('.') with a period to receveive our results ex: A.S.A.P




const bookShelf2 = [{
    title: 'good omen',
    authors: ['terry pratchett', 'neil gaiman'],
    rating: 4.25
},
{
    title: 'bone: the complete edition',
    authors: ['jeff smith'],
    rating: 4.42
},
{
    title: 'american gods',
    author: ['neil gaiman'],
    rating: 4.11
},
{
    title: 'a gentleman in moscow',
    author: ['amor towles'],
    ratings: 4.36
}
];

// storing the book titles in a variable called bookShelf2Titles.
// using .map() to create a new array.
// the function accepts a parameter 'book' which represents each element in the array.
// return the element.key
// in the case below its the title of the books in the array BookShelf2
const bookShelf2Titles = bookShelf2.map(function(book) {
    return book.title
});

console.log(bookShelf2Titles); /* ['good omen', 'bone: the complete edition', 'american gods', 'a gentleman in moscow'] */






const studentNames = ['jonny', 'jenny', 'vinny', 'henney']
const studentNamesNew = studentNames.map(function(name, idx){
    return idx + ': ' + name.toUpperCase()
});

console.log(studentNamesNew); // ['0: JONNY', '1: JENNY', '2: VINNY', '3: HENNEY']




// creating a function that maps all the elements of the userNames array 
// into a new array
// if the name length is greater or equal to 5 characters
// it returns the first return statement
// if its not it returns the return statement in the else
const userNames = ['user123', 'anon1', 'yankeefan', 'cubfan', 'user']
const userNameList = userNames.map(function(name){
    if (name.length >= 5) {
        return `${name} is greater than 4 characters`
    } else {
        return `${name} is not greater than 4 characters`
    }
});

console.log(userNameList) /* 
['user123 is greater than 4 characters', 'anon1 is greater than 4
characters', 'yankeefan is greater than 4 characters', 
'cubfan is greater than 4 characters', 'user is not greater than 4 characters'] */


let time = [
    0000, 
    0100, 
    0200, 
    0300, 
    0400, 
    0500, 
    0600, 
    0700, 
    0800, 
    0900,
    1000,
    1100,
    1200,
    1300,
    1400,
    1500,
    1500,
    1700,
    1800,
    1900,
    2000,
    2100,
    2200,
    2300,
    2400
];

// creating function that uses the array time 
// using a 'for of' loop it checks to see if the hour is greater than 2000.
// return true if it is,
// else return false

function isItLate(num) {
    for (let hour of time) {
        if(num >= 2000) {
            return true
        } else {
            return false
        }
    }
};

console.log(isItLate(2100)); // true

console.log(isItLate(0900)); // false
















//-----------------------------------------------------------------------

//! arrow functions
//? syntactically compact alternative to a regular function expression
//? creates an anonymous function with an arrow 

//* variableName = () => {}
//* ariableName = (parameterName) => {}

//? parenthesis around the parameter are OPTIONAL if theres only ONE parameter
//* const square = x => {
//*     return x * x;
//* };

//? if there are no parameters, leave the parenthesis with nothing inside of them
//* const singASong = () => {
//*     return "la la la la la"
//* };




//* syntax:

//* variableName = () => {}

//* const variableName = (parameterName) => {
//*    code goes here 
//*    return statement
//* };



//       varName    = (parameterName) => {}
const arrowFunction = (x) => {
    return x * x;
}
console.log(arrowFunction(5)); // 25


const sumArrowFunction = (x, y) => {
    return x + y;
}
console.log(sumArrowFunction(5, 5)); // 10



const isNumEven = (x) => {
    if( x % 2 === 0) {
        return true
    }
    return false
}
console.log(isNumEven(5)) // false
console.log(isNumEven(6)) // true 

// same as above: same code just less to write
// since there is ONLY 1 parameter, it does not have to be in parenthesis
// the parameter 'x' is NOT inside parenthesis because of the arrow function and there only being one parameter

const isNumEven2 = x => {
    return x % 2 === 0;
}
console.log(isNumEven2(5)); // false
console.log(isNumEven2(6)); // true 




// since we have one or more parameters, we need the parenthesis
const divideNum = (x, y) => {
    return x / y;
};
console.log(divideNum(20, 5)); // 4

// since there are no parameters, we leave the parenthesis empty
const singASong = () => {
    return 'la la la la';
};











//! arrow functions: implicit returns
//? makes it where you dont have to write the return keyword
//? only works when theres ONLY 1 EXPRESSION TO BE RETURNED


//* syntax: 

//* const varName = param1 => (
//*     single expression here
//* );

//? the implicit return is signified by only parenthis after the arrow.
//? normally we need parenthesis and curly braces.

// the below functions are all the same function,
// just written different ways and with a new variable name 

//? regular function expression 
const isEven2 = function(num) {
    return num % 2 === 0;
};

//? arrow function with parenthesis around parameter
const isEven3 = (num) => {
    return num % 2 === 0;
};

//? arrow function without parenthesis around parameter
//? when you have 1 parameter, the parenthesis around the parameter are OPTIONAL
const isEven4 = num => {
    return num % 2 === 0;
};

//? arrow functions with 2 or more parameters must have parenthesis
const isEven5 = (param1, param2) => {
    return num % 2 === 0;
};

//? arrow function with implicit return:
//? instead of curly braces, you use parenthesis
const isEven6 = num => (
    num % 2 === 0
);

//? arrow function with an implict return written on one line.
//? only do this when the expression is small and can fit on one line.
//? its not a big deal to use parenthesis 
//? and can even make the code more readable
const isEven7 = n => n % 2 === 0;
console.log(isEven7(5)); // false 
console.log(isEven7(10)); // true




const numArray2 = [1, 2, 3, 4, 5, 6, 7, 8];


// regular function expression
const numArrayDoubled = numArray2.map(function (num){
    return num * 2;
});
console.log(numArrayDoubled); // [2, 4, 6, 8, 10, 12, 14, 16]


// with arrow function 
const numArrayDoubled2 = numArray2.map(num => {
    return num * 2;
});
console.log(numArrayDoubled2); // [2, 4, 6, 8, 10, 12, 14, 16]


// with arrow function and implict return syntax
const numArrayDoubled3 = numArray2.map(num => num * 2); 
console.log(numArrayDoubled3); // [2, 4, 6, 8, 10, 12, 14, 16]




// taking numArray2 and turning into an array of strings that say even or odd

// regular function expression
const parityList = numArray2.map(function(n){
    if (n % 2 === 0) return 'even';
        return 'odd';
});
console.log(parityList); 
// ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

// arrow function
const parityList2 = numArray2.map(n => {
    if (n % 2 === 0) return 'even';
    return 'odd';
});
console.log(parityList2);
// ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']


// in parityList2 we cannot use an implicit return function.
// since we return two different values based off the parameter n,
// an implicit function would not work here because we arent returning 1 value
// however, you can write this same expression with a ternary operator.
// acheiving the expression on one line and using the arrow function syntax
// for an implicit return function.

// implicit return arrow key function with ternary operator
const parityList3 = numArray2.map(n => (
    n % 2 === 0 ? 'even' : 'odd'
));

console.log(parityList3); // ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']
















//! array method .find()

//? finds the first instance of the given argument.
//? after it finds the first match, 
//? it stops running and will only return the first match.

let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];

// using .find() finds the first instance of Mrs and returns it
const movie = movies.find(movie => {
    return movie.includes('Mrs');
});
console.log(movie); // Mr. and Mrs. Smith

// it returned the first element inside of the array that includes 'mrs' 
// so we get mr and mrs smith

// if we wanted to access mrs doubtfire we'd have to put some logic in 
// using find to create a function that looks at the movies in the array 
// using indexOf('Mrs') === 0 to find the movie with "Mrs" at index 0
const movie2= movies.find(movie => {
    return movie.indexOf('Mrs') === 0; 
});
console.log(movie2); // Mrs. Doubtfire















//! Array method .filter()

//? filters out subsets of an array. 
//? if a number passes the given function, it will add it to the return array.
//? expects a callback function.
//? filter() just creates a new array with specified elements.
//? it doesnt mutate or update the original, you just store the new array in a new variable.

//? returns true or false for the given function and element.
//? if true, it adds the true value to the array


// filtering out the odd numbers into a new array called odds

const bunchOfNumbers = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// filtering out the odd numbers
const odds = bunchOfNumbers.filter(x => {
    return x % 2 === 1;
});
console.log(odds); // [9, 7, 5, 3, 1]



// filtering out the numbers smaller than 5
// using syntax for implicit returns 
const smallNums = bunchOfNumbers.filter(x => x < 5);
console.log(smallNums); // [4, 3, 2, 1]



// filtering out the even numbers 
// using syntax for implicit return functions
const evenNumbers = bunchOfNumbers.filter(x => x % 2 === 0);
console.log(evenNumbers); // [8, 6, 4, 2]



// filtering out the numbers greater than 5 from the array.
// using syntax for implicit returns AND using parenthesis around the parameter.
// if the function returns a true value. so if x less greater than 5,
// it will add it to the new array
const bigNums = bunchOfNumbers.filter((x) => {
    return x > 5 === true;
});

console.log(bigNums); // [9, 8, 7, 6]




const book = [{
    title: 'Good Omen',
    authors: ['terry pratchett', 'neil gaiman'],
    rating: 4.25,
    genre: ['fiction', 'fantasy']
},
{
    title: 'changing my mind', 
    authors: ['zadie smith'],
    rating: 3.83,
    genre: ['nonfiction', 'essay']
},
{
    title: 'bone the complete edition',
    authors: ['jeff smith'],
    rating: 4.42,
    genre: ['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'american gods',
    authors: ['neil gaiman'],
    rating: 4.11,
    genre: ['fiction', 'fantasy']
},
{
    title: 'a gentleman in moscow',
    authors: ['amor towles'],
    rating: 4.54,
    genre: ['fiction', 'historical fiction']
},
{
    title: 'the name of the wind',
    authors: ['patrick rothfuss'],
    rating: 4.54,
    genre: ['fiction', 'fantasy']
},
{
    title: 'the overstory',
    authors: ['richard powers'],
    rating: 4.19,
    genre: ['fiction', 'short stories']
},
{
    title: 'the way of kings',
    authors: ['brandon sanderson'],
    rating: 4.65,
    genre: ['fantasy', 'epic']
}
];

// filtering out the books with a rating greater than 4.3
// with implicit return function syntax

const highBookRating = book.filter(b => b.rating > 4.3); //js takes this as a boolean
// if true, it adds the true value to the new array
console.log(highBookRating); // [{…}, {…}, {…}, {…}]

// {title: 'bone the complete edition', authors: Array(1), rating: 4.42, genre: Array(3)}
// 1: {title: 'a gentleman in moscow', authors: Array(1), rating: 4.54, genre: Array(2)}
// 2: {title: 'the name of the wind', authors: Array(1), rating: 4.54, genre: Array(2)}
// 3: {title: 'the way of kings', authors: Array(1), rating: 4.65, genre: Array(2)}


// filtering out the fantasy books from the book array
// with implicit return function syntax

const fantasyBooks = book.filter(book => (
    book.genre.includes('fantasy')
));
console.log(fantasyBooks); // [{…}, {…}, {…}, {…}, {…}]
// 0: {title: 'Good Omen', authors: Array(2), rating: 4.25, genre: Array(2)}
// 1: {title: 'bone the complete edition', authors: Array(1), rating: 4.42, genre: Array(3)}
// 2: {title: 'american gods', authors: Array(1), rating: 4.11, genre: Array(2)}
// 3: {title: 'the name of the wind', authors: Array(1), rating: 4.54, genre: Array(2)}
// 4: {title: 'the way of kings', authors: Array(1), rating: 4.65, genre: Array(2)}


// filtering out the mystery books from the book array using the parameter 'book'
// with implicit return function syntax.

const mysteryBooks = book.filter(book => (
    book.genre.includes('mystery')
));
console.log(mysteryBooks); // []
// returns empty array because there is no genre that includes 'mystery'


// filtering out the nonfiction books from the array 'book'
// with implicit return function syntax

const nonFictionBooks = book.filter(book => (
    book.genre.includes('nonfiction')
));
console.log(nonFictionBooks); // [{…}]
// 0: {title: 'changing my mind', authors: Array(1), rating: 3.83, genre: Array(2)}



// filtering out genres that include 'essay' || 'short stories'
// with implicit return function syntax
// since we used a logical NOT operator, the expression is one line,
// so it can be written as a implicit return statement
const shortForm = book.filter(book => (
    book.genre.includes('essay') ||
    book.genre.includes('short stories')
));
console.log(shortForm); // (2) [{…}, {…}]
// 0: {title: 'changing my mind', authors: Array(1), rating: 3.83, genre: Array(2)}
// 1: {title: 'the overstory', authors: Array(1), rating: 4.19, genre: Array(2)}



// seaching a title and finding books that contain '' blank string 
// its blank simulating user input
// written as an implicit return function 

const query = '';
const results = book.filter(book => (
    book.title.toLowerCase().includes(query.toLowerCase())
));
console.log(results); // since the query is blank, and a value has not been specified
// the results are the entire array, all 8 elements


// same as above, just not an implicit return
// so we need the curly braces
// and a return statement
const query2 = '';
const results2 = book.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
});
console.log(results2); // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] 
// since the query is blank, and a value has not been specified
// the results are the entire array, all 8 elements:
// 0: {title: 'Good Omen', authors: Array(2), rating: 4.25, genre: Array(2)}
// 1: {title: 'changing my mind', authors: Array(1), rating: 3.83, genre: Array(2)}
// 2: {title: 'bone the complete edition', authors: Array(1), rating: 4.42, genre: Array(3)}
// 3: {title: 'american gods', authors: Array(1), rating: 4.11, genre: Array(2)}
// 4: {title: 'a gentleman in moscow', authors: Array(1), rating: 4.54, genre: Array(2)}
// 5: {title: 'the name of the wind', authors: Array(1), rating: 4.54, genre: Array(2)}
// 6: {title: 'the overstory', authors: Array(1), rating: 4.19, genre: Array(2)}
// 7: {title: 'the way of kings', authors: Array(1), rating: 4.65, genre: Array(2)}















//! .every()
//? test whether ALL elements in the array pass the provided function.
//? it returns a boolean value.  
//? the function passed as a callback must be a boolean function.
//? if 1 value is false after the expression is run the entire result is false.
//? if ALL values are true after the expression is run the entire result is true.

//* syntax: arrayName.every(x => {
//*             boolean function here
//*             return statement
//*         })



const wordList = ['dog', 'dig', 'log', 'bag', 'wag']


// checking if every() 'word' (which represents each string in the array)
// has a length of 3 characters
const lengthThree = wordList.every(word => {
    return word.length === 3
});

console.log(lengthThree); // true - every word's length is === 3



// checking if every() 'word' has a length of 2 characters
// using implicit return function since every() only returns booleans
const lengthTwo = wordList.every(word =>(
    word.length === 2
));

console.log(lengthTwo); // false


// checking if every 'word' has an index[0] of the letter 'd'
// since its using the every() method it checks every element inside of array
// and only accepts booleans, so you can use the implicit return function syntax 
const doesWordInclude = wordList.every(word => (
    wordList.indexOf[0] === 'd'
))

console.log(doesWordInclude); // false:
// not every() 'word' included the letter 'd' at index[0]
// so it returns false



// checking to see if every() 'word' has a last letter of 'g'
// no implicit function here as theres more than just one return statement
// happening inside of the function
const lastLetterG = wordList.every(char => {
    let lastLetter = char[char.length - 1];
    return lastLetter === 'g'
});

console.log(lastLetterG); // true - every word in the array ends with letter g


// checking to see if every 'word' last letter is 'j'
/// define function variable 
// represent the last letter of the array elements in variable: 
// arrayName.length - 1
// return: arrayName[variable that stored the last letter of the array] - 1 === 'j'
const lastLetterJ = wordList.every(word => {
    const lastLetter = wordList.length - 1;
    return wordList[lastLetter] - 1 === 'j'
    //     arrayName[variable holding length of each word in array] - 1 === j
});

console.log(lastLetterJ); // false:

















//! .some()
//? similar to every() except it checks if any element, not all, pass the function. 
//? returns true if ANY of the array elements pass the function test.
//? if none of the array elements pass the function test it returns false.
//? the function passed as a callback must be a boolean function.



const wordList2 = ['dog', 'jello', 'cupcake', 'bag', 'wag'];

// checking to see if any elements are longer than 4 characters
const longerThan4 = wordList2.some(word => {
    return wordList2.length > 4
});

console.log(longerThan4); // true
// since just ONE of the values have to be true, the entire expression returns true



const longerThan10 = wordList2.some(word => {
    return wordList2.length > 9
});

console.log(longerThan10); // false



//checking to see if any words start with the letter z
const startWithZ = wordList2.some(word => {
    return wordList2.indexOf[0] === 'z'
});

console.log(startWithZ) // false



//checking to see if any words start with the letter c
const startWithC = wordList2.some(word => {
    return word[0] === 'c'
    // return: 'word' which represents every element in the array 
    // and [0]. so word[indexOf 0] === 'c'
});

console.log(startWithC); // true



// checking to see if any elements contain a certain word
const containsCake = wordList2.some(word => {
    return wordList2.includes('cake')
})

console.log(containsCake); // true
// the array element 'cupcake' contains the string 'cake'

















//! .some() vs .every():
//? checking to see if any words start with 'd'


// by checking if index 0 of each element: word[0] is === 'd'
/* if at LEAST 1 element passes the function it returns true
else it returns false */

const someStartWithD = wordList2.some(word =>{
    return word[0] === 'd'
});
console.log(someStartWithD); // true 
// some() checks if ANY value passes the function
// since one passed we get true



/* if ALL elements pass the function return true. 
all elements in array (represented by ('word'), didnt pass the function, 
so result is false) */ 

const everyStartWithD = wordList2.every(word => {
    return word[0] === 'd'
})
console.log(everyStartWithD); // false
// every() checks to see if ALL elements pass the function 
// else return false: since some and every are boolean methods,
// theres no need to write boolean logic



const booksRating = book.every(book => {
    return book.rating > 3.5
});

console.log(booksRating); // true
// every rating is greater than 3.5 so we get true




// checking to see if book title contains 'the'
const bookTitles2 = book.every(word =>{
    return word.title.includes('the')
});
console.log(bookTitles2); // false
// not every 'word' which is word.title.includes() includes 'the'
// making the entire expression false



const bookTitles3 = book.every(element =>{
    return element.title.includes('map')
});
// in the above, 'element' represents the parameter place holder
// since its an array method, it knows that its expecting a boolean callback
// meaning we'll get either true or false returned back to us

console.log(bookTitles3); // false
// not EVERY array element contains the word 'map'
// therefore the entire expression returns false

















//! .sort()
//? default sort() sorts by ASCII characters.
//? sort() takes two parameters.
//? sort() needs two parameters to perform a sorting calculation.
//? it compares the parameters and sorts off that comparison.

//? arrayName.sort(compareFunction(param1, param2) => param1 - param2)
//? 'compareFunction' is just a name for what its doing
//? once you sort() the array in any way it changes the original array


//* syntax:

//? normal function expression

//* const variableName = function arrayName.sort((param1, param2){
//*     return param1 - param2
//* });


//* arrow function syntax:

//* const variableName = arrayName.sort((param1, param2) => {
//*     return param1 - param2
//* }); 


//? one line arrow function syntax

//* const variableName = arrayName.sort((param1, param2) => param1 - param2) 


//? how sort works behind the scenes:

//? If compareFunction(param1, param2) returns LESS THAN 0: sort param1 before param2

//? If compareFunction(param1, param2) returns 0:
//? leave param1 and param2 unchanged with respect to each other

//? If compareFunction(param1, param2) returns greater than 0:
//? sort param2 before param1


//? to sort from lowest to smallest we do param1 - param2
//? to sort from highest to lowest we do param2 - param1





const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
console.log(prices.sort()); // [12, 3000, 35.99, 400.5, 9500, 99.99]
// normal sort() returns sort by ASCII characters





// sorting numbers from low to high
// the function is passed 2 parameters 'a', 'b'.
const pricesLowToBig = prices.sort((a, b) => {
    return a - b
});

// notice the original array 'prices' has been changed to what the sort() did
console.log(pricesLowToBig); // [12, 35.99, 99.99, 400.5, 3000, 9500]
console.log(prices) // [12, 35.99, 99.99, 400.5, 3000, 9500]





// sorting from highest to lowest price using 'prices' array
// sort function gets two parameters: in this example 'a', 'b'
const pricesHighToLow = prices.sort((a, b) => {
    return b - a
});

console.log(pricesHighToLow); // [9500, 3000, 400.5, 99.99, 35.99, 12]
console.log(prices); // [9500, 3000, 400.5, 99.99, 35.99, 12]
// the 'prices' array has changed permanently again based off the sort() method




// if you want to bypass the fact that it saves the sorted value into the original array,
// store it in a new variable. and use slice()
// when you slice() it gives the sliced value to a new array 
const prices2 = [400.50, 3000, 99.99, 35.99, 12.00, 9500];
const badSort = prices2.slice().sort((a, b) => {
    return a - b
});
console.log(badSort); // [12, 35.99, 99.99, 400.5, 3000, 9500]
console.log(prices2); // [400.5, 3000, 99.99, 35.99, 12, 9500]
// 'prices2' array remains unchanged even after the sort()





// using the 'book' array
// sorting by rating of books
// since you the array consist of objects, we cant sort it normally
// .sort(param1.key - param2.key) key is the key inside the obj u want
// accessing the ratings of 'book' array and sorting by low to small
//*    variableName = arrayName.sort((a, b){
//*     return paramName.key - paramName.key
//*    })


const sortByRating = book.sort((a, b) => {
    return a.rating - b. rating
});

// sorts ratings from lower rating to higher rating
console.log(sortByRating);
// {title: 'changing my mind', authors: Array(1), rating: 3.83, genre: Array(2)}
// {title: 'american gods', authors: Array(1), rating: 4.11, genre: Array(2)}
// {title: 'the overstory', authors: Array(1), rating: 4.19, genre: Array(2)}
// {title: 'Good Omen', authors: Array(2), rating: 4.25, genre: Array(2)}
// {title: 'bone the complete edition', authors: Array(1), rating: 4.42, genre: Array(3)}
// {title: 'a gentleman in moscow', authors: Array(1), rating: 4.54, genre: Array(2)}
// {title: 'the name of the wind', authors: Array(1), rating: 4.54, genre: Array(2)}
// {title: 'the way of kings', authors: Array(1), rating: 4.65, genre: Array(2)}



















//! .reduce()
//? built in array method that takes a callback.
//? takes an array of values and reduces each element of the array to return a single value.
//? .reduce() is useful for things such as: 
//? adding every element in an array together,
//? finding the min/maximum value of an array,
//? tallying data/votes or things in an object.


//? think of it as youre reducing all the elements in the array into 1 element

//? .reduce() must have at least two parameters:
//? the first parameter is the accumulator.
//? the second parameter is the current value.



//* syntax:

//* arrayName.reduce((accumulator, currentValue) => {
//*    return statement
//* });


//* syntax with a starting value:

//* arrayName.reduce((accumulator, currentValue) => {
//*    return statement
//* }, 100);
//? the starting value is 100 instead of 0 because we specified it after the callback function.

/*
? how it works:
? const addAllNumsArray = [3, 5, 7, 9, 11];

* const reduceExample = addAllNumsArray.reduce((accumulator, currentValue) => {
*    return accumulator + currentValue;
* });

? Callback    accumulator     currentValue        return value
first call          3               5                   8
second call         8               7                   15
third call          15              9                   24
fourth call         24              11                  35


? the first parameter 'accumulator' is the parameter storing the return value of each callback iteration

? the second parameter currentValue  represents each element in the array


? explanation: 

? the first parameter is the accumulator and its value starts as the first element in the array.


? the second parameter is the currentValue and its value starts at the second element in the array. 


? your return statement should specify what calculation to return.


? in the above example, we just added parameter 1(accumulator) + parameter 2(currentValue).
? since the parameter 1 value was 3 and the paramater 2 value was 5, the return value is 8.
? 8 now becomes the new parameter 1 value and 7 becomes the value of parameter 2.
? the returned value of 15 becomes the new value of parameter 1.
? the value of parameter 2 is now 9, the third element in the array.
? since parameter 1 value was 15 and the parameter 2 value was 9, the return value is 24.
? the returned value of 24 becomes the new value of parameter 1.
? the value of parameter 2 is now 11, the last element in the array.
? since parameter 1 value is 24 and parameter 2 value is 11, the return value is 35.


? the array 'addAllNumsArray' now has one value stored inside of it. 
? the value stored inside is 35. 
? the last returned value of 35 after the array has been iterated becomes the value


*/




// .reduce() an array by adding every element
// the array is reduced to one value 
// after each element has been iterated and added together
// we get a final return value
// which becomes the new 'reduced' value of the variable that has the .reduce method in it
const moreNums = [3, 4, 5, 6, 7];

const reduceByAdd = moreNums.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}); 

console.log(reduceByAdd); // 25 
// 3 + 4 + 5 + 6 + 7 = 25
//? how it actually works
//? 3+4 = 7
//? 7+5 = 12
//? 12+6 = 18
//? 18+7 = 25





// .reduce() an array by subtracting every element
// using the moreNums array (line: 6108)

const reduceBySubtract = moreNums.reduce((accumulator, currentValue)=>{
    return accumulator - currentValue;
});

console.log(reduceBySubtract); // -19







// .reduce() an array by multiplying every element
// using the moreNums array (line: 6108)

const reduceByMultiply = moreNums.reduce((accumulator, currentValue)=>{
    return accumulator * currentValue;
});

console.log(reduceByMultiply); // 2520 







// .reduce() an array to find the max value

let studentGrades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topGrade = studentGrades.reduce((accumulator, currentValue)=>{
    if (currentValue > accumulator) return currentValue;
    return accumulator; 
});

console.log(topGrade); // 99


// another way to find max value using Math.max and implicit return 
// using 'max' as the name of parameter 1 instead of accumulator
const maxScore = studentGrades.reduce((max, currentValue)=>(
    Math.max(max, currentValue)
));

console.log(maxScore); // 99







// .reduce() an array to find min value
const lowScore = studentGrades.reduce((accumulator, currentValue)=>{
    if (accumulator > currentValue) {
        return currentValue
    }
    return accumulator
});

console.log(lowScore); // 58


// another way to use .reduce() to find the min value using Math.min
// using 'min' as the name of parameter 1 instead of 'accumulator'
const minGrade = studentGrades.reduce((min, currentValue)=>(
    Math.min(min, currentValue)
));

console.log(minGrade); // 58





const numLessZero1 = (num) =>{
    num <= 0 ? true : false
};
console.log(numLessZero1(15))














//! default function parameters
//? a way to to give your functions parameters a default value.
//? define the default parameter value(s) inside the function parenthesis. 
//? if the parameter that is given a default value does NOT receive
//? the expected argument, it will default to the value in the expression.
//? you can make the default values practically anything:
//? it can be a number, a string, an array, an object, a boolean, etc...





const multiplyMe = (x, y = 5)=>{
    return x * y;
};
// although the function was set to accept two parameters
// we only pass in one argument below
console.log(multiplyMe(3)); // 15
// y was given the default value of 5. 
// the function multiplyMe() will multiply the given parameters
// if only one argument is given, it will default the second argument
// to the default value defined in the function expression
// in this example its 15

console.log(multiplyMe(4, 7)); // 28
// multiplyMe was given the expected 2 parameters
// therefore, the default value of y is ignored in the function expression





// if the parameter of 'greeting' is not given an argument
// it will default to 'hi' because it was defined as a default value
// in the intial declaration of the function
const sampleGreeting = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`)
};
// calling the function sampleGreeting 
// and providing only 1 argument
console.log(sampleGreeting('caleb')); // hi, caleb!
// calling the function sampleGreeting
// and providing both expected arguments
console.log(sampleGreeting('caleb', 'YOOOOOOO')); // YOOOOOOOOO, caleb!


//? its imporant to know that the order matters:
//? if you have 3 parameters and give parameter 3 a default value,
//? and the function is called with only 2 arguments,
//? and those two arguments were supposed to go in parameter 1 and parameter 3,
//? javascript has no way of knowing that.
//? and you WILL NOT get the expected default value.











//! spread in function calls
//? spread syntax allows an iterable such as an array to be 'expanded' 
//? in places where zero or more arguments (for function calls)
//? or elements (for array literals) are expected. 
//? or an object expression to be expanded in places 
//? where zero or more key-value pairs (for object literals) are expected. 
//? tldr: expanding some iterable into some other place or destination

//* syntax: (three periods)

//* console.log(...numArray3);


// spread for function calls
// takes the iterable and breaks them up into multiple arguments

const numArray3 = [9, 3, 2, 8];
console.log(...numArray3); // 9 3 2 8


// wrong way to do it using Math.max
console.log(Math.max(numArray3)); // NaN
// Math.max tries to find the max of the array
// and uses numbers as the arguments
// since numArray3 is an array and not a number 
// NaN is logged to the console

// right way to do it using Math.max
console.log(Math.max(...numArray3)); // 9




const giveMeFour = (a, b, c, d) => {
    console.log('a:', a);
    console.log('b:', b);
    console.log('c:', c);
    console.log('d:', d);
};



// console.log(giveMeFour());
// a undefined
// b undefined
// c undefined
// d undefined
// wrong (no arguments are passed)

// console.log(giveMeFour(2, 4, 6, 8)) // undefined
// wrong (each value can not be spread) because this is a function
// not an iterable object

// right way using spread.
console.log(giveMeFour(...numArray3));
// a: 2
// b: 4
// c: 6
// d: 8






const colorArray4 = ['red', 'orange', 'yellow', 'green'];

console.log(giveMeFour(...colorArray4));
// a: red
// b: orange
// c: yellow
// d: green

// each color in the colorArray4 is 'split' into individual arguments


// since a string is iterable, when we use split on a string
// it splits each individual character of the string into an argument
const stringy = 'GOAT';
console.log(giveMeFour(...stringy));
// a: G
// b: O
// c: A
// d: T












//! spread in array literals
//? spread in array literals create a new array using an existing array.
//? spread 'spreads' the elements from one array into another array.
//? it can be used to make a copy of an array. 

//? spread in arrays in kinda like .concat()
//? but it gives you the option of a shorter, easier syntax.
//? it also allows you to specify how the arrays being combined.
//? the order you put the arrays to be spread inside of the parenthesis,
//? is the order in which the new array will organize them.

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// combining the arrays above:
// when this function is called, it will spread nums1 and nums2
// and give you the values of both arrays.
const spreadArrays = () => {
    console.log(...nums1, ...nums2); // 1 2 3 4 5 6
};





const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


// combining cephalopods and gastropods
// and adding a value into the array that wasnt there before
const mollusca = ['garden slug', ...cephalopods, ...gastropods];
console.log(mollusca);
/* ['garden slug', 'dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish', 'giant african snail', 
'banana slug', 'variable neon slug'] */


const inverts = [...cephalopods, ...gastropods, ...cnidaria];
console.log(inverts); /* ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish', 'giant african snail', 
'banana slug', 'variable neon slug', 'fire coral', 'moon jelly'] */



// making a copy of existing array
const cephCopy = [...cephalopods];
console.log(cephalopods); // ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']
console.log(cephCopy); // ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish']













//! spread in object literals 
//? copies properties from one object into another object literal.
//? an object can only be spread to another object

const feline = { legs: 4, family: 'felidae' };
const canine = { family: 'caninae', furry: true };

// spreading feline and canine objects together 
const felineAndCanine = {...feline, ...canine};
console.log(felineAndCanine); // {legs: 4, family: 'caninae', furry: true}
// since we have two conflicting key value pairs
// it overrides the values and will give you the last one
// for instance in the consolelog above
// we have two family keys. it overrides one



// spread canine object into new object: const doggies.
// adding a key-value pair of 'isPet: true'
const doggies = {...canine, isPet: true};
console.log(doggies); // {family: 'caninae', furry: true, isPet: true}



// spreading the object feline, with its key-value pairs
// and adding a key-value pair - genus: 'panthera
const lions = {...feline, genus: 'panthera'};
console.log(lions); // {legs: 4, family: 'felidae', genus: 'panthera'}


// creating a copy of the lions object 
const lionsClone = {...lions};
console.log(lionsClone);


// spreading an array into an object
const nums3 = [3, 4, 5];
console.log(...nums3, {...lionsClone});
// if an array is spread into a new object
// and the object has no key value pairs
// it will create key value pairs based off the array
// and the indices of the values 
// ex: {0: 3, 1: 4, 2: 5}

const randomish = [...'hello', {
    ...doggies
}];
// 0: h
// 1: e
// 2: l
// 3: l
// 4: o
// 5: {family: 'caninae', furry: true, isPet: true}
















//! rest 
//? looks like spread, but its not.
//? used when we want to make functions that accept multiple arguments.
//? collects all remaining arguments into an array. 
//? the parameter given the rest must be the last parameter in function expression. 
//? its like a net and catches all arguments that werent specified by a parameter.



// before rest we had to use the 'arguments' object
// using the arguments object which is the old way
// the arguments object does NOT work in arrow functions
function sumOf(){
    console.log(arguments);
}
sumOf(1, 3, 5); // in the console returns 3 arguments 
sumOf(5, 4, 6, 8, 9, 10, 30); // 7 arguments

















//! rest params
//? this function will accept any number of arguments.
//? because we used the three periods with the param nums.


// collecting all arguments. 
// reducer function to get it to be reduced into 1 number
function sumAll(...nums){
    return nums.reduce((accumulator, currentVal)=>{
        return accumulator + currentVal
    })
};


// collecting the remaining arguments
// that have not been matched to a parameter
function sumAll1(...nums){
    let total = 0;
    for(let n of nums) total += n;
    return total;
};
console.log(sumAll1(1,2)) // 3
console.log(sumAll1(1, 2, 3, 4, 5)) // 15



// collectiong the 'unclaimed' arguments.
// combine every argument that doesnt fit a predefined 
// parameter like first, last,
// and store them in an array
function fullName(first, last, ...titles) {
    console.log('first:', first)
    console.log('last:', last)
    console.log('titles:', titles);
}


console.log(fullName('caleb', 'lopez', 'mr', 'jr', 'III'));
// first: caleb
// last: lopez
// titles: (3) ['mr', 'jr', 'III']




const multiplyEx = (...nums) => (
    nums.reduce((total, currentVal) => total * currentVal
));

















//! destructuring
//? a short, clean syntax to 'unpack':
//? values from arrays,
//? properties from objects,
//? and putting those values into distinct variables.

//? when destructuring an array we 'unpack' based off of index position



//* syntax

//* const [newVarName, newVarName] = arrayToDestructure 



//* syntax to skip over values

//* const [newVarName, , , newVarName] = arrayToDestructure

//? the above 2 commas would skip the next two elements in the array. 
//? so we would get a new variable name for the first element, 
//? skip the second and third,
//? and another variable name for the fourth element.



//* syntax to skip collect variables, skip over some, then collect 'rest'

//* const [newVarName, , , ...newVarName] = arrayToDestructure
//? the above collects first element into the first declared variable,
//? we then skipped the next two elements.
//? then collected the rest of the elements after the 2 we skipped
//? into a new variable that will hold the 'rest' of the elements


//? when destructuring an array we 'unpack' based off of index position





const raceResults = [
    'eliud kipchoge',
    'feyisa lelisa',
    'galen rupp',
    'girmay ghebreslassie',
    'alphonce simbu',
    'jared ward'
];
//? prior to destructuring, we had to store each into a variable 
//? to 'destructure' certain parts of an array:
//? const gold = raceResults[0]
//? const silver = raceResults[1]
//? const bronze = raceResults[2]


const [gold, silver, bronze] = raceResults
//? what the above does is:
//? it creates three new variables: gold, silver, bronze
//? since we specified three new variables
//? to be equal to receResults
//? javascript will assign the gold variable to index 0
//? silver will be assigned to element at index 1
//? bronze will be assigned to the element at index 3

console.log(gold); // eliud kipchoge
console.log(silver); // feyisa lelisa
console.log(bronze); // galen rupp




// skipping elements in the array
const [first, , , fourth] = raceResults;
console.log(first); // eliud kipchoge 
console.log(fourth); // girmay ghebreslassie 




const [firstPlace, secondPlace, thirdPLace, ...others] = raceResults;
console.log(firstPlace); // eliud kipchoge
console.log(secondPlace); // feyisa lelisa
console.log(thirdPLace); // galen rupp
console.log(others); // ['girmay ghebreslassie', 'alphonce simbu', 'jared ward']
// the variable 'others' becomes an array with the rest of the values
// that did not fit into the first three variables we created.






















//! destructuring objects 
//? make the variables based off the name of the property. 
//? just like destructuring array, but we use object brackets,
//? and we specifiy the property to destructure by using the key name.


const runner = {
    runnerFirstName: 'eliud',
    last: 'kipchoge',
    country: 'kenya',
    title: 'Winner'
}

//          variable    variable = variableNameOfObjectToDestructure
const {runnerFirstName, country} = runner;
console.log(runnerFirstName); // eliud
console.log(country); // kenya
console.log(`${runnerFirstName} from ${country}`); // eliud from kenya



//? if we want to destructure an object 
//? and we want to change the key name after we destructure we do this:
//* syntax:

//* const {keyName: newVarToStoreIn} 


// changing the key 'country' to 'nation'
// changing the key 'title' to 'placement'
const {country: nation, title: placement} = runner;
console.log(nation); // kenya
// the above key of country is whats used to store the value of kenya
// but if we wanted to change the name after the destruture we would just 
// the keyName colon: newName

console.log(placement); // winner















//! nested destructuring 

const marathonResults2 = [
{
    runnerFirstName: 'eliud',
    runnerLastName: 'kipochoge',
    origin: 'kenya'
},
{
    runnerFirstName: 'feyisa',
    runnerLastName: 'lilesa',
    origin: 'ethiopia'
},
{
    runnerFirstName: 'galen',
    runnerLastName: 'rupp',
    origin: 'united states'
}
]

//? extracting origin of second element
//? using a comma to skip the first object
//? then using object literal to specify that we want the origin key
//? that is inside the second object

const [,{origin}] = marathonResults2;
//? origin in the console returns 'ethiopia'
//? we set the const = marathonResults2 so it knows what to destructure.















//! destructuring parameters
//? since we are expecting the first and last parameter value's
//? to be extracted from an object, 
//? we use the curly braces around the parameters inside the functions parenthesis.


const fullName1 = ({first, last}) => {
    return `${first} ${last}`
};

const bestRunner = {
    first: 'eliud',
    last: 'kipchoge',
    country: 'kenya'
}

console.log(fullName1(bestRunner)); // eliud kipchoge



const print = (person) => {
    const {first, last, country} = bestRunner;
    console.log(`${first} ${last} ${country}`);
}
// calling the function 'print'
// and passing in bestRunner into the person parameter
print(bestRunner); // eliud kipchoge kenya


const response = [
    'http/1.1',
    '200 OK',
    'application/json'
]

//? destructuring response to get the second element '200 OK'.
//? remember the paramater names can be ANYTHING,
//? and they represent the elements inside of the objects:
//? protocol represents the first element: 'http/1.1.
//? statusCode represents the second element: '200 OK'.
//? contentType represents the third element in the array: 'application/json'
function parseResponse([protocol, statusCode, contentType]) {
    console.log(`status: ${statusCode}`)
}

const parseResponse2 = (protocol, statusCode, contentType) =>{
    console.log(`protocol: ${protocol}`)
}
// calling the function parseResponse2 in the console returns 
// the protocol: first element in the 'response' array represented by param
// the statusCode which is the second param representing second element in array
// the contentType which is the third param representing third element in array
parseResponse2(response); 
console.log(parseResponse(response)); // status: 200 OK


















//! shorthand object properties 
//? you can use variables inside of your function to set keys and values:

const reviews = [4.5, 3.7, 4.9, 4.7, 2.5, 5];

const getStats = (argument) => {
    const max = Math.max(...reviews);
    const min = Math.min(...reviews);
    const sum = argument.reduce((accumulator, currVal) => accumulator + currVal);
    const avg = sum / reviews.length;
    return {
        max,
        min,
        sum,
        avg
    }
};
//? in the return statement we used max, min, sum, avg.
//? what javascript will do is save the variable 'max' as a key,
//? with its value being set to its variable value.
//? because of the new shorthand where we set a key 
//? and the first key will be equal to the first variable 
//? and the second key 'min' will be equal to our second variable

const stats = getStats(reviews); 
console.log(stats);
// {max: 5, min: 2.5, sum: 25.3, avg: 4.216666666666667}
// avg: 4.216666666666667
// max: 5
// min: 2.5
// sum: 25.3

// so the key avg: is set equal to sum / reviews.length 












//! computed properties
//? Basically using a variable as a key name inside of an object.
//? new syntax for objects.
//? we can add a property with a dynamic key.

const role = 'host';
const person2 = 'jools holland';
const role2 = 'director';
const person3 = 'james cameron';

// if you tried to do this, it wouldnt work

// const team = {
//    role: person2
// }

//? team would be evaluated and would return:
//? {role: 'jools holland'}.

//? instad of 'role' it should be 'host'.
//? because they key wasnt evaluated,
//? it just says role, but its suppose to evaluate to 'host'.
//? much like 'person' actually evaluated to its variable value 'jools'.
//? the key of roll is literally just turned into a string.
//? we want 'role' to evaluate to its variable value of 'host'.

// the old way to fix it would to do this:
// after the object is inititalized, 
// tell javascript that 'role' of the 'team' object is equal to person2

// const team = {}; 
// team[role] = person2;
// team[role2] = person3;
// console.log(team); // {host: 'jools holland' director: 'james cameron'}




//? we can define the object then add in a key based off some computed variable:

//* syntax: 

//*   objectName = {
//*     [variableName]: 'value'    
//*   }

//? inside of the square brackets goes the variable name that youre trying to use.

const employeeName = 'john';
const employeeName2 = 'bob';

const employeePosition = {
    [employeeName]: 'admin',
    [employeeName2]: 'developer'
};

console.log(employeePosition);
// {john: 'admin', bob: 'developer};

//? the key [employeeName] evaluates to the variable employeeName 'john'.




// a function that adds a key and value property to an object
const addProperty = (obj, key, value) =>{
    return {...obj, [key]: value}
}
console.log(addProperty(employeePosition, 'mood', ':)'));
// {john: 'admin', bob: 'developer', mood: ':)'}:

// the parameter 'obj' is given the argument of 'employeePosition' // and tells the function what obj to use.

// the parameter 'key' is given the argument 'mood' 
// which will be added to the object as a key.

// the parameter 'value' is given the argument ':)' 
// which is the value of the new key 'mood'.



















//! adding methods to objects
//? functions added to objects as properties are called methods.
//? example:
const mathEquations = {
    multiply: function(x, y){
        return x * y;
    },
    divide: function(x, y){
        return x / y;
    },
    add: function(x, y){
        return x + y;
    }
};

//? objectName is the object that holds the functions.
//? key is name of function inside of the obj that you want to use.
//* syntax:

//* objectName.key()


console.log(mathEquations.multiply(4, 4));

//? rather than having a bunch of functions everywhere
//? a best practice is to group like functions in an object.



//? you can use a shorthand function syntax inside the obj to define the function.
//? you can also use arrow key function syntax
//? the functionName is added as the key inside of the object

//* syntax

//*   const objectName = {
//*   functionName(x,y){
//*     return x + y
//*   }    
//* }
const mathEquations2 = {
    multiply: function(x, y){   // function expression
        return x * y;
    },
    divide(x, y){           // shorthand syntax
        return x / y;
    },
    add:(x, y) =>{         // arrow key syntax
        return x + y;
    }
};
console.log(mathEquations2.divide(10, 5)); // 2

//? the function name is added as the key.


//? this syntax isnt commonly used because it doesnt work with 'this'.



















//! 'this' keyword
//? ALWAYS RETURNS AN OBJECT
//? helps write more useful methods inside of objects.
//? 'this' is a reference to the current execution scope.

//? 'let' and 'const' variables are not added to the window object.
//? 'var' is the only variable declaration added to the window obj.

//? if 'this' is not used inside of an object,
//? its scope is the window.

//? if 'this' is used inside of an object,
//? its scope is the object.


function sayHi(){
    console.log('hi')
    console.log(this);
}
sayHi();
// hi
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//? Window refers to the global scope of the browser.


const greetingMessage = () => {
    console.log(this);
}
greetingMessage(); 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// 'this' still refers to the window obj.






//! 'this' in methods
//? if 'this' is not used inside of an object,
//? its scope is the window.

//? if 'this' is used inside of an object,
//? its scope is the object.

//? when a regular function and its not inside an object,
//? 'this' refers to the window object.
//? it isnt until the function is enclosed in an object that 'this'
//? starts to refer to the parent object.

//?

const person4 = {
    first: 'cherilyn',
    last: 'sarkisian',
    nickname: 'cher',
    fullName(){
        console.log(this)
    }
};
person4.fullName(); 
// {first: 'cherilyn', last: 'sarkisian', nickname: 'cher', fullName: ƒ}

//? 'this' used inside of the object returned the object itself.
//? the value of 'this' is the object 'person4'
//? because its scoped to the obeject.

const person5 = {
    first: 'arnold',
    last: 'schwartznagger',
    nickname: 'terminator',
    fullName(){
        console.log(this.first);
    }
};
person5.fullName(); // arnold.
//? 'this' is scoped to the object. 
//? so 'this' is reffering to person5 object.
//? 'this.first' is the same as 'person5.first'.


const person6 = {
    first: 'barrack',
    last: 'obama',
    nickname: 'potus',
    fullName(){
        console.log(`${this.first} ${this.last}`);
    }
}
person6.fullName(); // barrack obama





















//! 'this' invocation context
//? the value of 'this' depends on the invocation context of the function its used in.
//? the value will change depending on how the function is executed,
//? not just how you write it.
//? it depends on how you call it.

//? the way the function is executed can determine what the value of 'this' is.

//? arrow functions DO NOT get their own version of 'this'.
//? arrow functions are by default scoped to the browser object.

const person7 = {
    first: 'donald',
    last: 'trump',
    nickname: '45',
    fullName() {
        const {
            first,
            last,
            nickname
        } = this;
        return `${first} ${last} aka ${nickname}`
        },
        printBio(){
            const fullName = this.fullName();
            console.log(`${fullName} is a person!`)
    },
    laugh: () => {
        console.log(this);
        console.log(`${this.nickname} says ahahahahah`)
    }
}

const printBio = person7.printBio(); // donald trump aka 45 is a person!
// in printBio, person7 is the value of 'this'
// when referring to a method, 
//? the value on the left side of the period
//* 'this' refers to the object on the left side of the period.
//* const variableName = object.method()
//? object is what 'this' would refer to.




//? arrow functions do not get their own 'this' which is a shortcoming.
//? the shortcoming can be used as an advantage.

//? when you need to create a function inside another function,
//? and you want to reference the parent object as 'this'
//? arrow functions are your friend.

//? since arrow functions dont get their own 'this', 
//? they can inherit 'this' from the parent object which can be useful.



const annoyer = {
    phrases: ['literally', 'cray cray', 'i cant even', 'totes', 'cant stop wont stop', 'yolo'],
    pickPhrase() {
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start(){
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
    } 
}

//? in the above code:
//? we used an arrow function in setInterval.
//? this allows 'this' to be inherited from its parent aka the closest 'this'.

//? inside of our start() function, 'this' gets its value from pickPhrase().
//? the arrow function didnt get its own 'this' so it took 'this' from pickPhrase() 





/*
const deckMaker = () => {
    const deck = [];
    const cardSuits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const cardValues = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of cardValues.split(',')) {
        for (let suit of cardSuits) {
            deck.push({
                cardValues,
                cardSuits
            })
        }
    }
    return deck;
}

function drawCard(deck){
    return deck.pop()
}

//? these work, but there are better ways:
// const myDeck = deckMaker();
// const card1 = deckMaker(myDeck);

const myDeck = {
    deck: [],
    drawnCards: [],
    cardSuits: ['hearts', 'diamonds', 'spades', 'clubs'],
    cardValues: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {cardSuits, cardValues, deck} = this;
        for (let value of cardValues.split(',')) {
            for (let suit of cardSuits) {
                deck.push({
                    cardValues,
                    cardSuits
                })
            }
        }
    },
    drawACard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
        drawMultiple(numCards) {
            const cards = [];
            for(i = 0; i < numCards; i++) {
                cards.push(this.drawACard());
            }
            return cards;
        }
    };
*/

































//! the DOM
//? Document Object Model

//? the DOM is a javascript representation of a webpage.

//? its a bunch of objects that you can interact with via JS.

//? HTML and CSS elements become objects that JS can manipulate/access.

//* use: console.dir() to check the object



//! document 
//? the document object is our entry into DOM.
//? everything in the DOM tree stems down from the document object.

//? it contains representations of all the content of a page.
//? it also includes tons of useful methods and properties.

//? you can use 
//* console.dir(document)
//? to view the webpage as an object.












//! selecting
//? when manipulating dom objects we normally select, then manipulate.

//? there are three old ways to select:
//* .getElementById --> document.getElementById('')
//* .getElementsByTagName --> document.getElementByTagName('')
//* .getElementsByClassName --> document.getElementByClassName('')
//? the TagName, Id and className MUST be a string.


//? there are two new ways to select:
//* .querySelector --> document.querySelector('element')
//* .querySelector --> document.querySelector('.className')
//* .querySelector --> document.querySelector('#idName')

//* .querySelectorAll --> document.querySelectorAll('element')
//* .querySelectorAll --> document.querySelectorAll('.className')
//* .querySelectorAll --> document.querySelectorAll('#idName')

//? you can get specific with selecting elements.
//? you can search within an element by replacing document. with the element
//* element.querySelector('element')

//* const section = document.querySelector('section')
//* section.querySelector('p')
//? the above code selects the 'p' element inside of section.
//? normally querySelector('') returns the first element
//? however we can specify where it starts its search for the first element.





//! selecting with specificity
//? to select specifics use the index of the element you are trying to target
//? if you have 5 p tags and you only want the first you would use [0]

//* document.getElementById('')[index]
//* document.getElementByTagName('')[index]
//* document.getElementByClassName('')[index]

//* document.querySelector('element')[index]
//* document.querySelector('.className')[index]
//* document.querySelector('#idName')[index]

//* document.querySelectorAll('element')[index]
//* document.querySelectorAll('.className')[index]
//* document.querySelectorAll('#idName')[index]









//! getElementById()
//? due to ID's being unique,
//? getElementById() will only ever target one element.

//? the Id you are trying to select goes inside the parenthesis as a string.

//* document.getElementById('put Id name in here')

const myLogo = document.getElementById('logo');


// a function that when called:
// changes the color of the element with the Id of 'unformattedText'
// to red using: 
//* getElementById('IdName').style.cssPropertyName = "value";
const changeCSSColor = () =>{
    return document.getElementById("unformattedText").style.color = "red";
}









//! getElementsByTagName()
//? the element(s) returned/targeted will be stored in a list 
//? depending on how many elements there are with that tag name.

//? the element(s) you are trying to target go inside the parenthesis as a string.

//* document.getElementsByTagName('put tag name here')

const theParagraphs = document.getElementsByTagName('p')

console.log(theParagraphs); // HTMLCollection(5) [p, p, p, p, p]

//? since JS stores these items in an 'array-like' item,
//? you can access certain elements by indices in the list.
//* theParagraphs[0] --> would give you access to the first p tag
//* theParagraphs[1] --> would give u access to the second p tag.
//* theParagraphs[2] --> would give u access to the third p tag.


//? this can also be helpful because although it is NOT a real array
//? it IS iterable.

//? iterating over all p tags:
//? where 'p' represents each iterable object (the p tags).
for(let p of theParagraphs) {
    console.log(p)
};
// <p>...</p>
// <p>Full time Full Stack Web Development Student</p>
// <p>...</p>
// <p>...</p>
// <p>...</p>


//? since the returned list is not an acutal array,
//? lets put it into an array using spread:
const arrayOfPTags = [...theParagraphs];
console.log(arrayOfPTags); // (5) [p, p, p, p, p]










//! getElementsByClassName()
//? returns a collection of the elements by class name specificed in the parenthesis.

//* document.getElementsByClassName('put class name in here')

const byClassName = document.getElementsByClassName('header')

console.log(byClassName) 
// HTMLCollection(4) [h1.header, h1.header, h1.header, h1.header]








//? If you wanted to target a specific nested element,
//? you could save the parent element to a variable
//? then use that variable in place of document. .

//? just save the element you want to use as the parent to a variable
//? then use that variable name instead of document. .

//? example:
// saving the first h1 with a class of 'header'
const specificElement = document.getElementsByClassName('containerCard')[0]
console.log(specificElement)
// using the specified element as a parent to only target elements nested within 
console.log(specificElement.getElementsByTagName('p')[0]);











//! selecting with .querySelector()
//? a newer, all-in-one method to select a SINGLE element
//? this allows us to select a tag, id, or class name without having to specify.
//? since .querySelector does not specifiy what its looking for,
//? you have to use the css selector syntax inside of the parenthesis:

//? inside of the parenthesis, pass in the css selector:
//* .querySelector() --> document.querySelector()

//* .querySelector() --> document.querySelector('element')
//* .querySelector() --> document.querySelector('.className')
//* .querySelector() --> document.querySelector('#idName')



// finds first h1 element 
//* document.querySelector('element');
console.log(document.querySelector('h1'));


// finds first element with ID
//* document.querySelector('#idName');
console.log(document.querySelector('#logo'))

// finds first element with class
//* document.querySelector('.className');
console.log(document.querySelector('.profilePicture'));









//! selecting with .querySelectorAll()
//? returns a collection of the css selector in an 'array like object' called Nodelist.
//? since .querySelectorAll doesnt specifiy what its looking for,
//? we have to use css selector syntax('.className') ('#idName) ([attributeName]).


//? inside of the parenthesis, pass in the css selector:
//* .querySelectorAll() --> document.querySelectorAll('element')
//* .querySelectorAll() --> document.querySelectorAll('.className')
//* .querySelectorAll() --> document.querySelectorAll('#idName')


// finds all h1 elements
//* document.querySelectorAll('element');
console.log(document.querySelectorAll('h1'));


// finds all element with ID
//* document.querySelectorAll('#idName');
console.log(document.querySelectorAll('#logo'))

// finds all element with class
//* document.querySelectorAll('.className');
console.log(document.querySelectorAll('.profilePicture'));



const containerCards = document.querySelectorAll('.containerCard')
console.log(containerCards);
// NodeList(3) [div.containerCard, div.containerCard, div.containerCard]












//! important DOM properties and methods.
//? classList
//? getAttribute()
//? setAttribute()
//? appendChild()
//? append()
//? prepend()
//? removeChild()
//? remove()
//? createElement
//? innerText
//? textContent
//? innerHTML
//? value
//? parentElement
//? children
//? nextSibling
//? previousSibling
//? style








//! accessing text and content with .innerText.
//? innerText returns the text inside of the selector.
//? innerText returns all the text inside of the element regardless of nesting.

//* element.innerText
//* const variableName = document.querySelector('element')
const firstHeader = document.querySelector('h1')
console.log(firstHeader.innerText) // Hi, My Names Caleb.



//? changing the text of the first h1 which is represented by the variable firstHeader.
//* variableNameOfSavedElement.innerText = 'your new text goes here'
firstHeader.innerText = 'Hi, My Names Caleb :)'





//? innerText returns all the text inside of the element regardless of nesting.
//? the ul below has 3 li's nested inside.
//? .innerText returns the ul and all the text of the 3 nested li's.
// html:
// <ul>
//     <li>thing1</li>
//     <li>thing2</li>
//     <li>thing3</li>
// </ul>

const nestedExample = document.querySelector('ul')
console.log(nestedExample.innerText); // thing1 thing2 thing3


// nestedExample.innerText = 'test'
//? doing the above removed the li's from the ul
//? and basically restructured the html to look like this:
// <ul>
//    test
//</ul>









//! accessing text and content with .textContent.
//? returns/retrieves not only the text, but the tags associated with selected element.

//? similair to .innerText.

//* element.innerText
//? is almost the same as 
//* element.textContent

//? except: .innerText returns just the text
//? .textContent returns the text with whatever tags and formatting was used in the HTML:
const innerVsTextContent = document.querySelector('#unformattedText')

//? .innerText
console.log(innerVsTextContent.innerText);
/* 'This just needs to be different and unique in some way to illustrate what im trying to show :) leave the weird indentations and what not.'*/

//! vs

//? .textContent
console.log(innerVsTextContent.textContent);
/*
'This just needs to be different and unique in some way to illustrate what 
                im trying to show :) leave the weird indentations and what not.

*/
//? .innerText returns the text that is currently visible on the screen client side.

//? .textContent returns all the content from the selector that is in the HTML file.










//! .innerHTML
//? returns/retrieves not only the text, but the tags inside the element.

//* element.innerHTML

console.log(document.querySelector('.containerCard').innerHTML);
/* <h1 class="header"> Hi, my names Caleb</h1>
<p class="loneWolf">Full time Full Stack Web Development Student</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, iusto modi in necessitatibus beatae adipisci minima, ipsum dolores aperiam aut illum sequi eos qui? Blanditiis.</p> */


//? although not best practice,
//? you can use innerHTML to add HTML elements:
//? just write the HTML inside of the declaration statement as a string.
//* const containerCard = document.querySelector('.containerCard');
//* containerCard.innerHTML = '<b> this is a bold tag </b>';

//? keep in mind this will remove whatever element/content is there,
//? and replace it with whatever elements you specified to be there.
//? in the example above, the elements and content of .containerCard
//? would be replaced by the single b tag specified during the declaration.
//? use += to avoid overriding everything:

// firstHeader.innerHTML += ' and I love web development'
//? the above would change the firstHeader from:
//? Hi, my names caleb :)
//? TO:
//? Hi, my names caleb :) and I love web development.

//? adding an element to firstHeader without deleting the content thats already there.
// firstHeader.innerHTML += '<b> and I love web development </b>'

//? if the above was done with .innerText, 
//? it would treat it as just a string,
//? the bold tags wouldnt be interpreted as tags and just written as a string.
// 'hi, im caleb :) and <b> i love web development </b>'













//! accessing value, src, href and other attributes
//? remember you can find a list of attributes that you can use
//? if you just use the drop down arrow that the Nodelist gives you.
//? the tag youre accessing must have that attribute or it will return undefined.

//? syntax for accessing some frequently used attributes:
//* const variableName = document.querySelectorAll('selectorName')
//* variableName[index].value

//* variableName[index].href

//* variableName[index].src


const inputs = document.querySelectorAll('input');
console.log(inputs); // NodeList(4) [input, input, input, input]
//? value examples using the inputs
//accessing the value of the first input tag and getting the value
console.log(inputs[0].value); // (there is no value so nothing is logged)
console.log(inputs[2].value); // on (because there is a checkbox)





//? checked examples for a checkbox
// checkboxes have a property called '.checked'
console.log(inputs[2].checked); // false
// the checkbox on my web page is unchecked so we get false

//? placeholder example using the password input box
console.log(inputs[1].placeholder) // password





//? accessing the href of an 'a' tag
const anchorTag = document.querySelectorAll('a');
console.log(anchorTag[1].href) // http://www.github.com/caleblopez96

//? accessing the src attribute of the img with class of .profilePicture
const myUglyMug = document.querySelector('.profilePicture')
console.log(myUglyMug.src) // http://127.0.0.1:5500/images/ProfilePicture.jpg






//? how to change the value of an attribute
//* variableName[index].attribute = put the new value you want here
inputs[0].value = ''
//? this would reset the value of the input by setting it to an empty string.
// to change the placeholder of the password field,
inputs[1].placeholder = 'password pls'
// changes the placeholder from 'password' to 'password pls'
















//! getting and setting attributes using getAttribute() and setAttribute()
//? allows to get attributes or change values of attributes on elements.
//? commonly used attributes like value, src, href have their own shortcut property

//* const variableName = document.querySelector('element[attribute]')
//* document.querySelector('element[attribute="attributeName"]')
const inputRange = document.querySelector('input[type="range"]')
console.log(inputRange)
// on our webpage, the input with attribute type range has other attributes.
console.log(inputRange.max); // 500 (our 'max' attribute is set to 500)
console.log(inputRange.min); // 100 (our 'min' attribute is set to 100)


//? setAttribute() takes two arguments:
//? first argument is the attribute that you want to set.
//? the second argument is the value of the new attribute you want to set.
//* variableName.setAttribute('attributeName', 'valueToSet')
inputRange.setAttribute('max', '1000')
// the above code changed the max attribute's value to 1000
console.log(inputRange.max); // 1000 




//? using setAttribute() to set a new type to our input field:
//* variableName.setAttribute('"type"', 'type')
//* inputRange.setAttribute('type', 'radio');
// the above code would change the range input to a radio button.















//! changing multiple elements
//? to change multiple elements we first need to get the elements.
//? this can be done with 
//? .querySelectorAll()
//? or
//? getElementById('#idName'), getElementsByClassName('.classNameHere') etc..

//? When we select multiple elements, they are returned to us in an 'array' like object.
//? which we can then iterate over with a 'for' loop.


//? example that iterates over all elements with the class name newLis
//? and changes the innerText
//* for loop
const newLis = document.querySelectorAll('.newLis');
for (i = 0; i < newLis.length; i++) {
    console.log(newLis[i].innerText) // dogs cats birds
}

//? example that iterates over all elements with the class name newLis
//? and changes the innerHTML
//* for of loop
for (let li of newLis) {
    li.innerHTML = '<b>DOGS</b> are the best'
}
// the bold tags were parsed and the innerHTML was changed.


//? changing all li's with the class of newLis2 innerText to dogo
const newLis2 = document.querySelectorAll('.newLis2')
for (i = 0; i < newLis2.length; i++) {
    newLis2[i].innerText = 'dogo' // dogo dogo dogo
}
// the above code changed the newLis2 innerText from:
// 'fish snakes frogs'
// to 'dogo' 'dogo' 'dogo'













//! changing styles and css properties with .style
//? every element has a style property.

//? if you try to access the style property,
//? it will return everything as blank even if there is a style.
//? it will only return the style and property if the style was defined inline.

//? using the style property will not work unless reading inline styles
//? however you can edit the style. the edited style will be given as an inline style.
//? if you look at the html in the console, all the styles below were applied
//? by giving the element the css properties inline in the html.

//? must use querySelector(), NOT querySelectorAll()

//* const varName = document.querySelector('element')
//* element.style.styleName = 'new style'

const h2 = document.querySelector('h2')
console.log(h2.style.color) // teal
h2.style.color = 'green'
console.log(h2.style.color) // green
// the color of the h2 changed from the inline style defintion of teal to green.

//? when specifiying a new style, the property must be camel cased
//? background-color : is the css property
//? backgroundColor : is how you would specifiy for Javascript
h2.style.fontSize = '2em';


// changing the color of the newLis3 to be a color in the array liColors
// 'for each' to iterate over the li's
// first parameter 'li' represents each li in newLis3
// 'i' represents the index
const newLis3 = document.querySelectorAll('.newLis3');
const liColors = ['red', 'yellow', 'green'];

newLis3.forEach((li, i) => {
    const colors = liColors[i];
    li.style.color = colors;
});













//! getComputedStyle()
//? allows you to retrieve css styles that are defined externally.
//? doesnt allow you to set, only retrieve the current style.

//? it returns every property that has been computed 
//? and also every property that hasnt been computed.

console.log(getComputedStyle(h2)); // CSSStyleDeclaration {all the styles are here}
//? inside of this CSSStyleDeclaration object 
//? you can see all styles that were set in the external style sheet.


//? to check an individual style use:
//* getComputedStyle('element').style
console.log(getComputedStyle(h2).color); // rgb(0, 128, 0)

//? the computed style value can changed based off the state of the selector:
//? if you run computedStyles on an object that has a :hover style,
//? and the element isnt hovered, you will see the non hover style.
//? if the object is hovered, the style value will change to the hover state.















//! manipulating classes
//? a way of adding multiple styles to an element
//? using:
//* classList.remove('className')
//* classList.add('className')
//* classList.toggle('ClassName')

//? when you need to change the style of an element,
//? create a class with the styles you want to add 
//? then use javascript to add the style to the element

//? if you use varName.style it creates the style inline 
//? its better for reusability and readability to just create a class in css
//? and then use javascript to add the new style to the element.


//? below selects the first element with an id #todoList,
//? then it looks inside the element with an id of $todoList
const stuffToDo = document.querySelector('#todoList', '.todo')



//? .classList 
//? returns an array like object with methods that can be used on the class

//? remvoing a class (below code goes in console)
//* const varName = document.querySelector('element')
//* varVname.classList.remove('classNameToRemove')
stuffToDo.classList.remove('fakeToDoList');


//? adding a class (below code goes in console)
//* const varName = document.querySelector('element')
//* varVname.classList.add('classNameToAdd')
stuffToDo.classList.add('done');


//? toggling a class (below code goes in console)
//* const varName = document.querySelector('element')
//* varVname.classList.toggle('className')
stuffToDo.classList.toggle('done');












//! creating and inserting elements into the DOM 

//* document.createElement('element')
//? creating a new h2 element in the dom:
//* document.createElement('h2')

const newH2 = document.createElement('h2');

//? after creating the element element inside of the dom,
//? you need to do stuff with it such as:
//? adding a class
//? adding text content


//? adding text to the new h2
//? (below code in console)
newH2.innerText = 'im a new h2';
//? newH2 is now a new h2 element inside of the dom with the above inner text.


//? adding a class to the new h2
//? (below code in console)
newH2.classList.add('changeStyle');



//? then your newly created element needs to be inserted into the dom.
//? in order to do this, we need to select an element to append it to.
//* .appendChild
const section = document.querySelector('.section');
section.appendChild(newH2);
