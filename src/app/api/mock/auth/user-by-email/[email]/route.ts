import mockApi from 'src/@mock-utils/mockApi';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, props: { params: Promise<{ email: string }> }) {
  const params = await props.params;
  const api = mockApi('users');
  const item = await api.find({ email: params.email });

  if (!item) {
    console.log('API - User not found for email:', params.email);
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }

  const user = {
    ...item,
    shortcuts: item.shortcuts?.includes('mail') ? item.shortcuts : ['mail', 'calendar', 'users'],
  };

  console.log('API - Returning user:', user);
  return NextResponse.json(user, { status: 200 });
}