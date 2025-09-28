"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Scissors,
  Calendar,
  Palette,
  Camera,
  Phone,
  User,
} from "lucide-react";


export function createPageUrl (page: string)  {
  const slug = page.toLowerCase();
  switch (slug) {
    case "home":
      return "/salon/home";
    case "services":
      return "/salon/services";
    case "stylists":
      return "/salon/stylist";
    case "booking":
      return "/salon/booking";
    case "gallery":
      return "/salon/gallery";
    case "contact":
      return "/salon/contact";
    default:
      return "/salon";
  }
};



const navigationItems = [
  { title: "HOME", url: createPageUrl("Home"), icon: Scissors },
  { title: "SERVICES", url: createPageUrl("Services"), icon: Palette },
  { title: "STYLISTS", url: createPageUrl("Stylists"), icon: User },
  { title: "BOOK NOW", url: createPageUrl("Booking"), icon: Calendar },
  { title: "GALLERY", url: createPageUrl("Gallery"), icon: Camera },
  { title: "CONTACT", url: createPageUrl("Contact"), icon: Phone },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --electric-blue: #0066FF;
          --hot-pink: #FF0066;
          --bright-yellow: #FFFF00;
          --pure-black: #000000;
          --pure-white: #FFFFFF;
        }

        * {
          font-family: 'Arial Black', 'Helvetica', sans-serif;
        }

        .neo-border {
          border: 4px solid var(--pure-black);
        }

        .neo-shadow {
          box-shadow: 8px 8px 0px var(--pure-black);
        }

        .neo-shadow-small {
          box-shadow: 4px 4px 0px var(--pure-black);
        }

        .neo-button {
          border: 4px solid var(--pure-black);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: none;
        }

        .neo-button:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px var(--pure-black);
        }
      `}</style>

      {/* Navigation Header */}
      <header className="neo-border border-b-4 bg-white relative z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href={createPageUrl("Home")} className="flex items-center gap-3">
              <div className="w-12 h-12 neo-border neo-shadow-small bg-yellow-400 flex items-center justify-center rotate-3">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-black tracking-tight">SALON</h1>
                <p className="text-sm font-bold text-black -mt-1">LUXE</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`neo-button px-6 py-3 font-black text-sm ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : item.title === "BOOK NOW"
                        ? "bg-pink-600 text-white hover:bg-pink-700"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div className="neo-button neo-shadow-small bg-yellow-400 p-3">
                <div className="w-6 h-6 flex flex-col justify-between">
                  <div className="h-1 bg-black"></div>
                  <div className="h-1 bg-black"></div>
                  <div className="h-1 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden border-t-4 border-black bg-white">
            <div className="grid grid-cols-2 gap-2 p-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`neo-button neo-shadow-small p-4 text-center font-black text-xs ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : item.title === "BOOK NOW"
                        ? "bg-pink-600 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mx-auto mb-1" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="neo-border border-t-4 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="transform -rotate-1">
              <div className="neo-border bg-yellow-400 text-black p-6 neo-shadow">
                <h3 className="font-black text-lg mb-4">CONTACT INFO</h3>
                <div className="space-y-2 font-bold">
                  <p>📍 123 Style Street, City</p>
                  <p>📞 (555) 123-4567</p>
                  <p>✉️ hello@salonluxe.com</p>
                </div>
              </div>
            </div>

            <div className="transform rotate-1">
              <div className="neo-border bg-pink-600 text-white p-6 neo-shadow">
                <h3 className="font-black text-lg mb-4">HOURS</h3>
                <div className="space-y-2 font-bold">
                  <p>MON-FRI: 9AM-7PM</p>
                  <p>SAT: 8AM-6PM</p>
                  <p>SUN: 10AM-5PM</p>
                </div>
              </div>
            </div>

            <div className="transform -rotate-1">
              <div className="neo-border bg-blue-600 text-white p-6 neo-shadow">
                <h3 className="font-black text-lg mb-4">FOLLOW US</h3>
                <div className="space-y-2 font-bold">
                  <p>@SALONLUXE</p>
                  <p>FACEBOOK • INSTAGRAM</p>
                  <p>TIKTOK • YOUTUBE</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t-4 border-white">
            <p className="font-black text-xl">© 2024 SALON LUXE - ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
