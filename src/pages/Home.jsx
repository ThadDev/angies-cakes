import { Link } from "react-router-dom";
import Products from "./Products";
import CathegoryFilter from "../components/BrowseCathegory";

const HomePage = () => {
  return (
    <>
      {/* <div className="hero flex-col md:flex-row flex items-center gap-4 px-6 h-[87vh]">
        <div className="flex flex-col gap-4">
          <h1 className="text-[3.5rem] font-bold">Taste The Difference</h1>
          <p className="text-[1.5rem] font-bold">
            Freshly baked, made with love, and ready to delight. <br /> Cakes, pies,
            rolls, and more <br /> every bite from Angie’s is pure happiness!"
          </p>
          <div className="flex gap-[1em]">
            <Link to={"/products"}>
              <button className="bg-none border border-[var(--primary)] px-6 py-3 rounded-[1em] font-bold text-[var(--text)] hover:bg-[var(--hover)]">Order now</button>
            </Link>
            <Link to={"/products"}>
              <button className="bg-[var(--primary)] px-6 py-3 rounded-[1em] font-bold text-[var(--text)] hover:bg-[var(--hover)]">
                Pre order
              </button>
            </Link>
          </div>
        </div>
        <div>
            <img src="src/assets/Sausage_roll-removebg-preview.png" alt="Angies Cake" />
        </div>
      </div>
      <section>
        <Products limit={8} title={"Featured products"}/>
      </section> */}
      <div className="hero flex flex-col md:flex-row items-center justify-between gap-6 px-6 h-auto md:h-[87vh] py-10 md:py-0">

  {/* LEFT SIDE */}
  <div className="flex flex-col gap-4 text-center md:text-left max-w-[600px]">
    
    <h1 className="text-[2.2rem] md:text-[3.5rem] font-bold leading-tight">
      Taste The Difference
    </h1>

    <p className="text-[1.1rem] md:text-[1.5rem] font-bold">
      Freshly baked, made with love, and ready to delight. <br className="hidden md:block" />
      Cakes, pies, rolls, and more <br className="hidden md:block" />
      every bite from Angie’s is pure happiness!
    </p>

    <div className="flex gap-4 justify-center md:justify-start flex-wrap">
      <Link to="/products">
        <button className="bg-none border border-[var(--primary)] px-6 py-3 rounded-[1em] font-bold text-[var(--text)] hover:bg-[var(--hover)]">
          Order now
        </button>
      </Link>

      <Link to="/products">
        <button className="bg-[var(--primary)] px-6 py-3 rounded-[1em] font-bold text-[var(--text)] hover:bg-[var(--hover)]">
          Pre order
        </button>
      </Link>
    </div>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="w-[80%] max-w-[350px] md:w-auto md:max-w-none mt-6 md:mt-0">
    <img
      src="src/assets/Sausage_roll-removebg-preview.png"
      alt="Angies Cake"
      className="w-full object-contain"
    />
  </div>

</div>

<section className="flex flex-col justify-center items-center">
  <Products limit={8} title={"Top Picks"} />
  <Link to={"/products"}>
  <button  className="text-[var(--text)] text-[1rem] hover:text-[var(--accent)] cursor-pointer font-bold">More...</button>
  </Link>
</section>

    </>

  );
};

export default HomePage;
