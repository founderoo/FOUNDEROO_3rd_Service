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
    }, 4000);
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
    description: "Ramanand is the visionary behind the Founderoo. With a sharp eye for innovation and deep understanding of startup's future he is dedicatedly contributing towards Bihar's changing startup ecosystem. Bold, strategic and always future focused, he is igniting a movement of Brand - first entrepreneurship.",
    expertise: ["CompanyVision", "Leadership", "Fundraising", "Branding", "Market Research"],
    linkedin: "https://www.linkedin.com/in/ramanand-thakur"
  };

  const teamMembers = [
    {
      name: "Tannu Priya",
      role: "CPO",
      image: cpo,
      description: "The Chief People Officer at Founderoo, she brings heart and strategy together.With a background in development and management, she understands both people and systems.Her expertise in marketing, human resource management, and founder evaluation drives real impact.At Founderoo, she ensures that every decision begins and ends with people.",
      expertise: ["strategy", "marketing", "human resource management"],
      linkedin: "https://www.linkedin.com/in/tannu-priya-aaa83b2a9/"
    },
    {
      name: "Kajal Kumari",
      role: "HR",
      image: hr,
      description: "Kajal has spent nearly 8 years in managing human resources. With her experience she is redefining the way companies approach talent to work for mutual growth by providing a healthy environment where everyone is able to grow in a more Organised way benefitting companies on one hand and nurturing talent on the other.",
      expertise: ["TalentAcquisition", "EmployeeRelations", "HRCompliance"],
      linkedin: "https://www.linkedin.com/in/kajal-kumari-a1048b1b1/"
    },
    {
      name: "Mukesh JHA",
      role: "Operation Director",
      image: cto,
      description: "He is a seasoned Blockchain enthusiast with nearly a decade of hands-on experience in the crypto space. An alumnus of Motilal Nehru National Institute of Technology, Mukesh blends deep technical knowledge in offering Blockchain services. Worked on 10+ startup ideas he knows well how Technology can help early stage startups to grow in a sustainable manner.",
      expertise: ["TechArchitecture", "SystemScalability", "EngineeringLeadership", "Blockchain"],
      linkedin: "https://www.linkedin.com/in/mukeshly/"
    }
  ];

  const faqs = [
    {
      question: "What is Founderoo?",
      answer: "FOUNDEROO is an operating system for first-time founders. We provide everything—from startup idea validation, tools, templates, and mentorship—to help you go from concept to launch confidently."
    },
    {
      question: "Who is Founderoo for?",
      answer: "Founderoo is built especially for first-time founders who: Have an idea but don't know where to start, Need a roadmap to build a digital business or startup, Want access to tools, templates, and real guidance"
    },
    {
      question: "Is Founderoo free for first-time founders?",
      answer: "Yes, Founderoo offers a free plan for first-time founders to access essential tools. Paid upgrades are available for advanced features, premium resources, or mentorship access."
    },
    {
      question: "How does Founderoo help me build a brand?",
      answer: "FOUNDEROO gives you a complete brand-building toolkit, including all the software you need to go from 'idea' to 'brand that speaks'."
    }
  ];

  return (
    <div className="min-h-screen relative dark:bg-black">
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
        aria-label="Open Chat"
      >
        <MessageCircle size={24} />
      </button>

      <ChatbotDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] bg-primary/5 dark:bg-black">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold mb-6">
              <div className="text-foreground dark:text-white">The Operating System</div>
              <div className="text-foreground dark:text-white mt-2">for Founders</div>
            </h1>
            <p className="text-3xl sm:text-4xl text-muted-foreground/90 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              <TypewriterEffectSmooth
                className="text-3xl sm:text-4xl"
                words={[
                  { text: "Direction", className: "text-muted-foreground/90 dark:text-gray-300" },
                  { text: "for", className: "text-muted-foreground/90 dark:text-gray-300" },
                  { text: "Every", className: "text-muted-foreground/90 dark:text-gray-300" },
                  { text: "Dream", className: "text-muted-foreground/90 dark:text-gray-300" }
                ]}
                cursorClassName="bg-primary"
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleApplyNow}
                className="bg-primary text-primary-foreground hover:bg-yellow-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 rounded-lg flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              {
                title: "Startup Planner",
                description: "Map out your business model and startup roadmap",
                icon: (
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-white rounded-sm"></div>
                    ))}
                  </div>
                )
              },
              {
                title: "Founder Docs",
                description: "Generate and manage your key startup documents",
                icon: (
                  <div className="w-6 h-6 border-2 border-white rounded flex flex-col">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex-1 border-b border-white"></div>
                    ))}
                  </div>
                )
              },
              {
                title: "Tasks",
                description: "Organize and track your to-dos and milestones",
                icon: (
                  <div className="flex flex-col gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-3 h-0.5 bg-white rounded"></div>
                      </div>
                    ))}
                  </div>
                )
              },
              {
                title: "Ask Founderoo",
                description: "Get answers and advice from our AI assistant",
                icon: (
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/50 dark:bg-black/80 rounded-lg backdrop-blur-sm">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="py-24 bg-background dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4">How Founderoo Works</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300">Three simple steps to turn your idea into a funded startup</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Apply Now",
                description: "Submit your startup idea and pay a ₹499 registration fee. Our team will review your application thoroughly.",
                fee: "₹499 registration fee",
                note: "Non-refundable application review",
                icon: <Target className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Shortlisted?",
                description: "If shortlisted, pay ₹1,999 for the final interview with our investment committee and expert mentors.",
                fee: "₹1,999 for final interview",
                note: "50% refundable if not selected",
                icon: <Users className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Get Funded",
                description: "Selected founders receive funding, personalized mentorship, and access to our extensive network of industry experts.",
                fee: "Access to capital",
                note: "Plus mentorship and network",
                icon: <Rocket className="h-8 w-8" />
              }
            ].map((step) => (
              <Card key={step.step} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg dark:bg-black/90">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-xl font-bold dark:text-white">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground dark:text-gray-300 mb-6">{step.description}</p>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="font-semibold text-primary">{step.fee}</div>
                    <div className="text-sm text-muted-foreground dark:text-gray-400">{step.note}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-24 bg-muted/50 dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300">Hear from founders who turned their ideas into thriving businesses with Founderoo's support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Narendra Narayan",
                role: "Founder, NxG",
                story: "Founderoo believed in my music composing idea when no one else did. With their ₹15 lakh funding and mentorship, we've grown to serve 2 cities in just 3 months.",
                avatar: NarendraNarayan
              },
              {
                name: "Krish",
                role: "CEO, Board ki padhai",
                story: "I was just a college student with an Board tutoring idea. Founderoo not only funded us with ₹10 lakhs but connected me with ED-tech industry veterans who helped refine our product. We now have 50,000+ users!",
                avatar: krish
              },
              {
                name: "Ravi Prakash",
                role: "Founder, Homo",
                story: "The ₹499 application fee was the best investment I ever made. Founderoo funded my Hospitality idea with ₹10 lakhs and their mentors helped us navigate regulatory challenges. We're now expanding nationwide.",
                avatar: ravi
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/50 shadow-lg bg-card/95 backdrop-blur-sm dark:bg-black/90">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                  </div>
                  <CardTitle className="text-lg font-bold dark:text-white">{testimonial.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300 mb-4 italic">"{testimonial.story}"</p>
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

      {/* Founder Section */}
      <section id="founder" className="py-24 bg-background dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4">Our Founder</h2>
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

      {/* Team Section */}
      <section id="team" className="py-24 bg-muted/50 dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300">The experienced professionals behind your startup success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 shadow-lg overflow-hidden bg-card/95 backdrop-blur-sm dark:bg-black/90">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {member.image ? <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 dark:text-white">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed text-left">{member.description}</p>
                  <div className="flex flex-wrap gap-1 justify-start">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center pt-2">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-primary" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300">Everything you need to know about the application process</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg border border-border/50 shadow-md bg-card/95 backdrop-blur-sm dark:bg-black/90">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors duration-200 dark:hover:bg-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-semibold text-foreground dark:text-white">{faq.question}</CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent className="pt-0 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
