
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { ChevronDown, Star, Users, Target, Rocket, CheckCircle, ArrowRight, Linkedin, User, MessageCircle } from "lucide-react";
import ChatbotDialog from "@/components/ChatbotDialog";
import { useNavigate } from "react-router-dom";
import Ceo from "@/assets/Ceo.png";
import cpo from "@/assets/cpo.png";
import hr from "@/assets/hr.png";
import cto from "@/assets/cto.png";
import NarendraNarayan from "@/assets/Narendra-Narayan.jpg";
import krish from "@/assets/krish.png";
import ravi from "@/assets/ravi.jpg";

export default function Home() {
  const { user } = useAuthStore();
  const [openFaq, setOpenFaq] = useState(null);
  const [currentText, setCurrentText] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText(prev => (prev === 0 ? 1 : 0));
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(timer);
  }, []);
  const navigate = useNavigate();



  const handleApplyNow = () => {
    if (user) {
      navigate("/founder-form");
    } else {
      navigate("/register");
    }
  };

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
      answer: "FOUNDEROO is an operating system for First-time Founders. We provide everything—from Startup Idea Validation, Tools, Templates, and Mentorship—to help you go from Concept to Clarity and Launching Confidently."
    },
    {
      question: " Whom is Founderoo for?",
      answer: "FOUNDEROO is built especially for the First-time Founders who Have an Idea but don’t know From Where to Start , Need a Roadmap to Build a Digital Business or Startup , Want access to Tools, Templates, and Real-Time Guidance to Grow Sustainabily"
    },
    {
      question: "Whom does Founderoo work for?",
      answer: "FOUNDEROO is built specifically for First-time Founders, Solo Entrepreneurs, Studentpreneurs, and anyone with an Idea who wants a structured help to build the Startup."
    },
    {
      question: "Does Founderoo provide any special opportunity for first-time founders?",
      answer: "FOUNDEROO offers a Free plan for First-time Founders to access essential tools for a Startup to Grow. Paid upgrades are available for Advanced Features, Premium Resources, or Mentorship Access."
    },
    {
      question: "How does Founderoo help me build a Brand?",
      answer: "FOUNDEROO provides you a Complete Brand-Building Toolkit including Software. We help you go from “Idea” to “Brand that Speaks.”"
    },
    {
      question: " How does payment work on Founderoo?",
      answer: "You can Start by paying nothing and upgrade to a Paid Plan when you’re ready to Purchase one-time service like Logo Design or Mentorship.Payments are safe, and invoices are always provided for transparency."
    },
    {
      question: "Who is a “Head” in Founderoo?",
      answer: "A Head is an expert or mentor within our network, offering specialized services such as mentorship calls, branding and tech setup, funding preparation, and pitch deck reviews. You can explore their profile, read client reviews, and book sessions directly through the platform."
    },
    {
      question: "How does a Head determine their rate?",
      answer: "Each Head sets their own pricing based on the type of service offered—whether hourly, per session, or per project. Rates reflect their values, expertise, availability, and terms. You only pay for what you choose, with clear and transparent pricing displayed upfront."
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Chat Icon */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      <ChatbotDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] bg-primary/5 dark:bg-primary/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold mb-6">
              <div className="text-foreground">The Operating System</div>
              <div className="text-foreground mt-2">for Founders</div>
            </h1>
            <p className="text-3xl sm:text-4xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
{/*               <TypewriterEffectSmooth
                className="text-3xl sm:text-4xl"
                words={[
                  { text: "Direction", className: "text-muted-foreground/90" },
                  { text: "for", className: "text-muted-foreground/90" },
                  { text: "Every", className: "text-muted-foreground/90" },
                  { text: "Dream", className: "text-muted-foreground/90" }
                ]}
                cursorClassName="bg-primary"
              /> */}
               <TypewriterEffectSmooth
                className="text-3xl sm:text-4xl"
                words={[
                  { text: "For The", className: "text-muted-foreground/90" },
                  { text: "Founders", className: "text-muted-foreground/90" },
                  { text: "By The", className: "text-muted-foreground/90" },
                  { text: "Founders", className: "text-muted-foreground/90" }
                ]}
                cursorClassName="bg-primary"
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleApplyNow}
                className="bg-primary text-primary-foreground hover:bg-yellow-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 rounded-lg flex items-center gap-2"
              >
                Get Funded
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {/* Startup Planner */}
            <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Pitch OS</h3>
                <p className="text-muted-foreground">Map out your Business model and Startup roadmap</p>
              </div>
            </div>

            {/* Founder Docs */}
            <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded flex flex-col">
                  <div className="flex-1 border-b border-white"></div>
                  <div className="flex-1 border-b border-white"></div>
                  <div className="flex-1"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Founder Docs</h3>
                <p className="text-muted-foreground">Generate and manage your key Startup Documents</p>
              </div>
            </div>

            {/* Tasks */}
            <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-3 h-0.5 bg-white rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-3 h-0.5 bg-white rounded"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-3 h-0.5 bg-white rounded"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tasks</h3>
                <p className="text-muted-foreground">Organize and track your to-dos and milestones</p>
              </div>
            </div>

            {/* Ask Founderoo */}
            <div className="flex items-start gap-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ask Founderoo</h3>
                <p className="text-muted-foreground">Get answers and advice from our AI assistant</p>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center items-center py-12">
              <p className="text-muted-foreground text-2xl font-semibold max-w-3xl text-center mx-auto">
                90% of Startups fail - not because of bad ideas, but because of bad Execution. Founderoo helps First-time Founders avoid that trap.
              </p>
            </div>
          </div>
        </div>
      </section>

     
{/* How It Works */}
<section id="about" className="py-24 bg-background dark:bg-background/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-foreground mb-4">
        How Does Founderoo Provides Funding
      </h2>
      <p className="text-xl text-muted-foreground">
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
          className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full flex flex-col justify-between"
        >
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              {step.step}
            </div>
            <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              {step.icon}
            </div>
            <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground dark:text-muted-foreground/90 mb-6">{step.description}</p>
            <div className="p-4 bg-primary/10 rounded-lg">
              <div className="font-semibold text-primary">{step.fee}</div>
              <div className="text-sm text-muted-foreground">{step.note}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
      {/* Success Stories */}
      <section id="success-stories" className="py-24 bg-muted/50 dark:bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from founders who turned their ideas into thriving businesses with Founderoo's support</p>
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
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/50 shadow-lg bg-card/95 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="text-lg font-bold">{testimonial.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-muted-foreground/90 mb-4 italic">"{testimonial.story}"</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* founder section  */}
       <section id="founder" className="py-24 bg-background dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4"> Founder's Vision</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300">The visionary behind Founderoo</p>
          </div>

          <div className="flex justify-center">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 shadow-lg overflow-hidden bg-card/95 backdrop-blur-sm max-w-2xl dark:bg-black/90">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {founder.image ? <img src={founder.image} alt={founder.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 dark:text-white">{founder.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">{founder.role}</CardDescription>
                </CardHeader>
              </div>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground dark:text-gray-300 text-base leading-relaxed text-center">{founder.description}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {founder.expertise.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center pt-4">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span className="ml-2 dark:text-white">Connect on LinkedIn</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-24 bg-muted/50 dark:bg-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about the application process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-border/50 shadow-md bg-card/95 backdrop-blur-sm">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold text-foreground">{faq.question}</CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Turn Your Idea Into Reality?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of founders who have successfully launched their startups with Founderoo's support.</p>
          <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-yellow-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={handleApplyNow}>
            Pay ₹499 & Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
    </div>
  );
}
