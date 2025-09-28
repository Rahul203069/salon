'use client'
import { Camera, Instagram, Heart, Share } from "lucide-react";
import React, { useState } from "react";
export default function Gallery() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=500&fit=crop",
      category: "CUTS",
      description: "BOLD PIXIE CUT"
    },
    {
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop",
      category: "COLOR",
      description: "VIBRANT BALAYAGE"
    },
    {
      url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=500&fit=crop",
      category: "STYLING",
      description: "GLAMOUR WAVES"
    },
    {
      url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=500&fit=crop",
      category: "CUTS",
      description: "CHIC BOB"
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=500&fit=crop",
      category: "COLOR",
      description: "SUNSET OMBRE"
    },
    {
      url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=500&fit=crop",
      category: "STYLING",
      description: "TEXTURED CURLS"
    },
    {
      url: "https://images.unsplash.com/photo-1605980676252-3a2d6b600778?w=400&h=500&fit=crop",
      category: "CUTS",
      description: "LAYERED SHAG"
    },
    {
      url: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=500&fit=crop",
      category: "COLOR",
      description: "PLATINUM BLONDE"
    },
    {
      url: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=500&fit=crop",
      category: "STYLING",
      description: "SLEEK STRAIGHT"
    }
  ];

  const categories = ["ALL", "CUTS", "COLOR", "STYLING"];
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredImages = selectedCategory === "ALL" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-400 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="transform -rotate-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white neo-shadow">
              OUR GALLERY
            </h1>
          </div>
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-white inline-block p-6">
              <p className="text-2xl font-black text-black flex items-center justify-center">
                <Camera className="w-8 h-8 mr-3" />
                HAIR TRANSFORMATIONS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`neo-button neo-shadow px-8 py-4 font-black text-lg ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`transform ${index % 3 === 0 ? 'rotate-2' : index % 3 === 1 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="neo-border neo-shadow bg-white">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.description}
                      className="w-full h-64 object-cover neo-border border-b-4"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="neo-border neo-shadow bg-pink-600 text-white p-2">
                        <Heart className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="neo-border bg-yellow-400 text-black px-3 py-1 text-sm font-black">
                        {image.category}
                      </span>
                      <button className="neo-border bg-blue-600 text-white p-2">
                        <Share className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-black text-black">
                      {image.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform rotate-2 mb-8">
            <h2 className="text-5xl md:text-7xl font-black text-white neo-shadow">
              FOLLOW US!
            </h2>
          </div>
          
          <div className="transform -rotate-1">
            <div className="neo-border neo-shadow bg-white text-black p-8 inline-block">
              <Instagram className="w-12 h-12 mx-auto mb-4" />
              <p className="text-2xl font-black mb-4">
                @SALONLUXE
              </p>
              <p className="text-lg font-bold">
                TAG US IN YOUR PHOTOS FOR A CHANCE TO BE FEATURED!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}