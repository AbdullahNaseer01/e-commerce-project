// import React from "react";
// import { useProductData } from "../ProductDataContext/ProductDataContext";

// const CartCountBadge = ({ size }) => {
//   const {cuctomerCartData} = useProductData();
//   return (
//     <div
//       className={`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}
//     >
//       {cuctomerCartData.length}
//     </div>
//   );
// };

// export default CartCountBadge;

import React from "react";
import { useProductData } from "../ProductDataContext/ProductDataContext";

const CartCountBadge = ({ size }) => {
  const { customerCartData } = useProductData();
  const cartItemCount = customerCartData?.length || 0; // Use optional chaining and provide a default value

  return (
    <div
      className={customerCartData ? `absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center` : `hidden`}
    >
      {cartItemCount}
    </div>
  );
};

export default CartCountBadge;

