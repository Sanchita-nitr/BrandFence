import { createContext, useState } from "react";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [msg, setMsg] = useState(null);

  const toast = {
    show: (text) => {
      setMsg(text);
      setTimeout(() => setMsg(null), 2500);
    },
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {msg && <div className="toast">{msg}</div>}
    </ToastContext.Provider>
  );
}
