let isLoggedIn = false;

// Grab references to buttons and forms
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const newMessageBtn = document.getElementById('new-message-btn');
const showRegisterBtn = document.getElementById('show-register-btn');
const registrationFormContainer = document.getElementById('form-container');
const registrationForm = document.getElementById('registration-form');


// Modal elements
const registrationModal = document.getElementById('registrationModal');
const closeModalBtn = document.getElementById('close-modal-btn');

// Function to update the visibility of login/logout buttons based on login state
function updateButtonVisibility() {
  loginBtn.style.display = isLoggedIn ? 'none' : 'block';
  logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
}

// Event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loginBtn.addEventListener('click', login);
  logoutBtn.addEventListener('click', logout);
  newMessageBtn.addEventListener('click', newMessage);
  showRegisterBtn.addEventListener('click', toggleRegistrationForm);
  registrationForm.addEventListener('submit', register);

  // Check login state from local storage
  const token = localStorage.getItem('token');
  isLoggedIn = !!token;  // Convert token to boolean
  updateButtonVisibility();  // Update button states based on login state
  loadMessages();  // Load messages on page load
});

// Function to show/hide the registration modal
function toggleRegistrationForm() {
  console.log("Toggle registration form called");

  if (registrationModal.style.display === 'none' || registrationModal.style.display === '') {
    registrationModal.style.display = 'block'; // Show modal
    console.log("Registration form displayed in modal");
  } else {
    registrationModal.style.display = 'none'; // Hide modal
    console.log("Registration form hidden");
  }
}

// Event listener to close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
  registrationModal.style.display = 'none'; // Close modal
});

// Event listener to close the modal if clicked outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === registrationModal) {
    registrationModal.style.display = 'none'; // Close modal if the outside area is clicked
  }
});

// Handle user login
async function login(event) {
  event.preventDefault();  // Prevent form submission default behavior
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  try {
    const response = await fetch('http://localhost:82/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok && data.token) {
      localStorage.setItem('token', data.token);  // Store token
      isLoggedIn = true;
      updateButtonVisibility();  // Refresh button states
      loadMessages();  // Load messages after login
      alert('Connexion réussie!');
    } else {
      alert(data.message || 'Erreur de connexion');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Erreur de connexion');
  }
}

// Handle user logout
function logout() {
  localStorage.removeItem('token');  // Remove token from local storage
  isLoggedIn = false;
  updateButtonVisibility();  // Refresh button states
  alert('Vous êtes déconnecté.');
}

// Handle user registration
async function register(event) {
  event.preventDefault();  // Prevent form submission default behavior
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  try {
    const response = await fetch('http://localhost:82/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Inscription réussie! Connectez-vous maintenant.');
      registrationModal.style.display = 'none';  // Hide registration modal
    } else {
      alert(data.message || 'Erreur lors de l\'inscription.');
    }
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    alert('Une erreur est survenue lors de l\'inscription');
  }
}

// Function to load messages from the server
async function loadMessages() {
  try {
    const response = await fetch('http://localhost:82/api/messages');
    const messages = await response.json();
    displayMessageList(messages);  // Call a function to display messages
  } catch (error) {
    console.error('Error loading messages:', error);
  }
}

// Function to create and add a new message
async function newMessage() {
  const title = prompt("Titre du message :");
  const messageTxt = prompt("Contenu du message :");
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Veuillez vous connecter pour ajouter un message.');
    return;
  }

  try {
    const response = await fetch('http://localhost:82/api/messages/newMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({ title, message: messageTxt })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Message ajouté avec succès!');
      loadMessages();  // Reload messages
    } else {
      alert(data.error || 'Erreur lors de l\'ajout du message.');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du message:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
}

// Function to display messages in the messagesList container
function displayMessageList(messages) {
  const messagesList = document.getElementById('messagesList');
  messagesList.innerHTML = '';

  messages.forEach((message) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `<h3>${message.title}</h3><p>${message.message}</p>`;
    messagesList.appendChild(messageDiv);
  });
}



const showLoginBtn = document.getElementById('show-login-btn');
const loginModal = document.getElementById('login-modal');
const closeLoginModalBtn = document.getElementById('close-login-modal-btn'); // Assuming you have a close button inside the modal

// Show Login Modal
showLoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close Login Modal
closeLoginModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
});

