import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2, ChevronRight, ChevronLeft, Phone,
  Monitor, Wifi, Printer, Tv, Smartphone, Mail, ShieldCheck, Headphones
} from 'lucide-react';
import { services } from '@/data/services';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor className="w-6 h-6" />,
  Wifi: <Wifi className="w-6 h-6" />,
  Printer: <Printer className="w-6 h-6" />,
  Tv: <Tv className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Headset: <Headphones className="w-6 h-6" />,
};

interface LeadFormProps {
  preselectedService?: string;
}

const steps = ['Service', 'Issue', 'Contact', 'Done'];

const stepVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.25 } }),
};

export default function LeadForm({ preselectedService }: LeadFormProps) {
  const [step, setStep] = useState(preselectedService ? 1 : 0);
  const [direction, setDirection] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(preselectedService || '');
  const [issue, setIssue] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const selectedService = services.find((s) => s.id === selectedServiceId);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all ${
              i < step ? 'bg-primary text-white' :
              i === step ? 'bg-primary text-white ring-4 ring-primary/20' :
              'bg-white/10 text-muted-foreground'
            }`}>
              {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 max-w-[40px] h-0.5 transition-all ${i < step ? 'bg-primary' : 'bg-white/10'}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="relative overflow-hidden min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 0: Select Service */}
          {step === 0 && (
            <motion.div
              key="step0"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h3 className="text-2xl font-bold text-white mb-2">What do you need help with?</h3>
              <p className="text-muted-foreground mb-6">Select the service that best fits your issue.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    data-testid={`button-service-${service.id}`}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-all ${
                      selectedServiceId === service.id
                        ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,102,255,0.2)]'
                        : 'bg-white/5 border-white/10 text-muted-foreground hover:border-primary/40 hover:text-white'
                    }`}
                  >
                    <span className={selectedServiceId === service.id ? 'text-secondary' : ''}>
                      {iconMap[service.icon]}
                    </span>
                    <span className="text-center leading-snug">{service.title}</span>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => goTo(1)}
                disabled={!selectedServiceId}
                size="lg"
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] transition-all disabled:opacity-50"
                data-testid="button-step0-next"
              >
                Continue <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </motion.div>
          )}

          {/* Step 1: Describe Issue */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Describe your {selectedService?.title} issue
              </h3>
              <p className="text-muted-foreground mb-6">The more detail, the faster we can help you.</p>
              <textarea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Example: My computer keeps freezing after 10 minutes and I hear a loud fan noise..."
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition resize-none mb-6"
                data-testid="textarea-issue"
              />
              <div className="flex gap-4">
                <Button
                  onClick={() => goTo(0)}
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
                  data-testid="button-step1-back"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </Button>
                <Button
                  onClick={() => goTo(2)}
                  disabled={!issue.trim()}
                  size="lg"
                  className="flex-1 h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all disabled:opacity-50"
                  data-testid="button-step1-next"
                >
                  Continue <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Contact Info */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h3 className="text-2xl font-bold text-white mb-2">How do we reach you?</h3>
              <p className="text-muted-foreground mb-6">A technician will contact you within 15 minutes.</p>
              <div className="flex flex-col gap-4 mb-6">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                  data-testid="input-lead-name"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                  data-testid="input-lead-phone"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition"
                  data-testid="input-lead-email"
                />
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={() => goTo(1)}
                  variant="outline"
                  size="lg"
                  className="h-14 px-6 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back
                </Button>
                <Button
                  onClick={() => goTo(3)}
                  disabled={!name.trim() || !phone.trim() || !email.trim()}
                  size="lg"
                  className="flex-1 h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all disabled:opacity-50"
                  data-testid="button-step2-submit"
                >
                  Submit Request <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Success */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Thank you, <span className="text-white font-medium">{name}</span>! A certified technician will call you at <span className="text-secondary font-medium">{phone}</span> within 15 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(0,102,255,0.4)] transition-all">
                  <a href="tel:+18887771234">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now for Faster Help
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
