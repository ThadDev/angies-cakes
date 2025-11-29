import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useToast } from "../context/ToastContext";

export default function OrderPage() {
  const { showToast } = useToast();
  const { cartItems , clearCart} = useCart(); 
  const [form, setForm] = useState({
    name: "",
    phone: "",
    state: "",
    city: ""
  });

  const sellerNumber = "2348071309405"; 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitOrder = () => {
    if (!form.name || !form.state || !form.city || !form.phone){
        showToast({message:"all details are required"})
        return;
    }
    if (cartItems.length === 0) {
      showToast({message:"Cart is empty"});
      return;
    }
    

    // Build cart message
    const itemsText = cartItems.map((item, index) => 
      `\n${index + 1}. *${item.name}*\n   Price: ₦${item.price}\n   Qty: ${item.quantity}\n   Image: ${item.img}`
    ).join("\n");

    const total = cartItems.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );

    // Build WhatsApp message
    const message = `
*New Order from ${form.name}*

📞 Phone: ${form.phone}
📍 Location: ${form.city}, ${form.state}

🛒 *Order Details:*
${itemsText}

-------------------------
💰 *Total:* ₦${total}
`;

    const encoded = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/${sellerNumber}?text=${encoded}`;
    clearCart()
    setForm({
    name: "",
    phone: "",
    state: "",
    city: ""
  });
  };

  

  return (
    <div className="p-5  md:flex justify-center gap-[3em] mx-auto">
        <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-4">Enter Delivery Info</h1>

      <input
        className={`w-full mb-2 p-2 border rounded`}
        name="name"
        value={form.name}
        placeholder="Full Name"
        onChange={handleChange}
      />
      <input
        className="w-full mb-2 p-2 border rounded"
        name="phone"
        value={form.phone}
        placeholder="Phone Number"
        onChange={handleChange}
      />
      <input
        className="w-full mb-2 p-2 border rounded"
        name="state"
        value={form.state}
        placeholder="State"
        onChange={handleChange}
      />
      <input
        className="w-full mb-4 p-2 border rounded"
        name="city"
        value={form.city}
        placeholder="City"
        onChange={handleChange}
      />

      <button
        className="w-full bg-[var(--primary)] text-white p-2 rounded hover:bg-[var(--hover)] cursor-pointer transition"
        onClick={submitOrder}
      >
        Submit & Place Order
      </button>
      </div>
      <div className="md:mt-auto mt-[3em]">
    <h1 className="text-center font-bold text-[1.5rem]">Order details</h1>
      {cartItems.length === 0 ? (
              <p className="text-gray-600 text-center">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </>)}
      </div>
      
    </div>
  );
}
