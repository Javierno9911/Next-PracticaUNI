import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const usuario = JSON.parse(readFileSync("data/usuarios.txt"))
        writeFileSync("data/usuarios.txt", JSON.stringify([...usuario, data]))
    } catch(e){  
        writeFileSync("data/usuarios.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}