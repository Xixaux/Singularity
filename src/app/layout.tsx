import clsx from 'clsx';
import 'src/styles/splash-screen.css';
import 'src/styles/index.css';
import '../../public/assets/fonts/material-design-icons/MaterialIconsOutlined.css';
import '../../public/assets/fonts/poppins/poppins.css';
import '../../public/assets/styles/prism.css';
import '../../public/assets/fonts/roboto-flex/roboto-flex.css';
import '../../public/assets/fonts/inter/inter.css';

import { SessionProvider } from 'next-auth/react';
import { auth } from '@auth/authJs';
import { Metadata } from 'next';
import App from './App';
import DynamicTitle from '../components/DynamicTitle';

export const metadata: Metadata = {
  title: 'Singularity React - NextJS',
  description: 'Singularity React - NextJS by SingularityTech',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="var(--mui-palette-common-black)" />
        <meta name="description" content="Singularity React - NextJS by SingularityTech" />
        <meta name="robots" content="follow, index" />
        <meta property="og:image" content="/card.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <noscript id="emotion-insertion-point" />
      </head>
      <body
        id="root"
        className={clsx('loading')}
        style={{ fontFamily: "'Inter', Roboto, Poppins, Arial, sans-serif" }}
      >
        <SessionProvider basePath="/auth" session={session}>
          <DynamicTitle />
          <App>{children}</App>
        </SessionProvider>
      </body>
    </html>
  );
}