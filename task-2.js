/* 1. Write a JavaScript program that accept two integers and
* display the larger.Go to the editor */
/******* Start Your Code *********/
let num = numberLarger(3,5);
function numberLarger ( a ,b ){
    if(a>b){
        return a ;
    }else {
        return b
    }
}
console.log(num);
/******* End Your Code ********* */
/* 2. Write a JavaScript conditional statement to find the sign
of product of three numbers. Display an alert box with the 
specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function sign(a, b, c) {
    let array01 = (a * b * c);
    if (array01 > 0) {
        return "+";
    } else if (array01 < 0) {
        return "-";
    } 
    else {
        return "0";
    }
}
let array1 = sign(3, -7, 2);
console.log("The sign is", array1);
/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

let arr01 = 0;
let arr02 = -1;
let arr03 = 4;

if (arr01 >= arr02 && arr01 >= arr03) {
    if (arr02 >= arr03) {
        alert(arr01 + ", " + arr02 + ", " + arr03);
    } else {
        alert(arr01 + ", " + arr03 + ", " + arr02);
    }
} else if (arr02 >= arr01 && arr02 >= arr03) {
    if (arr01 >= arr03) {
        alert(arr02 + ", " + arr01 + ", " + arr03);
    } else {
        alert(arr02 + ", " + arr03 + ", " + arr01);
    }
} else {
    if (arr01 >= arr02) {
        alert(arr03 + ", " + arr01 + ", " + arr02);
    } else {
        alert(arr03 + ", " + arr02 + ", " + arr01);
    }
}
/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
/******* Start Your Code *********/
let arr11 = -5;
let arr12 = -2;
let arr13 = -6;
let arr14 = 0;
let arr15 = -1;
let largestNumber = arr11;
if (arr12 > largestNumber) {
    largestNumber = arr12;
}
if (arr13 > largestNumber) {
    largestNumber = arr13;
}
if (arr14 > largestNumber) {
    largestNumber = arr14;
}
if (arr15 > largestNumber) {
    largestNumber = arr15;
}
alert("The largest number is: " + largestNumber);
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let a = 10;
let b = 5;
if (a > b) {
    console.log("Hello World");
} else {
    alert("Goodbye");
}
/******* End Your Code ********* */

/* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/
/******* Start Your Code *********/
function scoreInUni(s) {
    if (s >= 95) {
    return "A";
} else if (s >= 85) {
    return "B";
} else if (s >= 70) {
    return "C";
} else if (s >= 50) {
    return "D";
} else {
    return "F";
    }
}

/******* End Your Code ********* */
// 1. Write a JS code to print numbers from 1 to 10
for ( let i = 1 ; i<= 10 ; i++) {
    console.log(i);
}

/*2. Write a JS code to print Even numbers in arr :
arr = [13,23,12,45,22,48,66,100]
*/
arr = [13,23,12,45,22,48,66,100]
let arr04=[] ;
for ( let i = 0 ; i < arr.length ; i++) {
    if ( arr[i] %2==0 ){
        arr04.push(arr[i])
    }
}
console.log(arr04)
/* 
3. Write a JS code to print a pattern using for loop
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
*/
for (let i = 1 ; i<= 8 ; i++) {
    let line = "";
    for ( j=1 ; j<=i ; j++){
        line+= j + " " ;
    }
    console.log(line)
}
/* 
Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/
let x = "don’t know why"
if( x. search("y") >= 0 ) {
    console.log("yes")
} else{ 
    console.log("no")
}

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune (a , b , c ,d) {
    console.log(`You will be a ${a} in ${b} ,  and married to ${c} with ${d} kids.`)
} tellFortune ('software engineer', 'Jordan', 'Alice', 3);

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge (D) {
    var dogYears = 1*7;
    document.write ( "My doggie is " + dogYears + "years old in dog years!");
}
calculateDogAge (1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/ 
function calculateSupply ( a , b) {
    const ageYears = 100;
    const yearsRemaining = ageYears - a;
    const daysRemaining = yearsRemaining * 365 ;
    const totalAmount = b * daysRemaining ;
    document.write (" <br>You will need " +totalAmount + " cups of tea to last you until the ripe old age of" + ageYears)
}
calculateSupply (30 , 3)

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Ahmad")
=> "Hello Adam"
*/
function greet (name) {
    var greeting = "Hello" + " " + name + "!" ;
    return greeting;
}
var personName = "Ahmad";
var message = greet(personName);
document.write("<br>" + message);

