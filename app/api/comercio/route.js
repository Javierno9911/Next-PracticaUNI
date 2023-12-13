import { NextResponse } from 'next/server';

// Base de datos inicial vacía
let database = [
    { id: 1, nombre: 'comercio_crocante1', password:'123', cif:'76365781', city:'Madrid', direcion: 'Pinto',correo: 'croqueta@gmail.com', telefono:'601377807'},
    { id: 2, nombre: 'comercio_crocante2', password:'123', cif:'76365782', city:'Barcelona', direcion: 'Girona',correo: 'croqueta@gmail.com', telefono:'601377807'},
  ];

export async function GET() {
  return NextResponse.json({ data: database });
}

export async function POST(request) {
  const data = await request.json();
  // Agregar el nuevo usuario a la base de datos
  database.push(data);

  return NextResponse.json({
    message: 'Creando datos',
  });
}

export function PUT(request) {
  const data = request.json();
  // Implementa la lógica para actualizar datos en la base de datos
  const userId = data.id; // Suponiendo que la solicitud contiene un campo 'id'
  const userIndex = database.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    // Actualiza el usuario si se encuentra en la base de datos
    database[userIndex] = data;
    return NextResponse.json({
      message: 'Actualizando datos',
    });
  } else {
    // Devuelve un error si el usuario no se encuentra en la base de datos
    return NextResponse.error({
      statusCode: 404,
      message: 'Usuario no encontrado',
    });
  }
}

export function DELETE(request) {
  const data = request.json();
  // Implementa la lógica para eliminar datos en la base de datos
  const userId = data.id; // Suponiendo que la solicitud contiene un campo 'id'
  database = database.filter(user => user.id !== userId);

  return NextResponse.json({
    message: 'Eliminando datos',
  });
}