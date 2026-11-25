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
            How Doris Kindness Kitchen CIC collects, uses and protects your personal information.
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
                <p>Doris Kindness Kitchen CIC · Last updated November 2026</p>
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
                Doris Kindness Kitchen CIC ("we", "us", "our") is a community interest company dedicated to supporting homeless people, vulnerable individuals and families experiencing food poverty and financial hardship. This privacy policy explains how we collect, use and protect personal information when you use our website, make a donation, volunteer or contact us.
              </p>
              <p>
                We are committed to protecting your privacy and handling your data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy applies to all personal data we process in connection with our outreach programmes and community services.
              </p>
            </div>

            <div id="data-collected" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                2. Information Processing
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>Contact details:</strong> Your name, email address and phone number when you contact us or register to volunteer.</li>
                <li><strong>Donation information:</strong> Donation amounts and preferences processed securely through our payment provider.</li>
                <li><strong>Volunteer details:</strong> Availability, role preferences and relevant experience you choose to share.</li>
                <li><strong>Enquiry content:</strong> The messages and notes you send us through our contact and sponsorship forms.</li>
              </ul>
            </div>

            <div id="how-we-use" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                3. Data Protection
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li>Respond to your enquiries and provide information about our services.</li>
                <li>Process donations and send receipts or thank-you confirmations.</li>
                <li>Coordinate volunteering roles, shifts and training sessions.</li>
                <li>Send occasional updates about our outreach work, if you have opted in.</li>
              </ul>
            </div>

            <div id="lawful-basis" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                4. Lawful Basis
              </h2>
              <p>
                We process personal data on the following lawful bases under UK GDPR: your consent (for example, when you opt in to receive updates), performance of a contract or pre-contractual steps (such as responding to your enquiry), and our legitimate interests in operating our charitable and community outreach services.
              </p>
              <p>
                Where we process sensitive personal data — for example, information relating to health or circumstances shared during outreach — we do so only where necessary to deliver our services and always with appropriate safeguards.
              </p>
            </div>

            <div id="cookies" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                5. Digital Safeguards
              </h2>
              <p>
                Our website uses essential cookies and similar technologies to operate correctly and remember your preferences. We do not use cookies to track you across other websites, and we do not sell your personal information to third parties. You can control cookies through your browser settings at any time.
              </p>
            </div>

            <div id="retention" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                6. Storage & Security
              </h2>
              <p>
                We retain personal data only for as long as necessary for the purposes described in this policy, or as required by law. Donation records are kept for accounting and Gift Aid purposes. You may ask us to delete your data at any time, subject to legal obligations we must meet.
              </p>
            </div>

            <div id="your-rights" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                7. Your Rights
              </h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> Request that we delete your personal data.</li>
                <li><strong>Objection:</strong> Object to processing based on our legitimate interests.</li>
              </ul>
            </div>

            <div id="contact-dpo" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                8. Contact Officer
              </h2>
              <p>
                If you have any questions about this policy or wish to exercise your data protection rights, please contact our outreach office using the details below. We aim to respond to all privacy enquiries within 30 days.
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
