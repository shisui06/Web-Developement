import { app } from '../../app.js';

// Fonction utilitaire pour mocker `res` (la réponse)
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res); // res.status(200).json({...})
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// Fonction utilitaire pour mocker `req` (la requête)
const mockRequest = (data) => {
  return {
    body: data,
  };
};

describe('API route tests with Jest only', () => {

  // Test de la route GET /hello
  test('GET /hello should return "Hello, World!"', () => {
    const req = {}; // Pas de body requis pour GET
    const res = mockResponse(); // Mock de la réponse // res.status et res.send

    // Appel direct de la fonction de route GET /hello
    app._router.stack.find(layer => layer.route && layer.route.path === '/hello').route.stack[0].handle(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith('Hello, World!');
  });

  // Test de la route POST /sum avec des entrées valides
  test('POST /sum should return the sum of two numbers', () => {
    const req = mockRequest({ a: 5, b: 3 }); // Requête avec body valide
    const res = mockResponse(); // Mock de la réponse

    // Appel direct de la fonction de route POST /sum
    app._router.stack.find(layer => layer.route && layer.route.path === '/sum').route.stack[0].handle(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ sum: 8 });
  });

  // Test de la route POST /sum avec des entrées invalides
  test('POST /sum should return 400 with invalid input', () => {
    const req = mockRequest({ a: 'invalid', b: 3 }); // Requête avec body invalide
    const res = mockResponse(); // Mock de la réponse

    // Appel direct de la fonction de route POST /sum
    app._router.stack.find(layer => layer.route && layer.route.path === '/sum').route.stack[0].handle(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith('Invalid input');
  });
});
