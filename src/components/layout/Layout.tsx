import React from 'react';
import Navbar from '../navigation/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}