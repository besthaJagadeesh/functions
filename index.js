//Answer to Q1//
const Q1 = function (){
    let x ='Answer to Q1'
    console.log(x)
}()


//Answer to Q2//
const add = function (a,b){
    return a+b
}

console.log(5+7)

//Answer to Q3//
const Multi = (a,b) => a*b;
const result = Multi(12,5);
console.log(result);

//Answer to Q4//
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}

//Answer to Q5//
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
}


//Answer to Q6//
var x = 21;
a();
b();

function a() {

x = 20;
console.log(x);
};
function b() {

    x = 40;
console.log(x);
};

//Answer to Q7//
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
    let num = 6;
  console.log(factorial(num))

                //DAY 2//
//Answer to Q1//


function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));
//Answer to Question 2//
 Abc();
 const Abc = function(){
 let value = 20;
console.log(value);
}

//Answer to Question 3//
var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//Answer to Question 4//
const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")