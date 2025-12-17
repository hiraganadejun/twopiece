import { NavItem, ServiceItem, CompanyInfo, FaqItem, PolicyItem } from './types';

export const COMPANY_NAME = "株式会社ツーピース";
export const COMPANY_NAME_EN = "Two Piece Inc.";

export const NAV_ITEMS: NavItem[] = [
  { label: '会社概要', href: '#company' },
  { label: '事業内容', href: '#services' },
  { label: '方針', href: '#policy' },
  { label: 'お知らせ', href: '#news' },
  { label: 'お問い合わせ', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "採用活動の運用支援",
    description: "応募対応フローの整備や運用改善など、実務オペレーションを支援します。"
  },
  {
    title: "人材紹介関連の業務支援",
    description: "要件整理や求人票整備、提案準備など周辺業務をサポートします。"
  },
  {
    title: "インサイド業務の支援",
    description: "問い合わせ一次対応やヒアリング設計、データ整備を支援します。"
  }
];

export const POLICIES: PolicyItem[] = [
  { text: "ヒアリングと整理を重視し、前提を揃えたうえで進行します。" },
  { text: "情報の正確性と更新性を重視し、データ整備を徹底します。" },
  { text: "短期の成果だけでなく、運用改善を継続できる設計を行います。" },
  { text: "関係者間の連携を前提とした支援を提供します。" }
];

export const COMPANY_INFO: CompanyInfo[] = [
  { label: "会社名", value: "株式会社ツーピース" },
  { label: "所在地", value: "東京都新宿区大久保２丁目１８番１８号ＮＳハイムＢ－２６" },
  { label: "代表者名", value: "緒方幸一郎" },
  { label: "法人番号", value: "6011101108320" },
  { label: "設立年月", value: "2024年8月" },
  { label: "資本金", value: "100万" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "対応エリアはどこですか？",
    answer: "オンライン対応を基本としていますが、訪問対応も可能です。"
  },
  {
    question: "どのような職種が対応可能ですか？",
    answer: "すべての職種を網羅的に対応可能です。サービス・マーケター・営業のご依頼が増えておりますが、その他、介護、医療・福祉などの幅広い実績がございます。"
  },
  {
    question: "問い合わせ方法を教えてください。",
    answer: "ページ下部のフォームよりご連絡ください。"
  }
];