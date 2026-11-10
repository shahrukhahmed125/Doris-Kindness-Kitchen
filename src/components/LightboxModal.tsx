import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryPhoto } from '../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export default function LightboxModal({ photo, photos, onClose, onSelectPhoto }: LightboxModalProps) {
  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 hidden sm:block"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 hidden sm:block"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-[#104C31] rounded-2xl overflow-hidden border border-[#D9A441]/40 shadow-2xl flex flex-col"
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black/40 flex items-center justify-center overflow-hidden">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="p-6 bg-[#104C31] text-[#FFF8ED] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#D9A441]/20">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#E7C071] mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>{photo.category}</span>
              {photo.date && <span>· {photo.date}</span>}
            </div>
            <h3 className="font-heading font-bold text-xl text-white">
              {photo.title}
            </h3>
            <p className="text-sm text-[#FFF8ED]/80 mt-1 max-w-xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="text-xs text-[#FFF8ED]/60 shrink-0 font-mono">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </div>
    </div>
  );
}
