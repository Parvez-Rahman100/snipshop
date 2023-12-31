import Brands from "./components/Brands/Brands";
import Catagory from "./components/Catagory/Catagory";
import Commentor from "./components/Commentor/Commentor";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import PreOrder from "./components/PreOrder/PreOrder";
import Social from "./components/Social/Social";
import TrendProducts from "./components/TrendProducts/TrendProducts";

export default function Home() {
  return (
    <div className=" font-popins">
      <Navbar />
      <Header />
      <Hero />
      <TrendProducts />
      <Catagory />
      <PreOrder />
      <Brands />
      <Social />
      <Commentor />
      <Footer />
    </div>
  );
}
