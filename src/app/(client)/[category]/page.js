"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, where, query, getDocs, getDoc, onSnapshot, addDoc, doc, updateDoc, setDoc, } from "firebase/firestore";
import { db } from "../../../../firebase/firebaseConfig";
import Link from "next/link";
import Loading from "../components/Loading";
import { useAuth } from "../../../../firebase/Auth";
import { useProductData } from "../ProductDataContext/ProductDataContext";


const CategoryPage = ({ params }) => {

  const { authUser } = useAuth();
  const { customerCartData, setCustomerCartData , productData , setProductData } = useProductData();

  const router = useRouter();
  const category = params.category || "defaultCategory";
  const allowedRoutes = ['dashboard', 'fruits', 'vegetables', 'canned-food', 'bakery-items', 'fishes', 'egg-and-dairy', 'soft-drinks-snacks', 'others' ,];
  const addToCart = async (product) => {
    if (authUser) {
      try {
        const cartRef = collection(db, `cart-${authUser.uid}`);
        const existingCartItemQuery = query(
          cartRef,
          where("productData.id", "==", productData.id)
        );

        const querySnapshot = await getDocs(existingCartItemQuery);

        if (!querySnapshot.empty) {
          querySnapshot.forEach(async (cartItemDoc) => {
            const existingCartDocRef = doc(
              db,
              `cart-${authUser.uid}`,
              cartItemDoc.id
            );
            const existingCartItemData = cartItemDoc.data();
            const newQuantity = existingCartItemData.quantity + 1;

            await updateDoc(existingCartDocRef, { quantity: newQuantity });

            toast.info("Product quantity updated in the cart.");
          });
        } else {
          const cartData = {
            productData,
            quantity: 1,
          };
          await addDoc(cartRef, cartData);

          toast.success("Product added to cart.");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Login first to do this task");
      toast.warning("Please log in first to do this task");
    }
  };

  
  
  useEffect(() => {
    // Check if the current route is in the allowedRoutes array
    if (!allowedRoutes.includes(category)) {
      // Redirect to a specific route (e.g., the homepage)
      router.push('/');
      return;
    } else {
      // Continue with the rest of your component code only if the route is allowed
      fetchData(category);
    }
  }, [category, router]);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // Define the list of allowed routes

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
    setProducts(productsData);
    setLoading(false);
    console.log(productsData);
    console.log(products);
  };

  return (
    <main className="min-h-screen">
      {products.length === 0 ? (
        <div className="mt-2 flex justify-center">
          {loading ? <></> : <>No products in {category} category</>}
        </div>
      ) : (
        <h1 className="mt-2 flex justify-center ">
          {products.length} Products in Category: {category}
        </h1>
      )}

      {loading ? (
        <><Loading /></>
      ) : (
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {products.map((product) => (
            <div
              key={product.id}
            // href={{
            //   pathname: `/${category}/${product.id}`,
            // }}
            >
              <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <Link
                  href={{
                    pathname: `/${category}/${product.id}`,
                  }}
                >
                  <img
                    src={product.imageFile}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                </Link>

                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {product.title}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        ${product.price}
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                      key={product.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart();
                        }}
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
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default CategoryPage;
