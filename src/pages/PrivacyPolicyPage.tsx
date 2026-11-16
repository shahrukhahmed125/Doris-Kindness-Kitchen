import { FileText } from 'lucide-react';
import { PageId } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const sections = [
    { id: 'intro', title: '1. Introduction & Mission' },
    { id: 'data-collected', title: '2. Information Processing' },
    { id: 'how-we-use', title: '3. Data Protection' },
    { id: 'lawful-basis', title: '4. Lawful Basis' },
    { id: 'cookies', title: '5. Digital Safeguards' },
    { id: 'retention', title: '6. Storage & Security' },
    { id: 'your-rights', title: '7. Your Rights' },
    { id: 'contact-dpo', title: '8. Contact Officer' },
  ];

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Page Banner - py-[60px] */}
      <section className="py-[60px] bg-[#104C31] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Privacy Policy</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xs sm:text-sm text-[#FFF8ED]/80 font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </section>

      {/* Main Content with Table of Contents - py-[60px] */}
      <section className="py-[60px] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar Table of Contents */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 border border-[#D9A441]/30 shadow-sm sticky top-28 space-y-3">
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#104C31]">
                <FileText className="w-4 h-4 text-[#D9A441]" />
                <span>Contents</span>
              </div>
              <nav className="space-y-1.5 text-xs text-[#596157]">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block py-1 hover:text-[#176B45] hover:underline transition-colors"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-100 text-[11px] text-[#596157]">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          {/* Legal Prose Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#D9A441]/30 shadow-md space-y-8 text-xs sm:text-sm text-[#242923] leading-relaxed font-body">
            <div id="intro" className="space-y-3 scroll-mt-28">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                1. Introduction & Mission
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div id="data-collected" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                2. Information Processing
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>Lorem ipsum:</strong> Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
                <li><strong>Sed ut perspiciatis:</strong> Unde omnis iste natus error sit voluptatem accusantium.</li>
                <li><strong>Nemo enim ipsam:</strong> Voluptatem quia voluptas sit aspernatur aut odit aut fugit.</li>
                <li><strong>Ut enim ad minima:</strong> Veniam, quis nostrum exercitationem ullam corporis suscipit.</li>
              </ul>
            </div>

            <div id="how-we-use" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                3. Data Protection
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
            </div>

            <div id="lawful-basis" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                4. Lawful Basis
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
              </p>
            </div>

            <div id="cookies" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                5. Digital Safeguards
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div id="retention" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                6. Storage & Security
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div id="your-rights" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                7. Your Rights
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>Lorem ipsum:</strong> Dolor sit amet, consectetur adipiscing elit.</li>
                <li><strong>Consectetur:</strong> Adipiscing elit, sed do eiusmod tempor incididunt.</li>
                <li><strong>Tempor:</strong> Incididunt ut labore et dolore magna aliqua.</li>
              </ul>
            </div>

            <div id="contact-dpo" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                8. Contact Officer
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua:
              </p>
              <div className="bg-[#FAF2E4] p-4 rounded-xl border border-[#D9A441]/30 text-xs space-y-1">
                <p><strong>Doris Kindness Kitchen CIC – Outreach Office</strong></p>
                <p>244 Billet Road, Walthamstow, London, UK, E17 5HF</p>
                <p>Email: <a href="mailto:doriskindnesskitchen2026@gmail.com" className="text-[#176B45] hover:underline font-semibold">doriskindnesskitchen2026@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
