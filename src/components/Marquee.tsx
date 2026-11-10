import { Sparkles, Heart } from 'lucide-react';

interface MarqueeProps {
  reverse?: boolean;
  text?: string;
  theme?: 'green' | 'cream' | 'gold';
  className?: string;
}

export default function Marquee({
  reverse = false,
  text = 'FEEDING HOPE • SHARING LOVE • CHANGING LIVES • TOGETHER WE MAKE A DIFFERENCE',
  theme = 'green',
  className = '',
}: MarqueeProps) {
  const items = Array(8).fill(text);

  const themeClasses = {
    green: 'bg-[#176B45] text-[#FFF8ED] border-y border-[#D9A441]/40',
    cream: 'bg-[#FAF2E4] text-[#176B45] border-y border-[#D9A441]/30',
    gold: 'bg-[#D9A441] text-[#242923] border-y border-[#176B45]/20',
  }[theme];

  return (
    <div
      className={`relative w-full overflow-hidden py-3.5 sm:py-4 select-none ${themeClasses} ${className}`}
      aria-hidden="true"
    >
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        {items.map((str, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-3 sm:mx-4 shrink-0">
            <span className="font-heading font-semibold text-xs sm:text-sm md:text-base tracking-widest uppercase">
              {str}
            </span>
            <span className="text-[#D9A441] inline-flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
