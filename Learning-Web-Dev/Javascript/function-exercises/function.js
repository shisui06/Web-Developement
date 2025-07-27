//The word "number" here is parameter this what the machine where it receive the input 
function addTwo(number) {  
 let result = number + 2;
 return result;
}

console.log(addTwo(5));
console.log(addTwo(10));





// SIMPLE FUNCTION
function greet() {
 console.log("Hello, World!");
 }
 greet(); //Call the function to make Hello World appear in the console.



// FUNCTION PARAMETER
function greet (name){ // "name" is a parameter  
 console.log("Hello," + name + "!");
 }
 greet("Tamoor"); //Passing a value to the function, in this case "John".


 // FUNCTION WITH TWO PARAMETER 
 
 function introduce ( firstName , age ){
  console.log("My name is " + firstName +" and I am " + age + " years old. ");
   }

   introduce("Tamoor",40);


   function greet (name){
    console.log("Hello," + name + "!");
    }
    greet("Tamoor"); //Passing a value to the function, in this case "John"
    greet("");

  
  
    // FUNCTION WITH A DEFAULT PARAMETER

    function greet(name = "Guest") { // Instead of just of a name as a paramater there a paramter by default is set "Guest"  
      console.log("Hello, " + name + "!");

    }
    greet ("KASPER");


    
    
    //FUNCTION WITH LOOPS

    function checkDrivingEligibility (age){
  if (age >= 18) {
  console.log("You are allowed to drive.");
  } else { 
    console.log("You are not allowed to drive yet.");
}
}


let result = getRectangleArea(5,10);
function getRectangleArea(width,height) {
  
area = width * height

}
console.log(result);




// FUNCTION ARROW REACTJS
 /*
const greet = () => { //Arrow function shorter syntax in React/Next.js
  console.log("Hello!");
};
greet();

*/


function add7(n1){
  return n1 + 7
}
console.log(add7(2))


function multiply (n1,n2){
  return n1 * n2
} 
console.log(multiply(1,2))


function capitalize ()

// RETURN FONCTION


