import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Shield, Clock, Star, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Monitor, Wifi, Smartphone, Tv, Mail, Printer, ShieldCheck, Headphones,
  Award, Users, Phone
} from 'lucide-react';
import { services } from '@/data/services';
import LeadForm from '@/components/sections/LeadForm';

const iconMap: Record<string, React.ElementType> = {
  Monitor: Monitor,
  Wifi: Wifi,
  Printer: Printer,
  Tv: Tv,
  Smartphone: Smartphone,
  Mail: Mail,
  ShieldCheck: ShieldCheck,
  Headset: Headphones,
};

function useScrollReveal() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  };
}

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (end / duration) * 16;
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    rating: 5,
    text: "My laptop was completely frozen and I was panicking before a work presentation. Tech Cyber Hub had it fixed in 45 minutes. Lifesavers!",
  },
  {
    name: "Robert D.",
    location: "Chicago, IL",
    rating: 5,
    text: "Set up our entire home WiFi mesh system perfectly. No more dead zones and everything is connected. Worth every penny.",
  },
  {
    name: "Linda K.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "They removed a nasty virus that my regular antivirus missed. Professional, fast, and explained everything in plain English.",
  },
  {
    name: "Tom W.",
    location: "Seattle, WA",
    rating: 5,
    text: "Transferred all my data to a new phone seamlessly. Even helped me set up my new smart TV. Outstanding service!",
  },
];

const faqs = [
  { q: "How quickly can you help me?", a: "For remote support, we can typically connect to your device within 15 minutes of your request. For on-site visits, we often have same-day or next-day availability depending on your location." },
  { q: "Is remote support safe?", a: "Yes, absolutely. Our remote connections are fully encrypted and you can see everything our technician is doing on your screen in real time. You are in control and can disconnect at any time." },
  { q: "What if you can't fix my problem?", a: "We operate on a No Fix, No Fee policy for diagnostic issues. If we cannot resolve your problem, you won't be charged for the attempted service." },
  { q: "Do you service both Macs and Windows computers?", a: "Yes! Our certified technicians are experts in both Apple macOS and Windows operating systems, as well as a wide range of other devices." },
  { q: "Are your technicians vetted and certified?", a: "Every Tech Cyber Hub technician undergoes a thorough background check and holds industry-standard certifications before being brought onto our team." },
];

