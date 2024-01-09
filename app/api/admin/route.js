// route.js

let database = [
  { id: 1, nombre: 'comercio_crocante1', password: '123', cif: '76365781', city: 'Madrid', direcion: 'Pinto', correo: 'croqueta@gmail.com', telefono: '601377807' },
  { id: 2, nombre: 'comercio_crocante2', password: '123', cif: '76365782', city: 'Barcelona', direcion: 'Girona', correo: 'croqueta@gmail.com', telefono: '601377807' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Manejar solicitud GET
    res.status(200).json({ data: database });
  } else if (req.method === 'POST') {
    // Manejar solicitud POST
    const data = req.body; // Suponiendo que estás utilizando body-parser o similar
    database.push(data);
    res.status(201).json({ message: 'Datos creados exitosamente' });
  } else {
    // Manejar otros tipos de solicitudes según sea necesario
    res.status(404).json({ message: 'Ruta no encontrada' });
  }
}