console.log('GOOD LUCK 👩‍💻 👨‍💻')
// Please focus

/* Q1:
Using Map
Create a function called MultiByNum1OrNum2
that takes an array of numbers and two numbers as a parameter
and return a new array after mutiple each elemnt to the num1
if the module of this elemnt to num1 is 0
otherwise multiple the elemt to num2

var arrOfNum1 = [1,5,2]
Example: 
MultiByNum1OrNum2(arrOfNum1,2,6)
Output => 
[6,30,4]

var arrOfNum2 = [7,2,50]
Example: 
MultiByNum1OrNum2(arrOfNum2,7,10)
Output => 
[49, 20, 500]

*/
arr = [7,2,50]
function MultiByNum1OrNum2(arr, n1, n2) {
       
  var list = arr.map(index => {
    if (index % n1 === 0)
      return index * n1;
    else
      return index * n2;
  })
  return list;
}
console.log(MultiByNum1OrNum2(arr , 7 , 10))

/* Q2:
Using Filter
Create a function called longerAndYounger
that takes an array of objects and 2 numbers as a parameter
and return a new array with the object has 
a name longer than the first parameter
and in the same time less than the second parameters 

var arrOfObj1 = [
  { name: "alex" ,age:22},
  { name: "mercer",age:26},
  { name: "alice" ,age:33},
  { name: "zaheer",age:35},
  { name: "elizabeth",age:45}
]
Example: 
longerAndYounger(arrOfObj1,4,30)
Output => 
[ 
  { name: "mercer",age:26},
]

Example: 
longerAndYounger(arrOfObj1,3,30)
Output =>
[ 
  { name: "alex" ,age:22},
  { name: "mercer",age:26}
]
*/
var arrOfObj1 = [
  { name: "alex" ,age:22},
  { name: "mercer",age:26},
  { name: "alice" ,age:33},
  { name: "zaheer",age:35},
  { name: "elizabeth",age:45}
]
function longerAndYounger(arr, number1, number2) {
  
  var list = arr.filter(index => {
    var v1 = index.name;
    var v2 = index.age;
    if (v1.length > number1 && v2 < number2)
      return index;
  })

  return list;
}
console.log(longerAndYounger(arrOfObj1,4,30))


/* Q3:
Using Reduce
Create a function called nameAndAllFoods
that takes an array of objects of strings and a number
and return a string have the name of object that 
equal to the index that passesd in the parameter 
and with all the food from other objects

var arrOfObj2 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]

Example:  
nameAndAllFoods(arrOfObj2,0)
Output =>
"alex, fried chiken, pizaa, burger, hot dog, eggs"

Example:
nameAndAllFoods(arrOfObj2,2)
Output =>
"alice, fried chiken, pizaa, burger, hot dog, eggs"
  
*/
function nameAndAllFoods(objectsOfArray, num) {
  
  return  objectsOfArray.reduce(function(result, element, index) {
    if(index === num) {
      result = element.name + reuslt;
    }

    return result + ', ' + element.food;
  }); 
}


/*
Q4
You need to write the solution in the q4.html file
1. Add to q4.html file:
  a. div:with text 'Main div is here' with class => "main"
  b. button: with text 'Red'    with id => "no"
  c. button: with text 'Green'  with id => "yes"
  d. change the title to Q4

2. Add these style int he same file q4.html:
  a. id => "no"     the color of the background  =>   Red
  b. id => "yes"    the color of the background  =>   Green

3. Using jQuery add these logic to q4.html in the same file:
  a. when click on the button with id "no"  => cahnge the color of the div with class "main" to red
  b. when click on the button with id "yes" => cahnge the color of the div with class "main" to green
*/