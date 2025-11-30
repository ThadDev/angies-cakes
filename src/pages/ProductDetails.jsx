import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import ShimmerCard from "../components/Shimmer";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    showToast({ message: `${product.name} added to cart!` });
  };

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id.toString() === id);
        setProduct(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <ShimmerCard />;
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Back link */}
      <Link to="/products" className="text-blue-600 mb-4 inline-block">
        &larr; Back to Products
      </Link>

      {/* Product detail container */}
      <div className="flex flex-col md:flex-row gap-6 bg-white/20 backdrop-blur-md rounded-lg p-6 shadow">
        {/* Product Image */}
        <img
          src={`/optimized/mobile/${product.img}.webp`} // fallback / default
          srcSet={`
    /optimized/mobile/${product.img}.webp 480w,
    /optimized/tablet/${product.img}.webp 768w,
    /optimized/desktop/${product.img}.webp 1200w
  `}
          sizes="
    (max-width: 480px) 100vw,
    (max-width: 768px) 50vw,
    33vw
  "
          loading="lazy"
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2 capitalize">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-[var(--primary)] text-xl mb-4">
            ₦{Number(product.price).toLocaleString()}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-[var(--primary)] text-[var(--text)] cursor-pointer px-4 py-2 border rounded hover:bg-hover"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
