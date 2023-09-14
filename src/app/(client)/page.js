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

import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../../firebase/firebaseConfig.js"

export default function Home() {
    
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