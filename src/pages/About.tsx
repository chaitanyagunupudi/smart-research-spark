import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cpu, Network, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="About SPARK LABoratory" 
        subtitle="Advancing Smart Processing and Research in AI, Edge, and Blockchain Systems"
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The SPARK LABoratory (Smart Processing and Research) is a cutting-edge research facility 
                dedicated to advancing the frontiers of artificial intelligence, edge computing, and blockchain 
                technologies. Affiliated with the International Conference on AI, Edge & Blockchain Systems 
                (ICEB-UMD), our lab brings together researchers, academicians, and industry professionals to 
                tackle the most pressing challenges in modern computing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to foster innovation through collaborative research, develop practical solutions 
                to real-world problems, and prepare the next generation of leaders in emerging technology fields.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">AI Research</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Advanced machine learning algorithms, neural networks, and intelligent systems 
                    for next-generation applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Edge Computing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Distributed computing architectures bringing computation closer to data sources 
                    for real-time processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                      <Network className="w-6 h-6 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Blockchain Systems</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Decentralized technologies, smart contracts, and distributed ledger systems 
                    for secure transactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Smart Systems</h3>
                  </div>
                  <p className="text-muted-foreground">
                    IoT integration, cybersecurity frameworks, and intelligent automation 
                    for industrial applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
