import { useState, FormEvent } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Bus,
} from 'lucide-react';
import { PageId } from '../types';
import { IMAGES } from '../data/content';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function ContactPage({ onNavigate, onOpenDonate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Direct Outreach Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
            alt="Doris Kitchen Contact Community"
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
            <span>Contact Us</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Let's Make a Difference Together.
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </section>

      {/* CONTACT GRID: FORM + DETAILS - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#D9A441]/40 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                SEND A MESSAGE
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#104C31] mt-1">
                Let's Make a Difference Together.
              </h2>
              <p className="text-xs sm:text-sm text-[#596157] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Davis"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.co.uk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="07123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">What is this regarding? *</label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                    >
                      <option value="Direct Outreach Enquiry">Direct Outreach Enquiry</option>
                      <option value="Volunteering with Outreach Team">Volunteering with Outreach Team</option>
                      <option value="Food & Produce Support">Food & Produce Support</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Lorem ipsum dolor sit amet..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs focus:outline-none focus:border-[#176B45]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-sexy-gold py-3.5 text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Send className="w-4 h-4 text-[#104C31]" />
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-[#176B45]/15 text-[#176B45] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#104C31]">Message Sent!</h3>
                <p className="text-sm text-[#596157] max-w-md mx-auto leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-[#176B45] hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Direct Details & Open Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#D9A441]/30 shadow-md space-y-6">
              <h3 className="font-heading font-bold text-xl text-[#104C31]">
                Reaching People Where They Are
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#596157]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242923]">Street Outreach Location:</strong>
                    <span>Walthamstow High Street, London, UK</span>
                    <strong className="block text-[#242923] mt-2">Outreach Headquarters:</strong>
                    <span>244 Billet Road, Walthamstow, London, UK, E17 5HF</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242923]">Outreach Phone:</strong>
                    <a href="tel:+447466810020" className="text-[#176B45] hover:underline">+44 7466 810020</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#242923]">Email Enquiries:</strong>
                    <a href="mailto:doriskindnesskitchen2026@gmail.com" className="text-[#176B45] hover:underline">
                      doriskindnesskitchen2026@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#104C31] block mb-2">
                  Direct Outreach Schedule:
                </span>
                <div className="space-y-1.5 text-xs text-[#596157]">
                  <div className="flex justify-between">
                    <span>Every Saturday:</span>
                    <span className="font-medium text-[#242923]">12:00–2:30 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Transport & Accessibility */}
            <div className="bg-[#FAF2E4] rounded-3xl p-6 border border-[#D9A441]/40 space-y-3">
              <h4 className="font-heading font-bold text-sm text-[#104C31] flex items-center gap-2">
                <Bus className="w-4 h-4 text-[#D9A441]" />
                <span>Taking Hope Beyond Our Kitchen</span>
              </h4>
              <p className="text-xs text-[#596157] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MAP SIMULATION - py-[60px] */}
      <section className="py-[60px] bg-white border-t border-[#D9A441]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                OUTREACH COVERAGE
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-[#104C31]">
                Reaching People Where They Are.
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Walthamstow+High+Street+London+UK"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sexy-outline px-5 py-2 text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>View Outreach Routes</span>
              <span className="text-[#D9A441]">→</span>
            </a>
          </div>

          {/* Styled SVG Map Simulation Card with Floating Marker Loop */}
          <div className="relative w-full h-80 bg-[#FAF2E4] rounded-3xl overflow-hidden border border-[#D9A441]/30 shadow-inner flex items-center justify-center p-6 text-center">
            {/* Background grid lines */}
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#176B45_1px,transparent_1px),linear-gradient(to_bottom,#176B45_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative z-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-[#D9A441]/40 shadow-2xl max-w-md animate-float-gentle">
              <div className="w-12 h-12 rounded-full bg-[#176B45] text-white flex items-center justify-center mx-auto mb-3 shadow-lg border-2 border-[#D9A441]">
                <MapPin className="w-6 h-6 text-[#D9A441]" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#104C31]">
                Doris Kindness Kitchen CIC
              </h4>
              <p className="text-xs text-[#596157] mt-1 font-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-4 text-[11px] text-[#176B45] font-semibold">
                <span>Direct Street Service</span>
                <span>·</span>
                <span>Walthamstow High Street</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
