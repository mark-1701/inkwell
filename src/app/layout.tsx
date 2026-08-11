import type { Metadata } from 'next';
import NavMenuDesktop from '@/components/NavMenuDesktop';
import NavMenuMobile from '@/components/NavMenuMobile';
import { geistMono, geistSans } from '../config/fonts';
import { ToastProvider } from '../providers/ToastProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mark Playground',
  description: 'Zona de pruebas para mi próximo proyecto'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full
        antialiased`}
    >
      <body className="h-dvh bg-gray-50">
        <div className="flex h-full flex-col lg:flex-row">
          {/* Desktop */}
          <div className="hidden lg:block">
            <NavMenuDesktop />
          </div>

          {/* Mobile / tablet */}
          <div className="lg:hidden">
            <NavMenuMobile />
          </div>

          <div className="w-full overflow-auto p-2 lg:p-12 lg:pb-8">
            {children}
          </div>
        </div>

        <ToastProvider />
      </body>
    </html>
  );
}
