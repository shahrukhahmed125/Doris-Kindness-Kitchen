import { useState, FormEvent } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, CreditCard, Sparkles, Download, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
}

export default function DonateModal({ isOpen, onClose, initialAmount = 25 }: DonateModalProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [giftAid, setGiftAid] = useState<boolean>(true);
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvc, setCardCvc] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [donationRef, setDonationRef] = useState<string>('');

  if (!isOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : amount;

  const getImpactDescription = (amt: number) => {
    if (amt < 15) {
      return 'Provides 4 hot, wholesome freshly cooked meals and warm tea for guests in our community dining hall.';
    } else if (amt < 35) {
      return 'Provides a comprehensive 5-day fresh family grocery hamper filled with organic vegetables, whole grains, and pantry staples.';
    } else if (amt < 75) {
      return 'Supplies hot stews, winter thermal kits, and personal hygiene essentials for 20 vulnerable or rough-sleeping neighbors.';
    } else {
      return 'Sponsors a complete weekly kitchen session—feeding up to 80 people wholesome nutritious hot food with dignity.';
    }
  };

  const handleQuickAmount = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const ref = `DKK-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setDonationRef(ref);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#176B45', '#D9A441', '#E7C071', '#104C31'],
      });
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FFF8ED] rounded-3xl shadow-2xl border-2 border-[#D9A441]/40 overflow-hidden text-[#242923] my-8 animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-[#176B45] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close donation modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E7C071] mb-1">
            <Heart className="w-4 h-4 fill-current text-[#D9A441]" />
            <span>Make a Real Difference Today</span>
          </div>
          <h3 className="font-heading font-bold text-2xl text-white">
            Support Doris Kindness Kitchen
          </h3>
          <p className="text-xs text-[#FFF8ED]/80 mt-1">
            Feeding Hope, Sharing Love and Changing Lives.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Frequency Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF2E4] rounded-xl border border-[#D9A441]/30">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`py-2 text-xs font-heading font-semibold rounded-lg transition-all cursor-pointer ${
                    frequency === 'once'
                      ? 'bg-[#176B45] text-white shadow'
                      : 'text-[#242923] hover:text-[#176B45]'
                  }`}
                >
                  Single Donation
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`py-2 text-xs font-heading font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    frequency === 'monthly'
                      ? 'bg-[#176B45] text-white shadow'
                      : 'text-[#242923] hover:text-[#176B45]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Monthly Supporter</span>
                </button>
              </div>

              {/* Amount Buttons */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#596157] mb-2">
                  Select Donation Amount (£ GBP)
                </label>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  {[10, 25, 50, 100].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleQuickAmount(val)}
                      className={`py-3 px-2 rounded-xl font-heading font-bold text-base border-2 transition-all cursor-pointer text-center ${
                        amount === val && !customAmount
                          ? 'bg-[#D9A441] border-[#B8852C] text-[#242923] shadow-md scale-102'
                          : 'bg-white border-[#D9A441]/30 hover:border-[#D9A441] text-[#242923]'
                      }`}
                    >
                      £{val}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Field */}
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-heading font-bold text-sm text-[#596157]">
                    £
                  </span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter custom amount (e.g. 15)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount(0);
                    }}
                    className="w-full pl-8 pr-4 py-2.5 bg-white border border-[#D9A441]/40 rounded-xl text-sm font-medium focus:outline-none focus:border-[#176B45]"
                  />
                </div>
              </div>

              {/* Real World Impact Message */}
              <div className="bg-[#176B45]/10 border border-[#176B45]/20 p-3.5 rounded-xl text-xs text-[#104C31]">
                <strong className="block font-semibold mb-1 text-[#176B45] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D9A441]" />
                  Your Impact with £{currentAmount || 0}
                  {frequency === 'monthly' ? ' / month' : ''}:
                </strong>
                <p className="leading-relaxed">
                  {getImpactDescription(currentAmount)}
                </p>
              </div>

              {/* Gift Aid UK */}
              <div className="bg-white p-3.5 rounded-xl border border-[#D9A441]/30 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="giftaid"
                  checked={giftAid}
                  onChange={(e) => setGiftAid(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded text-[#176B45] focus:ring-[#176B45] border-gray-300 cursor-pointer"
                />
                <label htmlFor="giftaid" className="text-xs leading-relaxed text-[#242923] cursor-pointer">
                  <strong className="text-[#176B45]">Boost by 25% with UK Gift Aid:</strong> I am a UK taxpayer. Please claim Gift Aid on my donation at no extra cost to me.
                </label>
              </div>

              {/* Donor Contact Details */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#596157] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.co.uk"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-medium focus:outline-none focus:border-[#176B45]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Switcher */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#596157] mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-[#176B45] text-white border-[#176B45]'
                        : 'bg-white text-[#242923] border-[#D9A441]/30 hover:border-[#D9A441]'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card / Debit</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`py-2 px-3 rounded-xl text-xs font-medium flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'bg-[#176B45] text-white border-[#176B45]'
                        : 'bg-white text-[#242923] border-[#D9A441]/30 hover:border-[#D9A441]'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Bank Transfer (BACS)</span>
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="space-y-2 bg-white p-3 rounded-xl border border-[#D9A441]/30">
                    <div>
                      <label className="block text-[11px] text-[#596157] mb-0.5">Card Number</label>
                      <input
                        type="text"
                        placeholder="•••• •••• •••• 4242"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] text-[#596157] mb-0.5">Expiry MM/YY</label>
                        <input
                          type="text"
                          placeholder="12/28"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          required
                          className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#596157] mb-0.5">CVC</label>
                        <input
                          type="text"
                          placeholder="888"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          required
                          className="w-full px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-3 rounded-xl border border-[#D9A441]/30 text-xs space-y-1 text-[#242923]">
                    <p className="font-semibold text-[#176B45]">Doris Kindness Kitchen CIC Bank Details:</p>
                    <p><span className="text-gray-500">Account Name:</span> Doris Kindness Kitchen CIC</p>
                    <p><span className="text-gray-500">Sort Code:</span> 20-04-18</p>
                    <p><span className="text-gray-500">Account Number:</span> 83920145</p>
                    <p><span className="text-gray-500">Reference:</span> YOUR NAME</p>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing || currentAmount <= 0}
                className="w-full py-3.5 px-4 bg-[#D9A441] hover:bg-[#B8852C] text-[#242923] hover:text-white rounded-xl font-heading font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#242923] border-t-transparent rounded-full animate-spin" />
                    <span>Processing Secure Donation...</span>
                  </span>
                ) : (
                  <>
                    <Heart className="w-5 h-5 fill-current text-red-700" />
                    <span>
                      Donate £{currentAmount || 0} {frequency === 'monthly' ? 'Every Month' : 'Now'}
                    </span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#596157]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#176B45]" />
                <span>256-bit encrypted · 100% of public donations directly fund food programmes</span>
              </div>
            </form>
          ) : (
            /* Success Receipt Screen */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-[#176B45]/15 text-[#176B45] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#176B45]" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D9A441]">
                  Payment Confirmed
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#104C31] mt-1">
                  Thank You, {donorName || 'Kind Supporter'}!
                </h3>
                <p className="text-sm text-[#596157] mt-1 font-body">
                  Your generous gift of <strong>£{currentAmount}</strong> {frequency === 'monthly' ? 'monthly' : ''} directly puts nourishing meals on someone’s table.
                </p>
              </div>

              {/* Official Receipt Card */}
              <div className="bg-white p-4 rounded-2xl border border-[#D9A441]/30 text-left text-xs space-y-2">
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Donation Reference:</span>
                  <span className="font-mono font-bold text-[#176B45]">{donationRef}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Beneficiary:</span>
                  <span className="font-medium">Doris Kindness Kitchen CIC</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-bold text-[#104C31]">£{currentAmount}.00 GBP</span>
                </div>
                {giftAid && (
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-500">Gift Aid Added (+25%):</span>
                    <span className="font-medium text-emerald-700">+£{(currentAmount * 0.25).toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500">Confirmation Sent To:</span>
                  <span className="font-medium">{donorEmail || 'your email'}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 py-2.5 px-4 bg-white border border-[#D9A441]/40 rounded-xl text-xs font-semibold text-[#242923] hover:bg-[#FAF2E4] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 bg-[#176B45] text-white rounded-xl text-xs font-semibold hover:bg-[#104C31] transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
