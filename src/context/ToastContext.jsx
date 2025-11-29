import { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  // Show toast
  const showToast = ({ message, duration = 3000 }) => {
    const id = Date.now();
    setToast({ id, message, duration });

    // Remove toast automatically after duration
    setTimeout(() => {
      setToast(null);
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook for easy use
export const useToast = () => useContext(ToastContext);
