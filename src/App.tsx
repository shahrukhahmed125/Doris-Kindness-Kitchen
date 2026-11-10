import { useState, useEffect } from 'react';
import { PageId, ArticleItem, GalleryPhoto } from './types';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';
import VolunteerModal from './components/VolunteerModal';
import ArticleModal from './components/ArticleModal';
import LightboxModal from './components/LightboxModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MissionVisionPage from './pages/MissionVisionPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import FundraisingPage from './pages/FundraisingPage';
import PartnersPage from './pages/PartnersPage';
import NewsEventsPage from './pages/NewsEventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { GALLERY_PHOTOS } from './data/content';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donateModalAmount, setDonateModalAmount] = useState<number>(25);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [volunteerModalRole, setVolunteerModalRole] = useState<string>('Kitchen Assistant & Meal Prep');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDonate = (amount?: number) => {
    if (amount) setDonateModalAmount(amount);
    setDonateModalOpen(true);
  };

  const handleOpenVolunteer = (role?: string) => {
    if (role) setVolunteerModalRole(role);
    setVolunteerModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8ED] text-[#242923] relative font-body selection:bg-[#D9A441]/30 selection:text-[#176B45]">
      {/* 1. Full-screen Branded Preloader */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* 2. Global Advanced Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate(25)}
      />

      {/* 3. Main Page Content View */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
            onOpenVolunteer={() => handleOpenVolunteer()}
            onSelectArticle={setSelectedArticle}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
            onOpenVolunteer={() => handleOpenVolunteer()}
          />
        )}

        {currentPage === 'mission' && (
          <MissionVisionPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'donate' && (
          <DonatePage
            onNavigate={handleNavigate}
            onOpenDonate={handleOpenDonate}
          />
        )}

        {currentPage === 'volunteer' && (
          <VolunteerPage
            onNavigate={handleNavigate}
            onOpenVolunteer={handleOpenVolunteer}
          />
        )}

        {currentPage === 'fundraising' && (
          <FundraisingPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'partners' && (
          <PartnersPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'news' && (
          <NewsEventsPage
            onNavigate={handleNavigate}
            onSelectArticle={setSelectedArticle}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onSelectPhoto={setSelectedPhoto}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenDonate={() => handleOpenDonate(25)}
          />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicyPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 4. Global Multi-column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDonate={() => handleOpenDonate(25)}
      />

      {/* 5. Global Interactive Modals */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialAmount={donateModalAmount}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
        defaultRole={volunteerModalRole}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenDonate={() => handleOpenDonate(25)}
      />

      <LightboxModal
        photo={selectedPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={setSelectedPhoto}
      />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-[#176B45] hover:bg-[#104C31] text-[#D9A441] shadow-xl border border-[#D9A441]/40 transition-all duration-200 cursor-pointer hover:scale-110"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
