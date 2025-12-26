import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

const dbPath = path.join(process.cwd(), 'src', '@mock-utils', 'mockDb.json');
const uploadDir = path.join(process.cwd(), 'public', 'images');

export async function POST(req: NextRequest) {
  await fs.mkdir(uploadDir, { recursive: true });

  try {
    const formData = await req.formData();
    const section = formData.get('section')?.toString();
    const id = formData.get('id')?.toString() || randomUUID();
    const files = formData.getAll('file') as File[];

    if (!section || !['favicon', 'headerFooter', 'gallery', 'userProfile'].includes(section)) {
      return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
    }

    const fileData = await fs.readFile(dbPath, 'utf-8');
    let settings = JSON.parse(fileData);

    if (section === 'gallery') {
      const newImages = await Promise.all(
        files.map(async (file) => {
          const fileName = `${randomUUID()}${path.extname(file.name)}`;
          const filePath = path.join(uploadDir, fileName);
          await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
          return { id: randomUUID(), path: `/images/${fileName}` };
        })
      );
      settings.gallery = [...settings.gallery, ...newImages];
    } else {
      const file = files[0];
      if (!file) {
        return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
      }
      const fileName = `${randomUUID()}${path.extname(file.name)}`;
      const filePath = path.join(uploadDir, fileName);
      await fs.writeFile(filePath, Buffer.from(await file.arrayBuffer()));
      const relativePath = `/images/${fileName}`;
      if (section === 'favicon') {
        settings.favicon.path = relativePath;
      } else if (section === 'headerFooter') {
        settings.headerFooter.headerImage = relativePath;
      } else if (section === 'userProfile') {
        settings.userProfile.avatar = relativePath;
      }
    }

    await fs.writeFile(dbPath, JSON.stringify(settings, null, 2), 'utf-8');
    return NextResponse.json({ message: 'File(s) uploaded successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'File upload failed' }, { status: 500 });
  }
}