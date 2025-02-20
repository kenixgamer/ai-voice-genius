
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Linkedin, Mail, Twitter, Youtube, Phone } from "lucide-react";

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
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600">
            <span>📍 Ahmedabad, India</span>
            <span>📧 kavishmshah2004@gmail.com</span>
            <span>📞 +91 8980579954</span>
          </div>
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
              <a href="https://www.youtube.com/@KavishOnAI" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" /> YouTube
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

      {/* Professional Summary */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 glass">
            <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
            <div className="space-y-4 text-gray-700">
              <p>🚀 Founder at <strong>Dialoft AI</strong> – Empowering businesses with AI-driven telecalling solutions to transform customer interactions. Experienced in <strong>Generative AI, Deep Learning, NLP, Computer Vision, and Reinforcement Learning</strong>, with expertise in building scalable AI/ML systems.</p>
              <p>💡 Passionate about <strong>SaaS, AI-driven automation, and data analytics</strong>, leveraging cutting-edge AI technologies to enhance business efficiency.</p>
              <p>📢 Active contributor to the <strong>AI/ML community</strong>, sharing insights on <strong>Generative AI, Large Language Models (LLMs), and AI automation</strong>.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <h2 className="section-title">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">Founder</h3>
            <p className="text-gray-600 mb-4">Dialoft AI | 2024 - Present | Ahmedabad, India</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Built AI-powered voice agents to automate sales and customer interactions</li>
              <li>Developed outbound & inbound AI telecalling systems using Generative AI</li>
              <li>Achieved 63+ paying customers for AI chatbot services in real estate</li>
              <li>Integrated AI-powered lead generation and sales automation for businesses</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Button asChild variant="outline" size="sm">
                <a href="https://dialoft.ai" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Website
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://www.youtube.com/watch?v=IBqmbhUM5_4" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">AI Intern</h3>
            <p className="text-gray-600 mb-4">Sahana System Limited | Jun 2024 - Dec 2024 | Ahmedabad, India</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Worked on Generative AI projects, reducing hallucinations and improving response accuracy</li>
              <li>Optimized response times for AI models in production environments</li>
              <li>Developed AI-driven solutions to enhance customer experiences</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-gray-50">
        <h2 className="section-title">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">BTech in Computer Science & Engineering</h3>
            <p className="text-gray-600 mb-2">Silver Oak University | 2023 - Present</p>
            <div className="text-gray-700">
              <p className="mb-2">📊 GPA: 9.64</p>
              <p>🏆 Affiliations:</p>
              <ul className="list-disc list-inside ml-4">
                <li>IEEE Member (2023-2024)</li>
                <li>E-Cell Ignite Member (2022-2024)</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-2xl font-semibold mb-2">Higher Secondary (12th Class)</h3>
            <p className="text-gray-600 mb-2">H.H Patel School | 2022 - 2023</p>
            <p className="text-gray-700">📊 Percentage: 89.78%</p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <h2 className="section-title">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Generative AI</Badge>
              <Badge>LLMs</Badge>
              <Badge>AI Voice Agents</Badge>
              <Badge>Deep Learning</Badge>
              <Badge>CNNs</Badge>
              <Badge>RNNs</Badge>
              <Badge>Transformers</Badge>
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
              <Badge>LlamaIndex</Badge>
              <Badge>RAG</Badge>
              <Badge>Agentic AI</Badge>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-4">Automation & AI Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Make.com</Badge>
              <Badge>n8n</Badge>
              <Badge>ComfyUI</Badge>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-4">Data & Cybersecurity</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Data Analytics</Badge>
              <Badge>AI Systems</Badge>
              <Badge>IOCs Assessment</Badge>
            </div>
          </Card>
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
            <div className="flex gap-4">
              <Button asChild variant="outline" size="sm">
                <a href="https://dialoft.ai" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Website
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="https://www.youtube.com/watch?v=IBqmbhUM5_4" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-2">AI Kiosk System</h3>
            <p className="text-gray-600 mb-4">Silver Oak University</p>
            <p className="text-gray-700 mb-4">
              AI-powered interactive kiosk that captures user's photo & voice for custom AI responses.
            </p>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-2">Bill of Lading (BOL) Verification</h3>
            <p className="text-gray-600 mb-4">Document Verification System</p>
            <p className="text-gray-700 mb-4">
              AI-based data extraction & document verification system for logistics & supply chains.
            </p>
          </Card>

          <Card className="p-6 glass hover-scale">
            <h3 className="text-xl font-semibold mb-2">BusyBots</h3>
            <p className="text-gray-600 mb-4">AI Tool Directory</p>
            <p className="text-gray-700 mb-4">
              Built an AI tool directory that reached 150K+ views in 4 months.
            </p>
          </Card>
        </div>
      </section>

      {/* Hackathons & Certifications */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Hackathons & Competitions</h2>
            <Card className="p-6 glass hover-scale">
              <ul className="space-y-4 text-gray-700">
                <li>🏆 IIT Bombay E-Cell Competition – Ranked 4th</li>
                <li>🏆 Startup Bootcamp Winner – Silver Oak University</li>
                <li>🚀 100x Engineer's Buildathon</li>
                <li>🚀 SIH Hackathon</li>
                <li>🚀 SOUITHON</li>
                <li>🚀 Hack for India</li>
              </ul>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <Card className="p-6 glass hover-scale">
              <ul className="space-y-4 text-gray-700">
                <li>📜 Deep Learning Specialization – DeepLearning.AI</li>
                <li>📜 Supervised Machine Learning: Regression & Classification</li>
                <li>📜 Neural Networks & Deep Learning</li>
                <li>📜 Advanced Learning Algorithms</li>
                <li>📜 Python 3.4.3 Training Certification</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 mb-6">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="default" className="hover-scale">
              <a href="mailto:kavishmshah2004@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <Button asChild variant="outline" className="hover-scale">
              <a href="tel:+918980579954">
                <Phone className="mr-2 h-4 w-4" /> Call Me
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
