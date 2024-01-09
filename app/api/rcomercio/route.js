import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';
//http://localhost:3000/api/users
export async function POST(request) {
    const data = await request.json()
    try{
        const comercio = JSON.parse(readFileSync("data/comercios.txt"))
        writeFileSync("data/comercios.txt", JSON.stringify([...comercio, data]))
    } catch(e){  
        writeFileSync("data/comercios.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}