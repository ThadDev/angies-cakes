import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
     { name: "Menu", path: "/Menu" },
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
      <header className="flex items-center justify-between px-6 py-4 sticky w-full top-0 bg-[#FFF3E0] z-50">
        {/* Logo */}
        <Link className="flex items-center justify-center" to={"/"}>
        <img src="./logo.png" className="w-[50px] h-[50px]" alt="" />
        <div className="logo text-[0.6rem] md:text-[0.8rem] flex flex-col font-poppins font-bold"><span>Angies</span><span>cakes &</span>treats</div>
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
{/* {mobileMenuOpen && (
  <div className="fixed mt-[5em] h-full inset-0 bg-black/30 z-[900]" onClick={() => setMobileMenuOpen(false)}></div>
)} */}

      {/* Mobile Menu Links */}
      <div
  className={`md:hidden fixed inset-0 top-[5em] z-[1000] 
    bg-[#FFF3E0] flex flex-col items-center justify-start pt-6
    transform origin-top transition-all duration-300
    ${mobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
  `}
>
  <ul className="flex flex-col gap-6 p-4 w-full text-center ">
    {menuItems.map((item, index) => (
      <li key={index} className="hover:text-[var(--hover)] text-[var(--text)] font-bold">
        <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>

  <div className="flex gap-4 mt-auto mb-6 ">
    <a href="https://www.instagram.com/angies_cakesandtreats/">
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a href="">
      <i className="fa-brands fa-facebook"></i>
    </a>
    <a href="https://l.instagram.com/...">
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
