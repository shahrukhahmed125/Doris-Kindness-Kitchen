import { useState, FormEvent } from 'react';
import {
  Building2,
  Sparkles,
  Trophy,
  Users,
  CheckCircle2,
  Send,
  Heart,
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
  const [interest, setInterest] = useState('Corporate Kitchen Sponsorship');
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
            src={IMAGES.dining}
            alt="Community fundraising table"
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
            Fundraising & Sponsorship
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* CORPORATE SPONSORSHIP TIERS - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            COMMERCIAL CSR & PHILANTHROPY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Corporate Sponsorship Packages
          </h2>
          <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white rounded-3xl p-8 border border-[#D9A441]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#176B45]">
                Tier 1 · Monthly
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Session Sponsor</h3>
              <div className="text-3xl font-heading font-extrabold text-[#176B45]">£500 / month</div>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Company logo featured on our weekly dining menus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Social media impact spotlight</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Team volunteering slot (up to 4 colleagues)</span>
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
              ★ Most Popular CSR Choice
            </span>
            <div className="space-y-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#B8852C]">
                Tier 2 · Community Impact
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Kitchen Pillar</h3>
              <div className="text-3xl font-heading font-extrabold text-[#B8852C]">£1,500 / month</div>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Prominent logo on our website partners page & banners</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Quarterly verified ESG impact audit for annual reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8852C]" />
                  <span>Exclusive company volunteering team challenge day</span>
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
                Tier 3 · Strategic Ally
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">Charity of the Year</h3>
              <div className="text-3xl font-heading font-extrabold text-[#176B45]">Bespoke Partnership</div>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <ul className="space-y-2 text-xs text-[#242923] pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Brand presence on our mobile delivery van</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Keynote speaking at your all-hands / AGM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B45]" />
                  <span>Dedicated partnership liaison</span>
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
              Fundraise with Friends, Schools & Clubs
            </h2>
            <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Gift className="w-8 h-8 text-[#D9A441]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Bake & Bread Sales</h4>
              <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Trophy className="w-8 h-8 text-[#176B45]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Sponsored Walks & 10Ks</h4>
              <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <HandCoins className="w-8 h-8 text-[#D9A441]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Workplace Food Drives</h4>
              <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-2 transform hover:-translate-y-1">
              <Building2 className="w-8 h-8 text-[#176B45]" />
              <h4 className="font-heading font-bold text-base text-[#104C31]">Pub Quiz / Music Nights</h4>
              <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
              Sponsorship & Fundraising Enquiry Form
            </h2>
            <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
                    <option value="Corporate Kitchen Sponsorship">Corporate Kitchen Sponsorship</option>
                    <option value="Charity of the Year Partnership">Charity of the Year Partnership</option>
                    <option value="Employee Volunteering Days">Employee Volunteering Days</option>
                    <option value="Community / School Fundraising Event">Community / School Fundraising Event</option>
                    <option value="Commercial Food Surplus Donation">Commercial Food Surplus Donation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#596157] mb-1">Additional Details / Goals</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your team size, budget, or ideas..."
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
                <span>Submit Partnership Enquiry</span>
              </button>
            </form>
          ) : (
            <div className="p-6 bg-[#FAF2E4] rounded-2xl border border-[#D9A441]/40 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#176B45] mx-auto" />
              <h3 className="font-heading font-bold text-xl text-[#104C31]">Enquiry Received!</h3>
              <p className="text-xs text-[#596157] max-w-md mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
