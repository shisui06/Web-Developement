let titleEl = document.querySelector('#title');
console.log(titleEl.textContent);

let msgEl = document.querySelector('.message');
console.log(msgEl.textContent);

msgEl.textContent = "WelcomeTamoor";
console.log(msgEl.textContent);


msgEl.addEventListener('click', function() {
  msgEl.textContent = "You clicked me!";
});
