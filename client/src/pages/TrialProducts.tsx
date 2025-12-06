import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, AlertTriangle, FileText, ShoppingCart } from "lucide-react";
import { Link } from "wouter";

export default function TrialProducts() {
  const features = [
    "Payroll Management",
    "SARS Reporting",
    "Financial Statements",
    "Bank Balance Tracking",
    "Invoicing & Quoting",
    "Expense Tracking"
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Trial Products</h1>
          <p className="max-w-2xl mx-auto text-white/80">
            Experience the power of Rigel Business before you buy.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Info */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Rigel Business Beta</h2>
            <div className="mb-6 w-full max-w-sm">
              <img
                src="/assets/Rigel-Package-300x300.jpg"
                alt="Rigel Business"
                className="w-full h-auto object.contain border border-border rounded"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/300?text=Rigel+Business"; }}
              />
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our flagship accounting software designed specifically for South African SMEs. 
              Rigel Business simplifies complex financial tasks, allowing you to focus on growing your business.
            </p>
            
            <h3 className="text-xl font-bold text-primary mb-4">Key Features:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="text-secondary w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r">
               <div className="flex items-start gap-3">
                 <AlertTriangle className="text-yellow-600 w-6 h-6 shrink-0" />
                 <div>
                  <h4 className="font-bold text-yellow-800 mb-1">
                    Beta Warning
                    <a href="https://stella-lumen.com/downloads/rigel-business-beta/BETA_WARNING.txt" target="_blank" rel="noopener noreferrer" className="ml-2 underline text-primary text-sm">View details</a>
                  </h4>
                  <p className="text-sm text-yellow-700">
                    This is a beta version. While we strive for stability, you may encounter bugs. 
                    Please report any issues to our support team.
                  </p>
                 </div>
               </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://stella-lumen.com/downloads/rigel-business-beta/ReleaseNotes.txt" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" /> Release Notes
                </Button>
              </a>
              <a href="https://stella-lumen.com/downloads/rigel-business-beta/UserManual.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 cursor-pointer">
                  <FileText className="w-4 h-4" /> User Manual (PDF)
                </Button>
              </a>
              <a href="https://stella-lumen.com/downloads/rigel-business-beta/UserManual.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 cursor-pointer">
                  <FileText className="w-4 h-4" /> View PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Download / Purchase Boxes */}
          <div className="space-y-8">
            {/* RED Trial Download Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border-2 border-destructive/50 bg-destructive/5 p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-destructive text-white px-4 py-1 text-xs font-bold uppercase">
                Free Trial
              </div>
              <h3 className="text-2xl font-serif font-bold text-destructive mb-2">Download Beta</h3>
              <p className="text-muted-foreground mb-6">
                Try Rigel Business v3.0.0 with limited functionality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="eula-trial" className="rounded border-gray-300" />
                  <label htmlFor="eula-trial" className="text-sm text-muted-foreground">
                    I agree to the <a href="https://stella-lumen.com/agreements/RIGEL-EULA.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary">EULA</a>
                  </label>
                </div>
                <a href="https://stella-lumen.com/downloads/rigel-business-beta/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-destructive hover:bg-destructive/90 text-white font-bold py-6">
                    <Download className="mr-2 w-5 h-5" /> Download Installer (.exe)
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* GREEN Full Version Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="border-2 border-green-600 bg-green-50 p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-xs font-bold uppercase">
                Full Version
              </div>
              <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">Buy Full Version</h3>
              <p className="text-green-700 mb-6">
                Unlock all features and get 1 year of premium support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="eula-full" className="rounded border-gray-300" />
                  <label htmlFor="eula-full" className="text-sm text-muted-foreground">
                    I agree to the <a href="https://stella-lumen.com/agreements/RIGEL-EULA.pdf" target="_blank" rel="noopener noreferrer" className="underline text-primary">EULA</a>
                  </label>
                </div>
                <Link href="/checkout">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 cursor-pointer">
                    <ShoppingCart className="mr-2 w-5 h-5" /> Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Subscription Agreement Section */}
            <section className="mt-12">
              <div className="bg-white border border-border p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">Subscription Agreement for Rigel Business</h3>
                <p className="text-muted-foreground mb-6">
                  Review the full subscription agreement before proceeding with your purchase.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://stella-lumen.com/agreements/RIGEL-EULA.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2">
                      <FileText className="w-4 h-4" /> View Full Agreement
                    </Button>
                  </a>
                  <a href="https://stella-lumen.com/agreements/RIGEL-EULA.pdf" target="_blank" rel="noopener noreferrer" download>
                    <Button className="gap-2 bg-primary text-white hover:bg-primary/90">
                      <Download className="w-4 h-4" /> Download PDF
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
