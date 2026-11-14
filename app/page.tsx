import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}