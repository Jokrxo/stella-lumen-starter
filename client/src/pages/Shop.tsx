import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Filter, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
const PAYFAST_URL = "https://payment.payfast.io/eng/process/payment/e91b8047-eb11-43d7-872b-95861c1d0377";
import * as Accordion from "@radix-ui/react-accordion";

export default function Shop() {
  const { addToCart } = useCart();
  // Extract unique categories
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [categories]);

  const filteredProducts = activeCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Product Catalogue</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of financial and governance solutions.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar / Filter */}
          <aside className="w-full lg:w-1/4 space-y-8">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
               <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2">
                 <Filter className="w-5 h-5 text-secondary" /> Categories
               </h3>
               <div className="flex flex-col gap-2">
                 <Button 
                   variant={activeCategory === "All" ? "secondary" : "ghost"} 
                   className="justify-start"
                   onClick={() => setActiveCategory("All")}
                 >
                   All Products
                 </Button>
                 {categories.map(cat => (
                   <Button 
                     key={cat}
                     variant={activeCategory === cat ? "secondary" : "ghost"} 
                     className="justify-start text-left h-auto py-2 whitespace-normal"
                     onClick={() => setActiveCategory(cat)}
                   >
                     {cat}
                   </Button>
                 ))}
               </div>
             </div>
          </aside>

          {/* Main Content - Accordion Style per specs for "Product Details Page" feel */}
          <div className="w-full lg:w-3/4">
             {/* If All is selected, show grid. If category is selected, show specific view */}
             
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeCategory}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-8"
               >
                 {filteredProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                 ))}
               </motion.div>
             </AnimatePresence>

             {filteredProducts.length === 0 && (
               <div className="text-center py-20 text-muted-foreground">
                 No products found in this category.
               </div>
             )}
          </div>
        </div>
        
        {/* Collapsible Category Sections (As per Product Details Page spec) */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-b pb-4">Detailed Category View</h2>
          
          <Accordion.Root type="multiple" className="space-y-4">
            {categories.map((category, idx) => (
              <Accordion.Item key={category} value={category} className="border border-border rounded-lg overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="flex justify-between items-center w-full p-6 bg-white hover:bg-muted transition-colors text-left group">
                    <div className="flex items.center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-xl font-bold text-primary">{category}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="bg-muted/30 p-6 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {PRODUCTS.filter(p => p.category === category).map(p => (
                       <div key={p.id} className="bg-white p-4 rounded shadow-sm flex items-start gap-4">
                         <div className="w-20 h-20 bg-muted shrink-0">
                           <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                         </div>
                        <div className="flex-1">
                          <h4 className="font.bold text-primary">{p.name}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{p.description}</p>
                          <span className="text-sm font-semibold text-secondary-foreground">
                            {typeof p.price === 'number' ? `R${p.price}` : (p.price || 'Enquire')}
                          </span>
                        </div>
                        <div className="self-end ml-auto">
                          <div className="flex items-center gap-2 flex-wrap">
                            <Button
                              size="sm"
                              className="rounded-none bg-primary text-white hover:bg-secondary hover:text-primary"
                              onClick={() => addToCart(p)}
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" /> Add
                            </Button>
                            {typeof p.price !== 'number' && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-none border-primary text-primary hover:bg-primary hover:text-white"
                                asChild
                              >
                                <a href="/contact" className="cursor-pointer">
                                  Enquire <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                              </Button>
                            )}
                            <a
                              href={PAYFAST_URL}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button size="sm" variant="outline" className="rounded-none cursor-pointer">
                                Buy Now
                              </Button>
                            </a>
                          </div>
                        </div>
                       </div>
                     ))}
                   </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </div>
  );
}
