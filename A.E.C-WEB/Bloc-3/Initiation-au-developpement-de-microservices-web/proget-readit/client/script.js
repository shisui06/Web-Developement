// Initial login state
let isLoggedIn = false; 

const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');

// Function to update button visibility based on login state
function updateButtonVisibility() {
  if (loginBtn && logoutBtn) {
    loginBtn.style.display = isLoggedIn ? 'none' : 'block';
    logoutBtn.style.display = isLoggedIn ? 'block' : 'none';
  }
}
// Call this function to set the initial state
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  
  // Add event listeners
  loginBtn?.addEventListener('click', login);
  logoutBtn?.addEventListener('click', logout);
  
  const registerBtn = document.getElementById('register-btn');
  registerBtn?.addEventListener('click', register);
  
  // Set initial state
  const token = localStorage.getItem('token');
  isLoggedIn = !!token;
  updateButtonVisibility();
  loadMessages();
});// Handle user login
async function login() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  
  try {
    const response = await fetch('http://localhost:82/api/users/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: username.trim(), 
        password: password.trim() 
      })
    });

    const data = await response.json();
    
    if (response.ok && data.token) {
      localStorage.setItem('token', data.token);
      isLoggedIn = true;
      updateButtonVisibility();
      loadMessages();
      alert('Connexion réussie!');
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Erreur de connexion');
  }
}
// Logout function
function logout() {
  localStorage.removeItem('token');
  isLoggedIn = false;  // Update login state
  updateButtonVisibility();  // Update button visibility
  alert('Vous êtes déconnecté.');
}

// Register function
async function register() {
  const name = document.getElementById('registerName').value;
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;

  try {
    const response = await fetch('http://localhost:82/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password })
    });
    
    console.log('Response Status:', response.status);
    console.log('Response:', response);


    const data = await response.json();
    if (data.status === 'ok') {
      alert('Inscription réussie! Connectez-vous maintenant.');
    } else {
      alert('Erreur lors de l\'inscription.');
    }
  } catch (error) {
    console.error('Erreur d\'inscription:', error);
    alert('Une erreur register');
  }
}

// Attach event listeners to buttons

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  login();
});
logoutBtn.addEventListener('click', logout);

// Load messages when the page is ready
async function loadMessages() {
  alert('IstheCodeWorking');
  // Logic for loading messages can be implemented here
}

// Create a new message
async function newMessage() {
  const title = document.getElementById('messageTitle').value;
  const messageTxt = document.getElementById('messageText').value;
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
    if (data.status === 'ok') {
      alert(data.message);
      displayMessageDetail(data.data);
      loadMessages();  // Refresh the list after adding a new message
    } else {
      alert('Erreur lors de l\'ajout du message.');
    }
  } catch (error) {
    console.error ('Erreur:', error);
    alert('Une erreur réseau est survenue.');
  }
}

// Display message details
function displayMessageDetail(message) {
  const detailsDiv = document.getElementById('messageDetails');
  detailsDiv.innerHTML = `
    <h3>${message.title}</h3>
    <p>${message.message}</p>
    <p><strong>Date :</strong> ${new Date(message.date).toLocaleString()}</p>
  `;
}

// Search messages
async function searchMessages() {
  const searchText = document.getElementById('searchInput').value;
  try {
    const response = await fetch(`http://localhost:82/api/message/search/${encodeURIComponent(searchText)}`);
    const messages = await response.json();
    displayMessageList(messages);  // Display search results
  } catch (error) {
    console.error('Erreur de recherche:', error);
    alert('Impossible de rechercher les messages.');
  }
}

// Display a list of messages
function displayMessageList(messages) {
  const messagesList = document.getElementById('messagesList');
  messagesList.innerHTML = '';  // Clear previous messages

  messages.forEach(msg => {
    const messageItem = document.createElement('div');
    messageItem.innerHTML = `<h3 onclick='displayMessageDetail(${JSON.stringify(msg)})'>${msg.title}</h3>`;
    messagesList.appendChild(messageItem);
  });
}
