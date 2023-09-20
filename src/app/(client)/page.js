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

import { collection, query, where, getDocs , onSnapshot } from "firebase/firestore";
import {db} from "../../../firebase/firebaseConfig.js"
import { useAuth } from "../../../firebase/Auth";
import { useProductData } from "./ProductDataContext/ProductDataContext";


export default function Home() {
  const {authUser} = useAuth();
  const {setCustomerCartData} = useProductData();

  useEffect(() => {
    if (authUser) {
      const cartRef = collection(db, `cart-${authUser.uid}`);
      const unsubscribe = onSnapshot(cartRef, (snapshot) => {
        const cartData = [];
        snapshot.forEach((doc) => {
          cartData.push({ id: doc.id, ...doc.data() });
        });
        setCustomerCartData(cartData);
        console.log(cartData , 'from product page cart');
      });

      // Don't forget to unsubscribe when the component unmounts
      return () => unsubscribe();
    }
  }, [authUser]);
    
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
    </main>
  );
}