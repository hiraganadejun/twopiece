import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-300">
            業務支援に関するご相談は、以下のフォームよりお気軽にご連絡ください。
          </p>
        </div>

        {formStatus === 'success' ? (
          <div className="bg-accent/20 border border-accent rounded-lg p-8 text-center animate-fade-in-up">
            <svg className="w-16 h-16 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-2xl font-bold mb-2">送信完了</h3>
            <p className="text-gray-200">
              お問い合わせありがとうございます。<br/>
              担当者より折り返しご連絡いたします。
            </p>
            <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-sm underline hover:text-accent"
            >
                フォームに戻る
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                会社名 <span className="text-gray-500 text-xs ml-1">(任意)</span>
              </label>
              <input
                type="text"
                id="company"
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                お名前 <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                メールアドレス <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="info@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                お問い合わせ内容 <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="ご相談内容をご記入ください"
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="inline-block w-full md:w-auto min-w-[200px] bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? '送信中...' : '送信する'}
              </button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
               送信先：info@twopiece-holdings.com
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;