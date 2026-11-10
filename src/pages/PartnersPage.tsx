import {
  Building2,
  Users,
  Handshake,
  CheckCircle2,
  Heart,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types';
import { PARTNERS, IMAGES } from '../data/content';

interface PartnersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function PartnersPage({ onNavigate, onOpenDonate }: PartnersPageProps) {
  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Banner with Ken Burns Loop */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.dining}
            alt="Doris Kitchen community partners"
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
            <span>Our Partners</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Community Partners
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* PARTNER LISTINGS - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            COMMUNITY COLLABORATORS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            Stronger Together in Mutual Aid
          </h2>
          <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl p-8 border border-[#D9A441]/30 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 border border-[#176B45]/20 flex items-center justify-center text-[#176B45] font-extrabold text-base shadow-sm">
                    {partner.logoText.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-[#B8852C] bg-[#FAF2E4] px-3 py-1 rounded-full border border-[#D9A441]/30">
                    {partner.type}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#104C31]">
                  {partner.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-[#176B45]">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441] mr-1.5" />
                <span>Verified Strategic Partner</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO COLLABORATE - py-[60px] */}
      <section className="py-[60px] bg-[#FAF2E4] border-t border-[#D9A441]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              JOIN THE NETWORK
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              How Your Organization Can Partner With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-3 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-extrabold text-sm border border-[#176B45]/20">
                01
              </div>
              <h4 className="font-heading font-bold text-base text-[#104C31]">Food Surplus Redistribution</h4>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-3 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#D9A441]/20 text-[#B8852C] flex items-center justify-center font-extrabold text-sm border border-[#D9A441]/30">
                02
              </div>
              <h4 className="font-heading font-bold text-base text-[#104C31]">Healthcare & Civic Referral</h4>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/30 shadow-sm hover:shadow-lg transition-all space-y-3 transform hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-extrabold text-sm border border-[#176B45]/20">
                03
              </div>
              <h4 className="font-heading font-bold text-base text-[#104C31]">Corporate Social Grants</h4>
              <p className="text-xs text-[#596157] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-sexy-gold px-8 py-3.5 text-xs inline-flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Discuss a Partnership with Our Directors</span>
              <ArrowRight className="w-4 h-4 text-[#104C31]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
