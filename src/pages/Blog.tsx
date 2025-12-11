import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FileText, BookOpen } from "lucide-react";

export default function Blog() {
  const PDF_POSTS = [
    {
      id: "polaris-magazine",
      title: "Polaris Magazine",
      description: "Discover insights and strategies for navigating the modern business landscape. This comprehensive guide covers essential topics for entrepreneurs and business leaders.",
      image: "/assets/Polaris-Package-300x300.jpg",
      href: "/assets/Polaris%20Magazine.pdf",
      category: "Business Insights",
    },
    {
      id: "perseus-magazine",
      title: "Perseus Magazine",
      description: "A deep dive into innovation and technology trends shaping South African businesses. Learn how to leverage cutting-edge solutions for growth.",
      image: "/assets/Perseus-Package-300x300.jpg",
      href: "/assets/Perseus%20Magazine.pdf",
      category: "Technology",
    },
    {
      id: "10-risks",
      title: "10 Risks Crippling Our Country",
      description: "An analytical exploration of the critical challenges facing South Africa's economy and practical strategies for businesses to navigate uncertainty.",
      image: "/assets/10-risks-crippling-our-country-cover.png",
      href: "/assets/10%20Risks%20Crippling%20Our%20Country.pdf",
      category: "Economic Analysis",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Publications & Resources</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our collection of publications, insights, and resources designed to help you navigate business challenges and opportunities.
          </p>
        </motion.div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PDF_POSTS.map((post, index) => (
              <motion.article 
                key={post.id} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { 
                      (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Cover+Image"; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      <FileText className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {post.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <a 
                      href={post.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Read Now <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                    <a 
                      href={post.href} 
                      download
                      className="shrink-0"
                    >
                      <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Download className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Want More Insights?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us to learn more about our research and publications, or to discuss how we can help your business thrive.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
