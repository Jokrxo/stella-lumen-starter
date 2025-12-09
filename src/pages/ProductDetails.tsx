import { useRoute } from "wouter";
import { PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, ArrowLeft } from "lucide-react";
const PAYFAST_URL = "https://payment.payfast.io/eng/process/payment/e91b8047-eb11-43d7-872b-95861c1d0377";
import { Link } from "wouter";

export default function ProductDetails() {
  const { addToCart } = useCart();
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 flex justify-between items-center">
          <div />
          <Link href="/shop">
            <Button variant="outline" className="cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" /> Return to Shopping
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
            <div className="flex gap-3">
              <Button className="bg-primary text-white hover:bg-secondary hover:text-primary cursor-pointer" onClick={() => addToCart(product)}>
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </Button>
              <a
                href={PAYFAST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="cursor-pointer">Buy Now</Button>
              </a>
              <Link href="/cart">
                <Button className="cursor-pointer">Go to Cart</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
