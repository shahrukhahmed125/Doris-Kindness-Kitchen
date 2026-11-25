import { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building,
  Apple,
  Coins,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../data/content';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (amount?: number) => void;
}

export default function DonatePage({ onNavigate, onOpenDonate }: DonatePageProps) {
  const donationTiers = [
    {
      amount: 10,
      title: 'Direct Outreach Supporter',
      impact: 'Helps prepare ingredients for our weekly street meals.',
      details: 'Your gift contributes to buying fresh, nutritious ingredients used to cook the meals served every Saturday at Walthamstow High Street.',
    },
    {
      amount: 25,
      title: 'Street Meal Champion',
      impact: 'Can provide a hot meal and essential supplies for someone in need.',
      details: '£25 helps cover the cost of a nutritious meal, packaging and essential items distributed with dignity during our direct outreach.',
      featured: true,
    },
    {
      amount: 50,
      title: 'Community Outreach Pillar',
      impact: 'Funds food parcels and essential care for vulnerable families.',
      details: 'Your donation supports our food parcel programme, warm clothing and hygiene supplies for people experiencing hardship.',
    },
    {
      amount: 100,
      title: 'Outreach Kitchen Benefactor',
      impact: 'Sponsors a full outreach session for dozens of neighbours.',
      details: 'A £100 gift helps cover ingredients, transport and supplies for an entire Saturday street meal outreach round.',
    },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Hero Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Direct food outreach in the community"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Donate</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Help Us Take Kindness Further.
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">
            Your generosity helps us prepare more nutritious meals, pack more food parcels and reach more people facing hunger and hardship in our community.
          </p>
        </div>
      </section>

      {/* WHY DONATIONS MATTER & TIERS (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            HELP US TAKE KINDNESS FURTHER
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Help Us Take Kindness Further.
          </h2>
          <p className="text-sm text-[#596157] font-body">
            Every pound goes towards feeding people in need — from ingredients and supplies to transport and outreach essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {donationTiers.map((tier) => (
            <div
              key={tier.amount}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.featured
                  ? 'bg-white border-2 border-[#D9A441] shadow-2xl scale-102 relative animate-float-gentle'
                  : 'bg-white border border-[#D9A441]/35 shadow-md hover:shadow-xl'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D9A441] text-[#104C31] text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-md">
                  Most Needed
                </span>
              )}

              <div className="space-y-4">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#596157]">
                  {tier.title}
                </span>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#176B45]">
                  £{tier.amount}
                </div>
                <p className="text-sm font-bold text-[#104C31] leading-snug">
                  {tier.impact}
                </p>
                <p className="text-xs text-[#596157] leading-relaxed font-body">
                  {tier.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => onOpenDonate(tier.amount)}
                  className={`w-full py-3.5 px-4 rounded-full text-xs font-heading font-bold flex items-center justify-center gap-2 cursor-pointer shadow ${
                    tier.featured
                      ? 'btn-sexy-gold'
                      : 'btn-sexy-green'
                  }`}
                >
                  <Heart className="w-4 h-4 fill-current text-red-700" />
                  <span>Donate £{tier.amount}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom amount trigger */}
        <div className="mt-12 p-8 bg-[#FAF2E4] rounded-3xl border border-[#D9A441]/40 max-w-2xl mx-auto text-center space-y-4 shadow-sm">
          <h3 className="font-heading font-extrabold text-xl text-[#104C31]">
            Taking Hope Beyond Our Kitchen
          </h3>
          <p className="text-xs text-[#596157] font-body">
            Prefer to give a different amount? You can donate any sum that suits you — every contribution, large or small, makes a real difference.
          </p>
          <button
            onClick={() => onOpenDonate()}
            className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4 text-[#104C31]" />
            <span>Donate Now</span>
          </button>
        </div>
      </section>

      {/* OTHER WAYS TO GIVE (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-t border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              KINDNESS IN ACTION
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Every Meal Makes a Difference.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Direct Outreach Support</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Funds and supplies power our Saturday street meal outreach at Walthamstow High Street, where volunteers serve hot meals directly to people in need.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C]">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Nutritious Food Supplies</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Donations of ingredients, tinned goods and dry foods help us prepare balanced meals and pack food parcels for vulnerable families.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Outreach Meal Support</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Support our wider fundraising efforts to expand kitchen capacity, reach more communities and provide essential care alongside meals.
              </p>
              <button
                onClick={() => onNavigate('fundraising')}
                className="text-xs font-bold text-[#176B45] hover:underline cursor-pointer"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION FAQS (60px) */}
      <section className="py-[60px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            KINDNESS IN ACTION
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#104C31]">
            Reaching People Where They Are.
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#596157] font-body bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md">
          <div className="pb-4 border-b border-gray-100">
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              Taking Hope Beyond Our Kitchen
            </h4>
            <p className="leading-relaxed">
              Doris Kindness Kitchen CIC supports homeless people, vulnerable individuals and families experiencing food poverty through free nutritious meals, food parcels, essential supplies and community outreach programmes.
            </p>
          </div>
          <div className="pb-4 border-b border-gray-100">
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              Every Meal Makes a Difference
            </h4>
            <p className="leading-relaxed">
              Our mission is to ensure that vulnerable people feel valued, supported and cared for, regardless of their circumstances — reducing hunger, promoting dignity and improving wellbeing.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              Moments of Kindness
            </h4>
            <p className="leading-relaxed">
              Every donation helps us feed more neighbours. Your support funds ingredients, supplies, transport and outreach essentials — all used to bring warmth and hope to our community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
