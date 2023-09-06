import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase/firebaseConfig";
import AdminTables from "@/app/adminComponents/AdminTables";

const Page = () => {
  const [category, setCategory] = useState("fruits"); // Initialize with a default category

  const fetchData = async (category) => {
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
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

  return (
    <main className="sm:ml-60 pt-16 max-h-screen overflow-auto min-h-screen">
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
      <AdminTables />
    </main>
  );
};

export default Page;
