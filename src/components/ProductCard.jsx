import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
   const { showToast } = useToast();

     const handleAddToCart = () => {
    addToCart(product);
    showToast({ message: `${product.name} added to cart!` });
  };

  return (
    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 shadow-lg hover:shadow-2xl transition duration-300">
      <Link to={`/product-details/${product.id}`} className="cursor-pointer">
        <div className="h-48 overflow-hidden w-full rounded-lg">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <h2 className="font-bold text-lg text-[var(--text)] mt-3">
          {product.name}
        </h2>
        <p className="text-[var(--primary)] mb-2">₦{product.price}</p>
        <p className="text-[var(--text)] text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="bg-[var(--primary)] text-[var(--text)] hover:bg-[var(--hover)]  cursor-pointer px-4 py-2 rounded-xl hover:bg-hover transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
