// import { useCart } from "../context/CartContext";

// export default function CartPage() {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           {cartItems.map(item => (
//             <div key={item.id} className="flex justify-between mb-3">
//               <p>{item.name} x {item.quantity}</p>
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           ))}
//           <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cartItems, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ₦{totalPrice}</h2>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
