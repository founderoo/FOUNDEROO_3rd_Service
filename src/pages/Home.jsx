
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
    },
    {
      question: "How does payment work on Founderoo?",
      answer: "You can Start by paying nothing and upgrade to a Paid Plan when you're ready to Purchase one-time service like Logo Design or Mentorship. Payments are safe, and invoices are always provided for transparency."
    },
    {
      question: 'Who is a "Head" in Founderoo?',
      answer: "A Head is an expert or mentor within our network, offering specialized services such as mentorship calls, branding and tech setup, funding preparation, and pitch deck reviews. You can explore their profile, read client reviews, and book sessions directly through the platform."
    },
    {
      question: "How does a Head determine their rate?",
      answer: "Each Head sets their own pricing based on the type of service offered—whether hourly, per session, or per project. Rates reflect their values, expertise, availability, and terms. You only pay for what you choose, with clear and transparent pricing displayed upfront."
    }
  ];

  return (
    <div className="min-h-screen relative bg-white dark:bg-background">
      {/* Chat Icon */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-[#5F2B8D] hover:bg-[#9333EA] text-white p-3 rounded-full shadow-lg transition-colors z-50 dark:bg-[#9333EA] dark:hover:bg-[#9333EA]/80"
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      <ChatbotDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Hero Section */}
      <Hero />

      {/* How It Works */}
      <section id="about" className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How Does Founderoo Provides Funding
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
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
                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-card h-full flex flex-col justify-between"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-[#5F2B8D] dark:text-[#9333EA] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{step.description}</p>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="font-semibold text-[#5F2B8D] dark:text-[#9333EA]">{step.fee}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{step.note}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-gray-50 dark:bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Hear from founders who turned their ideas into thriving businesses with Founderoo's support</p>
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-[#5F2B8D] dark:text-[#9333EA] font-medium">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.story}"</p>
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
      <section id="founder" className="py-20 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Founder's Vision</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">The visionary behind Founderoo</p>
          </div>

          <div className="flex justify-center">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-card max-w-2xl">
              <div className="relative">
                <CardHeader className="text-center relative z-10">
                  <div className="w-32 h-32 bg-[#5F2B8D] dark:bg-[#9333EA] rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {founder.image ? <img src={founder.image} alt={founder.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#5F2B8D] dark:group-hover:text-[#9333EA] transition-colors duration-300">{founder.name}</CardTitle>
                  <CardDescription className="text-[#5F2B8D] dark:text-[#9333EA] font-semibold text-lg">{founder.role}</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed text-center">{founder.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm bg-[#5F2B8D]/10 dark:bg-[#9333EA]/10 text-[#5F2B8D] dark:text-[#9333EA]">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center pt-4">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="group-hover:bg-[#5F2B8D]/10 dark:group-hover:bg-[#9333EA]/10 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-[#5F2B8D] dark:text-[#9333EA]" />
                      <span className="ml-2 text-gray-900 dark:text-white">Connect on LinkedIn</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50 dark:bg-background/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about the application process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-card">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#5F2B8D] dark:bg-[#5F2B8D]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F2B8D]/90 to-[#5F2B8D] dark:from-[#9333EA]/90 dark:to-[#9333EA]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Ready to Turn Your Idea
              <span className="block mt-2">Into Reality?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join hundreds of founders who have successfully launched their startups with Founderoo's support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/register")}
                className="group relative overflow-hidden rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#5F2B8D] dark:text-[#5F2B8D] shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:bg-[#FFD64A]"
              >
                <div className="absolute inset-0 bg-gray-50 transition-transform duration-200 group-hover:translate-x-full"></div>
                <span className="relative flex items-center gap-2">
                  Pay ₹499 & Apply Now
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center mt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white/90" />
                <span className="text-white/90">Personalized Mentorship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white/90" />
                <span className="text-white/90">Expert Network Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-white/90" />
                <span className="text-white/90">Funding Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
