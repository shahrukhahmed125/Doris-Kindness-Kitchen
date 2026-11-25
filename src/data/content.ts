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
    fullDesc: 'Every Saturday, our volunteers serve freshly cooked, nutritious meals to people who are homeless or struggling with food poverty. We believe everyone deserves a hot meal served with dignity and respect — never a handout, always a hand up. Our street outreach brings food, warmth and human connection directly to where people need it most.',
    image: IMAGES.hero,
    highlights: [
      'Free hot meals served every Saturday',
      'Fresh, nutritious food prepared by volunteers',
      'Dignified service with respect for every person',
      'Outreach to rough sleepers and vulnerable residents',
    ],
    schedule: 'Every Saturday: 12:00 PM – 2:30 PM',
  },
  {
    id: 'essential-care',
    number: '02',
    title: 'Warmth & Essential Care',
    shortDesc: 'Outreach offers warmth and essential care alongside direct street meal service.',
    fullDesc: 'Hunger is rarely the only hardship our neighbours face. Alongside hot meals, our outreach provides essential care: warm clothing, blankets, toiletries, hygiene products and signposting to local support services. We treat every person we meet as an individual deserving of kindness and practical help.',
    image: IMAGES.parcels,
    highlights: [
      'Warm clothing and blankets for rough sleepers',
      'Toiletries and hygiene essentials',
      'Signposting to housing and health support',
      'Compassionate, judgement-free conversations',
    ],
  },
  {
    id: 'meal-preparation',
    number: '03',
    title: 'Meal Preparation & Packing',
    shortDesc: 'Meals are prepared and packed at the outreach headquarters for direct street outreach.',
    fullDesc: 'Behind every meal served on the High Street is a kitchen team preparing and packing food with care. Volunteers cook, portion and pack nutritious meals at our Walthamstow base so that our street outreach runs smoothly every Saturday. No experience needed — just a willingness to help.',
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
    desc: 'Hot, nutritious meals served directly to people in need across our outreach rounds.',
  },
  {
    id: 'communities',
    label: 'Communities Reached',
    value: 1260,
    prefix: '',
    suffix: '+',
    desc: 'Individuals and families supported through meals, food parcels and essential supplies.',
  },
  {
    id: 'volunteers',
    label: 'Dedicated Volunteers',
    value: 145,
    prefix: '',
    suffix: '',
    desc: 'Local people giving their time in the kitchen, on the streets and in the community.',
  },
  {
    id: 'projects',
    label: 'Outreach Initiatives',
    value: 12,
    prefix: '',
    suffix: '',
    desc: 'Ongoing and completed projects tackling hunger and food poverty.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'street-outreach-rounds',
    title: 'Street Outreach & Hot Stews Initiative',
    category: 'Direct Food Outreach',
    image: IMAGES.hero,
    shortDesc: 'Every Saturday, volunteers serve hot stews and meals to rough sleepers and vulnerable residents on Walthamstow High Street.',
    fullDesc: 'Our flagship street outreach brings hot, freshly cooked food directly to people experiencing homelessness and food insecurity. Volunteers serve nutritious meals, offer a warm greeting and connect people with further support. Each Saturday session runs from 12:00 to 2:30 PM, rain or shine.',
    status: 'Active',
    targetBeneficiaries: 'Rough sleepers, homeless individuals and vulnerable residents',
    location: 'Walthamstow High Street, London, UK',
  },
  {
    id: 'direct-handover-warmth',
    title: 'Warmth & Essential Care',
    category: 'Compassionate Outreach',
    image: IMAGES.parcels,
    shortDesc: 'Beyond food, our outreach provides warm clothing, blankets, toiletries and signposting to people in need.',
    fullDesc: 'Cold nights and daily hardships affect far more than hunger. During outreach rounds we distribute warm clothing, blankets, hygiene products and practical essentials, and we take time to listen and signpost people to housing, health and welfare support services in the borough.',
    status: 'Active',
    targetBeneficiaries: 'Homeless individuals, rough sleepers and vulnerable adults',
    location: 'Neighborhood Parks & Street Locations',
  },
  {
    id: 'kitchen-prep-outreach',
    title: 'Fresh Meal Preparation for Street Outreach',
    category: 'Kitchen & Meal Prep',
    image: IMAGES.kitchen,
    shortDesc: 'Our Walthamstow kitchen prepares and packs fresh, nutritious meals each week to fuel the Saturday street outreach.',
    fullDesc: 'At our outreach headquarters on Billet Road, volunteer cooks prepare balanced, hearty meals — soups, stews, pasta and seasonal dishes — which are then packed and transported to the High Street for direct distribution. Donations of ingredients and cooked food are always welcome.',
    status: 'Active',
    targetBeneficiaries: 'Community volunteers and street outreach recipients',
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
    excerpt: 'Every Saturday our volunteers head to Walthamstow High Street not just to serve food, but to see the people behind the hardship — and to remind them they are not forgotten.',
    content: [
      'When people think of homelessness, they often picture someone sleeping rough. The reality is far broader. Many of the people we meet on Walthamstow High Street are in temporary accommodation, sofa-surfing, or simply struggling to afford food after paying rent and bills.',
      'That is why our outreach goes to where people actually are — on the street, in parks and community spaces — rather than waiting for them to find us. A hot meal served with a smile can be the first step towards a longer conversation about support.',
      'One of the most rewarding parts of our work is building trust over time. Regular faces return week after week. We learn names, we remember allergies, and we celebrate small wins together. For some, that Saturday meal is the highlight of their week.',
      'We are always looking for more volunteers, more donations and more partners. If you would like to get involved, visit our volunteer or donate pages — together we can feed hope, share love and change lives.',
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
    excerpt: 'A look inside our Walthamstow kitchen, where volunteer cooks turn donated ingredients into hundreds of nutritious meals each week.',
    content: [
      'Long before our volunteers set up on Walthamstow High Street on a Saturday, the real work begins in our kitchen at 244 Billet Road. There, a team of dedicated volunteers prepares and packs the meals that will be served directly to people in need.',
      'Menus rotate through the week — hearty vegetable stews, chicken and rice dishes, pasta bakes and fresh salads — chosen to be nutritious, comforting and suitable for all dietary needs. Nothing is wasted: surplus ingredients are carefully planned into future menus.',
      'Kitchen shifts are flexible and welcoming to newcomers. Whether you can peel vegetables for an hour or cook a full batch, there is a role for you. It is one of the most rewarding ways to make a real difference in your local community.',
      'If your local business, school or community group has surplus food, we would love to hear from you. Donations of ingredients, equipment or cooked meals are always gratefully received.',
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
    description: 'Join us for our weekly Saturday street meal outreach. Volunteers will serve hot meals, distribute essential supplies and offer warm, compassionate support to people experiencing homelessness and food poverty in Walthamstow.',
    spotsLeft: 45,
  },
  {
    id: 'volunteer-induction-nov',
    title: 'Direct Outreach Volunteer Induction',
    date: 'Wednesday, 18 November 2026',
    time: '6:00 PM – 8:00 PM',
    location: '244 Billet Road, Walthamstow, London, UK, E17 5HF',
    category: 'Volunteer Briefing',
    description: 'New volunteers are welcome! Come along to our induction to learn about our mission, safety guidelines and how you can support our street meal outreach and kitchen preparation team.',
    spotsLeft: 18,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Serving Hope on the Streets',
    category: 'Street Outreach',
    image: IMAGES.hero,
    caption: 'Volunteers serving hot meals to people in need on Walthamstow High Street.',
    date: 'Autumn 2026',
  },
  {
    id: 'g2',
    title: 'Packing Meals for Street Outreach',
    category: 'Kitchen & Prep',
    image: IMAGES.kitchen,
    caption: 'Our kitchen team packing nutritious meals ready for the Saturday outreach.',
    date: 'Autumn 2026',
  },
  {
    id: 'g3',
    title: 'Direct Handover with Care',
    category: 'Direct Serving',
    image: IMAGES.parcels,
    caption: 'Handing out food parcels and essential supplies with care and dignity.',
    date: 'Autumn 2026',
  },
  {
    id: 'g5',
    title: 'Moments of Human Connection',
    category: 'Street Outreach',
    image: IMAGES.hero,
    caption: 'Building trust and offering a listening ear during weekly outreach rounds.',
    date: 'Autumn 2026',
  },
  {
    id: 'g6',
    title: 'Warm Stews Prepared for the Community',
    category: 'Kitchen & Prep',
    image: IMAGES.kitchen,
    caption: 'Hearty, nutritious stews prepared fresh for our street outreach service.',
    date: 'Autumn 2026',
  },
  {
    id: 'g7',
    title: 'Reaching People Where They Are',
    category: 'Direct Serving',
    image: IMAGES.parcels,
    caption: 'Taking food and support directly to rough sleepers and vulnerable residents.',
    date: 'Autumn 2026',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'The Saturday meals are the highlight of my week. The volunteers always greet me with a smile and it makes me feel valued, not invisible. Thank you for being there.',
    author: 'Community Member',
    role: 'Direct Outreach Recipient',
    location: 'Local Community',
  },
  {
    id: 't2',
    quote: 'I lost my job last year and struggled to feed my family. Doris Kindness Kitchen gave us food parcels when we needed them most. They treated us with dignity and kindness.',
    author: 'Local Resident',
    role: 'Food Parcel Recipient',
    location: 'Borough Street Route',
  },
  {
    id: 't3',
    quote: 'Volunteering with Doris Kindness Kitchen has been the most rewarding experience. Seeing people smile when we serve them reminds me why community matters.',
    author: 'Volunteer Team',
    role: 'Street Outreach Volunteer',
    location: 'Community Volunteer',
  },
  {
    id: 't4',
    quote: 'A hot meal and a kind word can change everything. This organisation brings hope to people who need it most in our neighbourhood.',
    author: 'Community Member',
    role: 'Street Outreach Participant',
    location: 'Walthamstow',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What is Doris Kindness Kitchen CIC's direct outreach mission?",
    answer: 'We are a community interest company dedicated to supporting homeless people, vulnerable individuals and families experiencing food poverty and financial hardship. Our mission is to ensure that vulnerable people feel valued, supported and cared for, regardless of their circumstances.',
    category: 'Outreach',
  },
  {
    id: 'faq-2',
    question: 'How do volunteers serve meals directly in the community?',
    answer: 'Volunteers help prepare and pack nutritious meals at our Walthamstow kitchen, then serve them directly to people in need on Walthamstow High Street every Saturday from 12:00 to 2:30 PM. No experience is required — full training and support is provided.',
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
    answer: 'You can donate money to help us buy ingredients and supplies, donate food or essential items, or volunteer your time in the kitchen or on the streets. Every contribution helps us feed more people with dignity.',
    category: 'Donations',
  },
  {
    id: 'faq-5',
    question: 'How can I join the street serving team?',
    answer: 'Visit our Volunteer page to register your interest, or attend one of our volunteer inductions at 244 Billet Road, Walthamstow. We welcome volunteers of all ages and backgrounds — just bring a willingness to help.',
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
    answer: 'Alongside hot meals, we distribute food parcels, warm clothing, blankets, toiletries, hygiene products and essential supplies. We also signpost people to local housing, health and welfare support services.',
    category: 'Supplies',
  },
];

export const VOLUNTEER_ROLES: VolunteerRole[] = [
  {
    id: 'street-server',
    title: 'Street Meal Serving Volunteer',
    timeCommitment: 'Saturday shifts (3–4 hours)',
    location: 'Walthamstow High Street, London, UK',
    description: 'Serve hot meals and essential supplies directly to people in need during our weekly Saturday outreach. You will interact with beneficiaries, offer a warm welcome and help distribute food with dignity and respect.',
    skills: ['Friendly and approachable', 'Reliable and punctual', 'Comfortable talking with people', 'No experience needed'],
    urgency: 'High',
  },
  {
    id: 'meal-packer',
    title: 'Meal Packing & Prep Assistant',
    timeCommitment: 'Weekday shifts (3 hours)',
    location: '244 Billet Road, Walthamstow, London, UK, E17 5HF',
    description: 'Help prepare and pack nutritious meals at our outreach headquarters. Tasks include cooking, portioning, packing and labelling meals ready for distribution on outreach days.',
    skills: ['Basic cooking ability helpful', 'Attention to hygiene', 'Team player', 'Flexible hours'],
    urgency: 'Normal',
  },
  {
    id: 'street-outreach-support',
    title: 'Street Outreach Support Volunteer',
    timeCommitment: 'Saturday shifts (2–3 hours)',
    location: 'Local Neighborhood Routes',
    description: 'Support our outreach by helping distribute food parcels, warm clothing and essential supplies, and by signposting people to local support services during our community rounds.',
    skills: ['Empathy and patience', 'Good communication', 'Physical stamina', 'Commitment to dignity'],
    urgency: 'High',
  },
];
