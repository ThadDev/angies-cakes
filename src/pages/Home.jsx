import { Link } from "react-router-dom";
import Products from "./Products";
import HeroCarousel from "../components/Hero";
import Menu from "./Menu";


const HomePage = () => {
  return (
    <>
<HeroCarousel/>
<section className="">
  <Products limit={8} title={"Top Picks"} />
  <Link className="flex justify-center" to={"/products"}>
  <button  className="text-[var(--text)] text-[1rem] hover:text-[var(--accent)] cursor-pointer font-bold">More...</button>
  </Link>
</section>
    <Menu/>
    </>

  );
};

export default HomePage;
