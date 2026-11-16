import {
  ServiceItem,
  ProjectItem,
  ArticleItem,
  EventItem,
  GalleryPhoto,
  TestimonialItem,
  FAQItem,
  VolunteerRole,
} from '../types';

export const LOGO_URL = '/assets/aistudio/WhatsApp_Image_2026-11-09_at_11.17.05_AM_0d1daad8.jpg';

export const IMAGES = {
  hero: '/assets/images/street_meal_outreach_hero_1794480885242.jpg',
  kitchen: '/assets/images/packing_meals_outreach_1794480899910.jpg',
  parcels: '/assets/images/street_meal_handover_1794480913856.jpg',
  dining: '/assets/images/street_meal_handover_1794480913856.jpg',
  streetHero: '/assets/images/street_meal_outreach_hero_1794480885242.jpg',
  streetHandover: '/assets/images/street_meal_handover_1794480913856.jpg',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'street-meals',
    number: '01',
    title: 'Direct Street Meal Outreach',
    shortDesc: 'Hot meals are served at Walthamstow High Street every Saturday from 12:00 to 2:30 PM.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: IMAGES.hero,
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'Duis aute irure dolor in reprehenderit in voluptate',
    ],
    schedule: 'Every Saturday: 12:00 PM – 2:30 PM',
  },
  {
    id: 'essential-care',
    number: '02',
    title: 'Warmth & Essential Care',
    shortDesc: 'Outreach offers warmth and essential care alongside direct street meal service.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: IMAGES.parcels,
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore',
      'Ut enim ad minim veniam, quis nostrud exercitation',
      'Duis aute irure dolor in reprehenderit in voluptate',
    ],
  },
  {
    id: 'meal-preparation',
    number: '03',
    title: 'Meal Preparation & Packing',
    shortDesc: 'Meals are prepared and packed at the outreach headquarters for direct street outreach.',
    fullDesc: 'Meal preparation and packing support the direct street meal outreach in Walthamstow.',
    image: IMAGES.kitchen,
    highlights: [
      'Meal preparation at the outreach headquarters',
      'Meals packed for direct street outreach',
      'Supporting the Saturday meal service',
    ],
  },
  {
    id: 'volunteer-outreach-support',
    number: '04',
    title: 'Volunteer Outreach Support',
    shortDesc: 'Volunteers can support meal preparation and direct street meal service.',
    fullDesc: 'Volunteers support meal preparation and take part in direct street meal outreach at Walthamstow High Street.',
    image: IMAGES.hero,
    highlights: [
      'Support meal preparation and packing',
      'Take part in direct street meal service',
      'Serve at Walthamstow High Street',
    ],
  },
];

export const COMMUNITY_CARDS = [
  {
    id: 'meal-preparation',
    title: 'Meal Preparation & Packing',
    description: 'Meals are prepared and packed at the outreach headquarters for direct street outreach.',
  },
  {
    id: 'essential-care',
    title: 'Warmth & Essential Care',
    description: 'Our outreach includes warmth and essential care support alongside direct meal service.',
  },
  {
    id: 'volunteer-outreach-support',
    title: 'Volunteer Outreach Support',
    description: 'Volunteers can support meal preparation and direct street meal service.',
  },
];

