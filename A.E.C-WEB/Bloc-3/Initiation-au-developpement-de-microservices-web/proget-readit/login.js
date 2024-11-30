const mongoose = require('mongoose');

// Schéma pour les utilisateurs
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  profile: { type: String, default: 'user' } // Par défaut, le profil est 'user'
});

// Création du modèle User
const User = mongoose.model('User', userSchema);

// Insérer l'utilisateur 'admin' initial si non existant
async function createAdminUser() {
  const adminExists = await User.findOne({ username: 'admin' });
  if (!adminExists) {
    const adminUser = new User({
      name: 'system admin',
      username: 'admin',
      password: 'admin',
      profile: 'admin'
    });
    await adminUser.save();
    console.log('Utilisateur admin créé avec succès.');
  }
}

createAdminUser();  // Appeler cette fonction une seule fois
