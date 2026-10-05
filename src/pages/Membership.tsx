import { Link } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Wrench, Calendar, BookOpen } from 'lucide-react';

const tiers = [
  {
    name: 'Community',
    price: 'Free',
    yearly: 'Free',
    period: '',
    audience: 'Curious learners & public',
    benefits: [
      'Official channels: YouTube, Podcast, LinkedIn',
      'Monthly newsletter',
      'Public publications & events feed',
      'Community announcements',
    ],
  },
  {
    name: 'Student',
    price: '$20',
    yearly: '$200/yr',
    period: '/mo',
    audience: 'Undergrad & grad students (verify with .edu email)',
    benefits: [
      'Everything in Community',
      '15% off conferences & hackathons',
      '10% off webinars',
      '10% off publishing in ICEB & partner journals',
      'Student discounts on AI tools (ChatGPT, Claude, Gemini, Perplexity, Cursor)',
      'Student-only forum & study groups',
    ],
  },
  {
    name: 'Researcher',
    price: '$40',
    yearly: '$400/yr',
    period: '/mo',
    audience: 'Academics, postdocs & enthusiasts',
    popular: true,
    benefits: [
      'Everything in Student',
      '25% off conferences & hackathons',
      '20% off webinars',
      '20% off publishing in ICEB & partner journals',
      'AI tool discounts: Claude, ChatGPT, Gemini, Perplexity, Cursor, Notion AI',
      'Early access to research previews & datasets',
      'Monthly office hours with the lab',
    ],
  },
  {
    name: 'Professional',
    price: '$80',
    yearly: '$800/yr',
    period: '/mo',
    audience: 'Industry practitioners & engineers',
    benefits: [
      'Everything in Researcher',
      '40% off events + priority registration',
      'Free access to most webinars',
      '30% off publishing + fast-track review',
      'Premium AI tools: Claude Pro, ChatGPT Plus, Gemini Advanced, Cursor Pro, GitHub Copilot',
      'Hands-on workshops & private Slack community',
      'Career & advisory sessions',
    ],
  },
  {
    name: 'Corporate',
    price: '$399',
    yearly: '$3,990/yr',
    period: '/mo',
    audience: 'Companies & universities',
    benefits: [
      'Up to 10 team seats with all Professional benefits',
      '50% off events for the whole team',
      '50% off publishing fees (team-wide)',
      'Bulk discounts on AI tool subscriptions',
      'Private briefings & custom training sessions',
      'Co-research opportunities',
      'Priority support',
    ],
  },
  {
    name: 'Patron',
    price: '$1,000+',
    yearly: '$10,000+/yr',
    period: '/mo',
    audience: 'Sponsors & philanthropists',
    benefits: [
      'All Corporate benefits included',
      'Complimentary passes to all events',
      'Publishing fees waived (100%)',
      'Logo on website & event materials',
      'Advisory board seat',
      'Named research grant',
      'Annual recognition event',
    ],
  },
];

const partnerCategories = [
  {
    icon: Wrench,
    title: 'AI Tools',
    items: ['Claude', 'ChatGPT', 'Gemini', 'Perplexity', 'Cursor', 'GitHub Copilot', 'Notion AI'],
  },
  {
    icon: Calendar,
    title: 'Events (15–50% off)',
    items: ['ICEB-UMD Conference', 'SPARK Hackathons', 'Webinars & workshops', 'Priority + free passes at upper tiers'],
  },
  {
    icon: BookOpen,
    title: 'Publishing & Research (10–100% off)',
    items: ['ICEB Journals', 'Partner journals', 'Fast-track review (Professional+)', 'Waived fees (Patron)'],
  },
];

const Membership = () => {
  return (
    <div className="min-h-screen pt-16">
      <Hero
        title="Membership"
        subtitle="Six tiers. One community. Monthly or yearly — yearly saves 2 months."
      />

      {/* Welcome / Join — CaRCC-style portal sections */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to SPARK</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            SPARK Intelligence Laboratory is a community of researchers, engineers, and
            practitioners advancing applied AI, edge computing, and intelligent systems.
            Membership connects you to our events, journals, AI tool discounts, and official
            channels.
          </p>

          <h2 className="text-3xl font-bold text-foreground mb-4">Join SPARK</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong className="text-foreground">Joining is free at the Community tier.</strong>{' '}
            Create an account to subscribe to our channels and newsletter, then upgrade to a
            paid tier anytime for event, publishing, and AI tool discounts.
          </p>
          <Link to="/login">
            <Button className="mb-12">Join Now</Button>
          </Link>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            Already a Member? Log in
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have already created an account, log in with your email and password or
            your Google account. First time logging in? Use the password reset option on the
            login page to set your password.
          </p>
          <Link to="/login">
            <Button variant="outline" className="mb-12">Log In</Button>
          </Link>

          <h2 className="text-3xl font-bold text-foreground mb-4">
            Update your Profile and Subscription
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To change your membership tier, update your affiliation, or manage your
            subscription, visit your profile page. If you are not logged in, you will be
            taken to the login page first. Questions? Contact us at{' '}
            <a href="mailto:info@sparkintellingencelab.com" className="text-lab-cyan hover:underline">
              info@sparkintellingencelab.com
            </a>.
          </p>
          <Link to="/profile">
            <Button variant="outline">Update Profile</Button>
          </Link>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16 bg-background border-t border-lab-cyan/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Membership Tiers
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-4 max-w-3xl mx-auto">
            Monthly memberships built around what our community actually uses — discounts
            on conferences, hackathons, webinars, publishing, and leading AI tools.
          </p>
          <p className="text-sm text-muted-foreground/80 text-center mb-12 max-w-2xl mx-auto">
            Cancel anytime. Upgrade or downgrade mid-cycle. Yearly billing saves 2 months (~17% off).
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
                  <p className="text-xs text-muted-foreground/70">Yearly: {tier.yearly}</p>
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
                  <Link
                    to="/login"
                    className={`block text-center w-full px-4 py-3 rounded font-medium transition-all duration-300 ${
                      tier.popular
                        ? 'bg-lab-cyan text-white hover:bg-lab-cyan-light'
                        : 'bg-lab-cyan/10 text-lab-cyan border border-lab-cyan/30 hover:bg-lab-cyan/20'
                    }`}
                  >
                    Join {tier.name}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partner discounts */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-foreground text-center mb-3">
              Partner Discounts
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Every tier is designed to out-earn its price within 1–2 events or a single
              journal submission.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {partnerCategories.map((cat) => (
                <Card key={cat.title} className="border-lab-cyan/20 bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-lab-cyan/10 flex items-center justify-center">
                        <cat.icon className="w-5 h-5 text-lab-cyan" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{cat.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-lab-cyan mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
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
