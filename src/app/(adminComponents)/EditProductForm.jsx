import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import { useState } from "react";

const EditProductForm = ({ closePopup, formData, setFormData }) => {
    const [loading, setLoading] = useState(false);

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
            ...formData, category: newCategory
        });
        console.log(newCategory);
    };
    const handleAvailabilityChange = (e) => {
        const newAvailability = e.target.value;
        console.log(newAvailability);
        setFormData({
            ...formData, availability: newAvailability
        });
        console.log(newAvailability);
    };

    const handleEditProduct = (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(formData);
        closePopup()
    };

    return (
        <div className="leading-loose">
            <form className="p-10 bg-white rounded shadow-xl">
                <p className="text-lg text-gray-800 font-medium pb-4">
                    Fill the information very carefully.
                </p>
                <div className="">
                    <label className="block text-sm text-gray-600" htmlFor="title">
                        Product Title
                    </label>
                    <input
                        className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                        id="title"
                        name="title"
                        type="text"
                        value={formData.title}
                        required=""
                        onChange={handleChange}
                        placeholder="Product Title / Name"
                        aria-label="Name"
                    />
                </div>
                <div className="mt-2">
                    <label className="block text-sm text-gray-600" htmlFor="tagline">
                        Tagline
                    </label>
                    <input
                        className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                        id="tagline"
                        name="tagline"
                        type="text"
                        value={formData.tagline}
                        required=""
                        onChange={handleChange}
                        placeholder="Tagline / small Description"
                        aria-label="tagline"
                    />
                </div>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-600" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                        id="price"
                        name="price"
                        type="text"
                        value={formData.price}
                        required=""
                        onChange={handleChange}
                        placeholder="Product Price"
                        aria-label="price"
                    />
                </div>
                <div class="mt-2">
                    <label class=" block text-sm text-gray-600" for="message">Description</label>
                    <textarea value={formData.description} onChange={handleChange} class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="description" name="description" rows="6" required="" placeholder="Product Description" aria-label="Text"></textarea>
                </div>
                <div className="inline-block mt-2 w-1/2 pr-1">
                    <label className="hidden block text-sm text-gray-600" htmlFor="category">
                        Category
                    </label>


                    <select onChange={handleCategoryChange} value={formData.category} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="canned-food">Canned Food</option>
                        <option value="bakery-items">Bakery Items</option>
                        <option value="fishes">Fishes</option>
                        <option value="egg-and-dairy">Egg and Dairy</option>
                        <option value="soft-drinks-snacks">Soft Drinks and Snacks</option>
                        <option value="soft-drinks-snacks">others</option>
                    </select>
                </div>
                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label className="hidden block text-sm text-gray-600" htmlFor="availability">
                        Availability
                    </label>
                    <select onChange={handleAvailabilityChange} value={formData.availability} id="availability" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option value="In Stock">In stock</option>
                        <option value="Out of Stoke">Out of Stoke</option>
                        <option value="Comming Soon">Comming Soon</option>
                    </select>
                </div>
                <label className="block mb-2 text-sm font-medium text-gray-900 " for="file_input">Upload file</label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    aria-describedby="file_input_help"
                    id="image"
                    name="image"
                    onChange={(event) => { setImageFile(event.target.files[0]); }}
                    type="file"
                    accept="image/*"
                />

                <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                {/* <p class="mt-1 text-sm text-gray-500 " id="file_input_help">{imageError}</p> */}

                <div className="mt-6">
                    <button
                        className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                        type="button"
                        onClick={handleEditProduct}
                        disabled={loading}
                    >
                        {loading ? <div>Updating Dont Leave the page<span className="text-2xl"> <LuLoader /></span></div> : <div className="flex justify-between"><span>Save Changes</span> <span className="text-xl mt-2 ml-2"><MdOutlineAddShoppingCart /></span></div>}
                    </button>
                    <button onClick={closePopup}>Cancel</button>


                </div>
            </form>
        </div>
    )
}

export default EditProductForm