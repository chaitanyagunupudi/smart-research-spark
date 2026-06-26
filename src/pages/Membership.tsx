import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

// TODO: Replace with your Google Form URL once created
const GOOGLE_FORM_URL = '#';

const tiers = [
  {
    name: 'Community',
    price: 'Free',
    period: '',
    audience: 'Students & curious public',
    benefits: [
      'Monthly newsletter',
      'Access to public publications',
      'Blog & open-source updates',
      'Community announcements',
    ],
  },
  {
    name: 'Student',
    price: '$49',
    period: '/year',
    audience: 'Undergraduate & graduate students',
    benefits: [
      'Everything in Community',
      'Webinars & seminars',
      'Research previews',
      'Student-only forum',
      'Discounts on lab events',
    ],
  },
  {
    name: 'Researcher',
    price: '$249',
    period: '/year',
    audience: 'Academics & postdocs',
    popular: true,
    benefits: [
      'Everything in Student',
      'Early access to papers',
      'Dataset access',
      'Monthly office hours',
      'Co-author networking',
    ],
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/year',
    audience: 'Industry practitioners',
    benefits: [
      'Everything in Researcher',
      'Hands-on workshops',
      'Conference discounts',
      'Private Slack community',
      'Career & advisory sessions',
    ],
  },
  {
    name: 'Corporate',
    price: '$4,999',
    period: '/year',
    audience: 'Companies & universities',
    benefits: [
      'Up to 10 team seats',
      'Private briefings',
      'Co-research opportunities',
      'Custom training sessions',
      'Priority support',
    ],
  },
  {
    name: 'Patron',
    price: '$5,000+',
    period: '/year',
    audience: 'Sponsors & philanthropists',
    benefits: [
      'Logo on website',
      'Advisory board seat',
      'Named research grant',
      'All previous benefits included',
      'Annual recognition event',
    ],
  },
];

const Membership = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Membership"
        subtitle="Join the SPARK Intelligence Laboratory community"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Choose the tier that fits you best. Every membership directly supports our
            research in AI, edge computing, and blockchain — and connects you with our
            global community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative bg-card transition-all duration-300 hover:shadow-lg flex flex-col ${
                  tier.popular
                    ? 'border-lab-cyan border-2 shadow-lg shadow-lab-cyan/10'
                    : 'border-lab-cyan/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-lab-cyan text-white text-xs font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">{tier.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{tier.audience}</p>
                  <div className="flex items-baseline gap-1 pt-2">
                    <span className="text-4xl font-bold text-lab-cyan">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-lab-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full px-4 py-3 rounded font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-lab-cyan text-white hover:bg-lab-cyan-light'
                        : 'bg-lab-cyan/10 text-lab-cyan border border-lab-cyan/30 hover:bg-lab-cyan/20'
                    }`}
                  >
                    Join {tier.name}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Need a custom arrangement or have questions? Reach out to us at{' '}
            <a href="mailto:info@sparkintellingencelab.com" className="text-lab-cyan hover:underline">
              info@sparkintellingencelab.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Membership;
