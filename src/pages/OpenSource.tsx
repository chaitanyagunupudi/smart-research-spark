import { Hero } from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const openSourceProjects = [
  {
    name: "SPARK Framework",
    description: "A modular framework for building AI-powered applications with edge computing capabilities",
    technologies: ["Python", "TensorFlow", "Docker"],
    github: "https://github.com/spark-lab/framework",
    category: "AI Framework"
  },
  {
    name: "Blockchain Consensus Library",
    description: "High-performance consensus algorithms for distributed systems",
    technologies: ["Rust", "libp2p", "WASM"],
    github: "https://github.com/spark-lab/consensus",
    category: "Blockchain"
  },
  {
    name: "Edge AI Toolkit",
    description: "Tools for deploying and optimizing machine learning models on edge devices",
    technologies: ["C++", "ONNX", "ARM"],
    github: "https://github.com/spark-lab/edge-toolkit",
    category: "Edge Computing"
  },
  {
    name: "Federated Learning Platform",
    description: "Privacy-preserving distributed machine learning platform",
    technologies: ["Python", "PyTorch", "gRPC"],
    github: "https://github.com/spark-lab/federated-learning",
    category: "Machine Learning"
  },
  {
    name: "IoT Security Suite",
    description: "Security tools and protocols for IoT device networks",
    technologies: ["Go", "MQTT", "CoAP"],
    github: "https://github.com/spark-lab/iot-security",
    category: "Security"
  },
  {
    name: "Neural Architecture Search",
    description: "Automated neural network architecture optimization toolkit",
    technologies: ["Python", "JAX", "Ray"],
    github: "https://github.com/spark-lab/nas-toolkit",
    category: "AutoML"
  }
];

const OpenSource = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="Open Source" 
        subtitle="Contributing to the Research Community"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            At SPARK LABoratory, we believe in open science and collaborative research. 
            Our open source projects reflect our commitment to advancing AI, edge computing, 
            and blockchain technologies while making our research accessible to the global community.
          </p>
          <p className="text-lg text-white/80 leading-relaxed">
            All our projects are available on GitHub and welcome contributions from researchers 
            and developers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {openSourceProjects.map((project, index) => (
            <Card key={index} className="bg-lab-dark/50 border-lab-cyan/20 hover:border-lab-cyan/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{project.name}</CardTitle>
                    <CardDescription className="text-lab-cyan text-sm mb-3">
                      {project.category}
                    </CardDescription>
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lab-cyan hover:text-lab-cyan-light transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-lab-cyan/10 text-lab-cyan-light text-xs rounded-full border border-lab-cyan/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lab-cyan hover:text-lab-cyan-light transition-colors text-sm"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 bg-lab-dark/30 border border-lab-cyan/20 rounded-lg">
          <h2 className="text-2xl font-serif text-white mb-4">Contributing</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            We welcome contributions from the community! Whether you're fixing bugs, 
            adding features, or improving documentation, your contributions help advance 
            research and benefit everyone.
          </p>
          <p className="text-white/80 leading-relaxed">
            Visit our GitHub repositories to get started. Each project includes contribution 
            guidelines and documentation to help you contribute effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
