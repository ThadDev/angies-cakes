// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const NavBar = () => {

//     const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "Cookies", path: "/products?cathegory=cookies" },
//     { name: "Chops", path: "/products?cathegory=chops" },
//     { name: "All", path: "/products" },
//     {name: "About",path:"/About"}
//   ];
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (!searchTerm) return;
//     navigate(`/products?search=${searchTerm}`);
//     setSearchTerm("");
//   };

//     return (
//     <>
//     <header className="flex items-center justify-between px-6 py-6 sticky w-full mt-0 sticky top-0 bg-[#FFF3E0]">
//         <div className="logo text-[1.5rem] font-poppins font-bold">Angies</div>
//         <nav>
//             <ul className="flex gap-8">
//                  {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className="hover:text-[var(--hover)] text-[var(--text)] hover:scale-105 font-bold transition duration-200 cursor-pointer"
//               >
//                 <Link to={item.path}>{item.name}</Link>
//               </li>
//             ))}
//             </ul>
//         </nav>
//         <div className="flex gap-4 items-center">
//             <Link to={"/cart"}>
//             <i className="fa-solid fa-cart-shopping hover:text-[var(--hover)] text-[var(--text)] hover:scale-105 text-[1.5em] font-bold transition duration-200 cursor-pointer"></i>
//             </Link>
//                   <form onSubmit={handleSearchSubmit} className="flex items-center ">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//           className="px-2 py-1 rounded text-black border px-4 py-3 rounded-full"
//         />
//         <button type="submit" className="ml-2 bg-primary px-3 py-1 rounded hover:bg-hover">
//            <i className="fa-solid fa-magnifying-glass hover:text-[var(--hover)] text-[var(--text)] hover:scale-105 text-[1.5em] font-bold transition duration-200 cursor-pointer"></i>

//         </button>
//       </form>

//         </div>
//     </header>
//     </>
//      );
// }

// export default NavBar;

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Pastries", path: "/products?category=pastries" },
    { name: "Chops", path: "/products?category=chops" },
    { name: "All", path: "/products" },
    { name: "About", path: "/About" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/products?search=${searchTerm}`);
    setSearchTerm("");
    setMobileSearchOpen(false); // Close mobile search after submitting
  };
  //   menu toggle

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  //   cart update
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 sticky w-full top-0 bg-[#FFF3E0] z-50">
        {/* Logo */}
        <Link to={"/"}>
        <div className="logo text-[1.5rem] font-poppins font-bold">Angies</div>
        </Link>
        

        {/* Desktop Navbar */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-[var(--hover)] text-[var(--text)] hover:scale-105 font-bold transition duration-200 cursor-pointer"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Search + Cart */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
        {totalItems > 0 && (
          <span className="ml-1 text-sm font-bold">{totalItems}</span>
        )}
            </Link>

          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-3 rounded-full text-black border"
            />
            <button
              type="submit"
              className="ml-2 bg-primary px-3 py-1 rounded hover:bg-hover"
            >
              <i className="fa-solid fa-magnifying-glass hover:text-[var(--hover)] text-[var(--text)] hover:scale-105 text-[1.5em] font-bold transition duration-200 cursor-pointer"></i>
            </button>
          </form>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden gap-5 items-center">
          {/* Mobile Search Icon */}
          <button onClick={() => setMobileSearchOpen(!mobileSearchOpen)}>
            <i className="fa-solid fa-magnifying-glass hover:text-[var(--hover)] text-[var(--text)] text-[1.5em] font-bold transition duration-200 cursor-pointer"></i>
          </button>

          {/* Mobile Cart */}
         <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
        {totalItems > 0 && (
          <span className="ml-1 text-sm font-bold">{totalItems}</span>
        )}
            </Link>
          {/* mobile menu-toggle */}
          <button onClick={handleMobileMenuToggle}>
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-[1.5em] hover:text-[var(--hover)] transition duration-200 cursor-pointer"></i>
            ) : (
              <i className="fa-solid fa-bars text-[1.5em] hover:text-[var(--hover)] transition duration-200 cursor-pointer"></i>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Search Input */}
      {mobileSearchOpen && (
        <div className="md:hidden bg-[#FFF3E0] px-6 py-4 items-center justify-center shadow-md fixed top-[5em] left-0 z-40">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" px-4 py-2 rounded-full text-black border"
            />

          </form>
        </div>
      )}

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden sticky mt-0 z-[1000] w-full top-[5em] gap-[2em] justify-center text-center items-center flex flex-col px-[2em] w-full bg-[#FFF3E0] h-[90vh] shadow-md transition-fade-in duration-300 ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-[var(--hover)] text-[var(--text)] font-bold"
            >
              <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/angies_cakesandtreats/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fdm.wa.link%2F1bd6ih%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkpSF6R0XQlQvYx7RXPBO8OP8-D6OeyTbN7k3S90Sq69D9xdzoi7w7n23dTA_aem_Z12mmdmsjawXwTt1tznrLQ&e=AT1GvAQO3LAIUalxLPw3RgVCgh6k4InyR7S5dQ2ISgw9dezA2f9VqzWSlDl3MEkkgEtLYDNssliyfzf0w2ltUjt24pXyT4w734GHF9p4cg">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
