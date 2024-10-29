// login.js

// Show only the selected page by toggling the "active" class
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  // Show the initial page based on the URL hash or default to "home"
  document.addEventListener('DOMContentLoaded', () => {
    const initialPageId = location.hash.slice(1) || 'home';
    showPage(initialPageId);
  
    // Check user login status
    const userConnectedDiv = document.getElementById("userConnected");
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      userConnectedDiv.textContent = `User connected: ${loggedUser}`;
    }
  
    // Handle user login on Play page
    if (document.getElementById('play')) {
      const playButton = document.createElement('button');
      playButton.textContent = 'Start Game';
      document.getElementById('play').appendChild(playButton);
  
      playButton.addEventListener('click', () => {
        if (!loggedUser) {
          const username = prompt("Enter your username:");
          const password = prompt("Enter your password:");
  
          // Perform login (replace with actual login API call if available)
          fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username, password: password }),
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              localStorage.setItem("loggedUser", data.name);
              userConnectedDiv.textContent = `User connected: ${data.name}`;
              document.getElementById('game-section').style.display = 'block';
            } else {
              alert(data.message);
            }
          })
          .catch(error => console.error('Error:', error));
        } else {
          document.getElementById('game-section').style.display = 'block';
        }
      });
    }
  });
  // login.js

// Show only the selected page by toggling the "active" class
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }
  
  // Show the initial page based on the URL hash or default to "home"
  document.addEventListener('DOMContentLoaded', () => {
    const initialPageId = location.hash.slice(1) || 'home';
    showPage(initialPageId);
  
    // Check user login status
    const userConnectedDiv = document.getElementById("userConnected");
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) {
      userConnectedDiv.textContent = `User connected: ${loggedUser}`;
    }
  
    // Handle user login on Play page
    if (document.getElementById('play')) {
      const playButton = document.createElement('button');
      playButton.textContent = 'Start Game';
      document.getElementById('play').appendChild(playButton);
  
      playButton.addEventListener('click', () => {
        if (!loggedUser) {
          const username = prompt("Enter your username:");
          const password = prompt("Enter your password:");
  
          // Perform login (replace with actual login API call if available)
          fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username, password: password }),
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              localStorage.setItem("loggedUser", data.name);
              userConnectedDiv.textContent = `User connected: ${data.name}`;
              document.getElementById('game-section').style.display = 'block';
            } else {
              alert(data.message);
            }
          })
          .catch(error => console.error('Error:', error));
        } else {
          document.getElementById('game-section').style.display = 'block';
        }
      });
    }
  });

  // Toggle the visibility of the login form
function toggleLoginForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
  }
  
  // Handle the login logic
  function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform login (replace with actual login API call if available)
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("loggedUser", data.name);
        document.getElementById("userConnected").textContent = `User connected: ${data.name}`;
        toggleLoginForm(); // Hide the login form after successful login
        document.getElementById('game-section').style.display = 'block';
      } else {
        alert(data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  }
  