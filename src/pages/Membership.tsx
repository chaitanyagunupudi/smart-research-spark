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
    audience: 'Curious learners & public',
    benefits: [
      'Subscription to official channels (YouTube, Podcast, LinkedIn)',
      'Monthly newsletter',
      'Access to public publications & blog',
      'Community announcements',
    ],
  },
  {
    name: 'Student',
    price: '$5',
    period: '/month',
    audience: 'Undergraduate & graduate students',
    benefits: [
      'Everything in Community',
      '15% off conference & hackathon registrations',
      '10% off webinar registrations',
      'Student discounts on select AI tools (ChatGPT, Claude, Gemini, Perplexity, Cursor)',
      'Student-only forum & study groups',
    ],
  },
  {
    name: 'Researcher',
    price: '$19',
    period: '/month',
    audience: 'Academics, postdocs & enthusiasts',
    popular: true,
    benefits: [
      'Everything in Student',
      '25% off conference & hackathon registrations',
      '20% off all webinars',
      'Discounts on AI tools: Claude, ChatGPT, Gemini, Perplexity, Cursor, Notion AI',
      'Early access to research previews & datasets',
      'Monthly office hours with the lab',
    ],
  },
  {
    name: 'Professional',
    price: '$49',
    period: '/month',
    audience: 'Industry practitioners & engineers',
    benefits: [
      'Everything in Researcher',
      '40% off conferences & hackathons + priority registration',
      'Free access to most webinars',
      'Premium AI tool discounts (Claude Pro, ChatGPT Plus, Gemini Advanced, Cursor Pro, GitHub Copilot)',
      'Hands-on workshops & private Slack community',
      'Career & advisory sessions',
    ],
  },
  {
    name: 'Corporate',
    price: '$299',
    period: '/month',
    audience: 'Companies & universities',
    benefits: [
      'Up to 10 team seats with all Professional benefits',
      '50% off conferences & hackathons for the team',
      'Bulk discounts on AI tool subscriptions',
      'Private briefings & custom training sessions',
      'Co-research opportunities',
      'Priority support',
    ],
  },
  {
    name: 'Patron',
    price: '$500+',
    period: '/month',
    audience: 'Sponsors & philanthropists',
    benefits: [
      'All Corporate benefits included',
      'Complimentary passes to all events',
      'Logo on website & event materials',
      'Advisory board seat',
      'Named research grant',
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
          <p className="text-lg text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
            Monthly memberships built around what our community actually uses — discounts
            on conferences, hackathons, webinars, and leading AI tools, plus direct access
            to our official channels.
          </p>
          <p className="text-sm text-muted-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Cancel anytime. Annual billing available at a 2-month discount.
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
            AI tool discounts are subject to availability and provider terms. Need a custom
            arrangement? Email us at{' '}
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
