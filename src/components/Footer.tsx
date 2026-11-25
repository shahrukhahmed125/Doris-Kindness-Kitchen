import { useState, FormEvent } from 'react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/content';
import { Heart, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function Footer({ onNavigate, onOpenDonate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubscribed(true);
    setEmail('');
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#104C31] text-[#FFF8ED] pt-16 pb-12 border-t-4 border-[#D9A441] relative overflow-hidden">
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#176B45]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter & Action Banner */}
        <div className="bg-[#176B45] rounded-2xl p-6 sm:p-10 border border-[#D9A441]/30 shadow-xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E7C071] font-sans">
              DIRECT OUTREACH
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
              Be Part of Something Good.
            </h3>
            <p className="text-sm text-[#FFF8ED]/80 mt-2 font-body">
              Subscribe to stay updated on our outreach work, events and stories of kindness from our community.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[400px]">
            {isSubscribed ? (
              <div className="flex items-center gap-2 bg-[#104C31] text-[#E7C071] px-5 py-3.5 rounded-xl border border-[#D9A441]/50">
                <CheckCircle2 className="w-5 h-5 text-[#D9A441] shrink-0" />
                <span className="text-sm font-medium">
                  Thank you! You're subscribed to our updates.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-4 py-3 bg-[#104C31]/90 text-white placeholder-[#FFF8ED]/60 rounded-xl border border-[#D9A441]/30 focus:outline-none focus:border-[#D9A441] text-sm flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#D9A441] hover:bg-[#B8852C] text-[#242923] hover:text-white font-heading font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-2xl shadow-md border border-[#D9A441]/40 mb-2">
              <img
                src={LOGO_URL}
                alt="Doris Kindness Kitchen CIC"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#FFF8ED]/80 leading-relaxed font-body pr-4">
              Doris Kindness Kitchen CIC is a community interest company dedicated to supporting homeless people, vulnerable individuals and families experiencing food poverty and financial hardship through free meals, food parcels, essential supplies and community outreach.
            </p>
            <div className="p-3.5 rounded-xl bg-[#176B45]/60 border border-[#D9A441]/25">
              <p className="text-xs italic text-[#E7C071] font-medium">
                “Feeding Hope, Sharing Love and Changing Lives.”
              </p>
              <p className="text-[11px] text-[#FFF8ED]/60 mt-1">
                A registered community interest company serving Walthamstow and beyond.
              </p>
            </div>
            <div>
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center gap-2 bg-[#D9A441] hover:bg-[#B8852C] text-[#242923] hover:text-white px-5 py-2.5 rounded-xl font-heading font-semibold text-sm transition-all shadow cursor-pointer mt-2"
              >
                <Heart className="w-4 h-4 fill-current text-red-700" />
                <span>Support Our Outreach</span>
              </button>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#D9A441] mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8ED]/80 font-body">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('mission')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Our Mission & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Community Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  News & Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Moments of Kindness
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Our Services & Get Involved */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#D9A441] mb-4 tracking-wide">
              Kindness in Action
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FFF8ED]/80 font-body mb-6">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Direct Street Meals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Direct Street Meal Outreach
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Warmth & Essential Care
                </button>
              </li>
            </ul>

            <h4 className="font-heading font-bold text-base text-[#D9A441] mb-2 tracking-wide">
              Get Involved
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF8ED]/80 font-body">
              <li>
                <button
                  onClick={() => handleNav('volunteer')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Become a Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('fundraising')}
                  className="hover:text-[#D9A441] transition-colors cursor-pointer text-left"
                >
                  Fundraising & Sponsorship
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div>
            <h4 className="font-heading font-bold text-base text-[#D9A441] mb-4 tracking-wide">
              Contact & Location
            </h4>
            <div className="space-y-3 text-sm text-[#FFF8ED]/80 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-1" />
                <span>
                  Walthamstow High Street,<br />
                  London, UK
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-1" />
                <span>
                  Outreach Headquarters:<br />
                  244 Billet Road, Walthamstow,<br />
                  London, UK, E17 5HF
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href="tel:+447466810020" className="hover:text-[#D9A441] transition-colors">+44 7466 810020</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a
                  href="mailto:doriskindnesskitchen2026@gmail.com"
                  className="hover:text-[#D9A441] transition-colors"
                >
                  doriskindnesskitchen2026@gmail.com
                </a>
              </div>

              <div className="pt-3 border-t border-white/10 text-xs text-[#FFF8ED]/70">
                <p className="font-semibold text-white mb-1">Direct Outreach Schedule:</p>
                <p>Every Saturday: 12:00 – 14:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Decorative Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D9A441] to-transparent my-8 opacity-70" />

        {/* Bottom copyright & legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8ED]/70 font-body">
          <p>
            © {new Date().getFullYear()} Doris Kindness Kitchen CIC. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#D9A441] transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Privacy Policy & GDPR
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#D9A441] transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Safeguarding & Outreach
            </button>
            <span className="hidden md:inline text-[#E7C071]">
              Feeding Hope · Sharing Love · Changing Lives
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
