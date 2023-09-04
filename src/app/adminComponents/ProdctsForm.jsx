import { useState , useEffect } from "react";
// import { doc, setDoc , collection } from "firebase/firestore";
// import { getFirestore, collection, doc, setDoc, getDocs, addDoc } from 'firebase/firestore';
// import { storage } from "../../../firebase/firebaseConfig";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { storage, ref, uploadBytesResumable, getDownloadURL } from '../../../firebase/firebaseConfig';

const ProdctsForm = () => {
  const [imageFile, setImageFile] = useState(null);

    // State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    tagline:"",
    availability: "In stock",
    category: "others",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { title, price, description, tagline, availability, category } = formData;

  //     // Create a unique identifier for the product
  //     const productId = Date.now().toString();

  //     // Upload the image to Firebase Storage with the product ID as the filename
  //     const storageRef = ref(storage, `product_images/${productId}`);
  //     const imageSnapshot = await uploadBytes(storageRef, imageFile);

  //     // Get the download URL of the uploaded image
  //     const imageUrl = await getDownloadURL(imageSnapshot.ref);

  //     // Add the product data and image URL to Firestore
  //     const productsCollectionRef = collection(db, 'products');
  //     await addDoc(productsCollectionRef, {
  //       productId,
  //       title,
  //       price,
  //       description,
  //       tagline,
  //       availability,
  //       category,
  //       imageUrl, // Store the image URL
  //     });

  //     console.log('Product added successfully');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { title, price, description, tagline, availability, category } = formData;

  //     // Create a unique identifier for the product
  //     const productId = Date.now().toString();

  //     // Upload the image to Firebase Storage with the product ID as the filename
  //     const storageRef = ref(storage, `product_images/${productId}`);
  //     const uploadTask = uploadBytesResumable(storageRef, imageFile);

  //     // Listen for state changes, errors, and completion of the upload.
  //     uploadTask.on(
  //       'state_changed',
  //       (snapshot) => {
  //         // Handle progress (optional)
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log(`Upload is ${progress}% done`);
  //       },
  //       (error) => {
  //         // Handle errors (optional)
  //         console.error(error);
  //       },
  //       () => {
  //         // Upload completed successfully, now get the download URL
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           // Add the product data and image URL to Firestore
  //           const productsCollectionRef = collection(db, 'products');
  //           addDoc(productsCollectionRef, {
  //             productId,
  //             title,
  //             price,
  //             description,
  //             tagline,
  //             availability,
  //             category,
  //             imageUrl: downloadURL, // Store the image URL
  //           });
  //           console.log('Product added successfully');
  //         });
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  // Function to upload the image
  const uploadImage = async (productId) => {
    try {
      if (imageFile) {
        // Upload the image to Firebase Storage with the product ID as the filename
        const storageRef = ref(storage, `product_images/${productId}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        // Listen for state changes, errors, and completion of the upload.
        return new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              // Handle progress (optional)
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              // Handle errors (optional)
              console.error(error);
              reject(error);
            },
            async () => {
              // Upload completed successfully, now get the download URL
              try {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadURL);
              } catch (error) {
                console.error(error);
                reject(error);
              }
            }
          );
        });
      } else {
        return null; // No image to upload
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { title, price, description, tagline, availability, category } = formData;

      // Create a unique identifier for the product
      const productId = Date.now().toString();

      // Upload the image and get the download URL
      const imageUrl = await uploadImage(productId);

      // Add the product data and image URL to Firestore
      const productsCollectionRef = collection(db, 'products');
      await addDoc(productsCollectionRef, {
        productId,
        title,
        price,
        description,
        tagline,
        availability,
        category,
        imageUrl, // Store the image URL
      });

      console.log('Product added successfully');
    } catch (error) {
      console.error(error);
    }
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
            required=""
            onChange={handleChange}
            placeholder="Product Price"
            aria-label="price"
          />
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="message">Description</label>
          <textarea class="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded" id="description" name="description" rows="6" required="" placeholder="Product Description" aria-label="Text"></textarea>
        </div>
        <div className="inline-block mt-2 w-1/2 pr-1">
          <label className="hidden block text-sm text-gray-600" htmlFor="category">
            Category
          </label>
          
          <select onChange={handleChange} id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
          <select onChange={handleChange} id="availability" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
          onChange={(event)=>{setImageFile(event.target.files[0]);}}
          type="file"
          accept="image/*"
        />

        <p class="mt-1 text-sm text-gray-500 " id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
        <div className="mt-6">
          <button
            className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
            type="button"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>

  )
}

export default ProdctsForm