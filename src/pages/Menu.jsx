import { Link } from "react-router-dom";

const menuItems = [
  { name: "Meat Pies", category: "meatpie", image: "/optimized/mobile/download.webp" },
  { name: "Chops", category: "chops", image: "/optimized/mobile/25.webp" },
  { name: "Bento Cakes", category: "bento cakes", image: "/optimized/mobile/16.webp" },
  { name: "Birthday Cakes", category: "birthday cakes", image: "/optimized/mobile/15.webp" },
  { name: "Parfait", category: "parfait", image: "https://i.pinimg.com/736x/b8/a1/d2/b8a1d292ec707630953926bb16f7d988.jpg" },
  { name: "Buns", category: "buns", image: "https://i.pinimg.com/736x/e7/57/fb/e757fbcb7b203d85efe91ea06bde6c81.jpg" },
  { name: "Cup Cake", category: "cupcake", image: "https://i.pinimg.com/1200x/95/0a/0a/950a0a62dcebd0b0d9721751c7367d0e.jpg" },
  { name: "Banana Bread", category: "banana-bread", image: "/optimized/mobile/26.webp" },
  { name: "Doughnut", category: "doughnut", image: "https://i.pinimg.com/1200x/be/97/d3/be97d3df89865131adbc0f1ede9869bc.jpg" },
  { name: "Rolls", category: "Roll", image: "https://i.pinimg.com/736x/c9/bd/be/c9bdbe151582270aa7c3820d10dcfc7a.jpg" },
];

const Menu = () => {
  return (
    <section className="px-6 py-12 bg-[#FFF3E0] min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Menu
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.category}
            to={`/products?category=${item.category}`}
            className="relative group h-56 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition duration-300"></div>

            {/* Text */}
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl font-bold text-center px-2">
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Menu;
