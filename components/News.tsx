import React, { useEffect, useMemo, useState } from 'react';
import Modal from './Modal';

const News: React.FC = () => {
  const [items, setItems] = useState<Array<{ id: string; date: string; title: string; body: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        setLoading(true);
        const res = await fetch('/announcements.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load announcements');
        const data = (await res.json()) as Array<{ id: string; date: string; title: string; body: string }>;
        if (!cancelled) setItems(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setItems([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [items]);

  const activeItem = useMemo(() => {
    if (!activeId) return null;
    return sortedItems.find((item) => item.id === activeId) ?? null;
  }, [activeId, sortedItems]);

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  };

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-200 pb-4">
            <div>
                <h2 className="text-3xl font-bold text-primary">お知らせ</h2>
            </div>
            {/* Future list link could go here */}
        </div>

        {loading ? (
          <div className="py-16 text-center bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl border border-gray-200">
            <div className="inline-flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
              <p className="text-secondary">読み込み中...</p>
            </div>
          </div>
        ) : sortedItems.length === 0 ? (
          <div className="py-16 text-center bg-gradient-to-br from-gray-50 to-slate-100 rounded-xl border border-gray-200">
            <div className="inline-flex flex-col items-center gap-3">
              <svg className="w-12 h-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <p className="text-secondary">現在お知らせはありません。</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className="group w-full text-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5">
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      {/* Date badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600 tabular-nums whitespace-nowrap w-fit">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(item.date)}
                      </span>
                      
                      {/* Title */}
                      <span className="text-sm sm:text-base text-primary font-medium group-hover:text-accent transition-colors duration-300 truncate">
                        {item.title}
                      </span>
                    </div>
                    
                    {/* Arrow icon */}
                    <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 group-hover:bg-accent group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <Modal
        isOpen={!!activeItem}
        onClose={() => setActiveId(null)}
        title={activeItem?.title ?? ''}
      >
        {activeItem && (
          <div>
            <div className="text-sm text-gray-500 mb-4">{formatDate(activeItem.date)}</div>
            <div className="whitespace-pre-wrap leading-relaxed">{activeItem.body}</div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default News;