/*
5
what is the error:
function double(cat) {
    return 2 * x;
}
function double(7) {
    return 2 * 7;
}
function double('7') {
    return 2 * 'x';
}
*/
function double(x) {
    return 2 * x;
}
var cat = 2;
console.log(double(cat));

function double(z) {
    return 2 * z;
}
let z = 7;
console.log (double(z))

function double(y) {
    return 2 * y ;
}
let y = 7;
console.log (double(y))

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
functiondouble2 x)
return 2 * x;
}
function (x) double3 {
  return 2 * x;
*/
function double1 (x) {
    return 2 * x ;
}
function double2 (x) {
return 2 * x ;
}
function double3 (x) {
    return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/
function cube (number) {
    var resultNum = number * number * number;
    console.log(resultNum);
}
cube(4);

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply (a , b) {
    let result = a * b ; 
    console.log(result);
}
multiply(3, 4);
multiply(5, 4);

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/
function canIGetADrivingLicense(age) {
    if (age >= 20) {
        return "yes you can"; 
    } else {
        let yearsWait = 20 - age;
        return "please come back after " + yearsWait + " years to get one";
    }
}
console.log(canIGetADrivingLicense(21));
console.log(canIGetADrivingLicense(17));
console.log(canIGetADrivingLicense(20));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/
function sameLength(A, B) {
    return A.length === B.length;
}
console.log(sameLength("tree", "clue")); 
console.log(sameLength("tree", "car")); 

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/
function largerNumber (a, b) {
    if ( a > b) {
        return a ;
} else {
    if (a < b)
        return b ;
    }
}
console.log (largerNumber(5 , 6));
console.log (largerNumber(5 , 3));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNumber(8,6,7)
=> 6

Ex: smallerNumber(5,99,34)
=> 5

Ex: smallerNumber(5,99,3)
=> 3
Ex: smallerNumber(5,3,3)
=> 3
*/
function smallerNumber ( a, b, c) {
    if ( a < b && a < c ) {
        return a;
    } else if ( b < a && b < c ) {
        return b;
    } else {
        return c;
    }
} 
console.log(smallerNumber(8,6,7));
console.log(smallerNumber(5,99,34));
console.log(smallerNumber(5,99,3));
console.log(smallerNumber(5,3,3));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
Ex: shorterString("air","tr","car","by","github")
=> tr
Ex: shorterString("by","tr","car","air","github")
=> by
Ex: shorterString("air","by","car","school","github")
=> by
Ex: shorterString("air","tr","by","car","github")
=> by
Ex: shorterString("air","tr","car","github","by")
=> by
*/
function shorterString(a, b, c, d, e) {
    var shortest = a;
    var lengthA = a.length;
    var lengthB = b.length;
    var lengthC = c.length;
    var lengthD = d.length;
    var lengthE = e.length;

    if (lengthB < shortest.length) {
        shortest = b;
    }
    if (lengthC < shortest.length) {
        shortest = c;
    }
    if (lengthD < shortest.length) {
        shortest = d;
    }
    if (lengthE < shortest.length) {
        shortest = e;
    }
    return shortest;
}
console.log(shorterString("air", "school", "car", "by", "github"));
console.log(shorterString("air", "tr", "car", "by", "github"));
console.log(shorterString("by", "tr", "car", "air", "github"));
console.log(shorterString("air", "by", "car", "school", "github"));
console.log(shorterString("air", "tr", "by", "car", "github")); // tr not by!!
console.log(shorterString("air", "tr", "car", "github", "by")); // tr not by!!

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","school","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(a, b, c, d) {
    var longest = a;
    if (b.length > longest.length) {
        longest = b;
    } 
    if (c.length > longest.length) {
        longest = c;
    }
    if (d.length > longest.length) {
        longest = d;
    }
    return longest;
}

console.log(longerString("air", "school", "car", "github"));
console.log(longerString("air", "schoo", "car", "github"));
console.log(longerString("school", "air", "github", "car"));
console.log(longerString("car", "github", "school", "air"));
