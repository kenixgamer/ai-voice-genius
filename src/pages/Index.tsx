
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kavish Shah</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            Founder & AI Engineer | Generative AI & SaaS Entrepreneur
          </h2>
          <p className="text-gray-600 mb-8">
            📍 Ahmedabad, India
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button asChild variant="outline" className="hover-scale">
              <a href="https://www.linkedin.com/in/kavish-on-ai/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="hover-scale">
              <a href="https://x.com/Kavish_On_AI" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </a>
            </Button>
            <Button asChild variant="outline" className="hover-scale">
              <a href="mailto:kavishmshah2004@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">Founder</h3>
            <p className="text-gray-600 mb-2">Dialoft AI | 2024 - Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Built AI-powered voice agents to automate sales and customer interactions</li>
              <li>Developed outbound & inbound AI telecalling systems using Generative AI</li>
              <li>Achieved 63+ paying customers for AI chatbot services in real estate</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <a href="https://dialoft.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit Website
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">AI Intern</h3>
            <p className="text-gray-600 mb-2">Sahana System Limited | Jun 2024 - Dec 2024</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Worked on Generative AI projects, reducing hallucinations and improving response accuracy</li>
              <li>Optimized response times for AI models in production environments</li>
              <li>Developed AI-driven solutions to enhance customer experiences</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <h2 className="section-title">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 glass hover-scale">
              <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Generative AI</Badge>
                <Badge>Deep Learning</Badge>
                <Badge>NLP</Badge>
                <Badge>Computer Vision</Badge>
                <Badge>Reinforcement Learning</Badge>
              </div>
            </Card>
            <Card className="p-6 glass hover-scale">
              <h3 className="text-xl font-semibold mb-4">Development & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>FastAPI</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>MERN Stack</Badge>
                <Badge>LangChain</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-gray-50">
        <h2 className="section-title">Featured Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-2">Dialoft AI</h3>
            <p className="text-gray-600 mb-4">AI Voice Agent Platform</p>
            <p className="text-gray-700 mb-4">
              Developed a telecalling AI to automate lead generation & sales with real-time AI-driven voice agents.
            </p>
            <Button asChild variant="outline" size="sm">
              <a href="https://dialoft.ai" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-2">AI Kiosk System</h3>
            <p className="text-gray-600 mb-4">Silver Oak University</p>
            <p className="text-gray-700 mb-4">
              AI-powered interactive kiosk that captures user's photo & voice for custom AI responses.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="default" className="hover-scale">
              <a href="mailto:kavishmshah2004@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button asChild variant="outline" className="hover-scale">
              <a href="https://www.linkedin.com/in/kavish-on-ai/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> Connect
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
