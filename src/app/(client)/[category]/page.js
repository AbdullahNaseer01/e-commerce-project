'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";


// // const page = ({params}) => {
// //   return (
// //     <div>page {params.category} </div>
// //   )
// // }

// // export default page

// const Page = ({params}) => {
//   const router = useRouter();
//   // const { category } = router.query; // Get the category parameter from the URL
//   const category = params.category || 'defaultCategory'; // Use a default value if 'category' is undefined

//   const [loading, setLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   const fetchData = async (category) => {
//     setLoading(true);
//     const q = query(collection(db, "products"), where("category", "==", category));
//     const querySnapshot = await getDocs(q);
//     const productsData = [];
//     querySnapshot.forEach((doc) => {
//       productsData.push({ id: doc.id, ...doc.data() });
//     });
//     setProducts(productsData);
//     setLoading(false);
//     console.log(productsData);
//     console.log(products);
//   };
  

//   useEffect(() => {
//     if (category) {
//       fetchData(category); // Fetch data when the category changes in the URL
//       console.log(category);


//     }
//   }, [category]);




//   return (
//     <div>
//       <h1>Products in Category: {category}</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Page;

const Page = ({params}) => {
  const router = useRouter();
  const category = params.category || 'defaultCategory';

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // const fetchData = async (category) => {
  //   setLoading(true);
  //   const q = query(collection(db, "products"), where("category", "==", category));
  //   const querySnapshot = await getDocs(q);
  //   const productsData = [];
  //   querySnapshot.forEach((doc) => {
  //     productsData.push({ id: doc.id, ...doc.data() });
  //   });
  //   // setProducts(productsData);
  //   setProducts((products) => [...products, ...productsData]);
  //   setLoading(false);
  //   console.log(productsData);
  //   console.log(products);
  // };

  // const fetchData = async (category) => {
  //   setLoading(true);
  //   const q = query(collection(db, "products"), where("category", "==", category));
  //   const querySnapshot = await getDocs(q);
  //   const productsData = [];
  //   querySnapshot.forEach((doc) => {
  //     productsData.push({ id: doc.id, ...doc.data() });
  //   });
  //   setProducts((prevProducts) => [...prevProducts, ...productsData]); // Update state
  //   setLoading(false);
  //   console.log("productsData:", productsData);
  //   console.log("products:", products);
  // };

  const fetchData = async (category) => {
    setLoading(true);
    const q = query(collection(db, "products"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const productsData = [];
    querySnapshot.forEach((doc) => {
      productsData.push({ id: doc.id, ...doc.data() });
    });
  
    // Update state using the callback form
    setProducts((prevProducts) => [...prevProducts, ...productsData]);
  
    setLoading(false);
    console.log(productsData);
    console.log(products);
  };
  
  

  useEffect(() => {
    if (category) {
      console.log("Category before fetchData:", category);
fetchData(category);
console.log("Category after fetchData:", category);

    }
  }, [category])




  return (
    <div>
      <h1>Products in Category: {category}</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
