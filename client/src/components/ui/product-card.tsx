import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number | null | string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const isPriceNumber = typeof product.price === 'number';

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white shadow-lg border border-border overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-72 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Image+Unavailable"; }}
        />
        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link href={`/product/${product.id}`}>
            <Button variant="secondary" size="sm" className="cursor-pointer">
              View Details
            </Button>
          </Link>
        </div>
        <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider">
          {product.category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {product.description}
        </p>
        
        <div className="pt-4 border-t border-border mt-auto flex items-center justify-between">
          <div className="text-lg font-bold text-primary">
          {product.price 
            ? (isPriceNumber ? `R${product.price}` : product.price)
            : <span className="text-muted-foreground text-sm font-normal">Contact for Pricing</span>
          }
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            <Button 
              size="sm" 
              className="bg-primary text-white hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-4 h-4" />
              Add
            </Button>
            {!isPriceNumber && (
              <Link href="/contact">
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white cursor-pointer">
                Enquire <ArrowRight className="w-4 h-4" />
              </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
