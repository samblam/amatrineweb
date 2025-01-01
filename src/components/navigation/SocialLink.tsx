import React from 'react';

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  color: 'pink' | 'purple' | 'blue';
};

const colorClasses = {
  pink: 'text-pink-500 hover:text-pink-600',
  purple: 'text-purple-500 hover:text-purple-600',
  blue: 'text-blue-400 hover:text-blue-500',
};

export default function SocialLink({ href, icon, color }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={colorClasses[color]}
    >
      {icon}
    </a>
  );
}