import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceCarouselProps {
  services: Service[];
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, services.length - 3) : prevIndex - 3
    );
  };

  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative">
      <div className="flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#244E8A] text-white p-3 rounded-full hover:bg-[#1a3366] transition-colors shadow-lg"
          aria-label="Previous services"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => (
            <div
              key={`${service.title}-${currentIndex + index}`}
              className="p-8 bg-gray-50 rounded-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-[#244E8A] mb-6 bg-white p-4 rounded-full inline-block shadow-md">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#244E8A] text-white p-3 rounded-full hover:bg-[#1a3366] transition-colors shadow-lg"
          aria-label="Next services"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-12 space-x-2">
        {Array.from({ length: Math.ceil(services.length / 3) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * 3)}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-300',
              currentIndex / 3 === idx ? 'bg-[#244E8A] w-6' : 'bg-gray-300'
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}