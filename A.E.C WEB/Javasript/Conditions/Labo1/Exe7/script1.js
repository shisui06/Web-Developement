// Prompt for username and password
let username = window.prompt("Entrez votre code utilisateur:", "");
let password = window.prompt("Entrez votre mot de passe:", "");

// Check credentials
if (username === "secret" && password === "pizza") {
  window.alert("Vous avez accès au réseau");

  // Prompt for integer numbers
  let v1 = parseFloat(window.prompt("Entrez un numéro entier svp:", ""));
  let v2 = parseFloat(window.prompt("Entrez un autre numéro entier svp:", ""));
  let v3 = parseFloat(window.prompt("Entrez un dernier numéro entier svp:", ""));

  // Example usage of the entered numbers
  console.log(`Vous avez entré les numéros: ${v1}, ${v2}, et ${v3}`);
} else {
  window.alert("Vous devez spécifier le code utilisateur et le mot de passe corrects");
}
