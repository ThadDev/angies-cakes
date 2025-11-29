const Footer = () => {
    return ( 
    <>
      <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Angie’s Bakery</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Freshly baked cakes, pastries, chops and snacks — made with love 
            and delivered with care. Taste the difference today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/products?category=bentocake" className="hover:text-white transition">Bento Cakes</a></li>
            <li><a href="/products?category=birthdaycake" className="hover:text-white transition">Birthday Cakes</a></li>
            <li><a href="/products?category=chops" className="hover:text-white transition">Small Chops</a></li>
            <li><a href="/products?category=pastries" className="hover:text-white transition">Pastries</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Get updates about new products and special offers.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-gray-200 px-3 py-2 rounded-md w-full text-sm outline-none"
            />
            <button className="bg-[var(--primary)] px-4 py-2 rounded-md text-sm text-gray-900 font-semibold hover:bg-[var(--hover)] transition">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Angie’s Bakery — All Rights Reserved.
      </div>
    </footer>
    </> 
    );
}
 
export default Footer;