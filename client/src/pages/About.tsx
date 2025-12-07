import { motion } from "framer-motion";
import { COMPANY_INFO, TEAM } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const specializations = [
    "Financial Management", "Governance", "Internal Audit", "Risk Management", "Customised Business Solutions"
  ];

  const businessModelSteps = [
    { title: "Approach", desc: "Understanding your unique challenges." },
    { title: "Technical", desc: "Developing robust technical frameworks." },
    { title: "Modelling", desc: "Creating accurate financial and operational models." },
    { title: "Testing", desc: "Rigorous validation of solutions." },
    { title: "Roll out", desc: "Seamless implementation to market." }
  ];

  return (
    <div className="pt-20 pb-10">
      {/* Header */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a legacy of excellence since {COMPANY_INFO.founded}.
          </p>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
          <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Background</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Founded in {COMPANY_INFO.founded}, {COMPANY_INFO.name} brings together over {COMPANY_INFO.experience} years of combined experience in the financial and corporate sectors. We are dedicated to illuminating the path to success for businesses of all sizes.
          </p>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Our team is comprised of seasoned professionals who are passionate about governance, risk management, and financial optimization. We believe in a hands-on approach, working closely with our clients to deliver tailored solutions that drive real results.
          </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] bg-muted rounded-lg overflow-hidden shadow-xl"
          >
             <img 
               src="https://stella-lumen.com/wp-content/uploads/2023/07/abt-3.jpg" 
               alt="About Stella Lumen" 
               className="w-full h-full object-cover"
               onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://stella-lumen.com/wp-content/uploads/2023/07/abt-3.jpg"; }}
             />
          </motion.div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold mb-10 text-center">Our Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, idx) => (
              <motion.div 
                key={spec}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-secondary/10 border border-secondary p-6 rounded-lg backdrop-blur-sm hover:bg-secondary/20 transition-colors"
              >
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span className="text-lg font-medium">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-12">Our Business Model</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
              {businessModelSteps.map((step, index) => (
                <div key={step.title} className="flex items-center">
                  <div className="flex flex-col items-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center mb-2 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="text-secondary mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {index < businessModelSteps.length - 1 && (
                    <div className="hidden lg:block w-16 h-1 bg-muted mx-4 self-start mt-8" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-serif font-bold text-primary mb-2 text-center">Meet Our Leadership</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM.filter(m => ["Thabani Zulu CA(SA)", "Lusanda Ntloko", "Lizo Shongwe", "Amahle Mtolo", "Luthando Zulu"].includes(m.name)).map((member) => (
              <div key={member.name} className="bg.white rounded-lg overflow-hidden shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Team+Image"; }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
