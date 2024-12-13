let isLoggedIn = false;

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const newMessageBtn = document.getElementById('new-message-btn');
const showRegisterBtn = document.getElementById('show-register-btn');
const registrationFormContainer = document.getElementById('form-container');
const registrationForm = document.getElementById('registration-form');
const showLoginBtn = document.getElementById('show-login-btn');
const loginModal = document.getElementById('login-modal');
const closeLoginModalBtn = document.getElementById('close-login-modal-btn'); 
const registrationModal = document.getElementById('registrationModal');
const closeModalBtn = document.getElementById('close-modal-btn');
const loginForm = document.getElementById('login-form');




function updateButtonVisibility() {
  loginBtn.style.display = isLoggedIn ? 'none' : 'block';
  logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  loginBtn.addEventListener('click', login);
  logoutBtn.addEventListener('click', logout);
  newMessageBtn.addEventListener('click', newMessage);
  showRegisterBtn.addEventListener('click', toggleRegistrationForm);
  registrationForm.addEventListener('submit', register);


  document.getElementById('showLoginBtn').addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
    }
  });
  
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
  
    try {
      const response = await fetch('http://localhost:80/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        loginModal.style.display = 'none';
        // Optionally, refresh the page or update UI
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  });
  
  const token = localStorage.getItem('token');
  isLoggedIn = !!token;  
  updateButtonVisibility();  
  loadMessages();  
});


function toggleRegistrationForm() {
  console.log("Toggle registration form called");

  if (registrationModal.style.display === 'none' || registrationModal.style.display === '') {
    registrationModal.style.display = 'block'; 
    console.log("Registration form displayed in modal");
  } else {
    registrationModal.style.display = 'none'; 
    console.log("Registration form hidden");
  }
}


closeModalBtn.addEventListener('click', () => {
  registrationModal.style.display = 'none'; 
});


window.addEventListener('click', (event) => {
  if (event.target === registrationModal) {
    registrationModal.style.display = 'none';
  }
});


async function login(event) {
  event.preventDefault();  
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  try {
    const response = await fetch('http://localhost:80/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok && data.token) {
      localStorage.setItem('token', data.token);  
      isLoggedIn = true;
      updateButtonVisibility();  
      loadMessages();  
      alert('Connexion réussie!');
    } else {
      alert(data.message || 'Erreur de connexion');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Erreur de connexion');
  }
}


function logout() {
  localStorage.removeItem('token');  
  isLoggedIn = false;
  updateButtonVisibility(); 
  alert('Vous êtes déconnecté.');
}


async function register(event) {
  event.preventDefault();  
  const username = document.getElementById('registerUsername').value.trim();
  const password = document.getElementById('registerPassword').value.trim();

  try {
    const response = await fetch('http://localhost:80/api/user/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Inscription réussie! Connectez-vous maintenant.');
      registrationModal.style.display = 'none';  
    } else {
      alert(data.message || 'Erreur lors de l\'inscription.');
    }
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    alert('Une erreur est survenue lors de l\'inscription');
  }
}


async function loadMessages() {
  try {
    const response = await fetch('http://localhost:80/api/messages');
    const messages = await response.json();
    displayMessageList(messages);  
  } catch (error) {
    console.error('Error loading messages:', error);
  }
}

async function newMessage() {
  const title = prompt("Titre du message :");
  const messageTxt = prompt("Contenu du message :");
  const token = localStorage.getItem('token');

  if (!token) {
    alert('Veuillez vous connecter pour ajouter un message.');
    return;
  }

  try {
    const response = await fetch('http://localhost:80/api/messages/newMessage', {
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

showLoginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeLoginModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = 'none';
  }
});

