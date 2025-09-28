
"use client";
import React, { useState, useEffect } from "react";
import  {Booking}  from "@/lib/booking";

import  {Service} from "@/lib/service";
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle, Star } from "lucide-react";

export default function BookingPage() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_phone: "",
    service: "",

    stylist: "any",
    appointment_date: "",
    appointment_time: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const stylists = [
    { 
      value: "any", 
      label: "Any Stylist Available", 
      name: "SURPRISE ME!",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
      specialty: "BEST MATCH FOR YOU"
    },
    { 
      value: "alex", 
      label: "Alex - Master Colorist", 
      name: "ALEX CHEN",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0c2c8cc?w=150&h=150&fit=crop&crop=face",
      specialty: "COLOR SPECIALIST"
    },
    { 
      value: "jordan", 
      label: "Jordan - Cutting Specialist", 
      name: "JORDAN SMITH",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specialty: "CUTTING EXPERT"
    },
    { 
      value: "sam", 
      label: "Sam - Style Expert", 
      name: "SAM RIVERA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      specialty: "STYLING GURU"
    },
    { 
      value: "casey", 
      label: "Casey - Senior Stylist", 
      name: "CASEY TAYLOR",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialty: "MAKEOVER MASTER"
    },
  ];

  const serviceOptions = [
    { value: "haircut", label: "HAIRCUT", icon: "✂️", price: "FROM $45" },
    { value: "color", label: "HAIR COLOR", icon: "🎨", price: "FROM $85" },
    { value: "highlights", label: "HIGHLIGHTS", icon: "✨", price: "FROM $95" },
    { value: "blowout", label: "BLOWOUT", icon: "💨", price: "FROM $35" },
    { value: "styling", label: "STYLING", icon: "👑", price: "FROM $55" },
    { value: "treatment", label: "TREATMENT", icon: "💆", price: "FROM $75" },
    { value: "consultation", label: "CONSULTATION", icon: "💬", price: "FREE" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM"
  ];

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await Service.list();
      setServices(data);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Booking.create(formData);
      setShowSuccess(true);
      setFormData({
        client_name: "",
        client_email: "",
        client_phone: "",
        service: "",
        stylist: "any",
        appointment_date: "",
        appointment_time: "",
        notes: ""
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
    
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepValid = (step) => {
    switch (step) {
      case 1: return formData.client_name && formData.client_email && formData.client_phone;
      case 2: return formData.service;
      case 3: return formData.stylist;
      case 4: return formData.appointment_date && formData.appointment_time;
      default: return false;
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 via-blue-600 to-pink-600 flex items-center justify-center p-4">
        <div className="transform rotate-3">
          <div className="neo-border neo-shadow bg-white p-12 text-center max-w-lg">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-600" />
            <h1 className="text-4xl font-black text-black mb-4">
              BOOKING CONFIRMED!
            </h1>
            <p className="text-xl font-bold text-black mb-6">
              WE'LL CONTACT YOU SOON TO CONFIRM YOUR APPOINTMENT DETAILS!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="neo-button neo-shadow bg-pink-600 text-white px-8 py-4 font-black"
            >
              BOOK ANOTHER APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-blue-600 to-yellow-400 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="transform -rotate-2 mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white neo-shadow">
              BOOK NOW
            </h1>
          </div>
          <div className="transform rotate-1">
            <div className="neo-border neo-shadow bg-white inline-block p-6">
              <p className="text-2xl font-black text-black">
                YOUR TRANSFORMATION AWAITS!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`neo-border neo-shadow w-12 h-12 rounded-full flex items-center justify-center font-black text-lg ${
                  currentStep >= step ? 'bg-yellow-400 text-black' : 'bg-white text-black'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-8 h-1 mx-2 ${
                    currentStep > step ? 'bg-yellow-400' : 'bg-white'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="neo-border neo-shadow bg-white px-6 py-2">
              <p className="font-black text-black">
                STEP {currentStep} OF 4: {
                  currentStep === 1 ? 'YOUR INFO' :
                  currentStep === 2 ? 'CHOOSE SERVICE' :
                  currentStep === 3 ? 'PICK STYLIST' :
                  'DATE & TIME'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="transform -rotate-1">
                <div className="neo-border neo-shadow bg-yellow-400 p-8">
                  <h2 className="text-4xl font-black text-black mb-8 flex items-center">
                    <User className="w-10 h-10 mr-4" />
                    TELL US ABOUT YOU
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xl font-black text-black mb-3">
                        WHAT'S YOUR NAME? *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.client_name}
                        onChange={(e) => handleInputChange("client_name", e.target.value)}
                        className="w-full neo-border p-4 text-xl font-bold bg-white text-black focus:outline-none placeholder-gray-500"
                        placeholder="YOUR AMAZING NAME"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xl font-black text-black mb-3">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.client_email}
                          onChange={(e) => handleInputChange("client_email", e.target.value)}
                          className="w-full neo-border p-4 text-lg font-bold bg-white text-black focus:outline-none placeholder-gray-500"
                          placeholder="YOUREMAIL@AWESOME.COM"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xl font-black text-black mb-3">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.client_phone}
                          onChange={(e) => handleInputChange("client_phone", e.target.value)}
                          className="w-full neo-border p-4 text-lg font-bold bg-white text-black focus:outline-none placeholder-gray-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {currentStep === 2 && (
              <div className="transform rotate-2">
                <div className="neo-border neo-shadow bg-pink-600 text-white p-8">
                  <h2 className="text-4xl font-black mb-8 flex items-center">
                    <Calendar className="w-10 h-10 mr-4" />
                    WHAT DO YOU NEED?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {serviceOptions.map((service) => (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => handleInputChange("service", service.value)}
                        className={`neo-border neo-shadow p-6 text-left transition-all ${
                          formData.service === service.value
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white text-black hover:bg-gray-100'
                        }`}
                      >
                        <div className="text-3xl mb-2">{service.icon}</div>
                        <h3 className="text-xl font-black mb-2">{service.label}</h3>
                        <p className="text-lg font-bold">{service.price}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Stylist Selection */}
            {currentStep === 3 && (
              <div className="transform -rotate-1">
                <div className="neo-border neo-shadow bg-blue-600 text-white p-8">
                  <h2 className="text-4xl font-black mb-8 flex items-center">
                    <Star className="w-10 h-10 mr-4" />
                    PICK YOUR STYLIST
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stylists.map((stylist) => (
                      <button
                        key={stylist.value}
                        type="button"
                        onClick={() => handleInputChange("stylist", stylist.value)}
                        className={`neo-border neo-shadow p-6 text-center transition-all ${
                          formData.stylist === stylist.value
                            ? 'bg-yellow-400 text-black'
                            : 'bg-white text-black hover:bg-gray-100'
                        }`}
                      >
                        <img 
                          src={stylist.image} 
                          alt={stylist.name}
                          className="w-20 h-20 object-cover rounded-full neo-border mx-auto mb-4"
                        />
                        <h3 className="text-lg font-black mb-1">{stylist.name}</h3>
                        <p className="text-sm font-bold">{stylist.specialty}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Date & Time */}
            {currentStep === 4 && (
              <div className="transform rotate-1">
                <div className="neo-border neo-shadow bg-green-600 text-white p-8">
                  <h2 className="text-4xl font-black mb-8 flex items-center">
                    <Clock className="w-10 h-10 mr-4" />
                    WHEN WORKS FOR YOU?
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xl font-black mb-4">
                        PICK A DATE *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.appointment_date}
                        onChange={(e) => handleInputChange("appointment_date", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full neo-border p-4 text-lg font-bold bg-white text-black focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xl font-black mb-4">
                        PICK A TIME *
                      </label>
                      <div className="grid grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleInputChange("appointment_time", time)}
                            className={`neo-border neo-shadow p-3 text-sm font-bold transition-all ${
                              formData.appointment_time === time
                                ? 'bg-yellow-400 text-black'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <label className="block text-xl font-black mb-4">
                      ANYTHING SPECIAL TO TELL US?
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      rows={4}
                      className="w-full neo-border p-4 text-lg font-bold bg-white text-black focus:outline-none placeholder-gray-500"
                      placeholder="TELL US YOUR HAIR DREAMS..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="neo-button neo-shadow bg-white text-black px-8 py-4 text-xl font-black"
                >
                  ← BACK
                </button>
              )}
              
              <div className="ml-auto">
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                    className="neo-button neo-shadow bg-pink-600 text-white px-8 py-4 text-xl font-black disabled:opacity-50"
                  >
                    NEXT →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !isStepValid(4)}
                    className="neo-button neo-shadow bg-gradient-to-r from-pink-600 to-purple-600 text-white px-12 py-6 text-2xl font-black disabled:opacity-50"
                  >
                    {isSubmitting ? "BOOKING..." : "BOOK MY APPOINTMENT! 🎉"}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}