import React, { useState } from 'react';
import { COMPANY_NAME_EN } from '../constants';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="mb-8">
            <span className="text-xl font-bold tracking-tight text-white">
                {COMPANY_NAME_EN}
            </span>
        </div>
        
        <div className="mb-8">
             <button 
                onClick={() => setShowPrivacy(true)}
                className="text-sm hover:text-white transition-colors"
             >
                プライバシーポリシー
             </button>
        </div>

        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} {COMPANY_NAME_EN} All Rights Reserved.
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[80vh] overflow-y-auto p-8 relative animate-fade-in-up">
            <button 
                onClick={() => setShowPrivacy(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <h3 className="text-xl font-bold text-primary mb-6">プライバシーポリシー</h3>
            <div className="space-y-4 text-sm text-secondary">
                <p>株式会社ツーピース（以下、「当社」）は、個人情報保護の重要性を認識し、法令遵守のもと、以下のプライバシーポリシーを定めています。</p>
                
                <h4 className="font-bold text-primary mt-4">1. 個人情報の取得</h4>
                <p>当社は、適正かつ公正な手段によって個人情報を取得します。</p>

                <h4 className="font-bold text-primary mt-4">2. 個人情報の利用目的</h4>
                <p>お問い合わせへの対応、および当社サービスの提供・案内のために利用します。</p>

                <h4 className="font-bold text-primary mt-4">3. 第三者への提供</h4>
                <p>法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。</p>

                <h4 className="font-bold text-primary mt-4">4. 管理体制</h4>
                <p>個人情報の漏洩、滅失、毀損を防ぐため、適切な安全管理措置を講じます。</p>
            </div>
            
            <div className="mt-8 text-center">
                <button 
                    onClick={() => setShowPrivacy(false)}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
                >
                    閉じる
                </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;