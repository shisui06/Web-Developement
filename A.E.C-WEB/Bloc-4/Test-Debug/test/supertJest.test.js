import request from 'supertest';  // Import de Supertest pour envoyer les requêtes HTTP
import { app } from '../../app.js';   // Import de l'application Express

describe('API route tests', () => {

  // Test de la route GET /hello
  test('GET /hello should return "Hello, World!"', async () => {
    const response = await request(app).get('/hello');  // Envoi de la requête GET

    // Assertions avec Jest
    expect(response.status).toBe(200);                  // Vérifie le code de statut
    expect(response.text).toBe('Hello, World!');        // Vérifie le contenu de la réponse
  });

  // Test de la route POST /sum avec des entrées valides
  test('POST /sum should return the sum of two numbers', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: 5, b: 3 });                            // Envoi d'une requête POST avec un corps JSON

    // Assertions avec Jest
    expect(response.status).toBe(200);                  // Vérifie le code de statut
    expect(response.body.sum).toBe(8);                  // Vérifie que la somme est correcte
  });

  // Test de la route POST /sum avec des données invalides
  test('POST /sum should return 400 with invalid input', async () => {
    const response = await request(app)
      .post('/sum')
      .send({ a: 'invalid', b: 3 });                    // Envoi d'une requête POST avec des données invalides

    // Assertions avec Jest
    expect(response.status).toBe(400);                  // Vérifie que le statut est 400
    expect(response.text).toBe('Invalid input');        // Vérifie que le message d'erreur est correct
  });

});
