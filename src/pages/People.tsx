import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Globe } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const people = [
  {
    name: 'Chaitanya Gunupudi',
    role: 'Founder',
    specialization: 'Infrastructure & Artificial Intelligence',
    initials: 'CG',
  },
  {
    name: 'Dr. Rajesh Kumar Gnanasekaran',
    role: 'Founder',
    specialization: 'Artificial Intelligence & Gen AI',
    initials: 'RK',
  },
];

const People = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="Our Team" 
        subtitle="Meet the researchers driving innovation at SPARK LABoratory"
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our diverse team of researchers, engineers, and scientists brings together expertise 
              from multiple disciplines to tackle complex challenges in emerging technologies.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {people.map((person, index) => (
                <Card key={index} className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4 border-2 border-lab-cyan/30">
                        <AvatarFallback className="bg-lab-cyan/10 text-lab-cyan text-xl font-bold">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {person.name}
                      </h3>
                      <p className="text-sm text-lab-cyan font-medium mb-2">
                        {person.role}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {person.specialization}
                      </p>

                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-lab-cyan/10 rounded-full transition-colors">
                          <Mail className="w-4 h-4 text-muted-foreground hover:text-lab-cyan" />
                        </button>
                        <button className="p-2 hover:bg-lab-cyan/10 rounded-full transition-colors">
                          <Linkedin className="w-4 h-4 text-muted-foreground hover:text-lab-cyan" />
                        </button>
                        <button className="p-2 hover:bg-lab-cyan/10 rounded-full transition-colors">
                          <Globe className="w-4 h-4 text-muted-foreground hover:text-lab-cyan" />
                        </button>
                      </div>
                    </div>
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

export default People;
