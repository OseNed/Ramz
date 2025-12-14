export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PropertyCardProps {
  title: string;
  location: string;
  image: string;
  roi: string;
  duration: string;
  type: 'residential' | 'commercial' | 'office';
  status: 'coming_soon' | 'active' | 'funded';
  city: string;
}

export interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  authorImage?: string;
  isFeatured?: boolean;
}