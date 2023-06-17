import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import TrendProducts from "./components/TrendProducts/TrendProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <TrendProducts />
    </div>
  );
}
