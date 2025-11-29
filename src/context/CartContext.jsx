


// import { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   // Add item or increase quantity
//   const addToCart = (product) => {
//     const exists = cartItems.find(item => item.id === product.id);
//     if (exists) {
//       setCartItems(prev =>
//         prev.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
//     }
//   };

//   // Decrease quantity (remove if quantity becomes 0)
//   const decreaseQuantity = (id) => {
//     setCartItems(prev =>
//       prev
//         .map(item =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter(item => item.quantity > 0)
//     );
//   };

//   // Remove item completely
//   const removeFromCart = (id) => {
//     setCartItems(prev => prev.filter(item => item.id !== id));
//   };

//   // Clear entire cart
//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Custom hook
// export const useCart = () => useContext(CartContext);
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item or increase quantity
  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  // Decrease quantity (remove if quantity becomes 0)
  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => useContext(CartContext);
