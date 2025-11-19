import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    topics: [
      'Deep Learning Architectures',
      'Neural Network Optimization',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
    ],
  },
  {
    title: 'Edge Computing',
    topics: [
      'Distributed Computing Systems',
      'Edge Intelligence',
      'Real-time Data Processing',
      'Resource Optimization',
      'Fog Computing',
    ],
  },
  {
    title: 'Blockchain & Distributed Systems',
    topics: [
      'Smart Contract Development',
      'Consensus Mechanisms',
      'Decentralized Applications (DApps)',
      'Blockchain Security',
      'Cryptocurrency Systems',
    ],
  },
  {
    title: 'Cybersecurity',
    topics: [
      'Network Security',
      'Cryptography',
      'Intrusion Detection Systems',
      'Security Analytics',
      'Threat Intelligence',
    ],
  },
  {
    title: 'Internet of Things (IoT)',
    topics: [
      'Smart Sensor Networks',
      'IoT Security',
      'Industrial IoT',
      'Edge-Cloud Integration',
      'Energy-Efficient IoT',
    ],
  },
  {
    title: 'Smart Systems & Automation',
    topics: [
      'Autonomous Systems',
      'Robotics',
      'Intelligent Control Systems',
      'Industrial Automation',
      'Human-Machine Interaction',
    ],
  },
];

const Research = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="Research Areas" 
        subtitle="Exploring the frontiers of technology through innovative research"
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our research spans multiple domains at the intersection of AI, edge computing, and blockchain. 
              We focus on developing practical solutions that address real-world challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {researchAreas.map((area, index) => (
                <Card key={index} className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-lab-cyan" />
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-lab-cyan mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
