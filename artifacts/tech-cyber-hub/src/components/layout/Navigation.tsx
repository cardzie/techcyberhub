import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'wouter';
import {
  PhoneCall, Menu, X, ChevronDown, ChevronRight,
  Monitor, Wifi, ShieldCheck, Tv, Smartphone, Home, HelpCircle,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { services, serviceCategories } from '@/data/services';

const categoryIconMap: Record<string, React.ElementType> = {
  Monitor, Wifi, ShieldCheck, Tv, Smartphone, Home, HelpCircle, Volume2,
};

function getServiceTitle(slug: string) {
  return services.find((s) => s.slug === slug)?.title ?? slug;
}

const popularSlugs = [
  'computer-repair',
  'virus-removal',
  'network-wifi',
  'printer-support',
  'smart-home-setup',
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [location] = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTriggerRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  };
  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary/50 transition-all">
                TC
              </div>
              <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
                Tech Cyber <span className="text-secondary">Hub</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/">
                  <span className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${location === '/' ? 'text-secondary' : 'text-gray-300'}`}>
                    Home
                  </span>
                </Link>
              </li>

              {/* Services mega menu trigger */}
              <li
                ref={megaTriggerRef}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={scheduleMegaClose}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-secondary ${megaMenuOpen ? 'text-secondary' : 'text-gray-300'}`}
                  onClick={() => setMegaMenuOpen((o) => !o)}
                  aria-expanded={megaMenuOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </li>

              <li>
                <Link href="/about">
                  <span className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${location === '/about' ? 'text-secondary' : 'text-gray-300'}`}>
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className={`text-sm font-medium transition-colors hover:text-secondary cursor-pointer ${location === '/contact' ? 'text-secondary' : 'text-gray-300'}`}>
                    Contact
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <a
                href="tel:+18887771234"
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                (888) 777-1234
              </a>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-[0_0_15px_rgba(0,102,255,0.4)] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)] transition-all"
              >
                <Link href="/contact">Get Help</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── MEGA MENU (Desktop) ─────────────────────────────────────────── */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            ref={megaRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 right-0 bg-background/97 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            onMouseEnter={openMega}
            onMouseLeave={scheduleMegaClose}
          >
            <div className="container mx-auto px-4 md:px-6 py-8">
              <div className="flex gap-8">
                {/* Popular column */}
                <div className="w-44 shrink-0 border-r border-white/10 pr-8">
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Popular</p>
                  <ul className="space-y-2">
                    {popularSlugs.map((slug) => (
                      <li key={slug}>
                        <Link href={`/services/${slug}`}>
                          <span className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer group">
                            <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            {getServiceTitle(slug)}
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li className="pt-2">
                      <Link href="/services">
                        <span className="text-xs font-semibold text-primary hover:text-secondary transition-colors cursor-pointer">
                          View all services →
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Category columns */}
                <div className="flex-1 grid grid-cols-3 xl:grid-cols-4 gap-6">
                  {serviceCategories.map((cat) => {
                    const IconComp = categoryIconMap[cat.icon] || Monitor;
                    return (
                      <div key={cat.slug}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-primary/10">
                            <IconComp className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <p className="text-xs font-bold text-white uppercase tracking-wide">
                            {cat.name}
                          </p>
                        </div>
                        <ul className="space-y-1.5">
                          {cat.services.slice(0, 6).map((slug) => (
                            <li key={slug}>
                              <Link href={`/services/${slug}`}>
                                <span className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                  <ChevronRight className="w-2.5 h-2.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                  {getServiceTitle(slug)}
                                </span>
                              </Link>
                            </li>
                          ))}
                          {cat.services.length > 6 && (
                            <li>
                              <Link href="/services">
                                <span className="text-xs text-primary/60 hover:text-primary transition-colors cursor-pointer">
                                  +{cat.services.length - 6} more
                                </span>
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* CTA panel */}
                <div className="w-52 shrink-0 border-l border-white/10 pl-8 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Need Help Now?</p>
                    <p className="text-xs text-muted-foreground mb-4">Our technicians are available and ready to help you right now.</p>
                    <a
                      href="tel:+18887771234"
                      className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors mb-4"
                    >
                      <PhoneCall className="w-4 h-4 text-primary" />
                      (888) 777-1234
                    </a>
                    <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg">
                      <Link href="/contact">Get Free Diagnosis</Link>
                    </Button>
                  </div>
                  <div className="mt-6 p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-white font-semibold mb-1">⚡ Same-Day Service</p>
                    <p className="text-xs text-muted-foreground">Available in most areas. Remote support in 15 minutes.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE MENU ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/97 backdrop-blur-xl border-b border-white/10 shadow-2xl p-5 flex flex-col gap-4 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {/* Top links */}
            <div className="flex flex-col gap-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`block py-2 text-base font-medium ${location === link.href ? 'text-secondary' : 'text-white'}`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Services</p>

              {/* Popular quick links */}
              <div className="mb-4 p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-xs text-muted-foreground mb-2">Popular</p>
                <div className="flex flex-wrap gap-2">
                  {popularSlugs.map((slug) => (
                    <Link key={slug} href={`/services/${slug}`}>
                      <span className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 cursor-pointer">
                        {getServiceTitle(slug)}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Accordion categories */}
              <div className="space-y-1">
                {serviceCategories.map((cat) => {
                  const IconComp = categoryIconMap[cat.icon] || Monitor;
                  const isOpen = expandedCategory === cat.slug;
                  return (
                    <div key={cat.slug} className="rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/8 transition-colors"
                        onClick={() => setExpandedCategory(isOpen ? null : cat.slug)}
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded-lg bg-primary/10">
                            <IconComp className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-white">{cat.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-white/3"
                          >
                            <div className="px-3 py-2 grid grid-cols-2 gap-1">
                              {cat.services.map((slug) => (
                                <Link key={slug} href={`/services/${slug}`}>
                                  <span className="flex items-center gap-1 py-1.5 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer">
                                    <ChevronRight className="w-3 h-3 text-primary shrink-0" />
                                    {getServiceTitle(slug)}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3">
                <Link href="/services">
                  <span className="text-sm text-primary font-semibold cursor-pointer">
                    Browse all {services.length} services →
                  </span>
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
              <a href="tel:+18887771234" className="flex items-center gap-3 text-base font-bold text-white">
                <PhoneCall className="w-5 h-5 text-primary" />
                (888) 777-1234
              </a>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 text-base"
              >
                <Link href="/contact">Get Expert Help Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
