import { useState } from 'react';
import {
  Heart,
  ArrowRight,
  Users,
  UtensilsCrossed,
  PackageOpen,
  Sparkles,
  ChevronDown,
  Quote,
  Calendar,
  CheckCircle2,
  Clock,
  HandHeart,
  Soup,
  ShieldCheck,
} from 'lucide-react';
import { PageId, ArticleItem } from '../types';
import {
  SERVICES,
  PROJECTS,
  ARTICLES,
  TESTIMONIALS,
  FAQS,
  IMPACT_STATS,
  COMMUNITY_CARDS,
  IMAGES,
} from '../data/content';
import Marquee from '../components/Marquee';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export default function HomePage({
  onNavigate,
  onOpenDonate,
  onOpenVolunteer,
  onSelectArticle,
}: HomePageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [selectedDonationQuickAmt, setSelectedDonationQuickAmt] = useState<number>(25);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 01 – HERO BANNER (Cinematic Ken Burns Loop Image & Floating Badge)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#104C31]">
        {/* Photographic backdrop with continuous cinematic Ken Burns loop animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Doris Kindness Kitchen volunteers serving meals directly in the community"
            className="w-full h-full object-cover object-center filter brightness-95 animate-ken-burns origin-center"
          />
          {/* Measured editorial scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#104C31]/95 via-[#104C31]/80 to-[#104C31]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#104C31] via-transparent to-black/40" />
        </div>

        {/* Decorative curved organic gold accent line */}
        <div className="absolute -bottom-1 left-0 right-0 z-10 pointer-events-none">
          <svg
            className="w-full h-12 sm:h-20 text-[#FFF8ED] fill-current"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (8 cols): Editorial Typography */}
            <div className="lg:col-span-8 text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 backdrop-blur-md text-xs font-bold text-[#E7C071] uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441] animate-spin duration-1000" />
                <span>Feeding Hope · Sharing Love · Changing Lives</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] text-balance">
                Taking Kindness to Those <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] via-[#E7C071] to-[#D9A441]">Who Need It Most.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#FFF8ED]/90 max-w-2xl leading-relaxed font-body font-normal">
                Doris Kindness Kitchen CIC is a community interest company dedicated to supporting homeless people, vulnerable individuals and families experiencing food poverty and financial hardship. We serve free, nutritious meals and essential supplies with dignity and compassion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenDonate}
                  className="btn-sexy-gold px-8 py-4 text-base flex items-center gap-3 group"
                >
                  <Heart className="w-5 h-5 fill-current text-red-700 transition-transform duration-300 group-hover:scale-125" />
                  <span>Donate Now</span>
                </button>

                <button
                  onClick={onOpenVolunteer}
                  className="btn-sexy-outline px-8 py-4 text-base flex items-center gap-2.5 group"
                >
                  <Users className="w-5 h-5 text-[#D9A441] transition-transform duration-300 group-hover:rotate-12" />
                  <span>Become a Volunteer</span>
                </button>
              </div>

              {/* Trust signals */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#FFF8ED]/85 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  Free Hot Meals Every Saturday
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  Registered Community Interest Company
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  Serving Walthamstow Since Launch
                </span>
              </div>
            </div>

            {/* Right Column: Floating Impact Badge with Continuous Loop Float & Glow */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative max-w-sm w-full bg-[#FFF8ED] rounded-3xl p-7 shadow-2xl border-2 border-[#D9A441]/60 text-[#242923] animate-float-slow animate-gold-glow">
                {/* Floating Corner Star */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#D9A441] text-[#104C31] flex items-center justify-center font-bold shadow-lg animate-rotate-slow">
                  ✦
                </div>

                {/* Badge top ribbon */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D9A441]/30">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
                      <Soup className="w-5 h-5 text-[#176B45]" />
                    </div>
                    <span className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#176B45]">
                      Direct Outreach
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#104C31] bg-[#D9A441] px-2.5 py-0.5 rounded-full shadow-sm">
                    Active
                  </span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-4xl text-[#104C31] tracking-tight">650+</span>
                    <span className="text-xs text-[#596157] font-semibold">Meals Prepared</span>
                  </div>
                  <div className="w-full bg-[#FAF2E4] h-3 rounded-full overflow-hidden border border-[#D9A441]/40">
                    <div className="bg-gradient-to-r from-[#D9A441] to-[#E7C071] h-full w-[82%] rounded-full shadow" />
                  </div>
                  <p className="text-xs text-[#596157] leading-relaxed">
                    Our volunteers serve fresh, hot meals every Saturday at Walthamstow High Street — every donation helps us feed more neighbours in need.
                  </p>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="btn-sexy-green w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#D9A441] fill-current" />
                  <span>Support Our Outreach</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02 – INTRODUCTION / ABOUT US (Exact 60px padding + Loop Float Photos)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Asymmetrical photography with Dual Asynchronous Floating Loop Animations */}
            <div className="lg:col-span-6 relative">
              {/* Primary Photo with Gentle Float */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] z-10 animate-float-slow">
                <img
                  src={IMAGES.kitchen}
                  alt="Doris Kindness Kitchen direct meal prep and outreach"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base">
                    Taking Kindness to Those Who Need It Most
                  </p>
                  <p className="text-xs text-white/80">Direct Community Food Service</p>
                </div>
              </div>

              {/* Overlapping Secondary Photo with Counter-Float Loop */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF8ED] z-20 aspect-[4/3] animate-float-reverse">
                <img
                  src={IMAGES.parcels}
                  alt="Doris Kitchen street outreach volunteer serving hot meal directly"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Decorative gold ambient halo */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D9A441]/25 rounded-full blur-2xl pointer-events-none animate-gold-glow" />
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                  ABOUT OUR MISSION
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                  More Than a Meal. A Message of Hope.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#242923]/90 leading-relaxed font-body">
                Doris Kindness Kitchen CIC exists to ensure that vulnerable people feel valued, supported and cared for, regardless of their circumstances. We work alongside homeless individuals, rough sleepers, low-income families and elderly people experiencing food insecurity — reducing hunger, promoting dignity and improving wellbeing in our community.
              </p>

              <p className="text-sm sm:text-base text-[#596157] leading-relaxed font-body">
                We aim to provide free nutritious meals, food parcels, essential supplies and community outreach programmes, working hand in hand with volunteers, local businesses, charities and community organisations. Our mission: to feed hope, share love and change lives.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-[#D9A441]/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#176B45]/15 flex items-center justify-center text-[#176B45] mb-2 font-bold font-heading">
                    01
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#104C31]">Direct Street Outreach</h4>
                  <p className="text-xs text-[#596157] mt-1">Hot meals served weekly at Walthamstow High Street.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#D9A441]/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C] mb-2 font-bold font-heading">
                    02
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#104C31]">Dignity & Compassion</h4>
                  <p className="text-xs text-[#596157] mt-1">Every person treated with respect, never a handout.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-sexy-green px-7 py-3.5 text-xs sm:text-sm flex items-center gap-2.5 group"
                >
                  <span>Learn About Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#D9A441] transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 – MOVING TEXT MARQUEE
          ========================================================================= */}
      <Marquee
        text="DIRECT FOOD OUTREACH • SERVING WITH DIGNITY • REACHING PEOPLE WHERE THEY ARE • HOPE IN ACTION"
        theme="green"
      />

      {/* =========================================================================
          SECTION 04 – OUR SERVICES (Exact 60px padding + Image Zoom & Floating Cards)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              KINDNESS IN ACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
              Taking Hope Beyond Our Kitchen.
            </h2>
            <p className="text-sm sm:text-base text-[#596157] font-body">
              From free hot meals and food parcels to warmth and essential care, our programmes reach people facing hunger and hardship across Walthamstow and beyond.
            </p>
          </div>

          {/* Four Distinct Service Cards with Sexy Hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {SERVICES.map((srv, idx) => (
              <div
                key={srv.id}
                onClick={() => onNavigate('services')}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-[#D9A441]/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-2 hover:border-[#D9A441] ${
                  idx % 2 === 0 ? 'animate-float-gentle' : ''
                }`}
              >
                {/* Image Frame with Zoom & Gold Accent */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-[#104C31] text-[#E7C071] px-3 py-1 rounded-full font-heading text-xs font-bold shadow-md border border-[#D9A441]/40">
                    {srv.number}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D9A441] to-[#E7C071] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#104C31] group-hover:text-[#B8852C] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#596157] leading-relaxed mt-2 font-body">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#176B45] group-hover:text-[#B8852C] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#176B45] hover:text-[#B8852C] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              <span>Explore all services and outreach schedules</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 – OUR MISSION & VISION (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#176B45] text-[#FFF8ED] relative overflow-hidden">
        {/* Subtle breathing background imagery with measured scrim */}
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <img
            src={IMAGES.dining}
            alt="Direct food outreach background"
            className="w-full h-full object-cover filter blur-sm animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#E7C071]">
              OUR GUIDING NORTH STAR
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance">
              Taking Hope Beyond Our Kitchen.
            </h2>
            <p className="text-sm sm:text-base text-[#FFF8ED]/85 font-body">
              Our mission is to ensure that vulnerable people feel valued, supported and cared for, regardless of their circumstances — working with volunteers, local businesses and community organisations to reduce hunger and promote dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Mission Box */}
            <div className="bg-[#104C31]/95 rounded-3xl p-8 sm:p-10 border border-[#D9A441]/40 shadow-xl flex flex-col justify-between hover:border-[#D9A441] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#D9A441] mb-2 shadow-inner">
                  <HandHeart className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#D9A441]">
                  Direct Purpose
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-[#FFF8ED]/95 leading-relaxed font-body">
                  Our mission is to ensure that vulnerable people feel valued, supported and cared for, regardless of their circumstances. We exist to reduce hunger, promote dignity and improve the wellbeing of people in need through free meals, food parcels, essential supplies and community outreach.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-[#FFF8ED]/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Free nutritious meals for people in need</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Food parcels, warmth and essential care</span>
                </div>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-[#104C31]/95 rounded-3xl p-8 sm:p-10 border border-[#D9A441]/40 shadow-xl flex flex-col justify-between hover:border-[#D9A441] transition-all">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#D9A441] mb-2 shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#D9A441]">
                  Future Vision
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-[#FFF8ED]/95 leading-relaxed font-body">
                  A future where no one in our community has to go hungry. We envision a borough where vulnerable people are valued, supported and cared for — where charities, businesses and volunteers work together to end food poverty.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-[#FFF8ED]/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>A community where no one goes hungry</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Partnerships with charities and local organisations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('mission')}
              className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm flex items-center gap-2.5 mx-auto"
            >
              <span>Read Our Full Strategy & Commitments</span>
              <ArrowRight className="w-4 h-4 text-[#104C31]" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 – COMMUNITY IMPACT (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED] border-b border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              MEASURABLE SOLIDARITY
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Every Meal Makes a Difference.
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Through donations and volunteering, our community has delivered thousands of meals and vital supplies to people facing hunger and hardship.
            </p>
          </div>

          {/* 4 Counter Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-3xl p-7 border border-[#D9A441]/35 shadow-md text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#176B45] tabular-nums tracking-tight">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <h3 className="font-heading font-bold text-base text-[#242923] mt-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#596157] mt-2 leading-relaxed font-body">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_CARDS.map((card, index) => (
              <article
                key={card.id}
                className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-heading font-bold text-lg text-[#104C31]">{card.title}</h3>
                <p className="text-xs text-[#596157] leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 – FEATURED COMMUNITY PROJECTS (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FAF2E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                DIRECT OUTREACH
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                Reaching People Where They Are.
              </h2>
              <p className="text-sm sm:text-base text-[#596157] font-body">
                Our street outreach, kitchen programme and essential care initiatives work together to reduce hunger and bring dignity to every person we serve.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="btn-sexy-green px-6 py-3 text-xs flex items-center gap-2 shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#D9A441]" />
            </button>
          </div>

          {/* Asymmetrical 3-Project Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Project 1: Large Featured Card (7 cols) with subtle loop float */}
            <div
              onClick={() => onNavigate('projects')}
              className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-[#D9A441]/35 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={PROJECTS[0].image}
                  alt={PROJECTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute top-4 left-4 bg-[#104C31] text-[#E7C071] px-3.5 py-1 rounded-full text-xs font-bold shadow-md border border-[#D9A441]/30">
                  {PROJECTS[0].category}
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-heading font-bold text-2xl text-[#104C31] group-hover:text-[#B8852C] transition-colors">
                  {PROJECTS[0].title}
                </h3>
                <p className="text-sm text-[#596157] leading-relaxed font-body">
                  {PROJECTS[0].shortDesc}
                </p>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#176B45] group-hover:text-[#B8852C]">
                  <span>Discover More About This Outreach</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Projects 2 & 3: Stacked Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {PROJECTS.slice(1, 3).map((prj) => (
                <div
                  key={prj.id}
                  onClick={() => onNavigate('projects')}
                  className="bg-white rounded-3xl overflow-hidden border border-[#D9A441]/35 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row flex-1 cursor-pointer group"
                >
                  <div className="sm:w-2/5 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                    <img
                      src={prj.image}
                      alt={prj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#B8852C] uppercase tracking-wider block mb-1">
                        {prj.category}
                      </span>
                      <h3 className="font-heading font-bold text-base text-[#104C31] group-hover:text-[#B8852C] transition-colors leading-snug">
                        {prj.title}
                      </h3>
                      <p className="text-xs text-[#596157] mt-1.5 line-clamp-2 font-body">
                        {prj.shortDesc}
                      </p>
                    </div>
                    <div className="pt-3 flex items-center text-xs font-bold text-[#176B45] group-hover:text-[#B8852C]">
                      <span>Discover More</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 – DONATION FEATURE (Exact 60px padding + Ken Burns loop)
          ========================================================================= */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={IMAGES.parcels}
            alt="Direct food donation and serving outreach"
            className="w-full h-full object-cover filter brightness-50 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-[#104C31]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
          <div className="space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#E7C071]">
              HELP US FEED OUR COMMUNITY
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight text-balance">
              Help Us Take Kindness Further.
            </h2>
            <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl mx-auto font-body">
              Every donation helps us prepare more nutritious meals, pack more food parcels and reach more people facing hunger and hardship in our community.
            </p>
          </div>

          {/* Interactive Amount Strip */}
          <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-[#D9A441]/40 max-w-2xl mx-auto space-y-5 shadow-2xl">
            <div className="grid grid-cols-4 gap-3">
              {[10, 25, 50, 100].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setSelectedDonationQuickAmt(amt)}
                  className={`py-3 px-2 rounded-2xl font-heading font-bold text-base transition-all cursor-pointer ${
                    selectedDonationQuickAmt === amt
                      ? 'bg-[#D9A441] text-[#104C31] shadow-lg scale-105 border-2 border-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  £{amt}
                </button>
              ))}
            </div>

            <div className="text-xs text-[#E7C071] font-semibold bg-[#104C31]/60 py-2.5 px-4 rounded-xl border border-[#D9A441]/30">
              £25 can provide a hot, nutritious meal and essential supplies for someone in need.
            </div>

            <button
              onClick={onOpenDonate}
              className="btn-sexy-gold w-full py-4 text-base flex items-center justify-center gap-2.5"
            >
              <Heart className="w-5 h-5 fill-current text-red-700" />
              <span>Make a Difference – Donate £{selectedDonationQuickAmt} Today</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#FFF8ED]/80 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
              Registered Community Interest Company
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              100% of donations fund our outreach work
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              Secure online giving
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 – VOLUNTEER FEATURE (Exact 60px padding + Float Image)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large photo of community volunteers with subtle loop float */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] animate-float-slow">
                <img
                  src={IMAGES.kitchen}
                  alt="Volunteers packing meals for direct street outreach"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E7C071] font-bold">
                    Direct Outreach Team
                  </span>
                  <p className="font-heading font-bold text-lg mt-1">
                    Taking Kindness Directly Into the Community
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Description & Sexy CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                  JOIN OUR OUTREACH
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                  Take Kindness Into the Community.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#242923]/90 leading-relaxed font-body">
                Our volunteers are the heart of Doris Kindness Kitchen. Whether you help prepare meals in our kitchen, serve food on the streets or support our community outreach, your time makes a real difference to people facing hunger and hardship.
              </p>

              <div className="space-y-2.5 pt-1 text-sm text-[#596157]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>Meal Preparation:</strong> Cook, portion and pack nutritious meals at our Walthamstow kitchen.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>Street Service:</strong> Serve hot meals and essential supplies with warmth and dignity.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>Community Outreach:</strong> Distribute food parcels and connect people with local support.</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenVolunteer}
                  className="btn-sexy-green px-8 py-4 text-xs sm:text-sm flex items-center gap-2 group"
                >
                  <Users className="w-4 h-4 text-[#D9A441]" />
                  <span>Become a Volunteer</span>
                </button>

                <button
                  onClick={() => onNavigate('volunteer')}
                  className="text-xs sm:text-sm font-bold text-[#176B45] hover:text-[#B8852C] transition-colors underline-offset-4 hover:underline cursor-pointer"
                >
                  View Volunteer Roles & FAQs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 – TESTIMONIALS (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FAF2E4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              VOICES OF KINDNESS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Moments of Kindness.
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Hear from the people and volunteers whose lives have been touched by our outreach work.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border border-[#D9A441]/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#D9A441]/50 mb-3" />
                  <p className="text-xs sm:text-sm text-[#242923] leading-relaxed italic font-body">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <p className="font-heading font-bold text-sm text-[#104C31]">{t.author}</p>
                  <p className="text-xs text-[#B8852C] font-semibold">{t.role}</p>
                  <p className="text-[11px] text-[#596157]">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 – FAQ SECTION (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              CLEAR ANSWERS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Everything you need to know about our outreach, volunteering and how to support Doris Kindness Kitchen.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8ED]/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-[#104C31]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D9A441] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#596157] leading-relaxed font-body border-t border-gray-100 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 p-6 bg-[#FAF2E4] rounded-2xl border border-[#D9A441]/35">
            <p className="text-sm text-[#242923] font-semibold">Let's Make a Difference Together.</p>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-2 text-xs font-heading font-bold text-[#176B45] hover:text-[#B8852C] transition-colors underline-offset-4 underline cursor-pointer"
            >
              Contact Us Directly →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 13 – LATEST NEWS & EVENTS (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FAF2E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                COMMUNITY UPDATES
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                Stories of Kindness, Community and Hope.
              </h2>
              <p className="text-sm sm:text-base text-[#596157] font-body">
                Updates from our kitchen, our street outreach and the community we serve — stories of kindness, resilience and hope.
              </p>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="btn-sexy-green px-6 py-3 text-xs flex items-center gap-2 shrink-0"
            >
              <span>View All News & Events</span>
              <ArrowRight className="w-4 h-4 text-[#D9A441]" />
            </button>
          </div>

          {/* Three Editorial Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-[#D9A441]/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-2"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-[#104C31] text-[#E7C071] text-[11px] font-bold px-3 py-1 rounded-full shadow border border-[#D9A441]/30">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#596157]">
                      <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>{article.date}</span>
                      <span>·</span>
                      <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#104C31] group-hover:text-[#B8852C] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#596157] leading-relaxed line-clamp-3 font-body">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#176B45] group-hover:text-[#B8852C] transition-colors">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reverse Marquee */}
      <Marquee
        reverse={true}
        text="DIRECT FOOD OUTREACH • SERVING WITH DIGNITY • TAKING KINDNESS FURTHER • TOGETHER WE MAKE A DIFFERENCE"
        theme="cream"
      />
    </div>
  );
}
