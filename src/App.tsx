import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";
import { CartProvider } from "@/lib/cart-context";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Shop from "@/pages/Shop";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import TrialProducts from "@/pages/TrialProducts";
import UserManual from "@/pages/UserManual";
import Internship from "@/pages/Internship";
import Blog from "@/pages/Blog";
import Gallery from "@/pages/Gallery";
import ProductDetails from "@/pages/ProductDetails";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about-us" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/shop" component={Shop} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route path="/product-category" component={Shop} />
        <Route path="/services" component={Services} />
        <Route path="/team-2" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/projects" component={TrialProducts} />
        <Route path="/trial-products" component={TrialProducts} />
        <Route path="/rigel-business-user-manual" component={UserManual} />
        <Route path="/user-manual" component={UserManual} />
        <Route path="/internship" component={Internship} />
        <Route path="/blog" component={Blog} />
        <Route path="/gallery" component={Gallery} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
