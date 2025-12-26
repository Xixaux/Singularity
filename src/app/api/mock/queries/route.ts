// File: src/app/api/mock/queries/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Resolve the path to AITools.json
    const filePath = path.join(process.cwd(), 'src', '@mock-utils', 'AITools.json');
    // Read and parse the JSON file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const queryData = JSON.parse(fileContents);
    return NextResponse.json(queryData);
  } catch (error) {
    console.error('Error reading AITools.json:', error);
    return NextResponse.json({ error: 'Failed to load query data' }, { status: 500 });
  }
}