import React, { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, CheckCircle2, Phone, Monitor, Wifi, Printer, Tv, Smartphone, Mail, ShieldCheck, Headphones, XCircle } from 'lucide-react';
import { services } from '@/data/services';
import LeadForm from '@/components/sections/LeadForm';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-12 h-12" />,
  Wifi: <Wifi className="w-12 h-12" />,
  Printer: <Printer className="w-12 h-12" />,
  Tv: <Tv className="w-12 h-12" />,
  Smartphone: <Smartphone className="w-12 h-12" />,
  Mail: <Mail className="w-12 h-12" />,
  ShieldCheck: <ShieldCheck className="w-12 h-12" />,
  Headset: <Headphones className="w-12 h-12" />,
};

function useScrollReveal() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  };
}

export default function ServiceDetail() {
  const params = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === params.slug);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Tech Cyber Hub`;
    } else {
      document.title = "Service Not Found | Tech Cyber Hub";
    }
    window.scrollTo(0, 0);
  }, [service]);

  const reveal = useScrollReveal();

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <XCircle className="w-20 h-20 text-destructive mb-6 opacity-50" />
        <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/services">View All Services</Link>
        </Button>
      </div>
    );
  }

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
            <Link href="/services">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors mb-8 cursor-pointer group">
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                All Services
              </span>
            </Link>
            <div className="flex items-start gap-6 mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                {iconMap[service.icon]}
              </div>
              <div>
                <div className="text-secondary font-semibold mb-2">{service.price}</div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl">{service.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all">
                <a href="tel:+18887771234">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (888) 777-1234
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                <a href="#lead-form">Get a Free Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Problems We Solve</h2>
            <p className="text-muted-foreground">Sound familiar? You're not alone — we've fixed these thousands of times.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.commonProblems.map((problem, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="group p-5 rounded-xl bg-card/50 border border-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] transition-all cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <p className="text-white font-medium">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Fix */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...reveal}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Fix</h2>
              <p className="text-muted-foreground mb-8">Our certified technicians are trained to handle every aspect of {service.title.toLowerCase()} issues.</p>
              <ul className="flex flex-col gap-4">
                {service.whatWeFix.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...reveal} className="grid grid-cols-1 gap-4">
              {service.whyChooseUs.map((reason, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card/50 border border-white/10 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,102,255,0.1)] transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-muted-foreground">Getting your tech fixed is as simple as 1-2-3.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
            {service.howItWorks.map((step, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-[0_0_20px_rgba(0,102,255,0.3)] z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Issue Fixed Today</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Fill in a few details and a certified technician will be in touch within 15 minutes.</p>
          </motion.div>
          <LeadForm preselectedService={service.id} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card/30 border-t border-white/5 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {service.faqItems.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-card/50 border border-white/10 px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-white text-left hover:no-underline py-5 font-medium hover:text-secondary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faqItems.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              }),
            }}
          />
        </div>
      </section>
    </div>
  );
}
