import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

function useScrollReveal() {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
  };
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  useEffect(() => {
    document.title = "Contact Us | Tech Cyber Hub";
    window.scrollTo(0, 0);
  }, []);

  const reveal = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white">Technicians standing by</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Whether you have a quick question or a complex tech emergency — we're here and ready to help, 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Contact Info */}
            <motion.div {...reveal} className="lg:col-span-2 flex flex-col gap-6">
              <div className="p-6 rounded-2xl bg-card/50 border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <a href="tel:+18887771234" className="text-secondary font-semibold text-lg hover:text-secondary/80 transition-colors block">(888) 777-1234</a>
                  <span className="text-muted-foreground text-sm">Available 24/7, every day</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <a href="mailto:support@techcyberhub.com" className="text-secondary hover:text-secondary/80 transition-colors block">support@techcyberhub.com</a>
                  <span className="text-muted-foreground text-sm">We respond within 1 hour</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Headquarters</h3>
                  <p className="text-muted-foreground">123 Tech Avenue, Suite 400<br />Austin, TX 78701</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card/50 border border-white/10 flex items-start gap-4 hover:border-primary/30 transition-all">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Support Hours</h3>
                  <ul className="text-muted-foreground text-sm flex flex-col gap-1">
                    <li className="flex justify-between gap-6"><span>Monday – Friday</span><span className="text-white">7am – 10pm CT</span></li>
                    <li className="flex justify-between gap-6"><span>Saturday</span><span className="text-white">8am – 8pm CT</span></li>
                    <li className="flex justify-between gap-6"><span>Sunday</span><span className="text-white">10am – 6pm CT</span></li>
                    <li className="flex justify-between gap-6"><span>Emergency</span><span className="text-secondary font-semibold">24/7</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...reveal} className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-card/50 border border-white/10 backdrop-blur-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                      A technician will be in touch within 15 minutes. For urgent issues, please call us directly.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                      <a href="tel:+18887771234">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now for Faster Help
                      </a>
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground mb-8">Tell us about your issue and we'll get right on it.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" data-testid="form-contact">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-white mb-2" htmlFor="name">Full Name *</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white mb-2" htmlFor="phone">Phone Number *</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                          data-testid="input-email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="service">Service Needed</label>
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                          data-testid="select-service"
                        >
                          <option value="" className="bg-background">Select a service...</option>
                          <option value="computer-repair" className="bg-background">Computer Repair</option>
                          <option value="network-wifi" className="bg-background">Network & WiFi</option>
                          <option value="printer-support" className="bg-background">Printer Support</option>
                          <option value="smart-home-tv" className="bg-background">Smart Home & TV</option>
                          <option value="mobile-devices" className="bg-background">iPhone & Android</option>
                          <option value="email-office" className="bg-background">Email & Microsoft 365</option>
                          <option value="security-antivirus" className="bg-background">Security & Antivirus</option>
                          <option value="remote-support" className="bg-background">Remote Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2" htmlFor="message">Describe Your Issue *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us what's happening with your technology..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition resize-none"
                          data-testid="textarea-message"
                        />
                      </div>

                      <Button type="submit" size="lg" className="h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all" data-testid="button-submit">
                        Send Message
                      </Button>

                      <p className="text-center text-sm text-muted-foreground">
                        Or call us directly at{' '}
                        <a href="tel:+18887771234" className="text-secondary hover:text-secondary/80 font-semibold">(888) 777-1234</a>
                        {' '}for immediate help.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
