// ProductDataContext.js
"use client"
import { createContext, useContext, useState , useEffect } from "react";
import { auth } from "../../../../firebase/firebaseConfig";
import { db } from "../../../../firebase/firebaseConfig";


const ProductDataContext = createContext();
export const ProductDataProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const[customerCartData, setCustomerCartData] = useState([]);
  useEffect(() => {
console.log("ProductDataProvider called");
  }, [])

  

  
  //   const fetchNotes = async () => {
  //   try {
  //     const today = new Date().toISOString().split("T")[0];
  
  //     // Query notes with today's date or earlier
  //     const todayQuery = query(
  //       collection(database, "notes"),
  //       where("owner", "==", authUser.uid),
  //       where("date", "<=", today)
  //     );
  
  //     // Query notes with future dates
  //     const futureQuery = query(
  //       collection(database, "notes"),
  //       where("owner", "==", authUser.uid),
  //       where("date", ">", today)
  //     );
  
  //     const [todaySnapshot, futureSnapshot] = await Promise.all([
  //       getDocs(todayQuery),
  //       getDocs(futureQuery)
  //     ]);
  
  //     let todayNotes = [];
  //     let futureNotes = [];
  
  //     todaySnapshot.forEach((doc) => {
  //       todayNotes.push({ ...doc.data(), id: doc.id });
  //     });
  
  //     futureSnapshot.forEach((doc) => {
  //       futureNotes.push({ ...doc.data(), id: doc.id });
  //     });
  
  //     setNotes({
  //       today: todayNotes,
  //       future: futureNotes
  //     });
  //   } catch (error) {
  //     console.log("Error fetching notes: ", error);
  //   }
  // };

  

  return (
    <ProductDataContext.Provider value={{ productData, setProductData , customerCartData , setCustomerCartData }}>
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