export const IMPACT_STATS = [
  {
    id: 'meals',
    label: 'Direct Meals Served',
    value: 28450,
    prefix: '',
    suffix: '+',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
  {
    id: 'communities',
    label: 'Communities Reached',
    value: 1260,
    prefix: '',
    suffix: '+',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
  {
    id: 'volunteers',
    label: 'Dedicated Volunteers',
    value: 145,
    prefix: '',
    suffix: '',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
  {
    id: 'projects',
    label: 'Outreach Initiatives',
    value: 12,
    prefix: '',
    suffix: '',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'street-outreach-rounds',
    title: 'Street Outreach & Hot Stews Initiative',
    category: 'Direct Food Outreach',
    image: IMAGES.hero,
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: 'Active',
    targetBeneficiaries: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    location: 'Walthamstow High Street, London, UK',
  },
  {
    id: 'direct-handover-warmth',
    title: 'Warmth & Essential Care',
    category: 'Compassionate Outreach',
    image: IMAGES.parcels,
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: 'Active',
    targetBeneficiaries: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    location: 'Neighborhood Parks & Street Locations',
  },
  {
    id: 'kitchen-prep-outreach',
    title: 'Fresh Meal Preparation for Street Outreach',
    category: 'Kitchen & Meal Prep',
    image: IMAGES.kitchen,
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: 'Active',
    targetBeneficiaries: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    location: '244 Billet Road, Walthamstow, London, UK, E17 5HF',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'reaching-people-directly',
    title: 'Reaching People Where They Are: Stories From the Street',
    date: '14 October 2026',
    category: 'Street Outreach',
    readTime: '4 min read',
    image: IMAGES.hero,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
      'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis.',
    ],
    author: 'Doris Kindness Kitchen Team',
  },
  {
    id: 'packing-fresh-meals-outreach',
    title: 'Behind the Scenes: Packing Fresh Meals for Direct Outreach',
    date: '28 September 2026',
    category: 'Kitchen Prep',
    readTime: '3 min read',
    image: IMAGES.kitchen,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
    ],
    author: 'Doris Kindness Kitchen Team',
  },
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'street-outreach-round-1',
    title: 'Community Street Meal Outreach Round',
    date: 'Saturday, 5 December 2026',
    time: '12:00 PM – 2:30 PM',
    location: 'Walthamstow High Street, London, UK',
    category: 'Direct Outreach',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotsLeft: 45,
  },
  {
    id: 'volunteer-induction-nov',
    title: 'Direct Outreach Volunteer Induction',
    date: 'Wednesday, 18 November 2026',
    time: '6:00 PM – 8:00 PM',
    location: '244 Billet Road, Walthamstow, London, UK, E17 5HF',
    category: 'Volunteer Briefing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    spotsLeft: 18,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Serving Hope on the Streets',
    category: 'Street Outreach',
    image: IMAGES.hero,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
  {
    id: 'g2',
    title: 'Packing Meals for Street Outreach',
    category: 'Kitchen & Prep',
    image: IMAGES.kitchen,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
  {
    id: 'g3',
    title: 'Direct Handover with Care',
    category: 'Direct Serving',
    image: IMAGES.parcels,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
  {
    id: 'g5',
    title: 'Moments of Human Connection',
    category: 'Street Outreach',
    image: IMAGES.hero,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
  {
    id: 'g6',
    title: 'Warm Stews Prepared for the Community',
    category: 'Kitchen & Prep',
    image: IMAGES.kitchen,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
  {
    id: 'g7',
    title: 'Reaching People Where They Are',
    category: 'Direct Serving',
    image: IMAGES.parcels,
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    date: 'Autumn 2026',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    author: 'Community Member',
    role: 'Direct Outreach Recipient',
    location: 'Local Community',
  },
  {
    id: 't2',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    author: 'Local Resident',
    role: 'Outreach Beneficiary',
    location: 'Borough Street Route',
  },
  {
    id: 't3',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    author: 'Volunteer Team',
    role: 'Street Outreach Volunteer',
    location: 'Community Volunteer',
  },
  {
    id: 't4',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
    author: 'Community Member',
    role: 'Street Outreach Participant',
    location: 'Walthamstow',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What is Doris Kindness Kitchen CIC's direct outreach mission?",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'Outreach',
  },
  {
    id: 'faq-2',
    question: 'How do volunteers serve meals directly in the community?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'Outreach',
  },
  {
    id: 'faq-3',
    question: 'When can I find the direct street meal outreach?',
    answer: 'Direct outreach takes place every Saturday from 12:00 to 2:30 PM at Walthamstow High Street, London, UK.',
    category: 'Locations',
  },
  {
    id: 'faq-4',
    question: 'How can I support direct meal delivery efforts?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'Donations',
  },
  {
    id: 'faq-5',
    question: 'How can I join the street serving team?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'Volunteering',
  },
  {
    id: 'faq-6',
    question: 'Where does the organisation take meals directly?',
    answer: 'Our direct street outreach takes place at Walthamstow High Street, London, UK, every Saturday from 12:00 to 2:30 PM.',
    category: 'Locations',
  },
  {
    id: 'faq-7',
    question: 'Where does the organisation serve meals?',
    answer: 'The outreach headquarters is at 244 Billet Road, Walthamstow, London, UK, E17 5HF.',
    category: 'Locations',
  },
  {
    id: 'faq-8',
    question: 'What supplies are distributed during direct outreach?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    category: 'Supplies',
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'street-server',
    title: 'Street Meal Serving Volunteer',
    timeCommitment: 'Lorem ipsum dolor sit amet (3–4 hours)',
    location: 'Walthamstow High Street, London, UK',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    skills: ['Lorem ipsum dolor', 'Consectetur adipiscing', 'Sed do eiusmod', 'Ut enim ad minim'],
    urgency: 'High',
  },
  {
    id: 'meal-packer',
    title: 'Meal Packing & Prep Assistant',
    timeCommitment: 'Lorem ipsum dolor sit amet (3 hours)',
    location: '244 Billet Road, Walthamstow, London, UK, E17 5HF',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    skills: ['Lorem ipsum dolor', 'Consectetur adipiscing', 'Sed do eiusmod', 'Ut enim ad minim'],
    urgency: 'Normal',
  },
  {
    id: 'street-outreach-support',
    title: 'Street Outreach Support Volunteer',
    timeCommitment: 'Lorem ipsum dolor sit amet (2–3 hours)',
    location: 'Local Neighborhood Routes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
    skills: ['Lorem ipsum dolor', 'Consectetur adipiscing', 'Sed do eiusmod', 'Ut enim ad minim'],
    urgency: 'High',
  },
];
