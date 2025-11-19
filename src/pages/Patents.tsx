import { Hero } from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const patents = [
  {
    number: 'US-2024-001234',
    date: '2024-03-15',
    title: 'Adaptive Edge Computing System with AI-Powered Resource Allocation',
    inventors: 'SPARK LABoratory Research Team',
  },
  {
    number: 'US-2023-005678',
    date: '2023-11-20',
    title: 'Blockchain-Based Secure Data Transmission for IoT Networks',
    inventors: 'SPARK LABoratory Research Team',
  },
  {
    number: 'US-2023-009012',
    date: '2023-08-10',
    title: 'Neural Network Optimization Method for Edge Devices',
    inventors: 'SPARK LABoratory Research Team',
  },
  {
    number: 'US-2023-003456',
    date: '2023-05-22',
    title: 'Distributed Consensus Mechanism for Multi-Chain Systems',
    inventors: 'SPARK LABoratory Research Team',
  },
  {
    number: 'US-2022-007890',
    date: '2022-12-18',
    title: 'Real-Time Anomaly Detection System Using Federated Learning',
    inventors: 'SPARK LABoratory Research Team',
  },
];

const Patents = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero 
        title="Patents" 
        subtitle="Innovative solutions protected by intellectual property"
      />
      
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-lab-cyan" />
              <h2 className="text-3xl font-bold text-foreground">Registered Patents</h2>
            </div>

            <div className="space-y-6">
              {patents.map((patent, index) => (
                <Card key={index} className="border-lab-cyan/20 bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-lab-cyan">{index + 1}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-lab-cyan/10 text-lab-cyan text-sm font-mono rounded">
                            {patent.number}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(patent.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          "{patent.title}"
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          by {patent.inventors}
                        </p>
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

export default Patents;
