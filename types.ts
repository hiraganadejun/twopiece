export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface CompanyInfo {
  label: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PolicyItem {
  text: string;
}

export interface CaseStudyItem {
  title: string;
  theme: string;
  challenges: string[];
  supports: string[];
  results: string[];
  period?: string;
}
