import React from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">FAQ</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
          <p className="text-sm text-secondary">よくあるご質問</p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="flex gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-bold rounded flex items-center justify-center">Q</span>
                <h3 className="text-lg font-bold text-primary pt-0.5">{item.question}</h3>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-accent/20 text-accent font-bold rounded flex items-center justify-center">A</span>
                <p className="text-secondary pt-0.5 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;