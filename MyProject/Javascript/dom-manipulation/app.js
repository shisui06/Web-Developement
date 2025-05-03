let titleEl = document.querySelector('#title');
console.log(titleEl.textContent);

let msgEl = document.querySelector('.message');
console.log(msgEl.textContent);

msgEl.textContent = "WelcomeTamoor";
console.log(msgEl.textContent);


msgEl.addEventListener('click', function() {
  msgEl.textContent = "You clicked me!";
});





// getElementById grabs each element by their id.
const message = document.getElementById('msg');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const reset = document.getElementById('reset');

// addEventListener('click', ...) tells the browser: “When this is clicked, do something.”
// textContent changes what the paragraph says.
btn1.addEventListener('click', function () {
  message.textContent = 'You clicked the message button!';
});
//style.color changes the CSS directly from JavaScript.
btn2.addEventListener('click', function () {
  message.style.color = 'red'; 
});


reset.addEventListener('click', function () {
  message.textContent = 'Nothing happened yet';
  message.style.color = 'black'; // or whatever the default color is
});



function addTwo(number) {
  let result = number + 2;
  return result;
}

console.log(addTwo(5));  // Output: 7
console.log(addTwo(10)); // Output: 12
console.log(addTwo(100)); // Output: 102

