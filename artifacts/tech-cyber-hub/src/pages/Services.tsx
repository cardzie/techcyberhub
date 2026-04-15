import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Monitor, Wifi, Printer, Tv, Smartphone, Mail, ShieldCheck, Headphones, Search } from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-8 h-8" />,
  Wifi: <Wifi className="w-8 h-8" />,
  Printer: <Printer className="w-8 h-8" />,
  Tv: <Tv className="w-8 h-8" />,
  Smartphone: <Smartphone className="w-8 h-8" />,
  Mail: <Mail className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Headset: <Headphones className="w-8 h-8" />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.title = "All Services | Tech Cyber Hub";
    window.scrollTo(0, 0);
  }, []);

  const filtered = services.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="text-sm font-medium text-secondary">Expert Support In Every Area</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              All Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              From computers and WiFi to smart devices and cybersecurity — we handle it all for American homes and small businesses.
            </p>
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 backdrop-blur-md transition"
                data-testid="input-search-services"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-xl">No services match your search.</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((service) => (
                <motion.div key={service.id} variants={cardVariants}>
                  <Link href={`/services/${service.slug}`}>
                    <div
                      className="group relative flex flex-col h-full p-6 rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-300 cursor-pointer overflow-hidden"
                      data-testid={`card-service-${service.id}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {iconMap[service.icon]}
                        </div>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          {service.price}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex-1 mb-6">
                        {service.tagline}
                      </p>

                      <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Call us and describe your issue. Our technicians will guide you to the right solution.
          </p>
          <Button asChild size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all">
            <a href="tel:+18887771234">Call (888) 777-1234</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
