"use client";
import React from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


export default function Contact() {
  const position = [40.723, -73.999]; // SoHo, NYC Coordinates

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="transform -rotate-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white neo-shadow">
              CONTACT US
            </h1>
          </div>
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-white inline-block p-6">
              <p className="text-2xl font-black text-black">
                WE'RE HERE TO MAKE YOU BEAUTIFUL!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phone */}
            <div className="transform rotate-2">
              <div className="neo-border neo-shadow bg-yellow-400 text-black p-8 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-4">CALL US</h3>
                <p className="text-xl font-bold">(555) 123-4567</p>
                <p className="text-sm font-bold mt-2">CALL FOR APPOINTMENTS</p>
              </div>
            </div>

            {/* Email */}
            <div className="transform -rotate-1">
              <div className="neo-border neo-shadow bg-pink-600 text-white p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-4">EMAIL US</h3>
                <p className="text-lg font-bold">hello@salonluxe.com</p>
                <p className="text-sm font-bold mt-2">24/7 EMAIL SUPPORT</p>
              </div>
            </div>

            {/* Location */}
            <div className="transform rotate-1">
              <div className="neo-border neo-shadow bg-blue-600 text-white p-8 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-4">VISIT US</h3>
                <p className="text-lg font-bold">123 Style Street</p>
                <p className="text-lg font-bold">New York, NY 10001</p>
              </div>
            </div>

            {/* Hours */}
            <div className="transform -rotate-2">
              <div className="neo-border neo-shadow bg-green-600 text-white p-8 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-4">OPEN</h3>
                <p className="text-sm font-bold">MON-FRI: 9AM-7PM</p>
                <p className="text-sm font-bold">SAT: 8AM-6PM</p>
                <p className="text-sm font-bold">SUN: 10AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="transform rotate-1">
              <h2 className="text-5xl md:text-7xl font-black text-white neo-shadow mb-6">
                FIND US
              </h2>
            </div>
            <div className="transform -rotate-1">
              <div className="neo-border neo-shadow bg-yellow-400 text-black p-6 inline-block">
                <p className="text-2xl font-black">LOCATED IN THE HEART OF THE CITY</p>
              </div>
            </div>
          </div>
          
          <div className="transform rotate-2">
            <div className="neo-border neo-shadow bg-white p-8">
              <div className="aspect-video bg-gray-200 neo-border overflow-hidden">
                <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    className="grayscale"
                  />
                  <Marker position={position}>
                    <Popup>
                      <span className="font-black text-lg">SALON LUXE</span>
                      <br /> 123 Style Street, New York, NY
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform -rotate-1 mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white neo-shadow">
              FOLLOW US
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="transform rotate-2">
              <div className="neo-border neo-shadow bg-white text-black p-8">
                <Instagram className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-black mb-4">INSTAGRAM</h3>
                <p className="text-xl font-bold mb-4">@SALONLUXE</p>
                <p className="text-lg font-bold">DAILY HAIR INSPO & BEHIND THE SCENES!</p>
              </div>
            </div>
            
            <div className="transform -rotate-2">
              <div className="neo-border neo-shadow bg-white text-black p-8">
                <Facebook className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-black mb-4">FACEBOOK</h3>
                <p className="text-xl font-bold mb-4">SALON LUXE NYC</p>
                <p className="text-lg font-bold">REVIEWS, EVENTS & SPECIAL OFFERS!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-red-600 text-white p-8 inline-block">
              <h2 className="text-3xl font-black mb-4">SAME-DAY APPOINTMENTS?</h2>
              <p className="text-xl font-bold mb-4">CALL US DIRECTLY!</p>
              <p className="text-2xl font-black">(555) 123-4567</p>
              <p className="text-lg font-bold mt-2">WE'LL DO OUR BEST TO FIT YOU IN!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
