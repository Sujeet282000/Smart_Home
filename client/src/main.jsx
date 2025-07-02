import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// App is now wrapped with LoaderProvider and ToastContainer for global loader and toasts
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
