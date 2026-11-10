import { Heart, Sparkles, CheckCircle2, Target, ArrowRight, Eye, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../data/content';

interface MissionVisionPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function MissionVisionPage({ onNavigate, onOpenDonate }: MissionVisionPageProps) {
  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Doris Kitchen community meal"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Mission & Vision</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Mission & Vision
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* MISSION & VISION DUAL PILLARS (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card with subtle loop float */}
          <div className="bg-[#176B45] text-white rounded-3xl p-8 sm:p-12 border-2 border-[#D9A441]/40 shadow-xl flex flex-col justify-between animate-float-slow animate-gold-glow">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D9A441] text-[#104C31] flex items-center justify-center font-bold shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#E7C071]">
                OUR PURPOSE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-[#FFF8ED] leading-relaxed font-body font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-sm text-[#FFF8ED]/85 leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="pt-6 border-t border-white/20 mt-8 space-y-2 text-xs text-[#FFF8ED]/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>Zero means testing or financial interrogations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>Nutritious dishes made with seasonal, locally rescued produce</span>
              </div>
            </div>
          </div>

          {/* Vision Card with counter loop float */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#D9A441]/40 shadow-xl flex flex-col justify-between text-[#242923] animate-float-reverse">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#176B45] text-[#FFF8ED] flex items-center justify-center font-bold shadow-md">
                <Eye className="w-8 h-8" />
              </div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                OUR FUTURE
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl text-[#104C31] leading-relaxed font-body font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-8 space-y-2 text-xs text-[#596157]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                <span>Sustainable zero-food-waste community redistribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                <span>Active signposting to break systemic cycles of debt and hardship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC GOALS (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-t border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              ROADMAP TO IMPACT
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Our Strategic Goals for 2026–2028
            </h2>
            <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-lg transition-all">
              <span className="text-2xl font-heading font-extrabold text-[#D9A441]">01</span>
              <h3 className="font-heading font-bold text-base text-[#104C31]">Scale to 50,000 Meals</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-lg transition-all">
              <span className="text-2xl font-heading font-extrabold text-[#D9A441]">02</span>
              <h3 className="font-heading font-bold text-base text-[#104C31]">Refrigerated Outreach Van</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-lg transition-all">
              <span className="text-2xl font-heading font-extrabold text-[#D9A441]">03</span>
              <h3 className="font-heading font-bold text-base text-[#104C31]">Community Cooking Academy</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-lg transition-all">
              <span className="text-2xl font-heading font-extrabold text-[#D9A441]">04</span>
              <h3 className="font-heading font-bold text-base text-[#104C31]">Grower Rescue Network</h3>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATIONAL CTA (60px) */}
      <section className="py-[60px] bg-[#176B45] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Sparkles className="w-10 h-10 text-[#D9A441] mx-auto animate-pulse" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            “No One Should Have to Face Hunger Alone.”
          </h2>
          <p className="text-base text-[#FFF8ED]/90 max-w-xl mx-auto font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="pt-2">
            <button
              onClick={onOpenDonate}
              className="btn-sexy-gold px-8 py-4 text-xs sm:text-sm mx-auto"
            >
              Make a Donation Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
