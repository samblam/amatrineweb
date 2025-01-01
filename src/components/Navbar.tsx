import React from 'react';
import { Palette, Twitch, Instagram, Twitter } from 'lucide-react';

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
            <a href="#gallery" className="text-pink-600 hover:text-pink-700 px-3 py-2 rounded-md font-medium">Gallery</a>
            <a href="#about" className="text-pink-600 hover:text-pink-700 px-3 py-2 rounded-md font-medium">About</a>
            <a href="#commissions" className="text-pink-600 hover:text-pink-700 px-3 py-2 rounded-md font-medium">Commissions</a>
            <div className="flex space-x-2">
              <a href="https://twitch.tv/amatrine" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600">
                <Twitch className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/amatrineplays/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                              <Instagram className="h-6 w-6" />
                            </a>
                            <a href="https://x.com/totalfratmove/status/1136061190134804480" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}