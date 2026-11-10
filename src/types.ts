export type PageId =
  | 'home'
  | 'about'
  | 'mission'
  | 'services'
  | 'projects'
  | 'donate'
  | 'volunteer'
  | 'fundraising'
  | 'partners'
  | 'news'
  | 'gallery'
  | 'contact'
  | 'privacy';

export interface NavItem {
  id: PageId;
  label: string;
  children?: { id: PageId; label: string; description?: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  highlights: string[];
  schedule?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  status: 'Active' | 'Expanding' | 'Seasonal' | 'Completed';
  targetBeneficiaries: string;
  location: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  category: 'Community Story' | 'News' | 'Volunteer Spotlight' | 'Nutrition & Health';
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
  author: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  spotsLeft?: number;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Kitchen & Cooking' | 'Food Distribution' | 'Community Meals' | 'Volunteers';
  image: string;
  caption: string;
  date?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface VolunteerRole {
  id: string;
  title: string;
  timeCommitment: string;
  location: string;
  description: string;
  skills: string[];
  urgency?: 'High' | 'Normal';
}

export interface PartnerItem {
  id: string;
  name: string;
  type: 'Food Partner' | 'Community Ally' | 'Civic Supporter' | 'Corporate Sponsor';
  contribution: string;
  logoText: string;
}
