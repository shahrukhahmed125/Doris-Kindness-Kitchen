import { useState, FormEvent } from 'react';
import { X, Users, CheckCircle2, Clock, MapPin, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export default function VolunteerModal({ isOpen, onClose, defaultRole = 'Kitchen Assistant & Meal Prep' }: VolunteerModalProps) {
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [availability, setAvailability] = useState<string[]>(['Saturday']);
  const [experience, setExperience] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const toggleDay = (day: string) => {
    if (availability.includes(day)) {
      setAvailability(availability.filter((d) => d !== day));
    } else {
      setAvailability([...availability, day]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#176B45', '#D9A441', '#E7C071'],
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  const days = ['Tuesday Morning', 'Thursday Afternoon', 'Friday Morning', 'Saturday Full Day', 'Flexible / On-Call'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFF8ED] rounded-3xl shadow-2xl border-2 border-[#D9A441]/40 overflow-hidden text-[#242923] my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#176B45] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close volunteer modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E7C071] mb-1">
            <Users className="w-4 h-4 text-[#D9A441]" />
            <span>Join Our Kindness Team</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">
            Volunteer Application
          </h3>
          <p className="text-xs text-[#FFF8ED]/80 mt-1">
            No formal culinary experience required—just empathy and a warm smile.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#596157] mb-1">
                  Preferred Volunteer Role *
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                >
                  <option value="Kitchen Assistant & Meal Prep">Kitchen Assistant & Meal Prep</option>
                  <option value="Food Parcel & Pantry Organizer">Food Parcel & Pantry Organizer</option>
                  <option value="Dining Room Host & Table Befriender">Dining Room Host & Table Befriender</option>
                  <option value="Volunteer Delivery Driver">Volunteer Delivery Driver (Home Outreach)</option>
                  <option value="Admin & Community Socials">Admin & Community Socials</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#596157] mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#596157] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#596157] mb-1.5">
                  General Availability (Select all that fit)
                </label>
                <div className="flex flex-wrap gap-2">
                  {days.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => toggleDay(d)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                        availability.includes(d)
                          ? 'bg-[#176B45] text-white border-[#176B45]'
                          : 'bg-white text-[#596157] border-[#D9A441]/30 hover:border-[#D9A441]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#596157] mb-1">
                  Tell us a little about yourself or why you would like to join us
                </label>
                <textarea
                  rows={3}
                  placeholder="Any cooking experience, hobbies, or community interest..."
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                />
              </div>

              <div className="bg-[#FAF2E4] p-3 rounded-xl border border-[#D9A441]/30 text-[11px] text-[#596157]">
                <strong className="text-[#176B45] block mb-0.5">Safeguarding & Induction:</strong>
                All volunteers receive free Food Hygiene Level 2 certification, safeguarding training, and a warm welcome induction.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#176B45] hover:bg-[#104C31] text-white rounded-xl font-heading font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting Application...</span>
                  </span>
                ) : (
                  <>
                    <Heart className="w-4 h-4 text-[#D9A441]" />
                    <span>Submit Volunteer Application</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#176B45]/15 text-[#176B45] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#176B45]" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#104C31]">
                Application Received!
              </h3>
              <p className="text-sm text-[#596157] font-body leading-relaxed max-w-sm mx-auto">
                Thank you so much, <strong>{name || 'Volunteer'}</strong>. Our volunteer coordinator will contact you at <strong>{email || phone}</strong> within 48 hours with details about our next welcome session.
              </p>
              <div className="p-3.5 bg-white rounded-xl border border-[#D9A441]/30 text-xs text-left space-y-1">
                <p><strong>Role:</strong> {role}</p>
                <p><strong>Availability:</strong> {availability.join(', ') || 'Flexible'}</p>
                <p><strong>Next Induction:</strong> Wednesday, 18 November 2026 at 6:00 PM</p>
              </div>
              <button
                onClick={handleReset}
                className="w-full py-3 px-4 bg-[#176B45] text-white rounded-xl text-xs font-semibold hover:bg-[#104C31] transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
