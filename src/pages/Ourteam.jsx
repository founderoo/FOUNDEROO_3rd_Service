import { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, ArrowLeft } from "lucide-react";
import { User } from "lucide-react"; 
import { useNavigate } from "react-router-dom";
import Ceo from "@/assets/Ceo.png";
import cpo from "@/assets/cpo.png";
import hr from "@/assets/hr.png";
import cto from "@/assets/cto.png";

const teamMembers = [
  {
    name: "Tannu Priya",
    role: "CPO",
    image: cpo,
    description: "The Chief People Officer at Founderoo, she brings heart and strategy together. With a background in development and management, she understands both people and systems. Her expertise in marketing, human resource management, and founder evaluation drives real impact. At Founderoo, she ensures that every decision begins and ends with people.",
    expertise: ["Strategy", "Marketing","human resource management"],
    linkedin: "https://linkedin.com/in/tannu-priya"
  },
  {
    name: "Kajal Kumari",
    role: "HR",
    image: hr,
    description: "Kajal has spent nearly 8 years in managing human resources. With her experience she is redefining the way companies approach talent to work for mutual growth by providing a healthy environment where everyone is able to grow in a more Organised way benefitting companies on one hand and nurturing talent on the other.",
    expertise: ["Talent Acquisition", "Employee Relations", "HR Compliance"],
    linkedin: "https://www.linkedin.com/in/kajal-kumari-a1048b1b1/"
  },
  {
    name: "Mukesh JHA",
    role: "Operation Director",
    image: cto,
    description: "He is a seasoned Blockchain enthusiast with nearly a decade of hands-on experience in the crypto space. An alumnus of Motilal Nehru National Institute of Technology, Mukesh blends deep technical knowledge in offering Blockchain services. Worked on 10+ startup ideas he knows well how Technology can help early stage startups to grow in a sustainable manner.",
    expertise: ["Tech Architecture", "System Scalability", "Engineering Leadership", "Blockchain"],
    linkedin: "https://www.linkedin.com/in/mukeshly/"
  }
];

export default function OurTeam() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background dark:bg-background/50">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 pt-8">
        <Button
          variant="ghost"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Button>
      </div>

      {/* Team Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-xl text-muted-foreground">
              The experienced professionals behind your startup success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-border/50 shadow-lg overflow-hidden bg-card/95 backdrop-blur-sm w-full max-w-sm h-full flex flex-col"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-500"></div>
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="rounded-full w-full h-full object-cover" 
                        />
                      ) : (
                        <User className="text-white" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 mb-2">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold text-base">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </div>
                <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                  <div className="space-y-4 flex-1">
                    <p className="text-muted-foreground dark:text-muted-foreground/90 text-sm leading-relaxed text-left">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-start">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-4 mt-4 border-t border-border/20">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group-hover:bg-primary/10 transition-colors duration-300 px-4 py-2"
                      >
                        <Linkedin className="h-4 w-4 text-primary mr-2" />
                        Connect
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}