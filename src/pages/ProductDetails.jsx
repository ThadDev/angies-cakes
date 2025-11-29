import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; // Import CartContext
import { useToast } from "../context/ToastContext";

export default function ProductDetail() {
  const { id } = useParams(); // get product id from URL
  const { addToCart } = useCart(); // use addToCart from context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    showToast({ message: `${product.name} added to cart!` });
  };


  useEffect(() => {
    fetch("/data/products.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id.toString() === id);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
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
          src={product.img}
          alt={product.name}
          className="w-full md:w-1/2 h-80 object-cover rounded-lg"
        />

        {/* Product Details */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-xl mb-4">₦{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-primary text-[var(--text)] cursor-pointer px-4 py-2 border rounded hover:bg-hover"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
