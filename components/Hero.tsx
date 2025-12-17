import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
         {/* Abstract Grid Pattern for Structure/Operations */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-fade"></div>
         
         {/* Animated Gradient Orbs with dramatic entrance */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent mix-blend-multiply filter blur-[80px] opacity-70 animate-orb-entrance animate-blob"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300 mix-blend-multiply filter blur-[80px] opacity-70 animate-orb-entrance-delay-1 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] rounded-full bg-slate-300 mix-blend-multiply filter blur-[80px] opacity-70 animate-orb-entrance-delay-2 animate-blob animation-delay-4000"></div>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge - stagger 1 */}
          <div className="animate-stagger-1 opacity-0 inline-flex items-center px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium tracking-wide mb-8">
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            NEXT GENERATION SUPPORT
          </div>

          {/* Title - stagger 2 */}
          <h1 className="animate-stagger-2 opacity-0 text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-snug tracking-tight mb-8">
            採用支援・人材領域の
            <span className="block mt-1 sm:mt-3 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-600">
              業務支援
            </span>
          </h1>
          
          {/* Subtitle - stagger 3 */}
          <p className="animate-stagger-3 opacity-0 text-base md:text-lg lg:text-xl text-secondary leading-relaxed mx-auto mb-12 px-4">
            採用活動の設計から運用まで、<br className="hidden sm:inline"/>
            実務に根ざした支援を提供します。
          </p>
          
          {/* CTA Button - stagger 4 */}
          <div className="animate-stagger-4 opacity-0">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex justify-center items-center px-12 py-4 font-bold text-white transition-all duration-300 bg-primary rounded-full hover:bg-slate-700 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 mr-2">お問い合わせ</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Note - stagger 5 */}

        </div>
      </div>

      {/* Styles for animations */}
      <style>{`
        /* Background Grid Fade In */
        @keyframes gridFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-grid-fade {
          animation: gridFade 2s ease-out forwards;
        }

        /* Orb Entrance Animation */
        @keyframes orbEntrance {
          from { 
            opacity: 0; 
            transform: scale(0.5);
          }
          to { 
            opacity: 0.7; 
            transform: scale(1);
          }
        }
        .animate-orb-entrance {
          animation: orbEntrance 1.5s ease-out forwards;
        }
        .animate-orb-entrance-delay-1 {
          opacity: 0;
          animation: orbEntrance 1.5s ease-out 0.3s forwards;
        }
        .animate-orb-entrance-delay-2 {
          opacity: 0;
          animation: orbEntrance 1.5s ease-out 0.6s forwards;
        }

        /* Blob floating animation */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite 2s;
        }
        .animation-delay-2000 {
          animation-delay: 2.3s;
        }
        .animation-delay-4000 {
          animation-delay: 2.6s;
        }

        /* Staggered Content Entrance */
        @keyframes staggerFadeUp {
          from { 
            opacity: 0; 
            transform: translateY(40px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        .animate-stagger-1 {
          animation: staggerFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }
        .animate-stagger-2 {
          animation: staggerFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        .animate-stagger-3 {
          animation: staggerFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        .animate-stagger-4 {
          animation: staggerFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
        }
        .animate-stagger-5 {
          animation: staggerFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.3s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
