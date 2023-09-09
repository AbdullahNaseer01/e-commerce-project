// 'use client'
// import {useEffect , useState} from 'react'
// import { db } from '../../../firebase/firebaseConfig'
// import { collection, query, where, getDocs } from "firebase/firestore";

// const Page = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//           const q = query(collection(db, "products"), where("category", "==", "fruits"));
//           const productsData = [];
//           const querySnapshot = await getDocs(q);
//           querySnapshot.forEach((doc) => {
//             console.log(doc.id, " => ", doc.data());
//             productsData.push(doc.data());
//             console.log("useeffect run")
//           });
//           setProducts(productsData); // Set the products state with the fetched data
//         };
    
//         fetchData(); // Call the async function immediately
      
//       }, []);

//         useEffect(() => {
//     const fetchData = async () => {
//       const q = query(collection(db, "products"), where("category", "==", "fruits"));
//       const querySnapshot = await getDocs(q);
//       const productsData = [];
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         productsData.push(doc.data()); // Push product data to the array
//       });
//       setProducts(productsData); // Set the products state with the fetched data
//     };

//     fetchData(); // Call the async function immediately

//   }, []);


//   return (
//     <>
//   <div className="text-center p-10">
//     <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
//     <h1 className="text-3xl">Tailwind CSS</h1>
//   </div>
//   {/* ✅ Grid Section - Starts Here 👇 */}
//   <section
//     id="Projects"
//     className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
//   >
//     {/*   ✅ Product card 1 - Starts Here 👇 */}
//     {products.map((product)=>{
//         <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//       <a href="#">
//         <img
//           src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//           alt="Product"
//           className="h-80 w-72 object-cover rounded-t-xl"
//         />
//         <div className="px-4 py-3 w-72">
//           <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//           <p className="text-lg font-bold text-black truncate block capitalize">
//             {product.title}
//           </p>
//           <div className="flex items-center">
//             <p className="text-lg font-semibold text-black cursor-auto my-3">
//               {product.price}
//             </p>
//             <del>
//               <p className="text-sm text-gray-600 cursor-auto ml-2">{product.price}</p>
//             </del>
//             <div className="ml-auto">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={20}
//                 height={20}
//                 fill="currentColor"
//                 className="bi bi-bag-plus"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//                 />
//                 <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//     })

//     }
//     {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//       <a href="#">
//         <img
//           src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//           alt="Product"
//           className="h-80 w-72 object-cover rounded-t-xl"
//         />
//         <div className="px-4 py-3 w-72">
//           <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
//           <p className="text-lg font-bold text-black truncate block capitalize">
//             {title}
//           </p>
//           <div className="flex items-center">
//             <p className="text-lg font-semibold text-black cursor-auto my-3">
//               {price}
//             </p>
//             <del>
//               <p className="text-sm text-gray-600 cursor-auto ml-2">{price}</p>
//             </del>
//             <div className="ml-auto">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={20}
//                 height={20}
//                 fill="currentColor"
//                 className="bi bi-bag-plus"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
//                 />
//                 <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div> */}
//     {/*   🛑 Product card 1 - Ends Here  */}
    
//   </section>
//   {/* 🛑 Grid Section - Ends Here */}
//   {/* credit */}
//   <div className="text-center py-10 px-10">
//     <h2 className="font-bold text-2xl md:text-4xl mb-4">
//       Thanks to{" "}
//       <a
//         href="https://unsplash.com/@nixcreative"
//         className="underline font-black"
//       >
//         Tyler Nix
//       </a>{" "}
//       for those AMAZING product images!
//     </h2>
//   </div>
//   {/* Support Me 🙏🥰 */}
// </>

//   )
// }

// export default Page


'use client'
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

const Page = () => {
  const [products, setProducts] = useState([]); // Define a state variable for products

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"), where("category", "==", "fruits"));
      const querySnapshot = await getDocs(q);
      const productsData = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        productsData.push(doc.data()); // Push product data to the array
      });
      setProducts(productsData); // Set the products state with the fetched data
    };

    fetchData(); // Call the async function immediately

  }, []);

  return (
    <>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>
      {/* Grid Section - Starts Here */}
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product) => (
          <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src={product.imageUrl}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">{product.discountedPrice}</p>
                  </del>
                  <div className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
      {/* Grid Section - Ends Here */}
      <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Thanks to{" "}
          <a
            href="https://unsplash.com/@nixcreative"
            className="underline font-black"
          >
            Tyler Nix
          </a>{" "}
          for those AMAZING product images!
        </h2>
      </div>
    </>
  );
}

export default Page;
