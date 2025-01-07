import request from 'supertest';  // Import de Supertest
import { app } from '../../app.js';    // Import de l'application Express

// Test de l'API Express avec Supertest
request(app)
  .get('/hello')                  // Test de la route GET /hello
  .expect(200)                    // Vérifie que le code de statut est 200
  .expect('Hello, World!')        // Vérifie que la réponse est "Hello, World!"
  .end((err, res) => {
    if (err) {
      console.error('Test échoué', err);
    } else {
      console.log('Test réussi pour GET /hello !');
    }
  });

// Test de la route POST /sum avec Supertest
request(app)
  .post('/sum')                   // Test de la route POST /sum
  .send({ a: 5, b: 3 })           // Envoie le body { a: 5, b: 3 }
  .expect(200)                    // Vérifie que le code de statut est 200
  .expect((res) => {
    if (res.body.sum !== 8) {     // Vérifie que la somme est correcte
      throw new Error('Somme incorrecte');
    }
  })
  .end((err, res) => {
    if (err) {
      console.error('Test échoué', err);
    } else {
      console.log('Test réussi pour POST /sum avec entrée valide !');
    }
  });

// Test de la route POST /sum avec des données invalides
request(app)
  .post('/sum')
  .send({ a: 'invalid', b: 3 })   // Envoie une entrée invalide
  .expect(400)                    // Vérifie que le code de statut est 400
  .expect('Invalid input')        // Vérifie que le message est "Invalid input"
  .end((err, res) => {
    if (err) {
      console.error('Test échoué', err);
    } else {
      console.log('Test réussi pour POST /sum avec entrée invalide !');
    }
  });
