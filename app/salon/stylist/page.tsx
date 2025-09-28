"use client";
import React from "react";
import Link from "next/link";
import { Calendar, Award, Heart } from "lucide-react";

const createPageUrl = (page: string) => {
  const slug = page.toLowerCase();
  switch (slug) {
    case "home":
      return "/";
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

export default function Stylists() {
  const stylists = [
    {
      id: "alex",
      name: "ALEX CHEN",
      title: "MASTER COLORIST",
      specialty: "BALAYAGE & FASHION COLORS",
      experience: "8 YEARS",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c0c2c8cc?w=400&h=500&fit=crop&crop=face",
      bio: "ALEX TRANSFORMS HAIR WITH BOLD COLORS AND CUTTING-EDGE TECHNIQUES. SPECIALIZES IN RAINBOW HAIR AND DRAMATIC MAKEOVERS!",
      signature: "NEON RAINBOW BALAYAGE",
    },
    {
      id: "jordan",
      name: "JORDAN SMITH",
      title: "CUTTING SPECIALIST",
      specialty: "PRECISION CUTS & STYLING",
      experience: "6 YEARS",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      bio: "JORDAN CREATES SHARP, MODERN CUTS THAT MAKE A STATEMENT. EXPERT IN GEOMETRIC SHAPES AND TEXTURED STYLES!",
      signature: "ASYMMETRICAL BOB",
    },
    {
      id: "sam",
      name: "SAM RIVERA",
      title: "STYLE EXPERT",
      specialty: "UPDOS & EVENT STYLING",
      experience: "5 YEARS",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      bio: "SAM CRAFTS STUNNING STYLES FOR EVERY OCCASION. FROM ELEGANT UPDOS TO WILD FESTIVAL LOOKS - SAM DOES IT ALL!",
      signature: "BRAIDED CROWN UPDO",
    },
    {
      id: "casey",
      name: "CASEY TAYLOR",
      title: "SENIOR STYLIST",
      specialty: "TRANSFORMATIONS & MAKEOVERS",
      experience: "10 YEARS",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      bio: "CASEY IS THE MAKEOVER MASTER! SPECIALIZES IN COMPLETE TRANSFORMATIONS AND HELPING CLIENTS FIND THEIR PERFECT LOOK!",
      signature: "DRAMATIC MAKEOVERS",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="transform -rotate-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white neo-shadow">
              OUR TEAM
            </h1>
          </div>
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-white inline-block p-6">
              <p className="text-2xl font-black text-black">
                MEET THE HAIR WIZARDS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stylists Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {stylists.map((stylist, index) => (
              <div
                key={stylist.id}
                className={`transform ${
                  index % 2 === 0 ? "rotate-2" : "-rotate-2"
                } hover:rotate-0 transition-transform`}
              >
                <div className="neo-border neo-shadow bg-white">
                  {/* Stylist Photo */}
                  <div className="relative">
                    <img
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-full h-80 object-cover neo-border border-b-4"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="neo-border neo-shadow bg-yellow-400 text-black px-4 py-2">
                        <p className="font-black text-sm">
                          {stylist.experience}
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="neo-border neo-shadow bg-pink-600 text-white p-2">
                        <Award className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Stylist Info */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h2 className="text-3xl font-black text-black mb-2">
                        {stylist.name}
                      </h2>
                      <div className="neo-border bg-blue-600 text-white inline-block px-4 py-2 mb-3">
                        <p className="font-black text-sm">{stylist.title}</p>
                      </div>
                      <p className="text-lg font-bold text-black">
                        SPECIALTY: {stylist.specialty}
                      </p>
                    </div>

                    <div className="mb-6">
                      <p className="text-base font-bold text-black leading-tight">
                        {stylist.bio}
                      </p>
                    </div>

                    <div className="mb-6">
                      <div className="neo-border bg-yellow-400 text-black p-4">
                        <p className="font-black text-sm mb-1">
                          SIGNATURE STYLE:
                        </p>
                        <p className="font-bold text-lg">{stylist.signature}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={createPageUrl("Booking")} className="flex-1">
                        <button className="neo-button neo-shadow bg-pink-600 text-white px-6 py-3 font-black text-sm w-full">
                          <Calendar className="w-4 h-4 mr-2 inline" />
                          BOOK {stylist.name.split(" ")[0]}
                        </button>
                      </Link>
                      <button className="neo-button neo-shadow bg-white text-black p-3">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="transform rotate-1">
              <h2 className="text-5xl md:text-7xl font-black neo-shadow text-white mb-6">
                TEAM STATS
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="transform -rotate-2">
              <div className="neo-border neo-shadow bg-yellow-400 text-black p-6 text-center">
                <div className="text-4xl font-black mb-2">29+</div>
                <div className="font-black">YEARS COMBINED</div>
              </div>
            </div>
            <div className="transform rotate-1">
              <div className="neo-border neo-shadow bg-pink-600 text-white p-6 text-center">
                <div className="text-4xl font-black mb-2">1000+</div>
                <div className="font-black">HAPPY CLIENTS</div>
              </div>
            </div>
            <div className="transform -rotate-1">
              <div className="neo-border neo-shadow bg-blue-600 text-white p-6 text-center">
                <div className="text-4xl font-black mb-2">500+</div>
                <div className="font-black">COLOR TRANSFORMS</div>
              </div>
            </div>
            <div className="transform rotate-2">
              <div className="neo-border neo-shadow bg-green-600 text-white p-6 text-center">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="font-black">STYLE SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform -rotate-1">
            <h2 className="text-5xl md:text-7xl font-black text-white neo-shadow mb-8">
              READY TO BOOK?
            </h2>
          </div>

          <div className="transform rotate-2">
            <div className="neo-border neo-shadow bg-white text-black p-8 inline-block">
              <p className="text-2xl font-black mb-4">CHOOSE YOUR HAIR HERO!</p>
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
