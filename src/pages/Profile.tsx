import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Hero } from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { User } from '@supabase/supabase-js';

const TIER_OPTIONS = [
  { value: 'community', label: 'Community (Free)' },
  { value: 'student', label: 'Student ($20/mo)' },
  { value: 'researcher', label: 'Researcher ($40/mo)' },
  { value: 'professional', label: 'Professional ($80/mo)' },
  { value: 'corporate', label: 'Corporate ($399/mo)' },
  { value: 'patron', label: 'Patron ($1,000+/mo)' },
];

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [tier, setTier] = useState('community');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser(user);
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      if (data) {
        setFullName(data.full_name ?? '');
        setAffiliation(data.affiliation ?? '');
        setTier(data.membership_tier ?? 'community');
      }
      setLoading(false);
    };
    load();
  }, [navigate]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: fullName,
        affiliation,
        membership_tier: tier,
        updated_at: new Date().toISOString(),
      })
      .eq('id', user.id);
    setSaving(false);
    if (error) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Profile updated', description: 'Your changes have been saved.' });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <p className="text-muted-foreground">Loading your profile…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <Hero title="Your Profile" subtitle="Manage your membership and subscriptions" />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <Card className="border-lab-cyan/20">
            <CardHeader>
              <CardTitle>Profile & Subscription</CardTitle>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="affiliation">Affiliation (university / company)</Label>
                  <Input
                    id="affiliation"
                    value={affiliation}
                    onChange={(e) => setAffiliation(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Membership Tier</Label>
                  <Select value={tier} onValueChange={setTier}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TIER_OPTIONS.map((t) => (
                        <SelectItem key={t.value} value={t.value}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Paid tiers are activated after payment confirmation — we'll email you
                    once your tier is active.
                  </p>
                </div>
                <Button type="submit" className="w-full" disabled={saving}>
                  {saving ? 'Saving…' : 'Update Profile'}
                </Button>
              </form>
              <Button variant="outline" className="w-full mt-4" onClick={handleSignOut}>
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Profile;
