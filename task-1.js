/*
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 
*/
let zakat = 250;
let zakatPercent = .025;
zakatValue = zakat * zakatPercent;
console.log("The value of zakat for $" + zakat + " is $" + zakatValue);

/*
Array Tasks : 
1
Correct the syntax error
[ 1,7  9  45, ]
["Str" "alex","moh"
'the','fox' 'over' lazy, 'dog',  ]
*/
[ 1 , 7 , 9 , 45 ]

[ "Str" , "alex" ,"moh" ]

[ 'the' ,'fox' , 'over' , 'lazy' , 'dog'  ]

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"]
fruits[0]="Tomato";
fruits[1]="Banana";

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let favFood = [ "Mansaf" , "Burger" ];
let favSport = [ "Football" , "Sleeping" , "Eating" ];
let favMovie = [ "The Meg" , "çukur" ];

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let array1= [1,4,5];
console.log(array1[0]);
let array2= ["t","u","g","x"];
console.log(array2[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let arr1= [1,4,5];
console.log(array1[-1]);
let arr2= ["t","u","g","x"];
console.log(array2[-1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let num= [0,5,7,9];
num.
num.shift();
num.shift();
num.shift();
num.shift();
num.unshift(1, 3, 4, 6, 8, 10);
console.log(num);
//يمكن فعل ذلك من خلال حذف العناصر عن طريق إستخدام
//pop
// وإضافة العناصر عن طريق إستخدام
//push

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
//rtl?
var array02 = [ 5 , 9 , -7 , 3.5 ];
array02.shift();
array02.shift();
array02.unshift(3.5);
array02.pop();
array02.push(9);
array02.push(5);
console.log(array02);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var arr01= [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr01.sort();
console.log(arr01);

