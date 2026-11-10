import { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Heart,
  Sparkles,
  HandHeart,
  Users,
  Calendar,
  Phone,
  Clock,
  MapPin,
  Mail,
  ShieldCheck,
  ArrowRight,
  Gift,
  Building2,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react';
import { PageId } from '../types';
import { LOGO_URL } from '../data/content';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenDonate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setInvolvedDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isAboutActive = currentPage === 'about' || currentPage === 'mission';
  const isInvolvedActive =
    currentPage === 'donate' ||
    currentPage === 'volunteer' ||
    currentPage === 'fundraising' ||
    currentPage === 'partners';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* TOP UTILITY ANNOUNCEMENT BAR (Discreetly hides when scrolling down to save space) */}
        <div
          className={`bg-[#0B3522] border-b border-[#D9A441]/25 text-white transition-all duration-300 overflow-hidden ${
            isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-1.5 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-body text-[#FFF8ED]/90 whitespace-nowrap">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[#E7C071] font-semibold">
                <Sparkles className="w-3 h-3 text-[#D9A441] animate-spin" style={{ animationDuration: '6s' }} />
                <span>Feeding Hope, Sharing Love and Changing Lives</span>
              </span>
              <span className="hidden md:inline text-white/40">|</span>
              <span className="hidden md:inline text-white/80">UK Community Interest Company (CIC)</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <a
                href="tel:08004567890"
                className="inline-flex items-center gap-1 text-[#FFF8ED] hover:text-[#D9A441] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#D9A441]" />
                <span className="hidden sm:inline">Emergency Line:</span>
                <span className="font-semibold">0800 456 7890</span>
              </a>
              <span className="hidden lg:inline text-white/40">|</span>
              <span className="hidden lg:inline-flex items-center gap-1 text-[#FFF8ED]/80">
                <Clock className="w-3 h-3 text-[#D9A441]" />
                <span>Hot Lunches: Tue & Thu 12:00</span>
              </span>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION BAR */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-[#104C31]/98 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] py-2.5 border-b border-[#D9A441]/40'
              : 'bg-[#104C31]/95 backdrop-blur-md py-3.5 border-b border-[#D9A441]/30'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 flex-nowrap">
              {/* BRAND LOGO */}
              <button
                onClick={() => handleLinkClick('home')}
                className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer shrink-0 focus:outline-none whitespace-nowrap"
                aria-label="Doris Kindness Kitchen CIC Homepage"
              >
                <div className="relative bg-white p-1 sm:p-1.5 rounded-xl shadow-md border-2 border-[#D9A441]/60 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D9A441]">
                  <img
                    src={LOGO_URL}
                    alt="Doris Kindness Kitchen CIC Logo"
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#D9A441] rounded-full border-2 border-[#104C31] animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-sm sm:text-base text-white leading-tight tracking-tight group-hover:text-[#E7C071] transition-colors whitespace-nowrap">
                    Doris Kindness Kitchen
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#D9A441] whitespace-nowrap">
                    Community Interest Company
                  </span>
                </div>
              </button>

              {/* DESKTOP NAVIGATION LINKS (Visible on xl: 1280px+ where horizontal space is guaranteed) */}
              <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 text-xs 2xl:text-sm font-heading font-semibold text-white/90 whitespace-nowrap shrink-0">
                {/* Home */}
                <button
                  onClick={() => handleLinkClick('home')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'home'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Home
                  {currentPage === 'home' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>

                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutDropdownOpen(true)}
                  onMouseLeave={() => setAboutDropdownOpen(false)}
                >
                  <button
                    onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1 relative whitespace-nowrap ${
                      isAboutActive
                        ? 'text-[#D9A441] font-bold bg-white/10'
                        : 'hover:text-[#D9A441] hover:bg-white/5'
                    }`}
                    aria-expanded={aboutDropdownOpen}
                  >
                    <span>About Us</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#D9A441] transition-transform duration-200 ${
                        aboutDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {isAboutActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                    )}
                  </button>

                  {aboutDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#104C31] rounded-2xl shadow-2xl border border-[#D9A441]/40 py-2.5 z-50 text-white backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <button
                        onClick={() => handleLinkClick('about')}
                        className={`w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'about' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <BookOpen className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-white block">Our Story & History</span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body block">Matriarch Doris & Heritage</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleLinkClick('mission')}
                        className={`w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'mission' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <Sparkles className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-white block">Mission & Vision</span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body">Strategy, Values & 2030 Goals</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>

                {/* Our Services */}
                <button
                  onClick={() => handleLinkClick('services')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'services'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Our Services
                  {currentPage === 'services' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>

                {/* Projects */}
                <button
                  onClick={() => handleLinkClick('projects')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'projects'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Projects
                  {currentPage === 'projects' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>

                {/* Get Involved Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setInvolvedDropdownOpen(true)}
                  onMouseLeave={() => setInvolvedDropdownOpen(false)}
                >
                  <button
                    onClick={() => setInvolvedDropdownOpen(!involvedDropdownOpen)}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1 relative whitespace-nowrap ${
                      isInvolvedActive
                        ? 'text-[#D9A441] font-bold bg-white/10'
                        : 'hover:text-[#D9A441] hover:bg-white/5'
                    }`}
                    aria-expanded={involvedDropdownOpen}
                  >
                    <span>Get Involved</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#D9A441] transition-transform duration-200 ${
                        involvedDropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {isInvolvedActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                    )}
                  </button>

                  {involvedDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#104C31] rounded-2xl shadow-2xl border border-[#D9A441]/40 py-2.5 z-50 text-white backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <button
                        onClick={() => handleLinkClick('donate')}
                        className={`w-full text-left px-4 py-2 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'donate' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <Heart className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0 fill-current" />
                        <div>
                          <span className="text-xs font-bold text-white flex items-center gap-2">
                            <span>Donate to Kitchen</span>
                            <span className="text-[9px] bg-[#D9A441] text-[#104C31] font-extrabold px-1.5 py-0.2 rounded">
                              Vital
                            </span>
                          </span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body block">Support daily meals & parcels</span>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('volunteer')}
                        className={`w-full text-left px-4 py-2 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'volunteer' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <HandHeart className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-white block">Become a Volunteer</span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body block">Kitchen, driver & packing slots</span>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('fundraising')}
                        className={`w-full text-left px-4 py-2 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'fundraising' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <Building2 className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-white block">Fundraising & CSR</span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body block">Corporate tiers & school drives</span>
                        </div>
                      </button>

                      <button
                        onClick={() => handleLinkClick('partners')}
                        className={`w-full text-left px-4 py-2 hover:bg-white/10 flex items-start gap-3 transition-colors cursor-pointer ${
                          currentPage === 'partners' ? 'text-[#D9A441] font-bold bg-white/5' : ''
                        }`}
                      >
                        <Users className="w-4 h-4 text-[#D9A441] mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-white block">Our Partners</span>
                          <span className="text-[11px] text-[#FFF8ED]/70 font-body block">Bakeries, growers & civic trusts</span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>

                {/* Stories & News */}
                <button
                  onClick={() => handleLinkClick('news')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'news'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Stories & News
                  {currentPage === 'news' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>

                {/* Gallery */}
                <button
                  onClick={() => handleLinkClick('gallery')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'gallery'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Gallery
                  {currentPage === 'gallery' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>

                {/* Contact */}
                <button
                  onClick={() => handleLinkClick('contact')}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer relative whitespace-nowrap ${
                    currentPage === 'contact'
                      ? 'text-[#D9A441] font-bold bg-white/10'
                      : 'hover:text-[#D9A441] hover:bg-white/5'
                  }`}
                >
                  Contact
                  {currentPage === 'contact' && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D9A441] rounded-full shadow-[0_0_8px_#D9A441]" />
                  )}
                </button>
              </nav>

              {/* RIGHT SIDE ACTIONS: DONATE BUTTON + RESPONSIVE MENU TRIGGER */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
                {/* SEXY DONATE BUTTON */}
                <button
                  onClick={onOpenDonate}
                  className="btn-sexy-gold px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm tracking-wide flex items-center gap-2 group whitespace-nowrap shadow-lg cursor-pointer"
                  aria-label="Make a Donation"
                >
                  <Heart className="w-4 h-4 fill-current text-red-600 transition-transform duration-300 group-hover:scale-125 group-hover:text-red-700 animate-pulse" />
                  <span className="font-heading font-extrabold">Donate Now</span>
                </button>

                {/* TABLET & MOBILE MENU BUTTON (Visible below xl: 1280px) */}
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="xl:hidden flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-[#FFF8ED] border border-[#D9A441]/50 text-xs font-heading font-bold shadow-md transition-all cursor-pointer hover:border-[#D9A441]"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="w-5 h-5 text-[#D9A441]" />
                  <span className="hidden sm:inline text-white">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* LUXURY FULL-SCREEN / SPACIOUS SLIDE-OUT MOBILE & TABLET DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-black/60 backdrop-blur-md flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md sm:max-w-lg bg-[#0F472E] text-white flex flex-col justify-between h-full shadow-2xl border-l border-[#D9A441]/40 overflow-y-auto animate-in slide-in-from-right duration-300">
            {/* Top Drawer Header */}
            <div className="p-6 border-b border-[#D9A441]/30 bg-[#0B3522] sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-xl border border-[#D9A441]/60 shadow-md">
                    <img
                      src={LOGO_URL}
                      alt="Doris Kindness Kitchen"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="block font-heading font-extrabold text-base text-white leading-tight">
                      Doris Kindness Kitchen
                    </span>
                    <span className="block text-[11px] text-[#D9A441] font-semibold">
                      Feeding Hope · Sharing Love
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/20"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-[#D9A441]" />
                </button>
              </div>
            </div>

            {/* Drawer Navigation Links */}
            <div className="p-6 space-y-6 flex-1">
              {/* PRIMARY PAGES */}
              <div className="space-y-1">
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#D9A441] px-3 block mb-2">
                  Navigation
                </span>
                <button
                  onClick={() => handleLinkClick('home')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'home'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>Home</span>
                  {currentPage === 'home' && <span className="w-2 h-2 rounded-full bg-[#104C31]" />}
                </button>

                <button
                  onClick={() => handleLinkClick('about')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'about'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>Our Story & History</span>
                  {currentPage === 'about' && <span className="w-2 h-2 rounded-full bg-[#104C31]" />}
                </button>

                <button
                  onClick={() => handleLinkClick('mission')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'mission'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>Mission & Vision</span>
                  {currentPage === 'mission' && <span className="w-2 h-2 rounded-full bg-[#104C31]" />}
                </button>

                <button
                  onClick={() => handleLinkClick('services')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'services'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>Our Services</span>
                  {currentPage === 'services' && <span className="w-2 h-2 rounded-full bg-[#104C31]" />}
                </button>

                <button
                  onClick={() => handleLinkClick('projects')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'projects'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span>Community Projects</span>
                  {currentPage === 'projects' && <span className="w-2 h-2 rounded-full bg-[#104C31]" />}
                </button>
              </div>

              {/* GET INVOLVED GROUP */}
              <div className="space-y-1 pt-2 border-t border-[#D9A441]/20">
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#D9A441] px-3 block mb-2">
                  Get Involved & Support
                </span>

                <button
                  onClick={() => handleLinkClick('donate')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'donate'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#D9A441] fill-current" />
                    <span>Donate to Kitchen</span>
                  </span>
                  <span className="text-[10px] font-extrabold uppercase bg-red-600 text-white px-2 py-0.5 rounded-full">
                    Urgent
                  </span>
                </button>

                <button
                  onClick={() => handleLinkClick('volunteer')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'volunteer'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <HandHeart className="w-4 h-4 text-[#D9A441]" />
                    <span>Become a Volunteer</span>
                  </span>
                </button>

                <button
                  onClick={() => handleLinkClick('fundraising')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'fundraising'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#D9A441]" />
                    <span>Fundraising & Sponsorship</span>
                  </span>
                </button>

                <button
                  onClick={() => handleLinkClick('partners')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-all flex items-center justify-between ${
                    currentPage === 'partners'
                      ? 'bg-[#D9A441] text-[#104C31] shadow-md'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#D9A441]" />
                    <span>Our Community Partners</span>
                  </span>
                </button>
              </div>

              {/* MEDIA & DIRECT CONTACT */}
              <div className="space-y-1 pt-2 border-t border-[#D9A441]/20">
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#D9A441] px-3 block mb-2">
                  Stories, Photos & Contact
                </span>

                <button
                  onClick={() => handleLinkClick('news')}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-heading font-medium transition-all ${
                    currentPage === 'news'
                      ? 'bg-[#D9A441] text-[#104C31] font-bold'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  Stories & News Events
                </button>

                <button
                  onClick={() => handleLinkClick('gallery')}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-heading font-medium transition-all ${
                    currentPage === 'gallery'
                      ? 'bg-[#D9A441] text-[#104C31] font-bold'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  Community Photo Gallery
                </button>

                <button
                  onClick={() => handleLinkClick('contact')}
                  className={`w-full text-left px-4 py-2 rounded-xl text-sm font-heading font-medium transition-all ${
                    currentPage === 'contact'
                      ? 'bg-[#D9A441] text-[#104C31] font-bold'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  Contact & Location
                </button>

                <button
                  onClick={() => handleLinkClick('privacy')}
                  className={`w-full text-left px-4 py-2 rounded-xl text-xs font-heading text-white/60 hover:text-white transition-all`}
                >
                  Privacy Policy & UK GDPR
                </button>
              </div>

              {/* Quick Contact Info Card in Drawer */}
              <div className="p-4 rounded-2xl bg-[#0B3522] border border-[#D9A441]/30 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#E7C071] font-bold">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Emergency Line: 0800 456 7890</span>
                </div>
                <p className="text-[11px] text-[#FFF8ED]/70 leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>

            {/* Bottom Drawer Action */}
            <div className="p-6 border-t border-[#D9A441]/30 bg-[#0B3522] sticky bottom-0">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonate();
                }}
                className="btn-sexy-gold w-full py-3.5 rounded-2xl font-heading font-extrabold text-base flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <Heart className="w-5 h-5 fill-current text-red-600 animate-pulse" />
                <span>Make a Donation Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
