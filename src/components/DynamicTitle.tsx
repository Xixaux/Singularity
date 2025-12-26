'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const routeTitles: { [key: string]: string } = {
  '/calendar': 'Singularity React - Calendar - 3 upcoming events',
  '/dashboard': 'Singularity React - Dashboard',
  '/analytics': 'Singularity React - Analytics',
  // Add other routes as needed
};

export default function DynamicTitle() {
  const pathname = usePathname();
  useEffect(() => {
    document.title = routeTitles[pathname] || 'Singularity React - NextJS';
  }, [pathname]);
  return null;
}
