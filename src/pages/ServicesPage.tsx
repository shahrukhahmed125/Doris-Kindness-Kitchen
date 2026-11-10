import { useState } from 'react';
import {
  Utensils,
  PackageOpen,
  Sparkles,
  Heart,
  Clock,
  MapPin,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES, FAQS, IMAGES } from '../data/content';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function ServicesPage({ onNavigate, onOpenDonate }: ServicesPageProps) {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-2');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Header Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Doris Kindness Kitchen services"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Our Services</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Community Services
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">
            Providing free nutritious meals, emergency food hampers, essential hygiene supplies, and doorstep outreach with warmth and dignity.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICE BREAKDOWN (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column with Loop Floating Animation */}
              <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] ${
                  index % 2 === 0 ? 'animate-float-slow' : 'animate-float-reverse'
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                  />
                  <div className="absolute top-4 left-4 bg-[#104C31] text-[#E7C071] px-4 py-1.5 rounded-full font-heading text-xs font-bold shadow border border-[#D9A441]/40">
                    Programme {service.number}
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                  SERVICE {service.number}
                </span>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31] leading-tight">
                  {service.title}
                </h2>
                <p className="text-base text-[#242923]/90 leading-relaxed font-body">
                  {service.fullDesc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-1">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#596157]">
                      <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {service.schedule && (
                  <div className="p-4 bg-white rounded-2xl border border-[#D9A441]/40 shadow-sm text-xs space-y-1">
                    <span className="font-bold text-[#104C31] flex items-center gap-1.5 uppercase tracking-wide">
                      <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                      Session Times & Availability:
                    </span>
                    <p className="text-[#596157] font-medium">{service.schedule}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* HOW TO ACCESS SUPPORT (60px) */}
      <section className="py-[60px] bg-[#FAF2E4] border-y border-[#D9A441]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2.5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
              NO RED TAPE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#104C31]">
              How to Access Support
            </h2>
            <p className="text-sm text-[#596157] font-body max-w-xl mx-auto">
              We never want anyone to feel embarrassed or intimidated when seeking help. Here is how easy it is to receive support from our kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mx-auto font-heading font-extrabold text-lg">
                1
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Walk In & Eat</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Simply arrive during our dining hours (Tues & Thurs 12:00–14:30; Sat 11:30–15:00). Take a seat, enjoy tea, and receive a hot nutritious plate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#D9A441]/20 text-[#B8852C] flex items-center justify-center mx-auto font-heading font-extrabold text-lg">
                2
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Request Food Parcels</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                Speak to our volunteers on site or contact us by phone or email. We will prepare a 5-day fresh pantry box tailored to your family size.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D9A441]/35 shadow-sm space-y-3 text-center hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mx-auto font-heading font-extrabold text-lg">
                3
              </div>
              <h3 className="font-heading font-bold text-lg text-[#104C31]">Doorstep Delivery</h3>
              <p className="text-xs text-[#596157] leading-relaxed">
                If you are housebound, elderly, or disabled, our outreach volunteer drivers can deliver chilled or hot meals directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FAQS (60px) */}
      <section className="py-[60px] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-[#104C31]">
            Common Questions About Our Services
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#D9A441]/35 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FFF8ED]/50 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#104C31]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D9A441] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#596157] leading-relaxed font-body border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA (60px) */}
      <section className="py-[60px] bg-[#176B45] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Need Support or Know Someone Who Does?
          </h2>
          <p className="text-sm text-[#FFF8ED]/85 font-body">
            Get in touch confidentially with our compassionate support team today.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-sexy-gold px-7 py-3 text-xs sm:text-sm"
            >
              Contact Support Team
            </button>
            <button
              onClick={onOpenDonate}
              className="btn-sexy-outline px-7 py-3 text-xs sm:text-sm"
            >
              Donate Towards Food Parcels
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
