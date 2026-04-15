import React from 'react';
import { Link } from 'wouter';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card/50 border-t border-white/10 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                TC
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Tech Cyber <span className="text-secondary">Hub</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              Premium tech support for American homes and small businesses. Fast, reliable, and deeply trustworthy.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Home</span></Link></li>
              <li><Link href="/services"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">All Services</span></Link></li>
              <li><Link href="/about"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">About Us</span></Link></li>
              <li><Link href="/contact"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="font-bold text-white mb-6">Top Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/computer-repair"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Computer Repair</span></Link></li>
              <li><Link href="/services/network-wifi"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Network & WiFi</span></Link></li>
              <li><Link href="/services/smart-home-tv"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Smart Home Setup</span></Link></li>
              <li><Link href="/services/security-antivirus"><span className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">Security & Antivirus</span></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <PhoneCall className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+18887771234" className="hover:text-white transition-colors block font-medium text-white">(888) 777-1234</a>
                  <span className="text-sm">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:support@techcyberhub.com" className="hover:text-white transition-colors">support@techcyberhub.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Tech Avenue, Suite 400<br />
                  Austin, TX 78701
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Tech Cyber Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
