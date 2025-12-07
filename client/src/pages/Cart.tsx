import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-serif font-bold text-primary mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any products yet.</p>
        <Link href="/shop">
          <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/80">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-10 mb-10">
        <div className="container mx-auto px-4 md:px-6">
           <h1 className="text-3xl font-serif font-bold text-primary">Shopping Cart</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-muted-foreground text-sm uppercase tracking-wider">
                    <th className="pb-4 font-medium">Product</th>
                    <th className="pb-4 font-medium">Price</th>
                    <th className="pb-4 font-medium">Quantity</th>
                    <th className="pb-4 font-medium text-right">Subtotal</th>
                    <th className="pb-4 font-medium w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-border last:border-0 group">
                      <td className="py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-muted rounded overflow-hidden shrink-0 border border-border">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold text-primary">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-6 text-muted-foreground">
                        R{item.price}
                      </td>
                      <td className="py-6">
                        <div className="flex items-center gap-2 border border-input rounded-md w-fit p-1">
                          <button className="p-1 hover:text-secondary transition-colors" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button className="p-1 hover:text-secondary transition-colors" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-6 text-right font-bold text-primary">
                        R{(item.price || 0) * item.quantity}
                      </td>
                      <td className="py-6 text-right">
                         <button 
                           className="text-muted-foreground hover:text-destructive transition-colors p-2"
                           onClick={() => removeFromCart(item.id)}
                         >
                           <Trash2 className="w-4 h-4" />
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile List View */}
            <div className="md:hidden space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-4 rounded-lg shadow-sm border border-border">
                  <div className="w-24 h-24 bg-muted rounded-md overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">Unit Price: R{item.price}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="font-medium w-8 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="font-bold text-lg min-w-[80px] text-right">
                    R{(item.price || 0) * item.quantity}
                  </div>

                  <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <Link href="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
              <Button variant="ghost" className="text-destructive" onClick={clearCart}>Clear Cart</Button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-border sticky top-24">
              <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b pb-4">Cart Totals</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">R{cartTotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-4 text-primary">
                  <span>Total</span>
                  <span>R{cartTotal}</span>
                </div>
              </div>

              <div className="mb-6">
                 <label className="text-sm text-muted-foreground mb-2 block">Coupon Code</label>
                 <div className="flex gap-2">
                   <Input placeholder="Enter code" />
                   <Button variant="outline">Apply</Button>
                 </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link href="/checkout">
                  <Button className="w-full bg-primary hover:bg-secondary hover:text-primary font-bold py-6">
                    Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="https://payment.payfast.io/eng/process/payment/e91b8047-eb11-43d7-872b-95861c1d0377" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full font-bold py-6">
                    Pay via PayFast
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
