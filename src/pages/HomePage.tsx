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
  PARTNERS,
  IMPACT_STATS,
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
            alt="Community volunteers serving freshly prepared hot meals"
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
            {/* Left Column (7 cols): Editorial Typography */}
            <div className="lg:col-span-8 text-white space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 backdrop-blur-md text-xs font-bold text-[#E7C071] uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441] animate-spin duration-1000" />
                <span>Feeding Hope · Sharing Love · Changing Lives</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-tight leading-[1.08] text-balance">
                Together, We Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9A441] via-[#E7C071] to-[#D9A441]">Make a Difference.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#FFF8ED]/90 max-w-2xl leading-relaxed font-body font-normal">
                Every meal shared is a message of hope. We bring communities together to support individuals and families facing food poverty, offering nourishment, dignity and kindness when it matters most.
              </p>

              {/* Sexy Action Buttons */}
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
                  100% Non-Profit Community Interest Co.
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  Nutritious, Dignified & Zero-Stigma Meals
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  UK Registered Food Hygiene 5-Star
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
                      This Week's Goal
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#104C31] bg-[#D9A441] px-2.5 py-0.5 rounded-full shadow-sm">
                    In Progress
                  </span>
                </div>

                <div className="py-4 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-4xl text-[#104C31] tracking-tight">650+</span>
                    <span className="text-xs text-[#596157] font-semibold">Warm Meals to Serve</span>
                  </div>
                  <div className="w-full bg-[#FAF2E4] h-3 rounded-full overflow-hidden border border-[#D9A441]/40">
                    <div className="bg-gradient-to-r from-[#D9A441] to-[#E7C071] h-full w-[82%] rounded-full shadow" />
                  </div>
                  <p className="text-xs text-[#596157] leading-relaxed">
                    With your compassionate support, we are preparing fresh vegetable stews, bakery bread, and pantry boxes for neighbors across the borough.
                  </p>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="btn-sexy-green w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#D9A441] fill-current" />
                  <span>Sponsor a Hot Meal (£2.50)</span>
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
                  alt="Doris Kindness Kitchen team preparing meals"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-heading font-bold text-base">
                    Fresh ingredients, prepared with dignity & love daily
                  </p>
                  <p className="text-xs text-white/80">Our Community Prep Kitchen</p>
                </div>
              </div>

              {/* Overlapping Secondary Photo with Counter-Float Loop */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF8ED] z-20 aspect-[4/3] animate-float-reverse">
                <img
                  src={IMAGES.outreach}
                  alt="Community volunteer handing warm food to resident"
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
                  WHO WE ARE
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                  More Than a Meal. A Community That Cares.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#242923]/90 leading-relaxed font-body">
                At Doris Kindness Kitchen CIC, we believe that access to nutritious, wholesome food is not a privilege—it is a fundamental human right. In times of rising living costs, redundancy, illness, or homelessness, we stand ready as a community safety net.
              </p>

              <p className="text-sm sm:text-base text-[#596157] leading-relaxed font-body">
                Every week, our warm-hearted volunteers rescue surplus fresh produce from ethical growers and supermarkets, transforming it into restaurant-quality hot dishes and balanced food parcels. When someone visits us, they aren't handed a handout; they are welcomed as an honoured guest at our family table.
              </p>

              {/* Key Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-[#D9A441]/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#176B45]/15 flex items-center justify-center text-[#176B45] mb-2 font-bold font-heading">
                    01
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#104C31]">Dignity First</h4>
                  <p className="text-xs text-[#596157] mt-1">Zero judgement, zero shame. We serve with warmth and genuine care.</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#D9A441]/30 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-lg bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C] mb-2 font-bold font-heading">
                    02
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#104C31]">Holistic Support</h4>
                  <p className="text-xs text-[#596157] mt-1">Meals, emergency hampers, essential toiletries, and warm fellowship.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="btn-sexy-green px-7 py-3.5 text-xs sm:text-sm flex items-center gap-2.5 group"
                >
                  <span>Discover Our Story</span>
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
        text="COMPASSION IN ACTION • KINDNESS IN EVERY MEAL • HOPE FOR EVERYONE"
        theme="green"
      />

      {/* =========================================================================
          SECTION 04 – OUR SERVICES (Exact 60px padding + Image Zoom & Floating Cards)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              HOW WE HELP
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
              Making a Difference, One Act of Kindness at a Time.
            </h2>
            <p className="text-sm sm:text-base text-[#596157] font-body">
              Our holistic community programmes provide practical sustenance, relief from hardship, and a reliable network of compassion.
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
              <span>Explore all service schedules, dietary options and referral details</span>
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
            alt="Community hall background"
            className="w-full h-full object-cover filter blur-sm animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#E7C071]">
              OUR GUIDING NORTH STAR
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight text-balance">
              Our Mission Is Simple. No One Should Have to Face Hunger Alone.
            </h2>
            <p className="text-sm sm:text-base text-[#FFF8ED]/85 font-body">
              Every day we work to remove food insecurity, foster community resilience, and ensure every neighbor feels heard and valued.
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
                  Core Purpose
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Our Mission
                </h3>
                <p className="text-base sm:text-lg text-[#FFF8ED]/95 leading-relaxed font-body">
                  To provide compassionate food assistance and practical support to people facing hardship, ensuring everyone feels valued, respected and cared for.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-[#FFF8ED]/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Immediate hunger relief with zero-stigma dining</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Zero-waste food rescue partnerships with local growers</span>
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
                  Long-term Vision
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Our Vision
                </h3>
                <p className="text-base sm:text-lg text-[#FFF8ED]/95 leading-relaxed font-body">
                  A stronger, kinder community where everyone has access to nutritious food, dignity, opportunity and the support they need to thrive.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-xs text-[#FFF8ED]/80 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>Empowered communities breaking the cycle of poverty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                  <span>A society where mutual aid and friendship are standard</span>
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
              Every Act of Kindness Creates a Lasting Impact.
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Here is how community compassion translates into real nourishment and human connection every single week.
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
                TARGETED INITIATIVES
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                Bringing Hope to Our Communities.
              </h2>
              <p className="text-sm sm:text-base text-[#596157] font-body">
                Tailored relief programmes addressing child holiday hunger, cold-weather fuel poverty, and elderly isolation.
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
                  <span>Discover More About This Project</span>
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
            alt="Food hampers and donations"
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
              Your Kindness Can Put Food on Someone's Table.
            </h2>
            <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl mx-auto font-body">
              Every contribution helps us provide essential food and support to people who need it most.
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
              {selectedDonationQuickAmt === 10 && '£10 provides 4 wholesome hot meals with tea for guests.'}
              {selectedDonationQuickAmt === 25 && '£25 provides a full 5-day fresh family grocery hamper.'}
              {selectedDonationQuickAmt === 50 && '£50 funds hot stew, fresh fruit, and toiletries for 20 neighbors.'}
              {selectedDonationQuickAmt === 100 && '£100 sponsors a complete kitchen meal service for 80 individuals.'}
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
              Secure 256-bit encryption
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              UK Gift Aid eligible (+25% extra free)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
              100% of public donations directly fund food
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
                  alt="Volunteers chopping vegetables and smiling together"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#E7C071] font-bold">
                    The Heartbeat of Doris Kitchen
                  </span>
                  <p className="font-heading font-bold text-lg mt-1">
                    Over 140 volunteers bring warmth and nourishment every week
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Description & Sexy CTAs */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                  JOIN THE MISSION
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#104C31] leading-tight text-balance">
                  Be the Reason Someone Smiles Today.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#242923]/90 leading-relaxed font-body">
                Whether you can spare three hours on a Saturday morning, help chop vegetables on a Thursday afternoon, or drive a weekly food delivery round, your kindness creates an immediate, life-changing impact.
              </p>

              <div className="space-y-2.5 pt-1 text-sm text-[#596157]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>No chef skills needed:</strong> We have roles for vegetable preppers, parcel packers, hosts, and friendly befrienders.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>Flexible shifts:</strong> Give as little or as much time as your personal schedule allows.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                  <span><strong>Meaningful camaraderie:</strong> Forge deep friendships with kind neighbors who share your values.</span>
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
              Kindness That Brings Us Together.
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Words of warmth and appreciation from community members, volunteers, and family parcel recipients.
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
          SECTION 11 – OUR PARTNERS (Exact 60px padding)
          ========================================================================= */}
      <section className="py-[60px] bg-[#FFF8ED] border-b border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              ALLIANCES FOR GOOD
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#104C31]">
              Stronger Together.
            </h2>
            <p className="text-xs sm:text-sm text-[#596157]">
              Working hand-in-hand with growers, food rescue networks, and civic partners.
            </p>
          </div>

          {/* Partner logo strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p.id}
                onClick={() => onNavigate('partners')}
                className="p-4 bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm flex flex-col items-center justify-center text-center hover:border-[#D9A441] hover:shadow-md transition-all cursor-pointer group transform hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#176B45]/10 flex items-center justify-center text-[#176B45] font-extrabold text-xs mb-2 group-hover:bg-[#176B45] group-hover:text-white transition-colors">
                  {p.logoText.slice(0, 2).toUpperCase()}
                </div>
                <span className="font-heading font-bold text-xs text-[#104C31] leading-tight">
                  {p.name}
                </span>
                <span className="text-[10px] text-[#596157] mt-1 font-medium">{p.type}</span>
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
              Everything you need to know about accessing support, volunteering, and supporting our work.
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
            <p className="text-sm text-[#242923] font-semibold">Have a question not answered here?</p>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-2 text-xs font-heading font-bold text-[#176B45] hover:text-[#B8852C] transition-colors underline-offset-4 underline cursor-pointer"
            >
              Get in touch with our friendly community coordinators →
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
                Read the latest news from our dining hall, volunteer profiles, and insights into local food security.
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
        text="FEEDING HOPE • SHARING LOVE • CHANGING LIVES • TOGETHER WE MAKE A DIFFERENCE"
        theme="cream"
      />
    </div>
  );
}
