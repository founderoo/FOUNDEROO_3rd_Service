import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleApplyNow = () => {
    if (user) {
      navigate("/founder-form");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white dark:bg-background pt-16 mt-0 border-t-0">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-background/50 dark:to-background"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto px-2">
              <span className="text-gray-900 dark:text-white">
                The Operating System 
              </span>
              <span className="block mt-2 text-[#5F2B8D] dark:text-[#9333EA]">
                for Founders
              </span>
            </h1>
            <div className="min-h-[8rem] sm:min-h-[6rem] flex justify-center items-center py-4 px-2">
              <div className="w-full px-0">
                <TypewriterEffectSmooth
                  words={[
                    { text: "For The", className: "text-gray-600 dark:text-gray-300" },
                    { text: "Founders", className: "text-[#5F2B8D] dark:text-[#9333EA]" },
                    { text: "By The", className: "text-gray-600 dark:text-gray-300" },
                    { text: "Founders", className: "text-[#5F2B8D] dark:text-[#9333EA]" }
                  ]}
                  cursorClassName="bg-[#5F2B8D] dark:bg-[#9333EA]"
                />
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleApplyNow}
              className="group relative overflow-hidden rounded-lg bg-[#5F2B8D] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:bg-[#9333EA]"
            >
              <div className="absolute inset-0 bg-white/10 transition-transform duration-200 group-hover:translate-x-full"></div>
              <span className="relative flex items-center gap-2">
                Get Funded
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16 max-w-4xl mx-auto">
            {/* Pitch OS */}
            <div className="group p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-sm"></div>
                    <div className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-sm"></div>
                    <div className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-sm"></div>
                    <div className="w-2 h-2 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-sm"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA] transition-colors">Pitch OS</h3>
                  <p className="text-gray-600 dark:text-gray-300">Map out your Business model and Startup roadmap</p>
                </div>
              </div>
            </div>

            {/* Founder Docs */}
            <div className="group p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="w-6 h-6 border-2 border-[#5F2B8D] dark:border-[#9333EA] rounded flex flex-col">
                    <div className="flex-1 border-b border-[#5F2B8D] dark:border-[#9333EA]"></div>
                    <div className="flex-1 border-b border-[#5F2B8D] dark:border-[#9333EA]"></div>
                    <div className="flex-1"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA] transition-colors">Founder Docs</h3>
                  <p className="text-gray-600 dark:text-gray-300">Generate and manage your key Startup Documents</p>
                </div>
              </div>
            </div>

            {/* Tasks */}
            <div className="group p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full"></div>
                      <div className="w-3 h-0.5 bg-[#5F2B8D] dark:bg-[#9333EA] rounded"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full"></div>
                      <div className="w-3 h-0.5 bg-[#5F2B8D] dark:bg-[#9333EA] rounded"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full"></div>
                      <div className="w-3 h-0.5 bg-[#5F2B8D] dark:bg-[#9333EA] rounded"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA] transition-colors">Tasks</h3>
                  <p className="text-gray-600 dark:text-gray-300">Organize and track your to-dos and milestones</p>
                </div>
              </div>
            </div>

            {/* Ask Founderoo */}
            <div className="group p-6 bg-white dark:bg-card rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#5F2B8D]/10 dark:bg-[#9333EA]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#5F2B8D]/20 dark:group-hover:bg-[#9333EA]/30 transition-colors">
                  <div className="w-6 h-6 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA] transition-colors">Ask Founderoo</h3>
                  <p className="text-gray-600 dark:text-gray-300">Get answers and advice from our AI assistant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="max-w-3xl mx-auto mt-16 px-4">
            <div className="relative p-6 sm:p-8 bg-white dark:bg-card rounded-2xl shadow-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block px-4 py-2 bg-[#5F2B8D] dark:bg-[#9333EA] text-white text-sm font-medium rounded-full shadow-sm">
                  Did you know?
                </span>
              </div>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium text-center leading-relaxed">
                <span className="text-[#5F2B8D] dark:text-[#9333EA] font-bold">90%</span> of Startups fail - not because of bad ideas, but because of bad Execution.{" "}
                <span className="text-[#5F2B8D] dark:text-[#9333EA] font-semibold">Founderoo helps First-time Founders avoid that trap.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
