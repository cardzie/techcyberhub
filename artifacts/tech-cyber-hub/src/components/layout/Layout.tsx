import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[120px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <Navigation />
      
      <main className="flex-1 w-full relative z-10 pt-20">
        {children}
      </main>

      <Footer />

      {/* Floating Desktop Phone Button */}
      <motion.a 
        href="tel:+18887771234"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:bg-primary/90 hover:scale-105 transition-all animate-glow"
        aria-label="Call Now"
      >
        <PhoneCall className="w-7 h-7" />
      </motion.a>

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-white/10">
        <a 
          href="tel:+18887771234"
          className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg animate-glow"
        >
          <PhoneCall className="w-5 h-5" />
          Call Now: (888) 777-1234
        </a>
      </div>
    </div>
  );
}
