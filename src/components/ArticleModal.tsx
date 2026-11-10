import { X, Calendar, Clock, User, Share2, Heart, ArrowLeft } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenDonate: () => void;
}

export default function ArticleModal({ article, onClose, onOpenDonate }: ArticleModalProps) {
  if (!article) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#FFF8ED] rounded-3xl shadow-2xl border border-[#D9A441]/40 overflow-hidden text-[#242923] my-8 max-h-[90vh] flex flex-col"
      >
        {/* Top bar */}
        <div className="bg-[#176B45] text-white px-6 py-4 flex items-center justify-between border-b border-[#D9A441]/30">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-medium text-[#FFF8ED]/80 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#596157] font-medium">
            <span className="text-[#176B45] font-semibold uppercase tracking-wider">
              {article.category}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#D9A441]" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#104C31] leading-tight">
            {article.title}
          </h2>

          <div className="flex items-center gap-3 pb-6 border-b border-[#D9A441]/20">
            <div className="w-10 h-10 rounded-full bg-[#176B45]/15 flex items-center justify-center text-[#176B45]">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#242923]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-[11px] text-[#596157]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Excerpt */}
          <p className="text-base sm:text-lg font-serif italic text-[#176B45] leading-relaxed bg-[#FAF2E4] p-5 rounded-2xl border-l-4 border-[#D9A441]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#242923] leading-relaxed font-body">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            ))}
          </div>

          {/* Call to action card */}
          <div className="mt-8 p-6 bg-[#176B45] text-white rounded-2xl border border-[#D9A441]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-lg text-white">
                Help Us Keep Telling These Stories
              </h4>
              <p className="text-xs text-[#FFF8ED]/80 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenDonate();
              }}
              className="bg-[#D9A441] hover:bg-[#B8852C] text-[#242923] hover:text-white px-5 py-2.5 rounded-full font-heading font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 cursor-pointer shadow"
            >
              <Heart className="w-4 h-4 fill-current text-red-700" />
              <span>Donate to Doris Kitchen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
