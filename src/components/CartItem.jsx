import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartItem({ item }) {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-md rounded-lg shadow mb-3">
      {/* Image */}
      <img
        src={`/optimized/mobile/${item.img}.webp`}   // fallback / default
  srcSet={`
    /optimized/mobile/${item.img}.webp 480w,
    /optimized/tablet/${item.img}.webp 768w,
    /optimized/desktop/${item.img}.webp 1200w
  `}

   sizes="
    (max-width: 480px) 100vw,
    (max-width: 768px) 50vw,
    33vw
  "
  loading="lazy"
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      {/* Name & Price */}
      <div className="flex-1 ml-4">
        <h3 className="font-bold text-[1rem]">{item.name}</h3>
        <p className="text-gray-700 text-sm">₦{Number(item.price).toLocaleString()} x {item.quantity}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="p-1 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
        >
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="p-1 bg-gray-200 rounded hov cursor-pointer er:bg-gray-300"
        >
          <FaPlus />
        </button>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 p-1 text-red-600 hover:text-red-800 cursor-pointer"
      >
        <FaTrash />
      </button>
    </div>
  );
}
