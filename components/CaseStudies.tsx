import React from 'react';
import { CASE_STUDIES } from '../constants';

// 成果から数値を抽出してハイライト表示用に変換
const HIGHLIGHT_METRICS = [
  { before: '5件/月', after: '22件/月', label: '応募数', multiplier: '4.4×' },
  { before: '1〜2%', after: '6〜8%', label: 'スカウト返信率', multiplier: '4×' },
  { before: '20%台', after: '約50%', label: '有効面談率', multiplier: '2×' },
];

const CaseStudies: React.FC = () => {
  return (
    <section id="case" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">支援事例</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-2"></div>
          <p className="text-sm text-secondary">ご支援した採用課題と成果の一例です</p>
        </div>

        {/* ケーススタディカード */}
        <div className="space-y-12">
          {CASE_STUDIES.map((item, index) => {
            const metric = HIGHLIGHT_METRICS[index];
            
            return (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* 上部：ケース概要 + 成果ハイライト */}
                <div className="p-6 md:p-8 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="min-w-0">
                      <p className="text-xs font-medium tracking-wider text-accent">
                        CASE {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-primary mt-2 break-words">
                        {item.title}
                      </h3>
                      <p className="text-secondary mt-2 leading-relaxed">{item.theme}</p>
                    </div>

                    <div className="w-full md:w-auto rounded-xl border border-accent/20 bg-accent/5 p-4 md:p-5">
                      <p className="text-xs text-secondary mb-3">成果ハイライト：{metric.label}</p>
                      <div className="flex items-end gap-3">
                        <div className="min-w-0">
                          <p className="text-[11px] text-secondary">Before</p>
                          <p className="text-lg md:text-xl font-bold text-primary">{metric.before}</p>
                        </div>
                        <span className="text-secondary pb-1">→</span>
                        <div className="min-w-0">
                          <p className="text-[11px] text-secondary">After</p>
                          <p className="text-lg md:text-xl font-bold text-primary">{metric.after}</p>
                        </div>
                        <span className="ml-auto inline-flex items-center rounded-full bg-accent text-white px-3 py-1 text-xs font-bold">
                          {metric.multiplier}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 下部：詳細情報 */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* 課題 */}
                    <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5">
                      <h4 className="flex items-center gap-3 font-bold text-primary mb-3">
                        <span className="w-1.5 h-4 rounded-full bg-slate-300" aria-hidden="true"></span>
                        課題
                      </h4>
                      <ul className="space-y-2 text-sm text-secondary leading-relaxed">
                        {item.challenges.map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-slate-400 mt-1 shrink-0">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 支援内容 */}
                    <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5">
                      <h4 className="flex items-center gap-3 font-bold text-primary mb-3">
                        <span className="w-1.5 h-4 rounded-full bg-accent/60" aria-hidden="true"></span>
                        支援内容
                      </h4>
                      <ul className="space-y-2 text-sm text-secondary leading-relaxed">
                        {item.supports.map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent/60 mt-1 shrink-0">•</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 成果 */}
                    <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-5">
                      <h4 className="flex items-center gap-3 font-bold text-primary mb-3">
                        <span className="w-1.5 h-4 rounded-full bg-accent" aria-hidden="true"></span>
                        成果（{item.period}）
                      </h4>
                      <ul className="space-y-2 text-sm text-secondary leading-relaxed">
                        {item.results.map((text, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-accent mt-1 shrink-0">✓</span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