const heroSlides = [
  {
    id: 'computer-repair',
    badge: 'Most Popular Service',
    badgeColor: 'bg-primary/20 text-primary border border-primary/30',
    heading: 'Computer Running Slow or Crashing?',
    sub: "We diagnose and fix any PC or Mac issue — viruses, crashes, slow performance, data recovery and more. Same-day service available.",
    features: [
      'Virus & malware removal',
      'Hardware upgrades (RAM, SSD)',
      'Data recovery & backup',
      'OS reinstall & optimization',
    ],
    price: 'Starting at $79',
    slug: 'computer-repair',
    Icon: Monitor,
    orb1: 'bg-primary/20',
    orb2: 'bg-blue-700/20',
    iconGlow: 'shadow-[0_0_80px_rgba(0,102,255,0.4)]',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    id: 'network-wifi',
    badge: 'Top-Rated Service',
    badgeColor: 'bg-secondary/20 text-secondary border border-secondary/30',
    heading: 'WiFi Dead Zones Killing Your Productivity?',
    sub: "We design and install blazing-fast whole-home mesh networks, secure your connection, and eliminate every dead spot for good.",
    features: [
      'Mesh WiFi system setup',
      'Router config & security',
      'Speed & coverage optimization',
      'All devices connected seamlessly',
    ],
    price: 'Starting at $99',
    slug: 'network-wifi',
    Icon: Wifi,
    orb1: 'bg-secondary/20',
    orb2: 'bg-cyan-700/15',
    iconGlow: 'shadow-[0_0_80px_rgba(0,229,255,0.35)]',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    document.title = "Tech Cyber Hub | Premium Tech Support for American Homes";
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > slide ? 1 : -1);
    setSlide(idx);
  };
  const prev = () => { setDirection(-1); setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length); };
  const next = () => { setDirection(1);  setSlide((s) => (s + 1) % heroSlides.length); };

  const reveal = useScrollReveal();
  const current = heroSlides[slide];

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
    exit:  (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.35 } }),
  };

  return (
    <div className="w-full">
      {/* Hero Banner Slider */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-20 pb-10 overflow-hidden">
        {/* Animated background orbs — keyed to slide so they cross-fade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`orbs-${slide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <div className={`absolute top-1/4 left-1/4 w-[480px] h-[480px] rounded-full ${current.orb1} blur-[120px] animate-blob`} />
            <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full ${current.orb2} blur-[100px] animate-blob`} style={{ animationDelay: '2s' }} />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center">
          {/* Top availability badge */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-white">Technicians available near you</span>
            </motion.div>
          </div>

          {/* Slide content */}
          <div className="relative min-h-[420px] md:min-h-[360px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={slide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full"
              >
                {/* Left: Text */}
                <div className="text-left">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5 ${current.badgeColor}`}>
                    {current.badge}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                    {current.heading}
                  </h1>
                  <p className="text-lg text-muted-foreground mb-7 max-w-lg">
                    {current.sub}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {current.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button asChild size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all">
                      <a href="tel:+18887771234">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (888) 777-1234
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                      <Link href={`/services/${current.slug}`}>
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right: Icon visual */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className={`relative flex items-center justify-center w-72 h-72 rounded-3xl ${current.iconBg} backdrop-blur-sm border border-white/10 ${current.iconGlow}`}>
                    <current.Icon className={`w-36 h-36 ${current.iconColor} opacity-90`} />
                    <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2 text-sm font-bold text-white">
                      {current.price}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: arrows + dots */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === slide ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            {/* Trust badges */}
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9/5</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Certified</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary" /> 15-min response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-card/40 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 10000, suffix: '+', label: 'Customers Helped' },
              { value: 99, suffix: '%', label: 'Issues Resolved' },
              { value: 250, suffix: '+', label: 'Certified Technicians' },
              { value: 12, suffix: '+', label: 'Years of Experience' },
            ].map((stat, i) => (
              <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What do you need help with?</h2>
            <p className="text-lg text-muted-foreground">Select a service below to learn how we can resolve your tech issues today.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Monitor;
              return (
                <motion.div
                  key={service.slug}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.07 }}
                >
                  <Link href={`/services/${service.slug}`}>
                    <div className="glass-card p-6 rounded-2xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 hover-glow h-full flex flex-col" data-testid={`card-service-home-${service.id}`}>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <IconComponent className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm flex-1">{service.tagline}</p>
                      <div className="mt-6 flex items-center text-secondary font-medium text-sm gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...reveal}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why thousands of Americans trust Tech Cyber Hub.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just fix devices — we restore your peace of mind. Our certified experts treat your home and your data with the utmost respect.
              </p>
              <ul className="space-y-5">
                {[
                  "Vetted, background-checked certified technicians",
                  "Clear, upfront pricing with no hidden fees",
                  "Plain English explanations, no tech jargon",
                  "100% satisfaction guarantee on all services",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    <span className="text-white text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  { icon: <Award className="w-5 h-5" />, text: "BBB A+ Accredited" },
                  { icon: <Star className="w-5 h-5" />, text: "Google Guaranteed" },
                  { icon: <Shield className="w-5 h-5" />, text: "Microsoft Certified" },
                  { icon: <Users className="w-5 h-5" />, text: "No Fix, No Fee" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                    <span className="text-secondary">{badge.icon}</span>
                    {badge.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "10,000+", desc: "Customers Served" },
                { title: "99%", desc: "Issues Resolved" },
                { title: "24/7", desc: "Support Available" },
                { title: "4.9/5", desc: "Average Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl text-center"
                >
                  <div className="text-4xl font-bold text-gradient mb-2">{stat.title}</div>
                  <div className="text-muted-foreground">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Getting help is easy</h2>
            <p className="text-muted-foreground text-lg">From your first call to a fully resolved issue — here's how it works.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />
            {[
              { step: 1, title: "Describe Your Issue", desc: "Call us or fill out our form. Describe what's wrong — no tech knowledge needed." },
              { step: 2, title: "Get Matched Fast", desc: "We connect you with the right certified technician for your specific problem." },
              { step: 3, title: "Issue Resolved", desc: "We fix it remotely or visit your home. You get updates throughout the process." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-[0_0_20px_rgba(0,102,255,0.3)] z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">What our customers say</h2>
            <p className="text-muted-foreground text-lg">Real feedback from real Americans who trusted us with their technology.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col gap-4 hover:border-primary/20 hover:shadow-[0_0_20px_rgba(0,102,255,0.08)] transition-all"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm flex-1">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="get-help" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get Your Issue Fixed Today
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fill in a few details and a certified technician will be in touch within 15 minutes.
            </p>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 md:p-10 rounded-2xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card/30 border-t border-white/5 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know before reaching out.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-card/50 border border-white/10 px-6 data-[state=open]:border-primary/30 transition-all"
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
                mainEntity: faqs.map((faq) => ({
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
