import { NextResponse } from "next/server";
import fact from '/jsons/trial.json'


export async function GET(request) {
    console.log(fact);
    return NextResponse.json(fact)
}

export async function POST(request) {
    
}