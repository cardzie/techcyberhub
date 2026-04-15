import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Star, Users, Award, CheckCircle2, Phone } from 'lucide-react';

function useScrollReveal() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  };
}

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trustworthy",
    description: "We earn your trust through transparency, honesty, and consistently delivering on our promises.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Reliable",
    description: "Available when you need us most. Fast response times and same-day solutions whenever possible.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Expert",
    description: "Our technicians are certified, trained, and continuously updated on the latest technology.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Human",
    description: "We speak plain English, not tech jargon. We explain everything so you understand and feel confident.",
  },
];

const stats = [
  { label: "Customers Helped", value: "10,000+" },
  { label: "Average Rating", value: "4.9/5" },
  { label: "Years of Experience", value: "12+" },
  { label: "Technicians Nationwide", value: "250+" },
];

const teamMembers = [
  { name: "James Carter", role: "Founder & CEO", bio: "15 years in enterprise IT. Started Tech Cyber Hub to bring premium tech support to everyday people." },
  { name: "Maria Santos", role: "Head of Technicians", bio: "Microsoft Certified Expert with a passion for solving complex network and software issues." },
  { name: "Devon Hill", role: "Customer Success Lead", bio: "Dedicated to ensuring every customer interaction ends with a solution and a smile." },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us | Tech Cyber Hub";
    window.scrollTo(0, 0);
  }, []);

  const reveal = useScrollReveal();

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-secondary">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              We make technology<br />
              <span className="text-gradient">work for you.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tech Cyber Hub was founded on one simple belief: everyone deserves premium tech support, not just big corporations. We bring enterprise-grade expertise directly to your home or small business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...reveal}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">From a Garage to 250+ Technicians</h2>
              <div className="flex flex-col gap-5 text-muted-foreground">
                <p>
                  In 2012, founder James Carter was frustrated watching his parents struggle with basic computer issues — paying hundreds of dollars for unhelpful, impersonal "support" from big box stores.
                </p>
                <p>
                  He launched Tech Cyber Hub out of his garage in Austin, Texas, with a radical idea: treat every customer like a VIP, fix issues correctly the first time, and never charge for guesswork.
                </p>
                <p>
                  Today, Tech Cyber Hub has helped over 10,000 American families and small businesses — with a 4.9-star average rating and a network of 250+ certified technicians across the country.
                </p>
              </div>
            </motion.div>
            <motion.div {...reveal} className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-6 h-6" />, text: "BBB A+ Accredited" },
                { icon: <Star className="w-6 h-6" />, text: "Google Guaranteed" },
                { icon: <Shield className="w-6 h-6" />, text: "Microsoft Certified" },
                { icon: <CheckCircle2 className="w-6 h-6" />, text: "No Fix, No Fee" },
              ].map((badge, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card/50 border border-white/10 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-all">
                  <div className="text-primary">{badge.icon}</div>
                  <span className="text-white font-semibold">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">These aren't just words on a wall — they define every interaction we have with our customers.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] transition-all group"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Leadership</h2>
            <p className="text-muted-foreground">The team behind 10,000+ happy customers.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-white/10 text-center hover:border-primary/30 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <div className="text-secondary text-sm font-medium mb-4">{member.role}</div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-white/10 pb-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div {...reveal}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to experience the difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join over 10,000 satisfied customers who trust Tech Cyber Hub with their technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all">
                <a href="tel:+18887771234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (888) 777-1234
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-10 text-lg bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
