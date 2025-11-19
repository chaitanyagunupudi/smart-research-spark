import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="SPARK LABoratory" 
        subtitle="Smart Processing and Research - Advancing AI, Edge, and Blockchain Systems"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Innovation Through Research
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SPARK LABoratory is at the forefront of research in artificial intelligence, edge computing, 
              and blockchain technologies. We are committed to developing innovative solutions that shape 
              the future of technology and benefit society.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link to="/research">
              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-lg bg-lab-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-8 h-8 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Research Areas</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Explore our cutting-edge research domains
                    </p>
                    <ArrowRight className="w-5 h-5 text-lab-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/publications">
              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-lg bg-lab-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-8 h-8 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Publications</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Browse our latest research papers
                    </p>
                    <ArrowRight className="w-5 h-5 text-lab-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/people">
              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-lg bg-lab-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Our Team</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Meet our talented researchers
                    </p>
                    <ArrowRight className="w-5 h-5 text-lab-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/patents">
              <Card className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300 h-full cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-lg bg-lab-cyan/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 text-lab-cyan" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Patents</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      View our intellectual property
                    </p>
                    <ArrowRight className="w-5 h-5 text-lab-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lab-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Research Community
          </h2>
          <p className="text-xl text-lab-cyan-light mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about our work?
          </p>
          <Link to="/about">
            <Button size="lg" className="bg-lab-cyan hover:bg-lab-cyan-light text-white">
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
