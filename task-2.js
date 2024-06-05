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
