import React from 'react';
import { POLICIES } from '../constants';

const Policy: React.FC = () => {
  return (
    <section id="policy" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            
            <div className="w-full md:w-1/3">
                <h2 className="text-3xl font-bold text-primary mb-6 relative inline-block">
                    業務方針
                    <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent"></span>
                </h2>
                <p className="text-secondary leading-relaxed">
                    私たちは単なる代行者ではなく、<br/>
                    事業の「安定」と「成長」を支える<br/>
                    パートナーとして業務に向き合います。
                </p>
            </div>

            <div className="w-full md:w-2/3">
                <div className="grid gap-6">
                    {POLICIES.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1 mr-4">
                                <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <p className="text-lg text-primary font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Policy;