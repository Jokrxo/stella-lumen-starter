import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import ProductCard from "@/components/ui/product-card";
import { PRODUCTS, SERVICES, COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import * as Icons from "lucide-react";

export default function Home() {
  // Get featured products
  const featuredProducts = PRODUCTS.filter(p => p.featured || ['venus', 'dara'].includes(p.id));

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h3 className="text-secondary font-medium tracking-widest uppercase mb-2">Our Solutions</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Featured Products</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-secondary font-medium tracking-widest uppercase mb-2">What We Do</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Expertise that Drives Growth</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Stella Lumen provides a constellation of services designed to navigate the complexities of modern business. From strategic foresight to operational excellence.
              </p>
              <Link href="/team-2">
                <Button className="bg-white text-primary hover:bg-secondary hover:text-primary rounded-none px-8 py-6 text-lg font-semibold">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.slice(0, 4).map((service, index) => {
                // Dynamic Icon Component
                const IconComponent = (Icons as any)[service.icon] || Icons.Star;
                
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 transition-colors"
                  >
                    <div className="bg-secondary/20 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                      <IconComponent className="text-secondary w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2">{service.title}</h4>
                    <p className="text-white/60 text-sm">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Ready to reach for the stars?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how we can help your business achieve its full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 py-6 text-lg shadow-xl">
                Get in Touch
              </Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-2">
              <Icons.Phone className="w-5 h-5" />
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
