"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Scissors, Palette, Sparkles, Heart, Calendar, Clock } from "lucide-react";

import { Service } from "@/lib/service";

import { createPageUrl } from "../layout";




const categoryIcons = {
  cut: Scissors,
  color: Palette,
  styling: Sparkles,
  treatment: Heart,
};

const categoryColors = {
  cut: "bg-yellow-400 text-black",
  color: "bg-pink-600 text-white",
  styling: "bg-blue-600 text-white",
  treatment: "bg-green-600 text-white",
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
const router = useRouter();
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = Service
      setServices(data);
    } catch (error) {
      console.error("Error loading services:", error);
    }
    setLoading(false);
  };

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const categories = ["all", "cut", "color", "styling", "treatment"];

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="neo-border neo-shadow bg-yellow-400 p-8 transform rotate-3">
          <p className="text-3xl font-black text-black">LOADING SERVICES...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-blue-600 to-yellow-400 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="transform -rotate-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white neo-shadow">
              OUR SERVICES
            </h1>
          </div>
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-white inline-block p-6">
              <p className="text-2xl font-black text-black">
                PREMIUM HAIR • BOLD STYLES • FIERCE RESULTS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Scissors;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`neo-button neo-shadow px-6 py-3 font-black text-sm uppercase ${
                    selectedCategory === category
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {category !== "all" && <Icon className="w-4 h-4 mr-2 inline" />}
                  {category === "all" ? "ALL SERVICES" : category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center">
              <div className="transform rotate-2">
                <div className="neo-border neo-shadow bg-pink-600 text-white p-8 inline-block">
                  <p className="text-2xl font-black">NO SERVICES FOUND</p>
                  <p className="font-bold mt-2">Check back soon for updates!</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const Icon = categoryIcons[service.category] || Scissors;
                const colorClass = categoryColors[service.category] || "bg-gray-600 text-white";
                
                return (
                  <div 
                    key={service.id} 
                    className={`transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform`}
                  >
                    <div className="neo-border neo-shadow bg-white">
                      {/* Service Header */}
                      <div className={`${colorClass} p-6 neo-border border-b-4`}>
                        <Icon className="w-12 h-12 mb-4" />
                        <h3 className="text-2xl font-black uppercase">
                          {service.name}
                        </h3>
                        <div className="flex items-center mt-2 space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="font-bold">{service.duration}min</span>
                          </div>
                        </div>
                      </div>

                      {/* Service Content */}
                      <div className="p-6">
                        <p className="text-lg font-bold text-black mb-4 leading-tight">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="text-3xl font-black text-black">
                            ${service.price_from}
                            {service.price_to && service.price_to !== service.price_from && (
                              <span> - ${service.price_to}</span>
                            )}
                          </div>
                        </div>

                        <div onClick={()=>{router.replace(createPageUrl('booking'))}}>
                          <button className="neo-button neo-shadow bg-pink-600 text-white px-6 py-3 font-black text-sm w-full">
                            <Calendar className="w-4 h-4 mr-2 inline" />
                            BOOK THIS SERVICE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform rotate-2 mb-8">
            <h2 className="text-5xl md:text-7xl font-black neo-shadow text-white">
              NOT SURE WHAT YOU NEED?
            </h2>
          </div>
          
          <div className="transform -rotate-1">
            <div className="neo-border neo-shadow bg-yellow-400 text-black p-8 inline-block">
              <p className="text-2xl font-black mb-4">
                BOOK A FREE CONSULTATION!
              </p>
              <div onClick={()=>{ router.replace(createPageUrl('booking'))}}>
                <button className="neo-button neo-shadow bg-pink-600 text-white px-8 py-4 text-xl">
                  <Calendar className="inline w-6 h-6 mr-2" />
                  BOOK CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}