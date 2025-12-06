import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { cartCount } = useCart();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
             {/* Using the provided logo URL */}
            <img 
              src={COMPANY_INFO.logo} 
              alt={COMPANY_INFO.name} 
              className="h-10 w-auto object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/stella-lumen-logo.png"; }}
            />
            <span className={`text-xl font-serif font-bold tracking-wide ${
              scrolled || location !== '/' ? "text-primary" : "text-white"
            }`}>
              {COMPANY_INFO.name}
            </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group">
              <Link href={link.href} className={`text-sm font-medium transition-colors hover:text-secondary flex items-center gap-1 cursor-pointer ${
                  (scrolled || location !== '/') ? "text-foreground" : "text-white/90"
                }`}>
                  {link.label}
                  {link.subItems && <ChevronDown className="w-3 h-3" />}
              </Link>
              
              {/* Dropdown */}
              {link.subItems && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-md shadow-lg p-2 min-w-[200px] border border-border/50">
                    {link.subItems.map((sub) => (
                      <Link key={sub.label} href={sub.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-sm transition-colors cursor-pointer">
                          {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/cart" className={`relative p-2 transition-colors hover:text-secondary cursor-pointer ${
              (scrolled || location !== '/') ? "text-foreground" : "text-white"
            }`}>
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
          </Link>
          <Link href="/contact" className="cursor-pointer">
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden p-2 ${
            (scrolled || location !== '/') ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border absolute w-full shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link href={link.href} className="text-lg font-medium text-foreground hover:text-primary block py-2 cursor-pointer">
                      {link.label}
                  </Link>
                  {link.subItems && (
                    <div className="pl-4 flex flex-col gap-2 border-l-2 border-muted ml-2 mt-1">
                      {link.subItems.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="text-sm text-muted-foreground hover:text-primary py-1 cursor-pointer">
                            {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px bg-border my-2" />
              <div className="flex justify-between items-center">
                <Link href="/cart" className="flex items-center gap-2 text-foreground font-medium cursor-pointer">
                    <ShoppingCart className="w-5 h-5" />
                    Cart ({cartCount})
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
