import Footer from "./components/Footer";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header />

      <main className="flex-1">
        {/* Hero, Services, and Contact sections will go here next */}
      </main>

      <Footer />
    </div>
  );
}