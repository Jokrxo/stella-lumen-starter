import { useState } from "react";
import { GALLERY_IMAGES, BOARDGAME_IMAGES } from "@/lib/data";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ZoomIn } from "lucide-react";

export default function Gallery() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Gallery</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Capturing moments of innovation, collaboration, and success.
          </p>
        </div>
      </section>

      {/* General Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <Dialog key={img.id}>
                <DialogTrigger asChild>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <ZoomIn className="text-white w-10 h-10" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-medium">{img.alt}</p>
                      <p className="text-secondary text-xs uppercase">{img.category}</p>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
                   <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Risk and Reward Boardgame Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-serif font-bold text-primary mb-4">Empowering Future Accountants</h2>
               <div className="w-20 h-1 bg-secondary mb-6" />
               <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                 In a dynamic collaboration that bridges corporate expertise with educational outreach, Stella Lumen (Pty) Ltd, a pioneering black-owned financial solutions firm established in 2020, proudly serves as the Official Accounting Ambassadors for the KwaZulu-Natal (KZN) Department of Education.
               </p>
               <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                 This strategic partnership embodies the company’s commitment to Corporate Social Responsibility (CSR) by fostering financial literacy among the youth through innovative, hands-on learning experiences.
               </p>
               <p className="text-muted-foreground text-lg leading-relaxed">
                 At the heart of this initiative is the acclaimed Risk and Reward Boardgame, a transformative educational tool developed by Thabani Zulu CA(SA), Director of Stella Lumen and a distinguished UKZN alumnus with over 25 years in financial management and auditing.
               </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
               {BOARDGAME_IMAGES.slice(0, 4).map((img, idx) => (
                  <motion.div 
                    key={img.id}
                    className={`rounded-lg overflow-hidden shadow-md ${idx === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
