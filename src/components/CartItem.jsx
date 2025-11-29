import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartItem({ item }) {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between p-3 bg-white/20 backdrop-blur-md rounded-lg shadow mb-3">
      {/* Image */}
      <img
        src={item.img}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />

      {/* Name & Price */}
      <div className="flex-1 ml-4">
        <h3 className="font-bold text-[1rem]">{item.name}</h3>
        <p className="text-gray-700 text-sm">₦{item.price} x {item.quantity}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => addToCart(item)}
          className="p-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          <FaPlus />
        </button>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 p-1 text-red-600 hover:text-red-800"
      >
        <FaTrash />
      </button>
    </div>
  );
}
