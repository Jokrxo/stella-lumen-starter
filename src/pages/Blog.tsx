import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const PDF_POSTS = [
    {
      id: "polaris-magazine",
      title: "Polaris Magazine",
      image: "/assets/Polaris-Package-300x300.jpg",
      href: "/assets/Polaris%20Magazine.pdf",
    },
    {
      id: "perseus-magazine",
      title: "Perseus Magazine",
      image: "/assets/Perseus-Package-300x300.jpg",
      href: "/assets/Perseus%20Magazine.pdf",
    },
    {
      id: "10-risks",
      title: "10 Risks Crippling Our Country",
      image: "/assets/10-risks-crippling-our-country-cover.png",
      href: "/assets/10%20Risks%20Crippling%20Our%20Country.pdf",
      previewType: "image",
    },
  ];

  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Publications and resources available for download.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PDF_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-border flex flex-col">
              <div className="h-64 overflow-hidden">
                {post.previewType === "pdf" ? (
                  <iframe
                    src={`${post.href}#page=1&zoom=80&toolbar=0&navpanes=0`}
                    title={post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Cover+Image"; }}
                  />
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-serif font-bold text-primary mb-4">{post.title}</h2>
                <div className="mt-auto">
                  <a href={post.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Open PDF <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
