/*
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %; 
*/
let zakat = 250;
let zakatPercent = .025 ;
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
let fr= [ 1, 7 , 9 , 4  , 5 ];
let sc= [ "Str" , "alex" , "moh"];
let th= [ 'the' ,'fox' , 'over' , 'lazy' , 'dog'  ];
console.log (fr);
console.log (sc);
console.log (th);

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits=["Tomato","Banana","Watermelon"];
console.log(fruits.indexOf ("Tomato"));
console.log(fruits.indexOf ("Banana"));

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/
let foodd=['food1' , 'food2'];
let sportt=[ 'sp1' , 'sp2' , 'sp3'];
let moviee=[ 'mov1' , 'mov2'];
console.log( moviee , sportt , foodd);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let ar= [1,4,5];
console.log(ar[0]);
let ar1= ["t","u","g","x"];
console.log(ar1 [0]);

/*
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let ar01= [1,4,5];
console.log(ar01[ar01.length -1]);
let ar02= ["t","u","g","x"];
console.log(ar02[ar02.length -1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let ar03=  [0,5,7,9];
ar03.pop();
ar03.pop();
ar03.pop();
ar03.pop();
ar03.push(1,3,4,6,8,9,10);
console.log(ar03);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let ar04= [5,9,-7,3.5];
ar04.shift();
ar04.shift();
ar04.shift();
ar04.push(-7);
ar04.push(9);
ar04.push(5);
console.log(ar04);

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/
var ar05 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
console.log (ar05.sort (function (a,b)
    {return a - b
}))

