import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/auth";
import { ChevronDown, Star, Users, Target, Rocket, CheckCircle, ArrowRight, Linkedin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Ceo from "@/assets/ceo.png";
import cpo from "@/assets/cpo.png";
import hr from "@/assets/hr.png";
import cto from "@/assets/cto.png";
import NarendraNarayan  from "@/assets/Narendra Narayan.jpg";
import krish from "@/assets/krish.png";
import ravi from "@/assets/ravi.jpg";

export default function Home() {
  const { user, signInWithGoogle } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText(prev => (prev === 0 ? 1 : 0));
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(timer);
  }, []);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithGoogle();
    } catch (err) {
      setError('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

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

  const teamMembers = [
    {
      name: "Ramanand Thakur",
      role: "Founder & CEO",
      image: Ceo,
      description: "Ramanand is the visionary behind the Founderoo. With a sharp eye for innovation and deep understanding of startup's future he is dedicatedly contributing towards Bihar’s changing startup ecosystem. Bold, strategic and always future focused, he is igniting a movement of Brand - first entrepreneurship.",
      expertise: ["CompanyVision", "Leadership", "Fundraising","Branding", "Market Research"],
      linkedin: "https://www.linkedin.com/in/ramanand-thakur"
    },
    {
      name: "Tannu Priya",
      role: "CPO",
      image: cpo,
      description: "The Chief People Officer at Founderoo, she brings heart and strategy together.With a background in development and management, she understands both people and systems.Her expertise in marketing, human resource management, and founder evaluation drives real impact.At Brandify & Company, she ensures that every decision begins  and ends  with people.",
      expertise: ["strategy", "marketing", "human resource management"],
      linkedin: "https://www.linkedin.com/in/tannu-priya-aaa83b2a9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkI4XfwtFTPG%2F0Uj03Tq9eQ%3D%3D "
    },
    {
      name: "Kajal Kumari",
      role: "HR",
      image: hr,
      description: "Kajal has spent nearly 8 years in managing human resources. With her experience she is redefining the way companies approach talent to work for mutual growth by providing a healthy environment where everyone is able to grow in a more Organised way benefitting companies on one hand and nurturing talent on the other.",
      expertise: ["TalentAcquisition", "EmployeeRelations", "HRCompliance"],
      linkedin: "https://www.linkedin.com/in/kajal-kumari-a1048b1b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    },
    {
      name: "Mukesh JHA",
      role: "Operation  Director ",
      image: cto,
      description: "He is a seasoned Blockchain enthusiast with nearly a decade of hands-on experience in the crypto space. An alumnus of Motilal Nehru National Institute of Technology, Mukesh blends deep technical knowledge in offering Blockchain services. Worked on 10+ startup ideas he knows well how Technology can help early stage startups to grow in a sustainable manner.",
      expertise: ["TechArchitecture", "SystemScalability", "EngineeringLeadership", "Blockchain"],
      linkedin: "https://www.linkedin.com/in/mukeshly/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  const faqs = [
    {
      question: "How much funding can I expect?",
      answer: "Funding depends on the stage of your startup and pitch quality. Typical amounts range from ₹10 lakhs to ₹1 crore for selected startups."
    },
    {
      question: "Do I need a complete business plan?",
      answer: "No, a clear idea and a problem-solution overview are sufficient to start your application. We help you develop the complete plan during our mentorship process."
    },
    {
      question: "How long does the application process take?",
      answer: "The process usually takes 1-2 weeks from application to decision. We provide regular updates throughout the review process."
    },
    {
      question: "What equity stake does Founderoo take?",
      answer: "Founderoo typically takes between 7 % to 11 % equity depending on funding amount and support provided. This is competitive with industry standards."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] bg-primary/5 dark:bg-primary/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center flex flex-col items-center justify-center min-h-[400px]">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4rem] font-bold mb-6">
              <div className="text-primary">Got An Idea ?</div>
              <div className="mt-4">
                <TypewriterEffectSmooth
                  words={[
                    { text: currentText === 0 ? "Get Funded." : "Direction for every dream.", className: "text-foreground" }
                  ]}
                  cursorClassName="bg-primary"
                  key={currentText} // Force re-render to restart animation
                />
              </div>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Start your founder journey with Founderoo. We support idea-stage founders with capital, coaching, and connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-yellow-400 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" onClick={handleApplyNow}>
                Pay ₹499 & Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="py-24 bg-background dark:bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How Founderoo Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to turn your idea into a funded startup</p>
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
              <Card key={step.step} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
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

      {/* Meet the Team */}
      <section id="team" className="py-24 bg-background dark:bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">The experienced professionals behind your startup success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 shadow-lg overflow-hidden bg-card/95 backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {member.image ? <img src={member.image} alt={member.name} className="rounded-full w-full h-full object-cover" /> : <User />}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm leading-relaxed text-left">{member.description}</p>
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
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
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

      {/* Terms */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border/50 shadow-lg bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Application Fee
                </h3>
                <p className="text-muted-foreground">The ₹499 application fee is non-refundable and covers the cost of reviewing your application. This fee ensures that we receive serious applications and can dedicate proper time to evaluate each one.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Interview Fee
                </h3>
                <p className="text-muted-foreground">If shortlisted, the ₹1,999 interview fee is required to proceed to the final stage. 50% (₹999.50) will be refunded if your startup is not selected after the interview process.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Selection Process
                </h3>
                <p className="text-muted-foreground">Selection is based on the viability of your idea, market potential, and founder capabilities. All decisions made by the Founderoo investment committee are final.</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  By submitting your application and paying the fee, you agree to these terms and conditions. Founderoo reserves the right to modify these terms at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}