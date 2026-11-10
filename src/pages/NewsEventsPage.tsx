import { useState } from 'react';
import {
  Calendar,
  Clock,
  ArrowRight,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  Search,
} from 'lucide-react';
import { PageId, ArticleItem, EventItem } from '../types';
import { ARTICLES, UPCOMING_EVENTS, IMAGES } from '../data/content';

interface NewsEventsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectArticle: (article: ArticleItem) => void;
}

export default function NewsEventsPage({ onNavigate, onSelectArticle }: NewsEventsPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'events'>('all');
  const [rsvpSuccess, setRsvpSuccess] = useState<string | null>(null);

  const handleRsvp = (eventId: string) => {
    setRsvpSuccess(eventId);
    setTimeout(() => {
      setRsvpSuccess(null);
    }, 3500);
  };

  const featuredArticle = ARTICLES[0];
  const regularArticles = ARTICLES.slice(1);

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Banner with Ken Burns Loop */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.dining}
            alt="Doris Kitchen News and Events"
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
            <span>News & Events</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            News, Events & Stories
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* FILTER TABS & STORIES - py-[60px] */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-[#D9A441]/30 pb-4 mb-10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#176B45] text-white shadow-md'
                  : 'bg-white text-[#596157] border border-gray-200 hover:border-[#D9A441]'
              }`}
            >
              All Updates
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-5 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-[#176B45] text-white shadow-md'
                  : 'bg-white text-[#596157] border border-gray-200 hover:border-[#D9A441]'
              }`}
            >
              Articles & Stories ({ARTICLES.length})
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-5 py-2.5 rounded-xl text-xs font-heading font-semibold transition-all cursor-pointer ${
                activeTab === 'events'
                  ? 'bg-[#176B45] text-white shadow-md'
                  : 'bg-white text-[#596157] border border-gray-200 hover:border-[#D9A441]'
              }`}
            >
              Upcoming Events ({UPCOMING_EVENTS.length})
            </button>
          </div>
        </div>

        {/* FEATURED STORY (when tab is all or news) */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div className="mb-14">
            <div
              onClick={() => onSelectArticle(featuredArticle)}
              className="bg-white rounded-3xl overflow-hidden border border-[#D9A441]/40 shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group transform hover:-translate-y-1"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#104C31] text-[#E7C071] px-4 py-1.5 rounded-full text-xs font-extrabold shadow-lg border border-[#D9A441]/30">
                  Featured Story
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#596157]">
                    <span className="text-[#176B45] font-semibold">{featuredArticle.category}</span>
                    <span>·</span>
                    <span>{featuredArticle.date}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#104C31] group-hover:text-[#B8852C] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-[#596157] leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#176B45] group-hover:text-[#B8852C]">
                  <span>Click to Read Complete Story</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID */}
        {(activeTab === 'all' || activeTab === 'news') && (
          <div className="mb-14">
            <h3 className="font-heading font-extrabold text-2xl text-[#104C31] mb-8">
              Recent News & Community Spotlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article) => (
                <div
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className="bg-white rounded-3xl overflow-hidden border border-[#D9A441]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group transform hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute top-3 left-3 bg-[#104C31] text-[#E7C071] text-[11px] font-bold px-3 py-1 rounded-full shadow">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#596157] mb-1">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h4 className="font-heading font-bold text-lg text-[#104C31] group-hover:text-[#B8852C] transition-colors leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#596157] mt-2 line-clamp-3 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#176B45]">
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-[#D9A441]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UPCOMING EVENTS SECTION */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div>
            <div className="max-w-2xl space-y-2 mb-8">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8852C]">
                COMMUNITY GATHERINGS
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#104C31]">
                Upcoming Events & Inductions
              </h3>
            </div>

            <div className="space-y-4">
              {UPCOMING_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl p-6 border border-[#D9A441]/30 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="bg-[#176B45] text-white rounded-2xl p-3 text-center min-w-[70px] shrink-0 border border-[#D9A441]/40 shadow-sm">
                      <Calendar className="w-5 h-5 mx-auto text-[#D9A441] mb-1" />
                      <span className="block text-xs font-bold leading-tight uppercase">Event</span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-[#B8852C] uppercase tracking-wider">
                        {event.category}
                      </span>
                      <h4 className="font-heading font-bold text-lg text-[#104C31]">
                        {event.title}
                      </h4>
                      <p className="text-xs text-[#596157] font-body max-w-xl leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[#596157] pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#D9A441]" />
                          {event.date} · {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#176B45]" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-end gap-2">
                    {rsvpSuccess === event.id ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#176B45] bg-[#176B45]/10 px-5 py-2.5 rounded-full border border-[#176B45]/20">
                        <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                        <span>Place Reserved!</span>
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRsvp(event.id)}
                        className="btn-sexy-gold px-6 py-2.5 text-xs cursor-pointer shadow"
                      >
                        Register to Attend (Free)
                      </button>
                    )}
                    {event.spotsLeft && (
                      <span className="text-[11px] text-[#596157]">
                        {event.spotsLeft} free spaces remaining
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
