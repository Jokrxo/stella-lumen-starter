import { Link } from "wouter";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/data";
import { Facebook, Linkedin, Youtube, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
                <img 
                  src={COMPANY_INFO.logo} 
                  alt={COMPANY_INFO.name} 
                  className="h-12 w-auto"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/stella-lumen-logo.png"; }}
                />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              {COMPANY_INFO.tagline}. delivering excellence in Strategic Consulting, Innovation Advisory, and Talent Development.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={COMPANY_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors"><Linkedin size={20} /></a>
              <a href={COMPANY_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors"><Facebook size={20} /></a>
              <a href={COMPANY_INFO.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors"><Youtube size={20} /></a>
              <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-secondary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-2 cursor-pointer">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-b border-white/10 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {['Strategic Consulting', 'Innovation Advisory', 'Talent Development', 'Performance Optimization'].map(service => (
                <li key={service} className="text-white/70 text-sm flex items-center gap-2">
                   <span className="w-1 h-1 bg-secondary rounded-full"></span>
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white cursor-pointer">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
