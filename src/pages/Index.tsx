import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Events from "@/components/Events";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
