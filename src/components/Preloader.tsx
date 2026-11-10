import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LOGO_URL } from '../data/content';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setProgress(100);
    setIsFinished(true);
    setTimeout(onComplete, 400);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#176B45] text-[#FFF8ED] px-6 select-none overflow-hidden"
        >
          {/* Subtle background decorative radiance */}
          <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D9A441] via-transparent to-transparent" />

          {/* Centered Brand Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center text-center relative z-10 max-w-md w-full"
          >
            {/* Logo in pristine framed card to showcase original artwork and colors */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl mb-8 border-2 border-[#D9A441]/40 flex items-center justify-center">
              <img
                src={LOGO_URL}
                alt="Doris Kindness Kitchen CIC Logo"
                className="w-48 sm:w-56 h-auto object-contain"
              />
            </div>

            {/* Circular gold progress indicator */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#104C31"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#D9A441"
                  strokeWidth="6"
                  strokeDasharray="263.89"
                  strokeDashoffset={263.89 - (263.89 * progress) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-150 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-heading font-semibold text-xl text-[#FFF8ED] tracking-tight">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Animated Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg font-medium tracking-wide text-[#E7C071] mb-2"
            >
              Feeding Hope, Sharing Love and Changing Lives.
            </motion.p>
            <p className="text-xs uppercase tracking-widest text-[#FFF8ED]/70 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </motion.div>

          {/* Skip button for user convenience */}
          <button
            onClick={handleSkip}
            className="absolute bottom-8 text-xs text-[#FFF8ED]/60 hover:text-[#D9A441] underline-offset-4 hover:underline transition-colors tracking-wider uppercase font-medium cursor-pointer"
          >
            Enter Website
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
