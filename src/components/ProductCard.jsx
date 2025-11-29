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
    <div
      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-3 
                shadow-lg hover:shadow-xl transition-all duration-300 
                hover:-translate-y-1 cursor-pointer"
    >
      <Link to={`/product-details/${product.id}`}>
        <div className="h-36 sm:h-40 md:h-48 rounded-xl overflow-hidden">
          <img
            src={`/optimized/mobile/${product.img}.webp`} // fallback / default
            srcSet={`/optimized/mobile/${product.img}.webp 480w,/optimized/tablet/${product.img}.webp 768w,/optimized/desktop/${product.img}.webp 1200w`}
            sizes="
    (max-width: 480px) 100vw,
    (max-width: 768px) 50vw,
    33vw
  "
            loading="lazy"
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
        </div>

        <h2 className="font-semibold text-base sm:text-lg text-[var(--text)] mt-2 line-clamp-1">
          {product.name}
        </h2>

        <p className="text-[var(--primary)] text-sm sm:text-base font-medium mb-1">
          ₦{Number(product.price).toLocaleString()}
        </p>

        <p className="text-[var(--text)] text-xs sm:text-sm opacity-80 line-clamp-2 mb-3">
          {product.description}
        </p>
      </Link>

      <button
        onClick={handleAddToCart}
        className="w-full bg-[var(--primary)] text-white py-2 mt-1 rounded-xl 
               font-medium text-sm sm:text-base transition 
               hover:bg-[var(--hover)] active:scale-[.98]"
      >
        Add to Cart
      </button>
    </div>
  );
}
