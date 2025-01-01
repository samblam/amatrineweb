import React from 'react';

const artworks = [
  {
    title: "Whimsical Guardian",
    image: "/images/tree-creature.jpg",
    category: "Character Design"
  },
  {
    title: "Mystical Cave",
    image: "/images/cave-scene.jpg",
    category: "Environment Art"
  },
  {
    title: "Bucket Octopi",
    image: "/images/bucket-octopi.jpg",
    category: "Character Design"
  },
  {
    title: "Spiky Pufferfish",
    image: "/images/pufferfish.jpg",
    category: "Character Design"
  },
  {
    title: "Floating City",
    image: "/images/floating-city.jpg",
    category: "Environment Art"
  },
  {
    title: "Wilted Flower",
    image: "/images/wilted-flower.jpg",
    category: "Illustration"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">Art Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={artwork.image} alt={artwork.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-pink-600">{artwork.title}</h3>
                <p className="text-purple-500">{artwork.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}