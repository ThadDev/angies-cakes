import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <CartProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CartProvider>
  </ToastProvider>
);
