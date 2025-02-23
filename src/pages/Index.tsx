import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, Mail, Twitter, Youtube, Phone } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with 3D Scene */}
      <section className="min-h-screen relative overflow-hidden">
        <Card className="w-full min-h-screen bg-black/[0.96] relative overflow-hidden border-none">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          <div className="flex h-full flex-col lg:flex-row items-center justify-center p-8">
            {/* Left content */}
            <motion.div 
              className="flex-1 relative z-10 text-center lg:text-left mb-8 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="mb-8 relative inline-block"
              >
                <img
                  src="/lovable-uploads/05c5b132-8148-41f7-847e-ed24ec9f8e93.png"
                  alt="Kavish Shah"
                  className="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-xl -z-10" />
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 mb-4">
                Kavish Shah
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-6">
                Founder & AI Engineer | Generative AI & SaaS Entrepreneur
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/kavish-on-ai/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a href="mailto:kavishmshah2004@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+918980579954">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Me
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 h-[500px] w-full relative">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Professional Summary */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-black/80 border border-white/20 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">Professional Summary</h2>
            <div className="space-y-4 text-neutral-300">
              <p>🚀 Founder at <strong>Dialoft AI</strong> – Empowering businesses with AI-driven telecalling solutions to transform customer interactions. Experienced in <strong>Generative AI, Deep Learning, NLP, Computer Vision, and Reinforcement Learning</strong>, with expertise in building scalable AI/ML systems.</p>
              <p>💡 Passionate about <strong>SaaS, AI-driven automation, and data analytics</strong>, leveraging cutting-edge AI technologies to enhance business efficiency.</p>
              <p>📢 Active contributor to the <strong>AI/ML community</strong>, sharing insights on <strong>Generative AI, Large Language Models (LLMs), and AI automation</strong>.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <h2 className="section-title text-white">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-2xl font-semibold mb-2">Founder</h3>
            <p className="text-neutral-400 mb-4">Dialoft AI | 2024 - Present | Ahmedabad, India</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Built AI-powered voice agents to automate sales and customer interactions</li>
              <li>Developed outbound & inbound AI telecalling systems using Generative AI</li>
              <li>Achieved 63+ paying customers for AI chatbot services in real estate</li>
              <li>Integrated AI-powered lead generation and sales automation for businesses</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <a href="https://dialoft.ai" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Website
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <a href="https://www.youtube.com/watch?v=IBqmbhUM5_4" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-2xl font-semibold mb-2">AI Intern</h3>
            <p className="text-neutral-400 mb-4">Sahana System Limited | Jun 2024 - Dec 2024 | Ahmedabad, India</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Worked on Generative AI projects, reducing hallucinations and improving response accuracy</li>
              <li>Optimized response times for AI models in production environments</li>
              <li>Developed AI-driven solutions to enhance customer experiences</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <h2 className="section-title text-white">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-2xl font-semibold mb-2">BTech in Computer Science & Engineering</h3>
            <p className="text-neutral-400 mb-2">Silver Oak University | 2023 - Present</p>
            <div className="text-neutral-300">
              <p className="mb-2">📊 GPA: 9.64</p>
              <p>🏆 Affiliations:</p>
              <ul className="list-disc list-inside ml-4">
                <li>IEEE Member (2023-2024)</li>
                <li>E-Cell Ignite Member (2022-2024)</li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-2xl font-semibold mb-2">Higher Secondary (12th Class)</h3>
            <p className="text-neutral-400 mb-2">H.H Patel School | 2022 - 2023</p>
            <p className="text-neutral-300">📊 Percentage: 89.78%</p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <h2 className="section-title text-white">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
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

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
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

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-4">Automation & AI Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Make.com</Badge>
              <Badge>n8n</Badge>
              <Badge>ComfyUI</Badge>
            </div>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-4">Data & Cybersecurity</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Data Analytics</Badge>
              <Badge>AI Systems</Badge>
              <Badge>IOCs Assessment</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="section-padding">
        <h2 className="section-title text-white">Featured Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">Dialoft AI</h3>
            <p className="text-neutral-400 mb-4">AI Voice Agent Platform</p>
            <p className="text-neutral-300 mb-4">
              Developed a telecalling AI to automate lead generation & sales with real-time AI-driven voice agents.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <a href="https://dialoftai.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Website
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                asChild
              >
                <a href="https://www.youtube.com/watch?v=IBqmbhUM5_4" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Demo
                </a>
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">AI Kiosk System</h3>
            <p className="text-neutral-400 mb-4">Silver Oak University</p>
            <p className="text-neutral-300 mb-4">
              AI-powered interactive kiosk that captures user's photo & voice for custom AI responses.
            </p>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">Bill of Lading (BOL) Verification</h3>
            <p className="text-neutral-400 mb-4">Document Verification System</p>
            <p className="text-neutral-300 mb-4">
              AI-based data extraction & document verification system for logistics & supply chains.
            </p>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">BusyBots</h3>
            <p className="text-neutral-400 mb-4">AI Tool Directory</p>
            <p className="text-neutral-300 mb-4">
              Built an AI tool directory that reached 150K+ views in 4 months.
            </p>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">AI Movie Recommendation System</h3>
            <p className="text-neutral-400 mb-4">NLP-Based Recommendation Engine</p>
            <p className="text-neutral-300 mb-4">
              NLP-based AI system that recommends movies based on user preferences.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              asChild
            >
              <a href="https://youtu.be/c_xWj8Gtom8?si=gjXsOr2_jVrQxnnl" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" /> Demo
              </a>
            </Button>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">Bird Voice Analyzer</h3>
            <p className="text-neutral-400 mb-4">AI Audio Classification</p>
            <p className="text-neutral-300 mb-4">
              AI model that identifies bird species from audio recordings using advanced audio processing.
            </p>
          </Card>

          <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
            <h3 className="text-xl font-semibold mb-2">Lootor AI</h3>
            <p className="text-neutral-400 mb-4">AI Shopping Assistant</p>
            <p className="text-neutral-300 mb-4">
              Built an AI-powered shopping assistant to find the best product deals across the internet.
            </p>
          </Card>
        </div>
      </section>

      {/* Hackathons & Certifications */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white">Hackathons & Competitions</h2>
            <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
              <ul className="space-y-4 text-neutral-300">
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
            <h2 className="text-2xl font-bold mb-6 text-white">Certifications</h2>
            <Card className="p-6 bg-black/80 border border-white/20 backdrop-blur-sm text-white hover-scale">
              <ul className="space-y-4 text-neutral-300">
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

      {/* Contact Section - Enhanced */}
      <section className="section-padding">
        <h2 className="section-title text-white">Get in Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-neutral-400 mb-6">
            Feel free to reach out for collaborations or just a friendly chat!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white"
              asChild
            >
              <a href="mailto:kavishmshah2004@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              asChild
            >
              <a href="tel:+918980579954">
                <Phone className="mr-2 h-5 w-5" /> Call Me
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              asChild
            >
              <a href="https://www.linkedin.com/in/kavish-on-ai/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> Connect
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
