"use client";

import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const publicaion = JSON.parse(readFileSync("data/publicaciones.txt"))
        writeFileSync("data/publicaciones.txt", JSON.stringify([...publicaion, data]))
    } catch(e){  
        writeFileSync("data/publicaciones.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}