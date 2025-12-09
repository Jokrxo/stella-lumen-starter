import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/section-header";
import { Download, Youtube, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function UserManual() {
  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader
            title="User Manual"
            subtitle="Comprehensive documentation for Rigel Business."
            align="center"
            size="xl"
          />
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* PDF Download */}
          <div className="bg-white border border-border p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
              <div className="font-bold text-xl">PDF</div>
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary mb-2">Rigel Business User Guide</h2>
              <p className="text-muted-foreground">
                Download the full PDF manual containing step-by-step instructions, troubleshooting tips, and best practices.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://stella-lumen.com/downloads/rigel-business-beta/UserManual.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="shrink-0">
                  View PDF
                </Button>
              </a>
              <a href="https://stella-lumen.com/downloads/rigel-business-beta/UserManual.pdf" target="_blank" rel="noopener noreferrer" download>
                <Button className="shrink-0 bg-primary hover:bg-primary/90">
                  <Download className="mr-2 w-4 h-4" /> Download PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Video Tutorials */}
          <div className="bg-white border border-border p-8 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
              <Youtube className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-primary mb-2">Video Tutorials</h2>
              <p className="text-muted-foreground">
                Visit our YouTube channel for visual guides and feature walkthroughs.
              </p>
            </div>
            <a href="https://youtube.com/@StellaLumen1" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="shrink-0 border-red-600 text-red-600 hover:bg-red-50">
                 Watch Videos
              </Button>
            </a>
          </div>

          <div className="text-center pt-8">
            <Link href="/">
              <Button variant="ghost" className="gap-2 cursor-pointer">
                <ArrowLeft className="w-4 h-4" /> Return to Home
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
