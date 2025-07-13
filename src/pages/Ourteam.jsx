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
    description: "The Chief People Officer at Founderoo, she brings heart and strategy together. With a background in Development and Management, she understands both people and system. Her expertise in Marketing, Human Resource Management, and Founder Evaluation drives real impact. At Founderoo, she ensures that every decision begins and ends with people.",
    expertise: ["Strategy", "Marketing","Human Resource Management"],
    linkedin: "https://linkedin.com/in/tannu-priya"
  },
  {
    name: "Kajal Kumari",
    role: "HR",
    image: hr,
    description: "Kajal has spent nearly 8 years in managing Human Resources. With her experience she is redefining the way Companies approach talent to work for mutual growth by providing a healthy environment where everyone is able to grow in a more Organised way benefitting Companies on one hand and nurturing Talent on the other.",
    expertise: ["Talent Acquisition", "Employee Relations", "HR Compliance"],
    linkedin: "https://www.linkedin.com/in/kajal-kumari-a1048b1b1/"
  },
  {
    name: "Mukesh Jha",
    role: "Operation Director",
    image: cto,
    description: "He is a seasoned Blockchain Enthusiast with nearly a decade of hands-on experience in the Crypto space. An alumnus of Motilal Nehru National Institute of Technology, Mukesh blends deep Technical knowledge in offering Blockchain services. Worked on 10+ startup ideas,he knows well how Technology can help early stage startups to grow in a Sustainable manner.",
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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
        <Button
          variant="ghost"
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Button>
      </div>

      {/* Team Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet the Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              The experienced professionals behind your startup success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full max-w-sm h-full flex flex-col"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-md overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <User className="text-white" />
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium text-base">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-6 pt-0">
                  <div className="space-y-4 flex-1">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <Linkedin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">Connect</span>
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