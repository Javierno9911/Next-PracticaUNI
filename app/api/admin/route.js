import { NextResponse } from 'next/server';

// Simular una base de datos simple como una variable en el mismo archivo
let database = [
  { id: 1, nombre: 'admin', password:'123' },
];

export async function GET() {
  return NextResponse.json({ data: database });
}
