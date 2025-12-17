import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-100 mix-blend-multiply filter blur-[80px] opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-cyan-100 mix-blend-multiply filter blur-[80px] opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">事業内容</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-secondary max-w-2xl mx-auto text-left md:text-center">
            採用活動の川上から川下まで、<br className="sm:hidden" />一気通貫かつ部分最適化した支援を提供します。
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service, index) => (
            <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-slate-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                   {/* Icons based on index */}
                   {index === 0 && (
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                       </svg>
                   )}
                   {index === 1 && (
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                   )}
                   {index === 2 && (
                       <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                       </svg>
                   )}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-secondary leading-relaxed flex-grow text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Infographic */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 z-0"></div>
            
            <div className="relative z-10">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-primary">支援プロセス</h3>
                    <p className="text-secondary mt-2">設計から改善まで、PDCAを回し続けることで成果を最大化します。</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 md:gap-4">
                    
                    {/* Step 1: Design */}
                    <div className="flex-1 flex flex-col items-center text-center group w-full">
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300">
                            <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">01. 設計</h4>
                        <div className="w-12 h-1 bg-accent/30 mb-4 rounded-full"></div>
                        <p className="text-sm text-secondary leading-relaxed bg-slate-50 p-4 rounded-lg w-full border border-slate-100">
                            採用ターゲット定義<br/>
                            要件整理・求人票作成<br/>
                            訴求軸の策定
                        </p>
                    </div>

                    {/* Arrow 1 */}
                    <div className="hidden md:flex flex-col items-center justify-center px-4 text-slate-300">
                        <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <div className="md:hidden transform rotate-90 my-2 text-slate-300">
                        <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>

                    {/* Step 2: Operation */}
                    <div className="flex-1 flex flex-col items-center text-center group w-full">
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md group-hover:border-cyan-400/30 transition-all duration-300">
                            <svg className="w-10 h-10 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">02. 運用</h4>
                        <div className="w-12 h-1 bg-cyan-600/30 mb-4 rounded-full"></div>
                        <p className="text-sm text-secondary leading-relaxed bg-slate-50 p-4 rounded-lg w-full border border-slate-100">
                            媒体・エージェント管理<br/>
                            応募者対応・日程調整<br/>
                            進捗データの可視化
                        </p>
                    </div>

                    {/* Arrow 2 */}
                    <div className="hidden md:flex flex-col items-center justify-center px-4 text-slate-300">
                        <svg className="w-8 h-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                    <div className="md:hidden transform rotate-90 my-2 text-slate-300">
                        <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>

                    {/* Step 3: Improvement */}
                    <div className="flex-1 flex flex-col items-center text-center group w-full">
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md group-hover:border-blue-500/30 transition-all duration-300">
                            <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h4 className="text-lg font-bold text-primary mb-2">03. 改善</h4>
                        <div className="w-12 h-1 bg-blue-500/30 mb-4 rounded-full"></div>
                        <p className="text-sm text-secondary leading-relaxed bg-slate-50 p-4 rounded-lg w-full border border-slate-100">
                            歩留まり分析・課題特定<br/>
                            選考フロー・基準の見直し<br/>
                            ネクストアクション策定
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
