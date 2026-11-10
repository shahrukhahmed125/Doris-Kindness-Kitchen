import { useState } from 'react';
import { Sparkles, Maximize2, Tag, Calendar, Heart } from 'lucide-react';
import { PageId, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS, IMAGES } from '../data/content';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export default function GalleryPage({ onNavigate, onSelectPhoto }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Kitchen & Cooking',
    'Food Distribution',
    'Community Meals',
    'Volunteers',
  ];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Banner with Ken Burns Loop */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.hero}
            alt="Doris Kitchen Photo Gallery"
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
            <span>Gallery</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Community Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* FILTER TABS & PHOTO MASONRY - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#176B45] text-white shadow-md ring-2 ring-[#D9A441]/40'
                  : 'bg-white text-[#596157] border border-[#D9A441]/30 hover:border-[#D9A441] hover:text-[#176B45]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative bg-white rounded-3xl overflow-hidden border border-[#D9A441]/30 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#104C31]/95 via-[#104C31]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-[#E7C071] uppercase tracking-wider block mb-1">
                        {photo.category}
                      </span>
                      <h4 className="font-heading font-extrabold text-lg leading-tight text-white">
                        {photo.title}
                      </h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/30 shadow-lg group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-4 h-4 text-[#E7C071]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#FFF8ED]/90 mt-2 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>

              {/* Subdued footer below photo for standard view */}
              <div className="p-4 bg-white flex items-center justify-between text-xs text-[#596157]">
                <span className="font-semibold text-[#104C31] truncate mr-2">{photo.title}</span>
                <span className="shrink-0 text-[11px] font-medium text-[#B8852C] bg-[#FAF2E4] px-2 py-0.5 rounded-full border border-[#D9A441]/20">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-[#596157] italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
    </div>
  );
}
