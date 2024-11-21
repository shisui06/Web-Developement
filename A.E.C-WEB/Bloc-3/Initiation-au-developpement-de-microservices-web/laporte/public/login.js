async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        document.getElementById('login-error').textContent = 'Username and password are required.';
        return;
    }
    
    try {
        const response = await fetch('/login', {  
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username, password: password })  
        });

        const data = await response.json();
        
        if (data.success) {
            
            localStorage.setItem('loggedUser', data.name);
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('game-section').style.display = 'block';
            updateUserStatus(data.name);
            
            
            showPage('play');
            initGame(); 
        } else {
            document.getElementById('login-error').textContent = data.message || 'Login failed';
        }
    } catch (error) {
        console.error('Login error:', error);
        document.getElementById('login-error').textContent = 'Error connecting to server';
    }
}

function updateUserStatus(username) {
    const userConnected = document.getElementById('userConnected');
    if (userConnected) {
        userConnected.textContent = `Connected as: ${username}`;
    }
}

function logout() {
    
    localStorage.removeItem('loggedUser');
    updateUserStatus('');
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('game-section').style.display = 'none';
    showPage('home');
}

document.addEventListener('DOMContentLoaded', () => {
    
    const loggedUser = localStorage.getItem('loggedUser');
    if (loggedUser) {
        updateUserStatus(loggedUser);
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
        showPage('play');
        initGame(); 
    } else {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('game-section').style.display = 'none';
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});