"use client"
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
// import { AdminContextProvider } from '../(Adminlogic)/Logic';
import { useAdminContext } from "@/app/(admin)/Adminlogic/Logic";
import { db } from "../../../../firebase/firebaseConfig"
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify"



const AdminTables = ({ }) => {
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
    } = useAdminContext()

    const handleDeleteProduct = async (product) => {
        console.log(product, "product")
        try {
            await deleteDoc(doc(db, "products", product.id));
            toast.success("Product Deleted Successfully deleted successfully");
        } catch (error) {
            console.error("Error deleting document: ", error);
            toast.error("Some issue while deleting Note");
        }
    };


    return (
        <>
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
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm" onClick={
                                        async () => {
                                            await setEditProductId(product.id)
                                            handleDeleteProduct(product)
                                        }
                                    }>
                                        <p className="text-gray-900 whitespace-no-wrap">Delete <AiFillDelete /></p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap" onClick={() => {
                                            handleOpenPopup()
                                            setEditProductId(product.id)
                                            setFormData({
                                                title: product.title,
                                                price: product.price,
                                                description: product.description,
                                                tagline: product.tagline,
                                                availability: product.availability,
                                                category: product.category,
                                                imageFile: product.imageFile
                                            });
                                            console.log(product.title, product.id)
                                        }} >Edit <FiEdit3 /></p>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>
            </div>


        </>
    )
}

export default AdminTables
