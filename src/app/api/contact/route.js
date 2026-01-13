import { NextResponse } from "next/server";

const messages = [];

export async function POST(request) {
    const body = await request.json();
    const { name, email, message } = body;

    if(!name || !email || !message) {
        return NextResponse.json({ error: 'Missing Fields' }, { status: 400 });
    }

    const newMessage = { id: Date.now(), name, email, message, date: new Date().toISOString() };
    messages.push(newMessage);

    console.log('New Contact Message: ', newMessage);

    return NextResponse.json({ success: true, message: newMessage }, { status: 200 });
}