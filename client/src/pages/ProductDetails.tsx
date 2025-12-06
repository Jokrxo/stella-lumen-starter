import { useRoute } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const id = params?.id || "";
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-20 pb-20 container mx-auto px-4 md:px-6">
        <h1 className="text-2xl font-serif font-bold text-primary mb-4">Product not found</h1>
        <Link href="/shop">
          <Button variant="outline" className="cursor-pointer">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-border rounded-lg overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=Image+Unavailable"; }}
          />
        </div>
        <div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">{product.name}</h1>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <div className="text-lg font-bold text-primary mb-6">{typeof product.price === 'number' ? `R${product.price}` : product.price}</div>
          <Link href="/cart">
            <Button className="cursor-pointer">Go to Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

