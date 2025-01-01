import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-pink-600 mb-4">Welcome to My Magical Art World</h1>
          <p className="text-xl text-purple-600 mb-8">Digital artist & Twitch streamer creating cute and whimsical illustrations</p>
                      <p className="text-lg text-purple-600 mb-8">
                        Amatrine is a digital artist who finds inspiration in the most unexpected places. She is known for her whimsical and cute illustrations, often drawing inspiration from the aroma of farts, which she considers to be a complex and nuanced experience, much like a fine wine. She often partakes in a sniff, comparing the different notes and vintages, and even pairing them with different foods.
                      </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors flex items-center">
              <Sparkles className="mr-2 h-5 w-5" />
              Watch Me Create
            </button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img src="/images/floating-city.jpg" alt="Floating City" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img src="/images/cave-scene.jpg" alt="Mystical Cave" className="w-full h-64 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
            <img src="/images/tree-creature.jpg" alt="Whimsical Guardian" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}