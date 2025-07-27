// Step 1: Get the elements from the HTML
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

// Step 2: Set initial value
let count = 0;

// Step 3: Add click event for the increment button
incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

// Step 4: Add click event for the decrement button
decrementBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});


