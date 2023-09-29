"use client";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs , onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase/firebaseConfig";
import AdminTables from "@/app/(admin)/adminComponents/AdminTables";
import 'react-loading-skeleton/dist/skeleton.css'
import EditProductForm from "@/app/(admin)/adminComponents/EditProductForm";
import { useAdminContext } from "@/app/(admin)/Adminlogic/Logic";
const Page = () => {

  const {
    imageFile,
    setImageFile,
    imageError,
    setImageError,
    loading,
    setLoading,
    formData,
    setFormData,
    products,
    setProducts,
    category,
    setCategory,
    popUpOpen,
    setPopupOpen,
    handleClosePopup,
    handleOpenPopup,
    handleChange,
    handleCategoryChange,
    handleAvailabilityChange,
    editProductId,
    setEditProductId,
  }= useAdminContext()
  
  useEffect(() => {
    // Create a reference to the products collection
    const productsCollection = collection(db, "products");

    // Create a query to filter by category
    const q = query(productsCollection, where("category", "==", category));

    // Set up a real-time listener for the query
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const productsData = [];
      querySnapshot.forEach((doc) => {
        productsData.push({ id: doc.id, ...doc.data() });
      });
      setProducts(productsData); // Update products with the new data
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [category, setProducts]); 

  const handleCategoryChangeForFetch = (e) => {
    const newCategory = e.target.value;
    console.log(newCategory);
    setCategory(newCategory);
    fetchData(newCategory); // Fetch data when the category changes
  };
  // end of code of data fetching

  return (
    <main className="sm:ml-60 pt-16 max-h-screen overflow-auto min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src="../Loader.gif" alt="Loading" srcSet="" />
        </div>
      ) : (
        <div>
          <div className="inline-block mt-2 w-1/2 pr-1">
            <label className="block text-sm text-gray-600" htmlFor="category">
              Category
            </label>
            <select
              onChange={handleCategoryChangeForFetch}
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={category}
            >
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
              <option value="canned-food">Canned Food</option>
              <option value="bakery-items">Bakery Items</option>
              <option value="fishes">Fishes</option>
              <option value="egg-and-dairy">Egg and Dairy</option>
              <option value="soft-drinks-snacks">Soft Drinks and Snacks</option>
              <option value="others">Others</option>
            </select>
          </div>
          {/* <AdminTables products={products} category={category} openPopup={openPopup} setEditProductId={setEditProductId} formData={formData} setFormData={setFormData} /> */}
          <AdminTables/>
          {
            popUpOpen && (
              <EditProductForm/>
              // <EditProductForm  closePopup={closePopup} formData={formData} setFormData={setFormData} editProductId={editProductId}/>
            )
          }
        </div>
      )}
    </main>
  );
};

export default Page;



// 'use client'
// import { AdminContextProvider } from '@/app/(Adminlogic)/Logic'
// import AdminTables from '@/app/(adminComponents)/AdminTables'
// import EditProductForm from '@/app/(adminComponents)/EditProductForm'
// import React from 'react'

// const page = () => {
//   const {formData} = AdminContextProvider();
//   const run = () => {
//     console.log(formData)
//   }
//   return (
//     <div>
//       <AdminTables/>
//       <EditProductForm/>
//     </div>
//   )
// }

// export default page

// 'use client'

// import { AdminContextProvider } from '@/app/(Adminlogic)/Logic'
// import AdminTables from '@/app/(adminComponents)/AdminTables'
// import EditProductForm from '@/app/(adminComponents)/EditProductForm'


// const Page = ({}) => {
//   // const {formData} = AdminContextProvider();
//   // const run = () => {
//   //   console.log(formData)
//   // }
//   return (
//     <div>
//         <AdminTables />
//         <EditProductForm />
//     </div>
//   );
// };

// export default Page;
