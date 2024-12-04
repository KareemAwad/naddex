import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Quality Control & Coordination Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Ensuring your construction project's success through meticulous planning and comprehensive coordination
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#244E8A] text-white px-8 py-4 rounded-full hover:bg-[#1a3366] transition-colors text-lg"
            >
              Contact Us 
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#244E8A] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
            >
              Our Services <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}