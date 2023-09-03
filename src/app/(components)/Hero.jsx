// import Image from "next/image";
// import { BsArrowRight } from "react-icons/bs";

// const Hero = () => {
//   return (
//     <div className="container pt-8">
//       <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
//         <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="../images/hero__1.webp"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
//             <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
//             <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
//               Dried Fruits Best Quality
//             </h2>
//             <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
//               $18.36
//             </div>
//             <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
//               Shop Now <BsArrowRight />{" "}
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <img
//             className="w-full h-full object-cover rounded-lg"

//             src="../images/hero__2.webp"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
//             <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
//             <p className="text-gray-500 text-xl pt-4">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
//               $25
//             </div>
//             <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
//               Shop Now <BsArrowRight />
//             </div>
//           </div>
//         </div>
//         <div className="relative">
//           <img
//             className="w-full h-full object-cover rounded-lg"
//             src="../images/hero__3.webp"
//             alt="hero image"
//           />
//           <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
//             <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</h2>
//             <p className="text-gray-500 text-xl pt-4">Starting At</p>
//             <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
//               $10
//             </div>
//             <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
//               Shop Now <BsArrowRight />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;







import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  const firstImageArray = [
    "../images/hero__1.webp",
    "../images/dryfruit-hero-2.jpg",
    "../images/dryfruit-hero-3.jpg",
  ];

  const secondImageArray = [
    "../images/hero__2.webp",
    "../images/pizza-hero-2.jpg",
    "../images/pizza-hero-3.jpg",
  ];

  const thirdImageArray = [
    "../images/hero__3.webp",
    "../images/chips-hero-2.jpg",
    "../images/chips-hero-3.jpg",
  ];

  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(0);
  const [thirdImageIndex, setThirdImageIndex] = useState(0);

  useEffect(() => {
    const firstImageInterval = setInterval(() => {
      setFirstImageIndex((prevIndex) =>
        prevIndex === firstImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const secondImageInterval = setInterval(() => {
      setSecondImageIndex((prevIndex) =>
        prevIndex === secondImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const thirdImageInterval = setInterval(() => {
      setThirdImageIndex((prevIndex) =>
        prevIndex === thirdImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(firstImageInterval);
      clearInterval(secondImageInterval);
      clearInterval(thirdImageInterval);
    };
  }, []);

  return (
    <div className="container pt-8">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={firstImageArray[firstImageIndex]}
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            {/* Content for first image */}
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={secondImageArray[secondImageIndex]}
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            {/* Content for second image */}
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $25
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={thirdImageArray[thirdImageIndex]}
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            {/* Content for third image */}
            <h2 className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</h2>
            <p className="text-gray-500 text-xl pt-4">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              $10
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
