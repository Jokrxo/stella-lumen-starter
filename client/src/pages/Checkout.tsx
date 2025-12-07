import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(5),
  city: z.string().min(2),
  province: z.string().min(2),
  zip: z.string().min(4),
  paymentMethod: z.enum(["eft", "card"]),
});

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "eft"
    }
  });

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    console.log(values);
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. We will contact you shortly.",
    });
    clearCart();
    setLocation("/");
  }

  if (items.length === 0) {
     setLocation("/cart");
     return null;
  }

  return (
    <div className="pt-20 pb-20">
      <section className="bg-muted py-10 mb-10">
        <div className="container mx-auto px-4 md:px-6">
           <h1 className="text-3xl font-serif font-bold text-primary">Checkout</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Billing Details */}
            <div>
              <h2 className="text-xl font-serif font-bold text-primary mb-6">Billing Details</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-3 gap-4">
                   <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Province</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="KZN">KwaZulu-Natal</SelectItem>
                            <SelectItem value="GP">Gauteng</SelectItem>
                            <SelectItem value="WC">Western Cape</SelectItem>
                            <SelectItem value="EC">Eastern Cape</SelectItem>
                            {/* Add others */}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Zip Code</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
               <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                <h2 className="text-xl font-serif font-bold text-primary mb-6">Your Order</h2>
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x {item.quantity}</span>
                      <span className="font-medium">R{(item.price || 0) * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>Total</span>
                    <span>R{cartTotal}</span>
                  </div>
                </div>

                <div className="mb-8">
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Payment Method</FormLabel>
                        <FormControl>
                          <div className="flex flex-col gap-2">
                             <div className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-muted">
                               <input 
                                 type="radio" 
                                 id="eft" 
                                 value="eft" 
                                 checked={field.value === "eft"} 
                                 onChange={() => field.onChange("eft")}
                                 className="accent-primary"
                               />
                               <label htmlFor="eft" className="cursor-pointer flex-grow">Direct Bank Transfer (EFT)</label>
                             </div>
                             <div className="flex items-center gap-2 border p-3 rounded cursor-pointer hover:bg-muted">
                               <input 
                                 type="radio" 
                                 id="card" 
                                 value="card" 
                                 checked={field.value === "card"} 
                                 onChange={() => field.onChange("card")}
                                 className="accent-primary"
                               />
                               <label htmlFor="card" className="cursor-pointer flex-grow">Credit/Debit Card</label>
                             </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {form.watch("paymentMethod") === "eft" && (
                    <div className="mt-4 text-sm text-muted-foreground bg-muted p-3 rounded">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full bg-primary hover:bg-secondary hover:text-primary font-bold py-6 text-lg">
                    Place Order
                  </Button>
                  <a href="https://payment.payfast.io/eng/process/payment/e91b8047-eb11-43d7-872b-95861c1d0377" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full font-bold py-6 text-lg">
                      Pay via PayFast
                    </Button>
                  </a>
                  <div className="text-xs text-muted-foreground">
                    SmartScreen: More info → Run anyway. Bugs: info@stella-lumen.com
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
