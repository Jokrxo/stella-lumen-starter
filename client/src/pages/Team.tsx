import { motion } from "framer-motion";
import { TEAM } from "@/lib/data";
import SectionHeader from "@/components/ui/section-header";

export default function Team() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="Our Team"
            subtitle="The brilliant minds behind Stella Lumen. We are a diverse team of experts dedicated to your success."
            align="center"
            size="xl"
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden border border-border"
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Team+Image"; }}
                  />
                </div>
                <div className="p-4 text-center bg-white">
                  <h3 className="font-bold text-primary">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <div className="p-6 flex-grow bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-6 pt-6 border-t border-border">
                     <span className="text-xs font-bold text-primary uppercase tracking-widest">Core Value</span>
                     <p className="text-sm mt-1 font-medium italic">"{(member as any).coreValue || "Excellence"}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl font-serif font-bold text-primary mb-10">Our Core Values</h2>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
             {['Integrity', 'Innovation', 'Excellence'].map(value => (
               <div key={value} className="bg-white p-8 rounded-lg shadow-sm border border-border">
                 <h3 className="text-xl font-bold text-primary mb-4">{value}</h3>
                 <p className="text-muted-foreground">
                   We uphold the highest standards of {value.toLowerCase()} in everything we do.
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
