import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">事業内容</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="mb-6 text-accent">
                 {/* Icons based on index */}
                 {index === 0 && (
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                     </svg>
                 )}
                 {index === 1 && (
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                 )}
                 {index === 2 && (
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                     </svg>
                 )}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-secondary leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Infographic Placeholder */}
        <div className="mt-16 bg-white p-8 rounded-lg border border-gray-100 text-center">
            <div className="w-full h-48 bg-gray-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
                <span className="text-gray-400 font-medium mb-2">INFOGRAPHIC PLACEHOLDER</span>
                <span className="text-sm text-gray-400">支援範囲フロー：設計 → 運用 → 改善</span>
                <div className="flex items-center space-x-4 mt-4 opacity-50">
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    <div className="h-1 w-8 bg-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                    <div className="h-1 w-8 bg-gray-300"></div>
                    <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;