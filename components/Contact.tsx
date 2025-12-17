import React, { useState, useRef } from 'react';
import Modal from './Modal';

interface FormData {
  company: string;
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget || formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const data: FormData = {
      company: formData.get('company') as string || '',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setIsModalOpen(true);
        // フォームをリセット
        form.reset();
      } else {
        throw new Error(result.message || '送信に失敗しました');
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '送信に失敗しました。しばらくしてから再度お試しください。');
    }
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setFormStatus('idle');
        }}
        title="送信完了"
      >
        <div className="text-center">
          <svg className="w-16 h-16 text-accent mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-lg mb-2">
            お問い合わせありがとうございます。
          </p>
          <p className="text-gray-600 mb-6">
            担当者より折り返しご連絡いたします。
          </p>
          <button
            onClick={() => {
              setIsModalOpen(false);
              setFormStatus('idle');
            }}
            className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded transition-colors"
          >
            閉じる
          </button>
        </div>
      </Modal>

      <section id="contact" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
            <p className="text-gray-300">
              業務支援に関するご相談は、以下のフォームよりお気軽にご連絡ください。
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-1">
                会社名 <span className="text-gray-500 text-xs ml-1">(任意)</span>
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="株式会社〇〇"
              />
            </div>

            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1">
                お名前 <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1">
                メールアドレス <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="info@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1">
                お問い合わせ内容 <span className="text-accent text-xs ml-1">*必須</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                placeholder="ご相談内容をご記入ください"
              ></textarea>
            </div>

            {errorMessage && (
              <div className="bg-red-500/20 border border-red-500 rounded px-4 py-3 text-red-200 text-sm">
                {errorMessage}
              </div>
            )}

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
        </div>
      </section>
    </>
  );
};

export default Contact;