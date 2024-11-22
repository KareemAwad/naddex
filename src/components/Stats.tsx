import React from 'react';

export function Stats() {
  const stats = [
    { number: '60+', label: 'Years Combined Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '30%', label: 'Cost Reduction' },
  ];

  return (
    <section className="py-16 bg-[#244E8A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-heading font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}