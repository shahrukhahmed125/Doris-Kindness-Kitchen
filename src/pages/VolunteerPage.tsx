import { useState } from 'react';
import {
  Users,
  CheckCircle2,
  Clock,
  MapPin,
  Heart,
  Sparkles,
  Award,
  ShieldCheck,
  ArrowRight,
  ChefHat,
  Coffee,
} from 'lucide-react';
import { PageId } from '../types';
import { VOLUNTEER_ROLES, IMAGES } from '../data/content';

interface VolunteerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenVolunteer: (role?: string) => void;
}

export default function VolunteerPage({ onNavigate, onOpenVolunteer }: VolunteerPageProps) {
  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Hero Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.kitchen}
            alt="Volunteers smiling in Doris Kitchen"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Become a Volunteer</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Become a Volunteer
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* WHY VOLUNTEER (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              WHY JOIN US?
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31] leading-tight text-balance">
              Give a Few Hours. Transform Countless Lives.
            </h2>
            <p className="text-base text-[#242923]/90 leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#596157]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                <span><strong>Free Food Hygiene Certification:</strong> We provide full training and Level 2 accreditation.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                <span><strong>Flexible Scheduling:</strong> Join our rota once a week, fortnightly, or on-call whenever free.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                <span><strong>Warm, Sociable Environment:</strong> Share delicious volunteer lunches and great conversation.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenVolunteer()}
                className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#104C31]" />
                <span>Apply to Volunteer Today</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] animate-float-slow animate-gold-glow">
              <img
                src={IMAGES.outreach}
                alt="Volunteer delivering food parcel"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT VOLUNTEER OPPORTUNITIES (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-t border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              OPEN ROLES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              Where We Need Your Support
            </h2>
            <p className="text-sm text-[#596157] font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VOLUNTEER_ROLES.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-8 border border-[#D9A441]/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#176B45] bg-[#176B45]/10 px-3 py-1 rounded-full">
                      {role.urgency === 'High' ? 'Urgent Need' : 'Open Rota'}
                    </span>
                    <span className="text-xs text-[#596157] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                      {role.timeCommitment}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[#104C31]">
                    {role.title}
                  </h3>

                  <p className="text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#242923] block mb-1.5">
                      Helpful Skills & Qualities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {role.skills.map((s, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#FAF2E4] text-[#596157] font-medium px-2.5 py-1 rounded-md border border-[#D9A441]/25"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#596157] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#176B45]" />
                    {role.location}
                  </span>
                  <button
                    onClick={() => onOpenVolunteer(role.title)}
                    className="btn-sexy-green px-5 py-2.5 text-xs"
                  >
                    Apply for Role
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW VOLUNTEERING WORKS (60px) */}
      <section className="py-[60px] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2.5">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            STEP-BY-STEP
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
            How Volunteering Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-2 hover:shadow-md transition-shadow">
            <span className="w-10 h-10 rounded-full bg-[#176B45]/15 text-[#176B45] font-extrabold flex items-center justify-center mx-auto text-sm">
              01
            </span>
            <h4 className="font-heading font-bold text-sm text-[#104C31]">Online Form</h4>
            <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-2 hover:shadow-md transition-shadow">
            <span className="w-10 h-10 rounded-full bg-[#D9A441]/20 text-[#B8852C] font-extrabold flex items-center justify-center mx-auto text-sm">
              02
            </span>
            <h4 className="font-heading font-bold text-sm text-[#104C31]">Friendly Chat</h4>
            <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-2 hover:shadow-md transition-shadow">
            <span className="w-10 h-10 rounded-full bg-[#176B45]/15 text-[#176B45] font-extrabold flex items-center justify-center mx-auto text-sm">
              03
            </span>
            <h4 className="font-heading font-bold text-sm text-[#104C31]">Induction</h4>
            <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-2 hover:shadow-md transition-shadow">
            <span className="w-10 h-10 rounded-full bg-[#D9A441]/20 text-[#B8852C] font-extrabold flex items-center justify-center mx-auto text-sm">
              04
            </span>
            <h4 className="font-heading font-bold text-sm text-[#104C31]">First Shift</h4>
            <p className="text-xs text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>

      {/* FINAL VOLUNTEER CTA (60px) */}
      <section className="py-[60px] bg-[#176B45] text-white text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <Heart className="w-8 h-8 text-[#D9A441] mx-auto animate-pulse" />
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Ready to Join the Family?
          </h2>
          <p className="text-sm text-[#FFF8ED]/80 font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="pt-2">
            <button
              onClick={() => onOpenVolunteer()}
              className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm mx-auto"
            >
              Start Volunteer Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
