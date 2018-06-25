//typeof x in the console on google and it tells you what it is// 
//console.log(testOne)//

var testOne = "What Kind of variable am I?";
//What Kind of variable am I?//
var testTwo = 256;
//10028//
var testThree = false;
//4//
var testFour = 'true';
//false5//
var testFive = '128';
//125//
var testSix = "";
//0//
var testOne = "hello" + "there";
//hellothere//
var testTwo = '100' + 28;
//10028//
var testThree = true + 3;
//4//
var testFour = 'false' + 5;
//false5//
var testFive = '128' -3;
//125//
var testSix = "" *9;
//0//
var testSeven = 'zero' -1;
//NaN//
var testEight = 'five'.length;
//4//
var testNine = 'five' [0] + 'ever';
//fever//
var testTen = 'a' > 'b';
//false//
var testEleven = 'number'.length < 7;
//true//
var testTweleve = '12' == 12;
//true//
var testThirteen = 'twelve' == 12;
//false//
var testFourteen = '14' === 14;
//false//
var testFifteen = 'Hi there'[0] + 'open sesame' [2] + 'alohoamora' [1] +
'eulalia'[4] + 'harkonnen' [4] + 'BATMAN!'[6];
//Hello!//


var string1 = "Hello, ";

var string2 = "my name is ";

var string3 = "Kingsley Pappagiorgio.";

var combinedStrings = string1 + string2 + string3;

console.log(combinedStrings); //Hello, my name is Kingsley Pappagiogio

var num1 = 8;

var num2 = 52; 

var num3 = 60;

var combinedNumbers = num1 + num2 + num3;

console.log(combinedNumbers) //120//


var mixedNum1 = 10;

var mixedString1 = "ten";

var mixedNum2 = "10";

var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;

console.log(mixedConcatenation); //1010ten//


var num4 = 5;

var num5 = 0;

if(num4 > 1) {
	console.log("Num4 is greater than 1");
} else {
	console.log("Num4 is NOT greater than 1");
};
//Num4 is greater than 1//


var num4 = 5;

var num5 = 0;

if(num4 < num5 || num4 === num5) {
	console.log("If statement ran!");
} else if
