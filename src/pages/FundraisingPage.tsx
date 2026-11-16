import { useState, FormEvent } from 'react';
import {
  Building2,
  Sparkles,
  Trophy,
  Users,
  CheckCircle2,
  Send,
  Gift,
  HandCoins,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../data/content';

interface FundraisingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function FundraisingPage({ onNavigate, onOpenDonate }: FundraisingPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Direct Street Meal Sponsorship');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Banner with Ken Burns Loop */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Direct food outreach sponsorship"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#104C31] via-[#104C31]/90 to-transparent z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Fundraising & Sponsorship</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Taking Hope Beyond Our Kitchen.
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      {/* CORPORATE SPONSORSHIP TIERS - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            COMMERCIAL CSR & PHILANTHROPY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Help Us Take Kindness Further.
          </h2>
          <p className="text-sm text-[#596157] font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white rounded-3xl p-8 border border-[#D9A441]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#176B45]">
                Tier 1 · Direct Outreach
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Outreach Sponsor</h3>
              <div className="text-3xl font-heading font-extrabold text-[#176B45]">£500 / month</div>
              <p className="text-xs text-[#596157] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Sed do eiusmod tempor incididunt</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href="#enquiry"
                className="w-full btn-sexy-green py-3 text-xs flex items-center justify-center cursor-pointer shadow"
              >
                Enquire for Tier 1
              </a>
            </div>
          </div>

          {/* Featured Tier with Loop Floating Animation and Golden Glow */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#D9A441] shadow-2xl flex flex-col justify-between relative animate-float-slow animate-gold-glow">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D9A441] to-[#E7C071] text-[#242923] text-[11px] font-heading font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
              ★ Most Needed Outreach
            </span>
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#B8852C]">
                Tier 2 · Weekly Meals
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Street Outreach Pillar</h3>
              <div className="text-3xl font-heading font-extrabold text-[#B8852C]">£1,500 / month</div>
              <p className="text-xs text-[#596157] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              </p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Sed do eiusmod tempor incididunt</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href="#enquiry"
                className="w-full btn-sexy-gold py-3 text-xs flex items-center justify-center cursor-pointer shadow-lg"
              >
                Enquire for Tier 2
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#D9A441]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#176B45]">
                Tier 3 · Custom Support
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Custom Outreach Sponsor</h3>
              <div className="text-3xl font-heading font-extrabold text-[#176B45]">Flexible Sponsorship</div>
              <p className="text-xs text-[#596157] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
              </p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Sed do eiusmod tempor incididunt</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href="#enquiry"
                className="w-full btn-sexy-green py-3 text-xs flex items-center justify-center cursor-pointer shadow"
              >
                Enquire for Tier 3
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY FUNDRAISING IDEAS - py-[60px] */}
      <section className="py-[60px] bg-[#FAF2E4] border-y border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              COMMUNITY ACTIONS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Every Meal Makes a Difference.
            </h2>
            <p className="text-sm text-[#596157] font-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Gift className="w-8 h-8 text-[#D9A441]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Street Meal Drives</h4>
              <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet consectetur adipiscing elit integer nec odio.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Trophy className="w-8 h-8 text-[#176B45]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Sponsored Walks</h4>
              <p className="text-xs text-[#596157]">Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <HandCoins className="w-8 h-8 text-[#D9A441]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Workplace Giving</h4>
              <p className="text-xs text-[#596157]">Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Building2 className="w-8 h-8 text-[#176B45]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Community Events</h4>
              <p className="text-xs text-[#596157]">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM - py-[60px] */}
      <section id="enquiry" className="py-[60px] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D9A441]/40 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              START A CONVERSATION
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#104C31]">
              Let's Make a Difference Together.
            </h2>
            <p className="text-xs text-[#596157]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Logistics UK"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="corporate@company.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">Area of Interest *</label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                  >
                    <option value="Direct Street Meal Sponsorship">Direct Street Meal Sponsorship</option>
                    <option value="Employee Volunteering Days">Employee Volunteering Days</option>
                    <option value="Other Sponsorship or Support">Other Sponsorship or Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#596157] mb-1">Additional Details</label>
                <textarea
                  rows={3}
                  placeholder="Lorem ipsum dolor sit amet..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-sexy-gold py-3.5 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Send className="w-4 h-4 text-[#104C31]" />
                <span>Submit Sponsorship Enquiry</span>
              </button>
            </form>
          ) : (
            <div className="p-6 bg-[#FAF2E4] rounded-2xl border border-[#D9A441]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#176B45] mx-auto" />
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Enquiry Received!</h3>
              <p className="text-xs text-[#596157] max-w-md mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#176B45] hover:underline cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
