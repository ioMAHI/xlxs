import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paribarik Bachelor - Flat & Mess Management System',
  description: 'Comprehensive financial visualization, expense tracking, daily grocery bazaar, meal attendance matrix, and smart roommate debt settlements.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#090d16] text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950`}>
        {children}
        <Toaster
          position="top-right"
          richColors
          theme="dark"
          closeButton
          toastOptions={{
            style: {
              background: '#0f172a',
              border: '1px solid #1e293b',
              color: '#f8fafc',
            },
          }}
        />
      </body>
    </html>
  );
}
