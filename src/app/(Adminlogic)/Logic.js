import React, { createContext, useContext , useState , useEffect } from "react";

// Create a new context with an initial value
const AdminContext = createContext({
   
});

// Custom hook to provide admin-related logic
export default function useAdminLogic() {
    console.log("useAdminLogic called")
  // Define your admin logic here
  const [imageFile, setImageFile] = useState();
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  // const [progress, setProgress] = useState();

  // State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    tagline: "",
    availability: "In stock",
    category: "others",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    console.log(newCategory);
    setFormData({
      ...formData,
      category: newCategory,
    });
    console.log(newCategory);
  };
  const handleAvailabilityChange = (e) => {
    const newAvailability = e.target.value;
    console.log(newAvailability);
    setFormData({
      ...formData,
      availability: newAvailability,
    });
    console.log(newAvailability);
  };

  return {
    imageFile,
    setImageFile,
    imageError,
    setImageError,
    loading,
    setLoading,
    formData,
    setFormData,
    handleChange,
    handleCategoryChange,
    handleAvailabilityChange,
  };
}

// AdminContextProvider component
export function AdminContextProvider({ children }) {
  const Logic = useAdminLogic();

  return (
    <AdminContext.Provider value={Logic}>{children}</AdminContext.Provider>
  );
}

// Custom hook to access the AdminContext
export function useAdminContext() {
  return useContext(AdminContext);
}
