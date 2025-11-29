import { Link } from "react-router-dom";
const imgStyle = "w-full h-48 object-cover rounded-lg mb-2"
const CathegoryFilter = () => {
    return (
         <>
         <section className="px-6 py-10">
  <h1 className="text-[var(--text)] text-2xl font-bold mb-6 text-center">
    Browse by Category
  </h1>

  <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
    
    <Link
      to="/products?category=bentocake"
      className="flex flex-col items-center bg-white/30 backdrop-blur-md p-3 rounded-xl shadow hover:scale-105 transition"
    >
      <img
        className={imgStyle}
        src="https://i.pinimg.com/1200x/48/8b/cf/488bcfc2f44fe07f618abf3a6e582eee.jpg"
        alt="bento cake"
      />
      <p className="text-center font-semibold text-[var(--text)]">
        Bento Cakes <i className="fa-solid fa-arrow-right"></i>
      </p>
    </Link>

    <Link
      to="/products?category=birthdaycake"
      className="flex flex-col items-center bg-white/30 backdrop-blur-md p-3 rounded-xl shadow hover:scale-105 transition"
    >
      <img
        className={imgStyle}
        src="https://i.pinimg.com/736x/40/ad/7f/40ad7fe003fefa4d45daa27d5e95c5a4.jpg"
        alt="birthday cake"
      />
      <p className="text-center font-semibold text-[var(--text)]">
        Birthday Cake <i className="fa-solid fa-arrow-right"></i>
      </p>
    </Link>

    <Link
      to="/products?category=Chops"
      className="flex flex-col items-center bg-white/30 backdrop-blur-md p-3 rounded-xl shadow hover:scale-105 transition"
    >
      <img
        className={imgStyle}
        src="https://i.pinimg.com/736x/8e/9c/18/8e9c18c04ef533ed39024b44eb0a0c83.jpg"
        alt="small chops"
      />
      <p className="text-center font-semibold text-[var(--text)]">
        Small Chops <i className="fa-solid fa-arrow-right"></i>
      </p>
    </Link>

    <Link
      to="/products?category=pastries"
      className="flex flex-col items-center bg-white/30 backdrop-blur-md p-3 rounded-xl shadow hover:scale-105 transition"
    >
      <img
        className={imgStyle}
        src="https://i.pinimg.com/736x/a7/69/93/a769936944fcfff838fa53e8664282df.jpg"
        alt="pastries"
      />
      <p className="text-center font-semibold text-[var(--text)]">
        Pastries <i className="fa-solid fa-arrow-right"></i>
      </p>
    </Link>

  </div>
</section>

         
         </>
          );
}
 
export default CathegoryFilter;