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
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">
            Feeding Hope, Sharing Love and Changing Lives through the transformative power of a dignified, warm community meal.
          </p>
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
            <p className="text-base text-[#242923]/90 leading-relaxed font-body">
              Doris Kindness Kitchen CIC was founded in response to a sobering reality across UK communities: food poverty is not merely a shortage of calories, but an overwhelming crisis of isolation, anxiety, and lost dignity.
            </p>
            <p className="text-sm text-[#596157] leading-relaxed font-body">
              Named in honour of community matriarch Doris—whose kitchen door was always unlocked and whose stove always held a bubbling pot for anyone in need—our organisation began with three volunteers cooking big pots of soup in a borrowed church hall.
            </p>
            <p className="text-sm text-[#596157] leading-relaxed font-body">
              Today, Doris Kindness Kitchen is a registered UK Community Interest Company. We rescue tonnes of surplus fresh produce each week and serve hundreds of vulnerable adults, rough sleepers, single parents, and isolated elders across our regular dining sessions and doorstep parcel networks.
            </p>

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
                <p className="font-heading font-bold text-lg">
                  Every Guest is Welcomed as Family
                </p>
                <p className="text-xs text-white/80">
                  A dignified dining room where conversation flows freely.
                </p>
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
            <p className="text-sm text-[#596157] font-body">
              We operate an open-door policy. We do not require referrals or proof of benefits to share a hot plate of food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Rough Sleepers & Homeless</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Hot, nutrient-dense meals, clean socks, winter thermal packs, and compassionate outreach to those on the streets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Families in Food Poverty</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Weekly pantry boxes filled with fresh produce, dairy, wholemeal breads, and healthy staples to keep children nourished.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Pensioners & Isolated Elders</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                A warm communal space to eat, escape high home heating bills, make friends, and receive doorstep deliveries when ill.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/35 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">People in Sudden Crisis</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Immediate emergency help for individuals facing benefit payment freezes, medical recovery, or unexpected job redundancy.
              </p>
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
            <p className="text-sm text-[#596157] leading-relaxed">
              We treat every guest with infinite respect and warmth. Kindness is our primary currency, and we never make assumptions about someone's journey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#104C31]">Integrity & Transparency</h3>
            <p className="text-sm text-[#596157] leading-relaxed">
              As a Community Interest Company, our accounts and operations are completely open. 100% of public food donations go directly to providing sustenance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D9A441]/35 shadow-md space-y-3 hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#D9A441]/20 flex items-center justify-center text-[#B8852C]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#104C31]">Community-Led Solidarity</h3>
            <p className="text-sm text-[#596157] leading-relaxed">
              We are neighbors helping neighbors. We listen to the people we serve and build programmes based on genuine community feedback and lived experience.
            </p>
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
          <p className="text-base text-[#FFF8ED]/85 max-w-2xl mx-auto font-body">
            Whether you need a hot meal today, want to donate surplus groceries, or have a few hours to volunteer, you have a place at Doris Kindness Kitchen.
          </p>
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
