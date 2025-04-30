
function calculateTip(billAmount, tipPercent) {
 const tip = billAmount * (tipPercent / 100);
 return billAmount + tip;
}

const total = calculateTip(100, 10);
console.log("Total to pay: $" + total);



// Mulitiplication Function

function divideNumbers(num1,num2){
 return num1 / num2;
}
const result = divideNumbers(10,5);
console.log("The result is:",result);


let x = 10;
x -= 2;
x *= 3;
x++;
x =25


const a = true;
const b = false;
console.log(a || b);
console.log(a && b);
console.log(!a);
 true
 false
 false 



 function multiply(x,y){
    return answer = x * y

 }
 const answer = multiply(4,2);
 console.log("Answer is :",answer);

 const greet = (name) => "Hello" + name;

 const square = (n) => n * n;



 function creeCompteur(){
   let compteur = 0;
   return function () {
      compteur++;
      console.log(compteur);
   }
}

