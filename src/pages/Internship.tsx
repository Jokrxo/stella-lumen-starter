import { motion } from "framer-motion";
import { INTERNS } from "@/lib/data";
import { Quote, BookOpen, Briefcase, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Internship() {
  const benefits = [
    {
      title: "Mentorship",
      desc: "Work directly with senior consultants and directors.",
      icon: Users
    },
    {
      title: "Real Experience",
      desc: "Contribute to actual client projects and software development.",
      icon: Briefcase
    },
    {
      title: "Training",
      desc: "Regular workshops and skills development sessions.",
      icon: BookOpen
    },
    {
      title: "Career Growth",
      desc: "Potential for permanent placement upon completion.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Internship Program</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-xl">
            Launch your career with Stella Lumen. We nurture the next generation of industry leaders.
          </p>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-bold text-primary mb-4">Why Join Us?</h2>
             <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-lg bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intern Profiles */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Meet Our Interns</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {INTERNS.map((intern, idx) => (
              <motion.div
                key={intern.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={intern.image} 
                    alt={intern.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 relative">
                  <Quote className="absolute top-6 right-6 text-secondary/20 w-12 h-12" />
                  <h3 className="text-xl font-serif font-bold text-primary">{intern.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-6">{intern.role}</p>
                  <p className="text-muted-foreground italic">"{intern.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center bg-primary text-white rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to Apply?</h2>
            <p className="mb-8 text-white/80 max-w-xl mx-auto">
              We accept applications for our internship program annually. Send us your CV and a motivation letter.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white cursor-pointer font-bold">
                Contact Us to Apply
              </Button>
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
