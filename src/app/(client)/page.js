'use client'
import { useEffect } from "react";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Hero from "./components/Hero";
import Newsletter from "./components/NewsLetter";

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../../firebase/firebaseConfig.js"

export default function Home() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const q = query(collection(db, "products"), where("category", "==", "fruits"));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //       console.log("useeffect run")
  //     });
  //   };
  
  //   fetchData(); // Call the async function immediately
  
  // }, []);
  


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