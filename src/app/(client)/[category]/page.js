"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import Link from "next/link";

const Page = ({ params }) => {
  const router = useRouter();
  const category = params.category || "defaultCategory";

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchData = async (category) => {
    setLoading(true);
    const q = query(
      collection(db, "products"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);
    const productsData = [];
    querySnapshot.forEach((doc) => {
      productsData.push({ id: doc.id, ...doc.data() });
    });

    // Update state using the callback form
    // setProducts((prevProducts) => [...prevProducts, ...productsData]);
    // or
    setProducts(productsData);

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
  }, [category]);

  return (
    <main className="min-h-screen">
      {products.length === 0 ? (
        <div className="mt-2 flex justify-center">
          {loading ? <>.....</> : <>No products in {category} category</>}
        </div>
      ) : (
        <h1 className="mt-2 flex justify-center ">
          {products.length} Products in Category: {category}
        </h1>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src="../Loader.gif" alt="Loading" srcSet="" />
        </div>
      ) : (
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
             <Link href={{
              pathname: `/${category}/${product.id}`,
            query: {
              productData: JSON.stringify(product),
              // title : product.title,
              // price: product.price,
              // imageFile: product.imageFile,
              // description: product.description,
              // category: product.category,
              // id: product.id,
            },
            }} >  
            {/* // <Link href={`/${category}/${JSON.stringify(product)}`}> */}
            <div
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <a href="#">
                <img
                  src={product.imageFile}
                  alt="Product"
                  className="h-80 w-72 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
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
            </Link>
            
          ))}
        </section>
      )}
    </main>
  );
};

export default Page;
