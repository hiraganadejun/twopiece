import React from 'react';
import { COMPANY_INFO } from '../constants';

const Company: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">会社概要</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
            <dl className="divide-y divide-gray-100">
                {COMPANY_INFO.map((item, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 px-6 py-4 hover:bg-gray-50 transition-colors">
                        <dt className="text-sm font-bold text-primary md:col-span-1 py-1">{item.label}</dt>
                        <dd className="text-sm text-secondary md:col-span-3 py-1">{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
      </div>
    </section>
  );
};

export default Company;