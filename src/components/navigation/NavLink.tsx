import React from 'react';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="text-pink-600 hover:text-pink-700 px-3 py-2 rounded-md font-medium"
    >
      {children}
    </a>
  );
}