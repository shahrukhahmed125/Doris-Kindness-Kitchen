import { useState } from 'react';
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Building,
  Truck,
  Apple,
  Coins,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES, FAQS } from '../data/content';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: (amount?: number) => void;
}

export default function DonatePage({ onNavigate, onOpenDonate }: DonatePageProps) {
  const [selectedAmt, setSelectedAmt] = useState<number>(25);

  const donationTiers = [
    {
      amount: 10,
      title: 'Friend of the Kitchen',
      impact: 'Provides 4 hot nutritious meals and warm drinks for neighbors in need.',
      details: 'Fresh stew, wholemeal bread, fruit and warm tea served with dignity.',
    },
    {
      amount: 25,
      title: 'Family Food Champion',
      impact: 'Provides a complete 5-day fresh grocery hamper for a family facing crisis.',
      details: 'Includes fresh organic vegetables, whole grains, milk, eggs, and pantry staples.',
      featured: true,
    },
    {
      amount: 50,
      title: 'Community Warmth Pillar',
      impact: 'Supplies hot meals, fresh toiletries, and winter thermal packs for 20 rough sleepers.',
      details: 'Ensures our mobile outreach team can deliver care directly on street walks.',
    },
    {
      amount: 100,
      title: 'Kitchen Session Benefactor',
      impact: 'Sponsors an entire community dining session serving up to 80 guests.',
      details: 'Covers fresh ingredients, kitchen fuel, and volunteer safety supplies.',
    },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Hero Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.parcels}
            alt="Food parcels packed with love"
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
            Support Doris Kindness Kitchen
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* WHY DONATIONS MATTER & TIERS (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            TRANSPARENT GIVING
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Select Your Giving Level
          </h2>
          <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                <p className="text-sm font-bold text-[#104C31] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="text-xs text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
            Prefer to choose your own amount or set up a monthly gift?
          </h3>
          <p className="text-xs text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button
            onClick={() => onOpenDonate()}
            className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4 text-[#104C31]" />
            <span>Open Donation Calculator & Monthly Giver Form</span>
          </button>
        </div>
      </section>

      {/* OTHER WAYS TO GIVE (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-t border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              BEYOND ONLINE CARDS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Other Meaningful Ways to Give
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Direct Bank Transfer (BACS)</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="text-xs font-mono bg-[#FFF8ED] p-3 rounded-xl border border-[#D9A441]/20 space-y-1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C]">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">In-Kind Food Donations</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-xs text-[#176B45] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Corporate Matching & Payroll</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <button
                onClick={() => onNavigate('fundraising')}
                className="text-xs font-bold text-[#176B45] hover:underline cursor-pointer"
              >
                Learn about corporate partnerships →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DONATION FAQS (60px) */}
      <section className="py-[60px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            DONOR INFORMATION
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#104C31]">
            Donation FAQs & Gift Aid
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#596157] font-body bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md">
          <div className="pb-4 border-b border-gray-100">
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              How does UK Gift Aid work?
            </h4>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="pb-4 border-b border-gray-100">
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              Can I donate anonymously?
            </h4>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-[#104C31] text-base mb-1">
              Can I designate my gift to a specific project?
            </h4>
            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
