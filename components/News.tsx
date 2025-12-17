import React from 'react';

const News: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <div>
                <h2 className="text-3xl font-bold text-primary">お知らせ</h2>
            </div>
            {/* Future list link could go here */}
        </div>

        <div className="py-12 text-center bg-gray-50 rounded border border-gray-100 border-dashed">
          <p className="text-secondary">現在お知らせはありません。</p>
        </div>
      </div>
    </section>
  );
};

export default News;