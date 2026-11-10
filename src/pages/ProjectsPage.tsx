import { useState } from 'react';
import {
  Sparkles,
  MapPin,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Heart,
  HelpCircle,
} from 'lucide-react';
import { PageId } from '../types';
import { PROJECTS, IMAGES } from '../data/content';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonate: () => void;
}

export default function ProjectsPage({ onNavigate, onOpenDonate }: ProjectsPageProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Seasonal Emergency Relief', 'Child & Family Nutrition', 'Social Connection & Community', 'Elderly & Disability Outreach'];

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="w-full pt-28 sm:pt-32 bg-[#FFF8ED]">
      {/* Header Banner */}
      <section className="relative py-[60px] bg-[#104C31] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25 overflow-hidden">
          <img
            src={IMAGES.dining}
            alt="Doris Kitchen community projects"
            className="w-full h-full object-cover filter brightness-75 animate-ken-burns"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E7C071] uppercase tracking-widest">
            <button onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Community Projects</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Our Community Projects
          </h1>
          <p className="text-base sm:text-lg text-[#FFF8ED]/90 max-w-2xl font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>

      {/* FILTER BAR & PROJECTS GRID (60px) */}
      <section className="py-[60px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#176B45] text-white shadow-md border border-[#D9A441]'
                  : 'bg-white text-[#596157] border border-[#D9A441]/35 hover:border-[#D9A441]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`bg-white rounded-3xl overflow-hidden border border-[#D9A441]/35 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5 ${
                idx % 2 === 0 ? 'animate-float-gentle' : ''
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-108"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#104C31] text-[#E7C071] px-3.5 py-1 rounded-full text-xs font-bold shadow-md border border-[#D9A441]/40">
                    {project.category}
                  </span>
                  <span className="bg-[#D9A441] text-[#104C31] px-2.5 py-1 rounded-full text-xs font-extrabold shadow-md">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-[#104C31]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#596157] mt-3 leading-relaxed font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2 text-xs text-[#596157]">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#D9A441] shrink-0" />
                    <span><strong>Beneficiaries:</strong> {project.targetBeneficiaries}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#176B45] shrink-0" />
                    <span><strong>Location:</strong> {project.location}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={onOpenDonate}
                    className="btn-sexy-gold px-5 py-2.5 text-xs flex items-center gap-1.5"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current text-red-700" />
                    <span>Sponsor Project</span>
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-xs font-bold text-[#176B45] hover:text-[#B8852C] transition-colors cursor-pointer"
                  >
                    Enquire about partnership →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT ENQUIRY CTA (60px) */}
      <section className="py-[60px] bg-[#176B45] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <HelpCircle className="w-10 h-10 text-[#D9A441] mx-auto animate-pulse" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Have an Idea for a Community Initiative?
          </h2>
          <p className="text-base text-[#FFF8ED]/85 max-w-xl mx-auto font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-sexy-gold px-8 py-3.5 text-xs sm:text-sm mx-auto"
            >
              Submit a Community Project Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
