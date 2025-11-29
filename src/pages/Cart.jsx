import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 ">
      <h1 className="text-2xl text-center font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ₦{Number(totalPrice).toLocaleString()}</h2>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white text-center px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
      <Link className={` justify-center mt-[3em] ${cartItems.length === 0 ? "hidden":"flex" }`} to={"/checkout"}>
      <button className="border bg-[var(--primary)] rounded-md cursor-pointer hover:bg-[var(--hover)] px-6 py-2">Place Order</button>
      </Link>
      
    </div>
  );
}
