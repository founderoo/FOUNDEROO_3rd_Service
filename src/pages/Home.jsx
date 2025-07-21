
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, Star, Users, Target, Rocket, CheckCircle, ArrowRight, Linkedin, User, MessageCircle } from "lucide-react";
import ChatbotDialog from "@/components/ChatbotDialog";
import Hero from "@/components/Hero";
import { useNavigate } from "react-router-dom";
import Ceo from "@/assets/Ceo.png";
import cpo from "@/assets/cpo.png";
import hr from "@/assets/hr.png";
import cto from "@/assets/cto.png";
import NarendraNarayan from "@/assets/Narendra-Narayan.jpg";
import krish from "@/assets/krish.png";
import ravi from "@/assets/ravi.jpg";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const founder = {
    name: "Ramanand Thakur",
    role: "Founder & CEO",
    image: Ceo,
    description: "Ramanand is the visionary behind the Founderoo. With a sharp eye for innovation and deep understanding of Startup's future he is dedicatedly contributing towards Bihar's changing startup ecosystem. Bold, strategic and always future focused, he is igniting a movement of Brand - first entrepreneurship.",
    expertise: ["CompanyVision", "Leadership", "Fundraising", "Branding", "Market Research"],
    linkedin: "https://www.linkedin.com/in/ramanand-thakur"
  };

  const faqs = [
    {
      question: "What is Founderoo?",
      answer: "FOUNDEROO is an operating system for First-time Founders. We provide everything—from Startup Idea Validation, Tools, Templates, and Mentorship—to help you go from Concept to Clarity and Launching Confidently."
    },
    {
      question: "Whom is Founderoo for?",
      answer: "FOUNDEROO is built especially for the First-time Founders who Have an Idea but don't know From Where to Start , Need a Roadmap to Build a Digital Business or Startup , Want access to Tools, Templates, and Real-Time Guidance to Grow Sustainabily"
    },
    {
      question: "Whom does Founderoo work for?",
      answer: "FOUNDEROO is built specifically for First-time Founders, Solo Entrepreneurs, Studentpreneurs, and anyone with an Idea who wants a structured help to build the Startup."
    },
    {
      question: "Does Founderoo provide any special opportunity for first-time founders?",
      answer: "FOUNDEROO offers a Free plan for First-time Founders to access essential tools for a Startup to Grow. Paid upgrades are available for Advanced Features, Premium Resources, or Mentorship Access."
    },
    {
      question: 'How does Founderoo help me build a Brand?',
      answer: 'FOUNDEROO provides you a Complete Brand-Building Toolkit including Software. We help you go from "Idea" to "Brand that Speaks."'
    }
  ];

  return (
    <div className="min-h-screen relative bg-white dark:bg-background">
      {/* Chat Icon */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-yellow-500 hover:to-yellow-600 text-white hover:text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[52] transform hover:scale-110"
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      <ChatbotDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <section id="about" className="py-2xl-token bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-md-token lg:px-3xl-token">
          <div className="text-center mb-2xl-token">
            <h2 className="heading-h2 section-heading mb-lg-token">
              How Does Founderoo Provides Funding
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 section-heading">
              Three simple steps to turn your idea into a Funded Startup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                step: "1",
                title: "Apply Now",
                description: "Submit your Startup Idea, Our Team will review your application thoroughly",
                fee: "₹499 registration fee",
                note: "Non-refundable application review",
                icon: <Target className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Shortlisted?",
                description: "If selected in first round, you will be interviewed by our Investment Committee and Expert Mentors.",
                fee: "₹1,999 for final interview",
                note: "50% refundable if not selected",
                icon: <Users className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Get Funded",
                description: "Selected Founders will receive Funding, Personalized Mentorship, and access to our extensive network of industry experts.",
                fee: "Access to Capital",
                note: "Plus mentorship and network",
                icon: <Rocket className="h-8 w-8" />
              }
            ].map((step) => (
              <Card
                key={step.step}
                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-card h-full flex flex-col justify-between rounded-3xl"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-[#5F2B8D] dark:text-[#9333EA] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="heading-h3 text-center text-gray-900 dark:text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 body-text-align">{step.description}</p>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                    <div className="font-semibold text-[#5F2B8D] dark:text-[#9333EA] text-center">{step.fee}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 text-center">{step.note}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-2xl-token bg-gray-50 dark:bg-background/80">
        <div className="max-w-7xl mx-auto px-md-token lg:px-3xl-token">
          <div className="text-center mb-2xl-token">
            <h2 className="heading-h2 section-heading mb-lg-token">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 section-heading">Hear from founders who turned their ideas into thriving businesses with Founderoo's support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Narendra Narayan",
                role: "Founder, NxG",
                story: "Founderoo believed in my music composing  idea when no one else did. With their ₹15 lakh funding and mentorship, we've grown to serve 2 cities in just 3 months.",
                avatar: NarendraNarayan
              },
              {
                name: "Krish",
                role: "CEO, Board ki Padhai",
                story: "I was just a college student with a Board tutoring idea. Founderoo not only funded us with ₹10 lakhs but connected me with ED-tech industry veterans who helped refine our product. We now have 50,000+ users!",
                avatar: krish
              },
              {
                name: "Ravi Prakash",
                role: "Founder, Homo",
                story: "The ₹499 application fee was the best investment I ever made. Founderoo funded my Hospitality idea with ₹10 lakhs and their mentors helped us navigate regulatory challenges. We're now expanding nationwide.",
                avatar: ravi
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-card rounded-3xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="heading-h3 text-center text-gray-900 dark:text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-[#5F2B8D] dark:text-[#9333EA] font-medium">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic body-text-align">"{testimonial.story}"</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFD64A] fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* founder section  */}
      <section id="founder" className="relative py-2xl-token lg:py-3xl-token bg-gray-50 dark:bg-neutral-900 overflow-hidden">
        {/* Decorative background shapes */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[900px] bg-[#5F2B8D] dark:bg-[#9333EA] opacity-5 rounded-full z-0"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-md-token sm:px-lg-token lg:px-3xl-token flex flex-col lg:flex-row items-center gap-16 z-10">

          {/* Founder Image */}
          <div className="w-full lg:w-[42%] flex justify-center lg:justify-end mb-12 lg:mb-0">
            <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-800 bg-white">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-[340px] h-[420px] object-cover object-top"
              />
            </div>
          </div>

          {/* Founder Info */}
          <div className="w-full lg:w-[58%] flex flex-col justify-center">
            <h2 className="heading-h1 body-text-align mb-3">
              {founder.name.split(" ")[0]}<br />
              <span className="text-[#FFD64A]">{founder.name.split(" ")[1]}</span>
            </h2>
            <h3 className="heading-h3 body-text-align mb-6">{founder.role}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-120 mb-7 max-w-2xl body-text-align">
              {founder.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {founder.expertise.map((skill, i) => (
                <Badge key={i} className="bg-[#F4F3F8] text-[#5F2B8D] border-none dark:bg-white/10 dark:text-white text-[14px] font-semibold">
                  {skill}
                </Badge>
              ))}
            </div>
            <div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-transparent border-2 border-[#5F2B8D] text-[#5F2B8D] hover:bg-[#5F2B8D] hover:text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimal and compact */}
      <section id="faq" className="py-16 bg-gray-50 dark:bg-background/80">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300">Everything you need to know about the application process</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-card overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact and prominent */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#5F2B8D] dark:bg-[#5F2B8D]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F2B8D]/90 to-[#5F2B8D] dark:from-[#9333EA]/90 dark:to-[#9333EA]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Turn Your Idea Into Reality?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Join hundreds of founders who have successfully launched their startups with Founderoo's support.
              </p>
            </div>
            
            {/* Primary CTA with enhanced prominence */}
            <div className="flex justify-center py-4">
              <button
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-white/90" />
                <span className="text-white/90">Personalized Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-white/90" />
                <span className="text-white/90">Expert Network Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-white/90" />
                <span className="text-white/90">Funding Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
