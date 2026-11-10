import {
  Heart,
  ArrowRight,
  ShieldCheck,
  Users,
  CheckCircle2,
  Sparkles,
  HandHeart,
  Clock,
  Award,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES, LOGO_URL } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
}

export default function AboutPage({ onNavigate, onOpenDonate, onOpenVolunteer }: AboutPageProps) {
  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Editorial Page Banner with Breadcrumb */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.kitchen}
            alt="Doris Kindness Kitchen prep team"
            className="w-full h-full object-cover filter brightness-90 animate-ken-burns"
          />
          <div className="absolute inset-0 bg-[#104C31]/90 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button
              onClick={() => onNavigate('home')}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span>About Us</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            About Doris Kindness Kitchen CIC
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* SECTION 1: OUR STORY (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              OUR ORIGIN & HEART
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31] leading-tight text-balance">
              Born from a Simple Promise: No Neighbor Should Starve in Silence.
            </h2>
            <p className="text-base text-[#242923]/90 leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="btn-sexy-gold px-7 py-3.5 text-xs sm:text-sm"
              >
                Support Our Mission
              </button>
              <button
                onClick={onOpenVolunteer}
                className="btn-sexy-green px-7 py-3.5 text-xs sm:text-sm"
              >
                Volunteer With Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] animate-float-slow animate-gold-glow">
              <img
                src={IMAGES.dining}
                alt="Community members sharing food together"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-heading font-bold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="text-xs text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHO WE SUPPORT (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-y border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              REACHING THOSE IN NEED
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Who We Support Across Our Communities
            </h2>
            <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Rough Sleepers & Homeless</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Families in Food Poverty</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Pensioners & Isolated Elders</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">People in Sudden Crisis</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR VALUES (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            OUR CORE VALUES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Principles That Guide Every Spoonful We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C]">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#104C31]">Unconditional Compassion</h3>
            <p className="text-sm text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#104C31]">Integrity & Transparency</h3>
            <p className="text-sm text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#104C31]">Community-Led Solidarity</h3>
            <p className="text-sm text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR COMMUNITY COMMITMENT & CTA (60px) */}
      <section className="py-[60px] bg-[#176B45] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#E7C071]">
            OUR COMMITMENT TO YOU
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Together, We Keep the Kindness Burning.
          </h2>
          <p className="text-base text-[#FFF8ED]/85 max-w-2xl mx-auto font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenDonate}
              className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm"
            >
              Donate Towards Today's Meals
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-sexy-outline px-7 py-3.5 text-xs sm:text-sm"
            >
              Contact Our Community Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
