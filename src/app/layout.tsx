import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Toaster } from '@/components/ui/sonner';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'Clinic (SaaS)',
  description:
    'Clinic is a SaaS (Doutor Agenda) application that allows you to manage your medical appointments, patients, and doctors.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-center" richColors theme="light" />
      </body>
    </html>
  );
}
