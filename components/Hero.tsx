import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // マウスパララックス効果のためのイベントハンドラ
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      id="top" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white"
    >
      {/* 
         BACKGROUND LAYERS 
      */}
      
      {/* Layer 1: Base Grid (Moving slightly with mouse) */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      />

      {/* Layer 2: Glowing Mesh / Cyberpunk Accents 
          ゆらぎのある有機的な動き (animate-blob) を適用
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[0%] left-[0%] w-[50%] h-[50%] rounded-full bg-blue-600 mix-blend-screen filter blur-[100px] opacity-30 animate-blob"
          style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
        />
        <div 
          className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] rounded-full bg-cyan-500 mix-blend-screen filter blur-[100px] opacity-30 animate-blob animation-delay-2000"
          style={{ transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` }}
        />
        <div 
          className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-500 mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
        />
      </div>

      {/* Layer 3: Moving Particles (CSS-based) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>


      {/* 
         CONTENT CONTENT 
      */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pointer-events-none">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          
          {/* Badge: Glassmorphism effect */}
          <div className="animate-slide-down opacity-0 inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-cyan-300 text-sm font-bold tracking-wider mb-10 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            NEXT GENERATION HR SUPPORT
          </div>

          {/* Title: Huge, Bold, Gradient */}
          <h1 className="animate-slide-up-1 opacity-0 text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            <span className="inline-block text-white drop-shadow-lg">
              採用支援の
            </span>
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-2xl">
              未来を実装する
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="animate-slide-up-2 opacity-0 text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-14 font-light">
            ただの人手不足解消ではない。<br/>
            <span className="text-white font-medium">データ</span>と<span className="text-white font-medium">戦略</span>で、組織のポテンシャルを解放する。
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-slide-up-3 opacity-0 flex flex-col sm:flex-row gap-6 justify-center w-full">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex justify-center items-center px-10 py-5 font-bold text-white transition-all duration-300 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              <span className="relative z-10 mr-2 tracking-widest">CONTACT</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 
         STYLES 
      */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Blob Animation: 位置を移動させながら大きさを変えることで、液体のような質感を出す */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-slide-down { animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
        .animate-slide-up-1 { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
        .animate-slide-up-2 { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards; }
        .animate-slide-up-3 { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards; }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Floating Particles */
        .particle {
          position: absolute;
          border-radius: 50%;
          background: white;
          opacity: 0.3;
        }
        .p1 { top: 20%; left: 20%; width: 4px; height: 4px; animation: float 10s infinite; }
        .p2 { top: 60%; right: 20%; width: 6px; height: 6px; animation: float 15s infinite reverse; }
        .p3 { bottom: 20%; left: 40%; width: 3px; height: 3px; animation: float 12s infinite; }
        
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
