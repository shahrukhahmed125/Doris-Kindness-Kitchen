import { ShieldCheck, Lock, FileText, ArrowLeft, Mail } from 'lucide-react';
import { PageId } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  const sections = [
    { id: 'intro', title: '1. Introduction & CIC Status' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Data' },
    { id: 'lawful-basis', title: '4. Lawful Basis for Processing' },
    { id: 'cookies', title: '5. Cookies & Digital Tracking' },
    { id: 'retention', title: '6. Data Retention & Safeguarding' },
    { id: 'your-rights', title: '7. Your Rights Under UK GDPR' },
    { id: 'contact-dpo', title: '8. Contacting Our Data Officer' },
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
            Last Updated: November 2026 · Doris Kindness Kitchen Community Interest Company (CIC)
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
                <p>Registered with the UK Information Commissioner’s Office (ICO).</p>
              </div>
            </div>
          </div>

          {/* Legal Prose Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#D9A441]/30 shadow-md space-y-8 text-xs sm:text-sm text-[#242923] leading-relaxed font-body">
            <div id="intro" className="space-y-3 scroll-mt-28">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                1. Introduction & CIC Status
              </h2>
              <p>
                Doris Kindness Kitchen CIC ("we", "our", or "the Organisation") is a registered Community Interest Company operating in England & Wales. We are committed to protecting and respecting the privacy, dignity, and personal data of our donors, volunteers, partners, and community members who access our meal programmes.
              </p>
              <p>
                This Privacy Policy explains how we collect, handle, store, and protect your personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </div>

            <div id="data-collected" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                2. Information We Collect
              </h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>Donors:</strong> Name, contact details, payment transaction reference, donation amount, Gift Aid declarations. Note: We do not store complete payment card credentials on our servers.</li>
                <li><strong>Volunteers:</strong> Name, contact phone, email, emergency contact details, skill preferences, availability, and background/safeguarding verification records where applicable.</li>
                <li><strong>Service Users & Parcel Recipients:</strong> Name, delivery address (for doorstep deliveries), contact phone, and dietary or allergen requirements. We maintain strict confidentiality.</li>
                <li><strong>Website Visitors:</strong> IP address, browser type, and anonymous usage data through necessary functional cookies.</li>
              </ul>
            </div>

            <div id="how-we-use" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                3. How We Use Your Data
              </h2>
              <p>We use your personal data strictly for legitimate operational purposes:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li>To prepare, deliver, and distribute nutritious food parcels and hot meals safely.</li>
                <li>To process donations and reclaim UK Gift Aid through HMRC.</li>
                <li>To coordinate volunteer shift rotas and provide training resources.</li>
                <li>To send our community newsletter (only where you have explicitly opted in).</li>
                <li>To comply with statutory legal, accounting, and safeguarding duties.</li>
              </ul>
            </div>

            <div id="lawful-basis" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                4. Lawful Basis for Processing
              </h2>
              <p>
                Under Article 6 of the UK GDPR, our lawful bases for processing personal data include:
              </p>
              <p>
                <strong>Consent:</strong> For email newsletter subscriptions and photo gallery publications.
                <br />
                <strong>Legitimate Interests:</strong> For day-to-day volunteer coordination, food safety logging, and acknowledging charitable support.
                <br />
                <strong>Legal Obligation:</strong> For maintaining HMRC Gift Aid records and charitable financial audit compliance.
                <br />
                <strong>Vital Interests:</strong> In emergency situations where medical or food allergy safety is at immediate risk.
              </p>
            </div>

            <div id="cookies" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                5. Cookies & Digital Tracking
              </h2>
              <p>
                Our website uses only essential and functional cookies required to ensure secure donation checkout, navigation state, and accessibility preferences. We do not sell personal data to commercial advertisers or data brokers under any circumstances.
              </p>
            </div>

            <div id="retention" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                6. Data Retention & Safeguarding
              </h2>
              <p>
                We only retain your personal information for as long as necessary to fulfill the purposes for which it was gathered. Financial records for donations are retained for six financial years in accordance with UK tax laws. Volunteer application data is securely removed after termination of service.
              </p>
            </div>

            <div id="your-rights" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                7. Your Rights Under UK GDPR
              </h2>
              <p>You have full statutory rights over your personal data:</p>
              <ul className="list-disc pl-5 space-y-1 text-[#596157]">
                <li><strong>The right to access:</strong> Request a copy of the information we hold about you.</li>
                <li><strong>The right to rectification:</strong> Request correction of inaccurate information.</li>
                <li><strong>The right to erasure:</strong> Request deletion of your personal records ("right to be forgotten").</li>
                <li><strong>The right to withdraw consent:</strong> Unsubscribe from our newsletter at any time.</li>
              </ul>
            </div>

            <div id="contact-dpo" className="space-y-3 scroll-mt-28 pt-4 border-t border-gray-100">
              <h2 className="font-heading font-bold text-xl text-[#104C31]">
                8. Contacting Our Data Officer
              </h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise any of your statutory rights, please write to our Data Protection Officer:
              </p>
              <div className="bg-[#FAF2E4] p-4 rounded-xl border border-[#D9A441]/30 text-xs space-y-1">
                <p><strong>Doris Kindness Kitchen CIC – Data Protection Lead</strong></p>
                <p>St. Jude Community Hall, High Street, Borough, UK</p>
                <p>Email: <a href="mailto:privacy@doriskindnesskitchen.org.uk" className="text-[#176B45] hover:underline font-semibold">privacy@doriskindnesskitchen.org.uk</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
