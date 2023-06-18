import Catagory from "./components/Catagory/Catagory";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PreOrder from "./components/PreOrder/PreOrder";
import TrendProducts from "./components/TrendProducts/TrendProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <TrendProducts />
      <Catagory />
      <PreOrder />
    </div>
  );
}
