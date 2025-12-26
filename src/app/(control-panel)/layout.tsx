'use client';

import MainLayout from 'src/components/MainLayout';
import AuthGuardRedirect from '@auth/AuthGuardRedirect';
import QueryProvider from 'src/components/QueryProvider';
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthGuardRedirect auth={['admin']}>
      <QueryProvider>
        <MainLayout>{children}</MainLayout>
      </QueryProvider>
    </AuthGuardRedirect>
  );
}

export default Layout;