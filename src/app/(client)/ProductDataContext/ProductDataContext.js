// ProductDataContext.js
"use client"
import { createContext, useContext, useState , useEffect } from "react";

const ProductDataContext = createContext();

export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
console.log("ProductDataProvider called");
  }, [])
  

  return (
    <ProductDataContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductDataContext.Provider>
  );
};

export const useProductData = () => {
  const context = useContext(ProductDataContext);
  if (!context) {
    throw new Error("useProductData must be used within a ProductDataProvider");
  }
  return context;
};
