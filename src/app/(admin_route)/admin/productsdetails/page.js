"use client";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase/firebaseConfig";
import AdminTables from "@/app/(adminComponents)/AdminTables";
import 'react-loading-skeleton/dist/skeleton.css'
import EditProductForm from "@/app/(adminComponents)/EditProductForm";
const Page = () => {
  const [category, setCategory] = useState("fruits");  // Initialize with a default category
  const [products, setProducts] = useState([]);
  const [loadings, setLoadings] = useState(true);
  const [popUpOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    tagline: "",
    availability: "In stock",
    category: "others",
    imageFile: "",
  });

  const [editProductId, setEditProductId] = useState(null); // for props send to table and EditForm Component

  const openPopup = () => {
    setPopupOpen(true);
    console.log("openPopup called" , popUpOpen);
  };
  

  const closePopup = (e) => {
    e.preventDefault()
    setPopupOpen(false);
    setFormData({
      title: "",
      price: "",
      description: "",
      tagline: "",
      availability: "In stock",
      category: "others",
    });
  };


  // code of data fetching 
  const fetchData = async (category) => {
    setLoadings(true);
    const q = query(
      collection(db, "products"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    const productsData = [];
    querySnapshot.forEach((doc) => {
      productsData.push({ id: doc.id, ...doc.data() });
    });
    setProducts(productsData);
    console.log(productsData);
    setLoadings(false);
  };

  useEffect(() => {
    fetchData(category); // Fetch data initially with the default category
  }, [category]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    console.log(newCategory);
    setCategory(newCategory);
    fetchData(newCategory); // Fetch data when the category changes
  };
  // end of code of data fetching

  return (
    <main className="sm:ml-60 pt-16 max-h-screen overflow-auto min-h-screen">
      {loadings ? (
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
              onChange={handleCategoryChange}
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
          <AdminTables products={products} category={category} openPopup={openPopup} setEditProductId={setEditProductId} formData={formData} setFormData={setFormData} />
          {
            popUpOpen && (
              <EditProductForm  closePopup={closePopup} formData={formData} setFormData={setFormData} editProductId={editProductId}/>
            )
          }
        </div>
      )}
    </main>
  );
};

export default Page;
