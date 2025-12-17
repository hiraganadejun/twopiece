import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative w-full min-h-screen flex items-center justify-center pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 bg-gray-100">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              採用支援・人材領域の<br/>
              <span className="text-accent">業務支援</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-lg">
              採用活動の設計から運用まで、<br className="md:hidden"/>実務に根ざした支援を提供します。
            </p>
          </div>
          
          <div className="pt-4">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-primary hover:bg-accent text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              お問い合わせ
            </a>
          </div>

          <p className="text-xs text-gray-500 pt-8 border-t border-gray-200 inline-block">
            
          </p>
        </div>

        {/* Abstract visual for right side */}
        <div className="hidden md:flex justify-center items-center">
            <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-inner flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                   <svg className="w-24 h-24 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                   </svg>
                   <span className="text-sm tracking-widest font-light">CORPORATE SUPPORT</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;