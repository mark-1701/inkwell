import type { Metadata } from 'next';
import { geistMono, geistSans } from '../config/fonts';
import { ToastProvider } from '../providers/ToastProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inkwell',
  description: 'CMS minimalista para blogs con artículos personalizados'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans
          antialiased`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
