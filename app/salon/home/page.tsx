"use client";
import React from "react";
import Link from "next/link";
import { Calendar, Star, Sparkles, Scissors, Palette, Users } from "lucide-react";

const createPageUrl = (page: string) => {
  const slug = page.toLowerCase();
  switch (slug) {
    case "home":
      return "/home";
    case "services":
      return "/services";
    case "stylists":
      return "/stylists";
    case "booking":
      return "/booking";
    case "gallery":
      return "/gallery";
    case "contact":
      return "/contact";
    default:
      return "/";
  }
};

export default function Page() {
  const services = [
    { icon: Scissors, title: "CUTS", price: "FROM $45", color: "bg-yellow-400" },
    { icon: Palette, title: "COLOR", price: "FROM $85", color: "bg-pink-600 text-white" },
    { icon: Sparkles, title: "STYLING", price: "FROM $35", color: "bg-blue-600 text-white" },
  ];

  const testimonials = [
    { name: "SARAH K.", text: "BEST HAIRCUT OF MY LIFE! ALEX IS A WIZARD WITH SCISSORS!" },
    { name: "MIKE R.", text: "JORDAN TRANSFORMED MY LOOK COMPLETELY. OBSESSED!" },
    { name: "LISA M.", text: "THIS PLACE IS PURE MAGIC. NEVER GOING ANYWHERE ELSE!" },
  ];

  const featuredStylists = [
    { 
      name: "ALEX", 
      specialty: "COLOR WIZARD",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0c2c8cc?w=200&h=200&fit=crop&crop=face"
    },
    { 
      name: "JORDAN", 
      specialty: "CUT MASTER",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    { 
      name: "SAM", 
      specialty: "STYLE GURU",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-pink-600 via-blue-600 to-yellow-400 flex items-center">
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="transform -rotate-2">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none neo-shadow">
                  YOUR
                  <br />
                  HAIR
                  <br />
                  <span className="text-yellow-400">STORY</span>
                </h1>
              </div>
              <div className="transform rotate-1 max-w-lg">
                <div className="neo-border neo-shadow bg-white p-8">
                  <p className="text-2xl font-black text-black leading-tight">
                    BOLD CUTS • WILD COLORS • FIERCE STYLES
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={createPageUrl("Booking")}>
                  <button className="neo-button neo-shadow bg-pink-600 text-white px-8 py-4 text-xl w-full sm:w-auto">
                    <Calendar className="inline w-6 h-6 mr-2" />
                    BOOK NOW
                  </button>
                </Link>
                <Link href={createPageUrl("Services")}>
                  <button className="neo-button neo-shadow bg-yellow-400 text-black px-8 py-4 text-xl w-full sm:w-auto">
                    VIEW SERVICES
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative transform rotate-3">
              <div className="neo-border neo-shadow bg-white p-8">
                <img 
                  src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=600&fit=crop&crop=face" 
                  alt="Stylish haircut" 
                  className="w-full h-[400px] object-cover neo-border"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 transform -rotate-1">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-4 neo-shadow">
              OUR SERVICES
            </h2>
            <div className="neo-border neo-shadow bg-yellow-400 inline-block px-8 py-4 transform rotate-2">
              <p className="text-xl font-black text-black">UNLEASH YOUR STYLE</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <div className={`neo-border neo-shadow ${service.color} p-8 text-center`}>
                  <service.icon className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-3xl font-black mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold">{service.price}</p>
                  <div className="mt-6">
                    <Link href={createPageUrl("Services")}>
                      <button className="neo-button bg-white text-black px-6 py-3 text-sm font-black w-full">
                        LEARN MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 transform rotate-1">
            <h2 className="text-5xl md:text-7xl font-black neo-shadow mb-4">
              MEET THE TEAM
            </h2>
            <div className="neo-border neo-shadow bg-yellow-400 text-black inline-block px-8 py-4 transform -rotate-2">
              <p className="text-xl font-black">HAIR WIZARDS EXTRAORDINAIRE</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStylists.map((stylist, index) => (
              <div key={index} className={`transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                <div className="neo-border neo-shadow bg-white text-black p-6 text-center">
                  <img 
                    src={stylist.image} 
                    alt={stylist.name}
                    className="w-24 h-24 object-cover rounded-full neo-border mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-black mb-2">{stylist.name}</h3>
                  <p className="text-lg font-bold text-pink-600">{stylist.specialty}</p>
                  <Link href={createPageUrl("Stylists")}>
                    <button className="neo-button neo-shadow bg-pink-600 text-white px-4 py-2 text-sm font-black mt-4 w-full">
                      LEARN MORE
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={createPageUrl("Stylists")}>
              <button className="neo-button neo-shadow bg-yellow-400 text-black px-8 py-4 text-xl font-black">
                <Users className="inline w-6 h-6 mr-2" />
                MEET ALL STYLISTS
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 transform rotate-1">
            <h2 className="text-5xl md:text-7xl font-black mb-4 neo-shadow text-white">
              WHAT THEY SAY
            </h2>
            <div className="neo-border neo-shadow bg-pink-600 inline-block px-8 py-4 transform -rotate-2">
              <p className="text-xl font-black text-white">REAL REVIEWS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                <div className="neo-border neo-shadow bg-white text-black p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg font-bold mb-4 leading-tight">
                    "{testimonial.text}"
                  </p>
                  <p className="text-xl font-black text-pink-600">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-pink-600 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform -rotate-1">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 neo-shadow">
              READY TO TRANSFORM?
            </h2>
          </div>
          <div className="transform rotate-2">
            <div className="neo-border neo-shadow bg-white p-8 inline-block">
              <p className="text-2xl font-black text-black mb-6">
                BOOK YOUR APPOINTMENT TODAY!
              </p>
              <Link href={createPageUrl("Booking")}>
                <button className="neo-button neo-shadow bg-pink-600 text-white px-12 py-6 text-2xl">
                  <Calendar className="inline w-8 h-8 mr-3" />
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
