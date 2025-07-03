import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { version: string } }) => {
  console.log('GET')
  try {
    return NextResponse.json({ code: 200, message: '', result: null }, { status: 200 });
  }
  catch {
    return NextResponse.json({ code: 500, message: 'error', result: null }, { status: 500 });
  }
}

export const POST = async (request: NextRequest, { params }: { params: { version: string } }) => {
  console.log('POST')
  try {
    return NextResponse.json({ code: 200, message: '', result: null }, { status: 200 });
  }
  catch {
    return NextResponse.json({ code: 500, message: 'error', result: null }, { status: 500 });
  }
}

export const PUT = async (request: NextRequest, { params }: { params: { version: string } }) => {
  try {
    return NextResponse.json({ code: 200, message: '', result: null }, { status: 200 });
  }
  catch {
    return NextResponse.json({ code: 500, message: 'error', result: null }, { status: 500 });
  }
}

export const UPDATE = async (request: NextRequest, { params }: { params: { version: string } }) => {
  console.log('UPDATE')
  try {
    return NextResponse.json({ code: 200, message: '', result: null }, { status: 200 });
  }
  catch {
    return NextResponse.json({ code: 500, message: 'error', result: null }, { status: 500 });
  }
}

export const DELETE = async (request: NextRequest, { params }: { params: { version: string } }) => {
  console.log('DELETE')
  try {
    return NextResponse.json({ code: 200, message: '', result: null }, { status: 200 });
  }
  catch {
    return NextResponse.json({ code: 500, message: 'error', result: null }, { status: 500 });
  }
}