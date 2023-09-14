'use client'
import { useEffect , useState } from "react";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Hero from "./components/Hero";
import Newsletter from "./components/NewsLetter";

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../../firebase/firebaseConfig.js"

export default function Home() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "products"), where("category", "==", "fruits"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //       console.log("useeffect run")
  //     });
  //   };
  
  //   fetchData(); // Call the async function immediately
  
  // }, []);
  // const [loading, setLoading] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState("fruits");
  // const fetchData = async (category) => {
  //   setLoading(true);
  //   const q = query(
  //     collection(db, "products"),
  //     where("category", "==", category)
  //   );
  //   const querySnapshot = await getDocs(q);
  //   const productsData = [];
  //   querySnapshot.forEach((doc) => {
  //     productsData.push({ id: doc.id, ...doc.data() });
  //   });
  //   setProducts(productsData);
  //   console.log(productsData);
  //   setLoading(false);
  // };
  // const handleCategoryChangeForFetch = (e) => {
  //   const newCategory = e.target.value;
  //   console.log(newCategory);
  //   setCategory(newCategory);
  //   fetchData(newCategory); // Fetch data when the category changes
  // };
  // useEffect(() => {
  //   fetchData(category); // Fetch data initially with the default category
  // }, [category]);
  


  return (
    <main>
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection />
      <BlogSection />
      <Newsletter />
      <FeatureSection />
      {/* <main className="sm:ml-60 pt-16 max-h-screen overflow-auto min-h-screen">
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
        </div>
      )}
      <div className="w-full mt-12">
                <p className="text-xl pb-3 flex items-center">
                    <i className="fas fa-list mr-3"></i>{category} Products
                </p>
                <div className="bg-white overflow-auto">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    ID
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Product Name
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Price
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Category
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Tagline
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Description
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Delete
                                </th>
                                <th
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Edit
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{product.id}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                <img className="flex-grow object-cover w-full h-full rounded-full hover:scale-300 "
                                                    src={product.imageFile}
                                                    alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {product.title}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{product.price}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <span
                                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <span aria-hidden
                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                            <span className="relative">{product.availability}</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{product.category}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{product.tagline}</p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">{product.description}</p>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>
            </div>
    </main> */}
    </main>
  );
}