import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publications = [
  {
    year: '2024',
    items: [
      {
        title: 'Adaptive Resource Allocation in Edge Computing Networks Using Deep Reinforcement Learning',
        authors: 'SPARK LABoratory Authors',
        venue: 'IEEE Transactions on Edge Computing, 2024',
        type: 'Journal',
      },
      {
        title: 'A Novel Consensus Mechanism for Multi-Chain Blockchain Systems',
        authors: 'SPARK LABoratory Authors',
        venue: 'ACM Conference on Blockchain Technology, 2024',
        type: 'Conference',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Federated Learning for IoT Security: A Comprehensive Survey',
        authors: 'SPARK LABoratory Authors',
        venue: 'Journal of Network and Computer Applications, 2023',
        type: 'Journal',
      },
      {
        title: 'Real-Time Anomaly Detection in Industrial IoT Systems',
        authors: 'SPARK LABoratory Authors',
        venue: 'IEEE Internet of Things Journal, 2023',
        type: 'Journal',
      },
      {
        title: 'Optimizing Neural Networks for Edge Device Deployment',
        authors: 'SPARK LABoratory Authors',
        venue: 'International Conference on Machine Learning, 2023',
        type: 'Conference',
      },
    ],
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="Publications" 
        subtitle="Research contributions to the scientific community"
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-lab-cyan" />
              <h2 className="text-3xl font-bold text-foreground">Recent Publications</h2>
            </div>

            <div className="space-y-12">
              {publications.map((yearGroup, yearIndex) => (
                <div key={yearIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-lab-cyan flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{yearGroup.year}</span>
                    </div>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="space-y-4">
                    {yearGroup.items.map((pub, pubIndex) => (
                      <Card key={pubIndex} className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 text-xs font-semibold rounded ${
                                  pub.type === 'Journal' 
                                    ? 'bg-lab-blue/10 text-lab-blue' 
                                    : 'bg-lab-cyan/10 text-lab-cyan'
                                }`}>
                                  {pub.type}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                {pub.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-1">
                                {pub.authors}
                              </p>
                              <p className="text-sm text-muted-foreground italic">
                                {pub.venue}
                              </p>
                            </div>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-lab-cyan hover:text-lab-cyan hover:bg-lab-cyan/10"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;
