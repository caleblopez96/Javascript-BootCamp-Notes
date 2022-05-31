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

let stringFirstName = 'Caleb'
let stringLastName = ' Lopez'
console.log(stringFirstName + stringLastName); // 'Caleb Lopez'

let stringConcat = "I love";
let stringConcat2 = "Javascript"
console.log(stringConcat + " " + stringConcat2); // "I love Javascript" 




// String Indices
// strings are indexed by characters
// each character is assigned its own numbers based off position in string
//left to right starting at 0

//example:
//                  C H I C K E N
//                  0 1 2 3 4 5 6

//Strings come with properties 

//.length property gives you the length in characters of the string

let hello = 'hello'
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
console.log(yell) // WELCOME TO MY WEBSITE

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

let superhero = 'spiderman'
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
let saying = 'he said he ain\'t happy'
console.log(saying); // he said he ain't happy
// the \' allowed me to use a single quote inside a single quote because
// it told javascript to ignore it


//double quote escape
let sayingTwo = "he said \"he aint happy\""
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
//template literals are strings that allow embedded expressions, which will be //evaluated and then turned into a resulting string
//special strings that take in information expressions, other variables, data
//etc, and spit out one variable at the end
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
console.log(`you must be ${minAge} to enter. Please come back in ${minAge - yourAge} years`)


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

let str5 = 'string :)'
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
let num24 = '24'
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

let message1 = 'hello'
let message2 = 'hello!'
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
console.log(stringExample2==='is logged in'); // true

let logInStatus = false;
console.log(logInStatus === true) // false
console.log(logInStatus === false) // true


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
}

// newRating is greater than or equal to 3 console.log the string
if (newRating >= 3) {
    console.log('you exceed expectations'); // 'you exceed expectations'
}

// if newRating is less than or equal to 3 console.log the string
if (newRating <= 3) {
    console.log('you dont meet expectations') // nothing runs in console
}                                            // cuz statement is not true

// if newRating is less than 4 console.log the variable badRatingMsg
let badRatingMsg = 'you didnt quite make it to 4'
if (newRating < 4) {
    console.log(badRatingMsg) // you didnt quite make it to 4
}

// if 1 is equal to 1 console.log the string
if (1===1) {
    console.log('its true!') // its true!
}

// if 5 is not equal to 10 console.log the string
if (5!== 10) {
    console.log('5 is not equal to 10.'); // 5 is not equal to 10.
}

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
}



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
}




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

let newRating2 = 'a'

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
}
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
}




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
        console.log('valid password!');
    }
}
else {
    console.log('Password is too short.');
}

