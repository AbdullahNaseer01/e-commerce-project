// "use client";
// import React, { useState } from "react";
// import { doc, setDoc , collection } from "firebase/firestore";
// import { db } from "../../../../firebase/firebaseConfig";

// const ProductForm = () => {
//   // State to manage form data
//   const [formData, setFormData] = useState({
//     title: "",
//     price: "",
//     description: "",
//     tagline:"",
//     availability: "In stock",
//     category: "others",
//     image: "",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can send the formData to your backend or perform any other action here
//     console.log(formData);
//   };

//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const { title, price, description, tagline, availability, category, image } = formData;
//       const collectionRef = collection(db, "products");
//       const docRef = doc(collectionRef);
//       await setDoc(docRef, {
//         title,
//         price,
//         description,
//         tagline,
//         availability,
//         category,
//         image,
//       });
//       console.log("successProduct added successfully")
//     } catch (error) {
//       console.error(error);
//     }

//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Product Form</h2>
//       <form onSubmit={addProduct}>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700">
//             Product Title
//           </label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="form-input"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-gray-700">
//             Product Tagline
//           </label>
//           <input
//             type="text"
//             id="tagline"
//             name="tagline"
//             value={formData.tagline}
//             onChange={handleChange}
//             className="form-input"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="price" className="block text-gray-700">
//             Price
//           </label>
//           <input
//             type="text"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="form-input"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-gray-700">
//             Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="form-textarea"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-gray-700">
//             Category
//           </label>
//           <select
//             id="availability"
//             name="availability"
//             value={formData.availability}
//             onChange={handleChange}
//             className="form-select"
//           >
//             <option value="In Stock">In stock</option>
//             <option value="Out of Stoke">Out of Stoke</option>
//             <option value="Comming Soon">Comming Soon</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="image" className="block text-gray-700">
//             Product Image
//           </label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="form-input"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="category" className="block text-gray-700">
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="form-select"
//           >
//             <option value="fruits">Fruits</option>
//             <option value="vegetables">Vegetables</option>
//             <option value="canned-food">Canned Food</option>
//             <option value="bakery-items">Bakery Items</option>
//             <option value="fishes">Fishes</option>
//             <option value="egg-and-dairy">Egg and Dairy</option>
//             <option value="soft-drinks-snacks">Soft Drinks and Snacks</option>
//             <option value="soft-drinks-snacks">others</option>
//           </select>
//         </div>
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;

// 'use client';

// import React from 'react';
// import { Button } from 'antd';

// const Home = () => (
//   <div className="App">
//     <Button type="primary">Button</Button>
//   </div>
// );

// export default Home;
'use client'
import AdminAside from "@/app/adminComponents/AdminAside";
import AdminHeader from "@/app/adminComponents/AdminHeader";
import AdminTables from "@/app/adminComponents/AdminTables";
import ProdctsForm from "@/app/adminComponents/ProdctsForm";
import React from "react";

const page = () => {
  return (
    <>
      <AdminHeader />
      <AdminAside />
      <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto bg-slate-400 min-h-screen">
        <ProdctsForm/>
        {/* <AdminTables/> */}
      </main>
    </>
  );
};

export default page;
