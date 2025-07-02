import React, { createContext, useContext, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999
        }}>
          <ClipLoader color="#1976d2" size={60} />
        </div>
      )}
    </LoaderContext.Provider>
  );
}; 