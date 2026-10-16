import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sonu Jangir | MERN Stack Developer & Backend Engineer',
  description: 'Portfolio of Sonu Jangir - MERN Stack & Backend Engineer specializing in Node.js, Express, React, Next.js, PostgreSQL, PostGIS, MySQL, MongoDB, Sequelize, and production-ready REST APIs.',
  keywords: [
    'Sonu Jangir',
    'MERN Stack Developer',
    'Node.js Developer',
    'Backend Engineer',
    'Full Stack Developer',
    'PostgreSQL PostGIS',
    'React Next.js Developer',
    'Jaipur Software Engineer',
    'REST API Developer'
  ],
  authors: [{ name: 'Sonu Jangir', url: 'https://github.com/Sonu7788' }],
  creator: 'Sonu Jangir',
  openGraph: {
    title: 'Sonu Jangir | MERN Stack Developer & Backend Engineer',
    description: 'Production-ready web applications, scalable REST APIs, PostGIS geospatial systems, and robust database architectures.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sonu Jangir Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#f4f8fd] text-slate-800 selection:bg-sky-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
