
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { ArrowRight, Layout, MessageSquare, PieChart } from "lucide-react";
import SitReadingDoodle from "@/assets/SitReadingDoodle.png";
import ChatbotDialog from "@/components/ChatbotDialog";
import { useState } from "react";

export default function Hero() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleApplyNow = () => {
    if (user) {
      navigate("/founder-form");
    } else {
      navigate("/register");
    }
  };

  const handleStartClick = () => {
    navigate("/form");
  };

  return (
    <section className="relative bg-white pt-6 border-t-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
        {/* Hero Section with Two Columns */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 pt-4 lg:pt-0 z-10 lg:pl-0">
            {/* Main Heading */}
            <div className="content-group-spacing">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-high-contrast">
                <span className="block sm:inline">The Operating</span>{" "}
                <span className="block sm:inline">System for</span>
                <span className="block text-brand-purple">First Time Founders</span>
              </h1>

              {/* Fact Text - More compact */}
              <p className="text-base sm:text-lg lg:text-xl text-medium-contrast mt-4 leading-relaxed max-w-2xl">
                <span className="font-semibold">90%</span> of Startups fail due to poor execution.{" "}
                <span className="font-medium">Founderoo helps you avoid that trap.</span>
              </p>
            </div>

            {/* CTA Button - Positioned above the fold */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start mt-6">
              <div className="w-full sm:w-auto">
                <button
                  onClick={handleApplyNow}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-yellow-500 hover:to-yellow-600 text-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Get Funded
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Doodle Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-8 mt-6 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-100/50 rounded-full z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-100/50 rounded-full z-0"></div>
              <img
                src={SitReadingDoodle}
                alt="Founder Reading"
                className="relative max-w-full h-auto object-contain z-10"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards - Centered Layout */}
      <div id="feature" className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 section-spacing">
        <h2 className="heading-h2 section-heading heading-spacing-large">Our Core Features</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl-token">
          {/* Pitch OS Card - Using brand purple with gradient */}
          <div className="group relative bg-gradient-to-br from-brand-purple-100 to-brand-purple-200 rounded-xl-token overflow-hidden border border-brand-purple shadow-md-token card-hover lg:col-span-2">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative card-padding h-full flex flex-col min-h-[240px]">
              <div className="flex items-center justify-between mb-md-token">
                <h3 className="heading-h3 feature-card-heading">
                  Pitch OS
                </h3>
                <div className="w-12 h-12 bg-brand-purple-300 rounded-lg-token flex items-center justify-center group-hover:bg-brand-purple-400 transition-colors duration-300">
                  <PieChart className="h-6 w-6 text-brand-purple-600" />
                </div>
              </div>
              <p className="body-text-large feature-card-text mb-md-token flex-1">
                Build comprehensive business models and startup roadmaps with precision.
                Get investor-ready pitch decks and financial projections.
              </p>
              <div className="flex items-center text-brand-purple-600 font-semibold-token group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3">Start Building</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Ask Founderoo Card - Using brand yellow with gradient */}
          <div
            onClick={() => setIsChatOpen(true)}
            className="group relative bg-gradient-to-br from-brand-yellow-100 to-brand-yellow-200 rounded-xl-token overflow-hidden border border-brand-yellow shadow-md-token card-hover cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative card-padding h-full flex flex-col min-h-[240px]">
              <div className="flex items-center justify-between mb-md-token">
                <h3 className="heading-h3 feature-card-heading">
                  Ask Founderoo
                </h3>
                <div className="w-12 h-12 bg-brand-yellow-300 rounded-lg-token flex items-center justify-center group-hover:bg-brand-yellow-400 transition-colors duration-300">
                  <MessageSquare className="h-6 w-6 text-brand-purple-600" />
                </div>
              </div>
              <p className="body-text feature-card-text mb-md-token flex-1">
                Get personalized advice from our AI assistant trained on startup best practices.
              </p>
              <div className="flex items-center text-brand-purple-600 font-semibold-token group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3">Ask Now</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Cofounder Matchmaking Card - Using brand purple light variant */}
          <div className="group relative bg-gradient-to-br from-brand-purple-50 to-brand-purple-100 rounded-xl-token overflow-hidden border border-brand-purple-200 shadow-md-token card-hover lg:col-span-3">
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative card-padding h-full flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[120px]">
              <div className="lg:flex-1 lg:pr-xl-token">
                <div className="flex items-center mb-md-token">
                  <h3 className="heading-h3 feature-card-heading mr-md-token">
                    Cofounder Matchmaking
                  </h3>
                  <div className="w-12 h-12 bg-brand-purple-200 rounded-lg-token flex items-center justify-center group-hover:bg-brand-purple-300 transition-colors duration-300">
                    <Layout className="h-6 w-6 text-brand-purple-600" />
                  </div>
                </div>
                <p className="body-text feature-card-text mb-md-token lg:mb-0">
                  Identifying someone who shares your vision and complements your skills to build a successful startup.
                </p>
              </div>
              <div className="flex items-center text-brand-purple-600 font-semibold-token group-hover:translate-x-2 transition-transform duration-300 lg:flex-shrink-0">
                <button
                  onClick={handleStartClick}
                  className="bg-brand-purple-200 hover:bg-brand-purple-300 px-10 py-3 w-48 rounded-lg transition-colors duration-300 mr-12 ml-4"
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Dialog */}
      <ChatbotDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </section>
  );
}
