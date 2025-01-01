import React from 'react';
import { Palette, Twitch, Instagram, Twitter } from 'lucide-react';
import NavLink from './NavLink';
import SocialLink from './SocialLink';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-pink-50/80 backdrop-blur-sm border-b border-pink-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Palette className="h-8 w-8 text-pink-500" />
            <span className="ml-2 text-2xl font-bold text-pink-600">Amatrine</span>
          </div>
          <div className="flex space-x-4">
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#commissions">Commissions</NavLink>
            <div className="flex space-x-2">
              <SocialLink href="https://twitch.tv/amatrine" icon={<Twitch className="h-6 w-6" />} color="purple" />
              <SocialLink href="https://www.instagram.com/amatrineplays/" icon={<Instagram className="h-6 w-6" />} color="pink" />
              <SocialLink href="https://x.com/totalfratmove/status/1136061190134804480" icon={<Twitter className="h-6 w-6" />} color="blue" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}