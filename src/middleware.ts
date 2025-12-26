import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle the root path (/)
  if (pathname === '/') {
    // Check authentication status (customize based on your auth setup)
    // Example: Check for a session cookie (replace 'auth-session' with your actual cookie name)
    const isAuthenticated = request.cookies.has('auth-session');

    // If using NextAuth.js (uncomment if applicable):
    // import { getToken } from 'next-auth/jwt';
    // const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    // const isAuthenticated = !!token;

    // Redirect based on auth status
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboards/control-panel', request.url));
    } else {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  }

  // Allow other paths to proceed normally
  return NextResponse.next();
}

// Limit middleware to the root path
export const config = {
  matcher: ['/'],
};