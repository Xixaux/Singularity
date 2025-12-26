import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

const dbPath = path.join(process.cwd(), 'src', '@mock-utils', 'mockDb.json');

// Validation schemas for each section
const schemas = {
  typography: z.object({
    leftMenu: z.object({
      font: z.string(),
      fontSize: z.string(),
      fontWeight: z.string(),
    }),
    pageBody: z.object({
      font: z.string(),
      fontSize: z.string(),
      fontWeight: z.string(),
    }),
  }),
  colors: z.object({
    background: z.string(),
    primary: z.string(),
    secondary: z.string(),
  }),
  theme: z.object({
    selectedTheme: z.string(),
    themes: z.record(z.any()), // Simplified; you can define a stricter schema
  }),
  favicon: z.object({
    path: z.string(),
  }),
  graphs: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      data: z.array(z.any()),
    })
  ),
  navigation: z.object({
    primaryMenu: z.string(),
    menuItems: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        url: z.string(),
      })
    ),
    socialIcons: z.object({
      twitter: z.string().url().optional(),
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
    }),
  }),
  homepage: z.object({
    display: z.enum(['latest-posts', 'static-page']),
    staticPageTitle: z.string(),
  }),
  headerFooter: z.object({
    headerImage: z.string(),
    headerLayout: z.enum(['default', 'compact', 'full-width']),
    footerCopyright: z.string(),
  }),
  layout: z.object({
    contentWidth: z.enum(['fixed', 'full-width']),
    sidebarPosition: z.enum(['left', 'right', 'none']),
  }),
  tables: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      columns: z.number(),
    })
  ),
  customCss: z.string(),
  userProfile: z.object({
    displayName: z.string(),
    bio: z.string(),
    avatar: z.string(),
  }),
  gallery: z.array(
    z.object({
      id: z.string(),
      path: z.string(),
    })
  ),
  socialSharing: z.object({
    twitter: z.boolean(),
    facebook: z.boolean(),
    placement: z.enum(['top', 'bottom', 'both']),
  }),
  widgets: z.object({
    sidebar: z.array(z.string()),
    footer: z.array(z.string()),
  }),
  seo: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    metaKeywords: z.string(),
    enabled: z.boolean(),
  }),
};

export async function GET() {
  try {
    const fileData = await fs.readFile(dbPath, 'utf-8');
    const settings = JSON.parse(fileData);
    return NextResponse.json(settings, { status: 200 });
  } catch (error) {
    console.error('Error reading settings:', error);
    return NextResponse.json({ error: 'Failed to read settings' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { section, data, operation } = await req.json();

    if (!section || !schemas[section]) {
      return NextResponse.json({ error: 'Invalid section' }, { status: 400 });
    }

    const fileData = await fs.readFile(dbPath, 'utf-8');
    let settings = JSON.parse(fileData);

    // Validate data
    schemas[section].parse(data);

    // Handle specific operations (e.g., add/remove for arrays)
    if (operation === 'add' && ['graphs', 'tables', 'gallery', 'navigation.menuItems'].includes(section)) {
      const sectionKey = section.includes('.') ? section.split('.')[0] : section;
      settings[sectionKey] = [...(settings[sectionKey] || []), data];
    } else if (operation === 'remove' && ['graphs', 'tables', 'gallery', 'navigation.menuItems'].includes(section)) {
      const sectionKey = section.includes('.') ? section.split('.')[0] : section;
      const key = section.includes('.') ? section.split('.')[1] : null;
      if (key) {
        settings[sectionKey][key] = settings[sectionKey][key].filter((item: any) => item.id !== data.id);
      } else {
        settings[sectionKey] = settings[sectionKey].filter((item: any) => item.id !== data.id);
      }
    } else {
      // Standard update
      if (section.includes('.')) {
        const [parent, child] = section.split('.');
        settings[parent][child] = { ...settings[parent][child], ...data };
      } else {
        settings[section] = { ...settings[section], ...data };
      }
    }

    await fs.writeFile(dbPath, JSON.stringify(settings, null, 2), 'utf-8');
    return NextResponse.json({ message: 'Settings updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { section, id } = await req.json();
    const fileData = await fs.readFile(dbPath, 'utf-8');
    let settings = JSON.parse(fileData);

    if (['graphs', 'tables', 'gallery', 'navigation.menuItems'].includes(section)) {
      const sectionKey = section.includes('.') ? section.split('.')[0] : section;
      const key = section.includes('.') ? section.split('.')[1] : null;
      if (key) {
        settings[sectionKey][key] = settings[sectionKey][key].filter((item: any) => item.id !== id);
      } else {
        settings[sectionKey] = settings[sectionKey].filter((item: any) => item.id !== id);
      }
      await fs.writeFile(dbPath, JSON.stringify(settings, null, 2), 'utf-8');
      return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 });
    }
    return NextResponse.json({ error: 'Invalid section for deletion' }, { status: 400 });
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}