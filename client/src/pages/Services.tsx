import { PAGE_SERVICES, TEAM } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h1>
            <p className="text-white/80 text-xl">
              Comprehensive solutions tailored to elevate your business performance and governance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Team Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Expert Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our dedicated professionals are here to guide you through every step of your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TEAM.slice(0, 4).map((member) => (
              <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Team+Image"; }}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-primary">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PAGE_SERVICES.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Star;
              return (
                <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg border border-border hover:border-secondary transition-colors group">
                  <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {[1,2,3].map(i => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-secondary" />
                        <span>Specialized Capability {i}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?topic=${encodeURIComponent(service.title)}`}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white cursor-pointer">
                      Learn More
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Capabilities</h2>
              <p className="text-muted-foreground mb-8">
                We combine industry expertise with technical prowess to deliver results that matter.
              </p>
              <div className="space-y-4">
                {[
                  "Advanced Financial Modelling",
                  "Regulatory Compliance & Governance",
                  "Risk Assessment Frameworks",
                  "Business Process Re-engineering",
                  "Digital Transformation Strategy",
                  "Custom Software Development"
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-4 bg-white p-4 rounded border border-border">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://cdn.pixabay.com/photo/2017/06/23/10/59/code-2434271_1280.jpg" 
                alt="Capabilities" 
                className="w-full h-full object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1553877604-8155546f8e62?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Featured Solution: Rigel Business</h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-10">
            Our flagship accounting solution designed specifically for SMEs. Streamline your payroll, SARS reports, and financial statements.
          </p>
          <Link href="/projects">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white font-bold px-10 py-6">
              Try Rigel Business
            </Button>
          </Link>
        </div>
      </section>

      {/* Clarification: Specialized Capability vs Our Capabilities */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white border border-border p-6 rounded-lg">
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">Specialized Capability vs Our Capabilities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialized Capabilities are focused, solution-specific competencies showcased within each service or product area. They demonstrate depth for a given offering. Our Capabilities are organization-wide strengths—methods, frameworks, and skills we apply across projects. In short: Specialized Capabilities are vertical, and Our Capabilities are horizontal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
