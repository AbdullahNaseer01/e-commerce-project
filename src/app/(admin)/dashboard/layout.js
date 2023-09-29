// "use client";
// import AdminAside from "@/app/(adminComponents)/AdminAside";
// import AdminHeader from "@/app/(adminComponents)/AdminHeader";
// import AdminTables from "@/app/(adminComponents)/AdminTables";
// import ProdctsForm from "@/app/(adminComponents)/AddProdctsForm";
// import { ToastContainer } from "react-toastify";
// import { AdminContextProvider } from "@/app/(Adminlogic)/Logic";
// import React from "react";

// const adminLayout = ({ children }) => {
//   return (
//     // <html lang="en">
//       <body>
//         <ToastContainer />
//         <AdminHeader />
//         <AdminAside />
//         <AdminContextProvider>{children}</AdminContextProvider>
//       </body>
//     // </html>
//   );
// };

// export default adminLayout;

// 'use client'
import '../../globals.css'
import AdminAside from "@/app/(admin)/adminComponents/AdminAside";
import AdminHeader from "@/app/(admin)/adminComponents/AdminHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContextProvider } from "@/app/(admin)/Adminlogic/Logic";
import React from "react";
import { AuthUserProvider } from '../../../../firebase/Auth';

const adminLayout = ({ children }) => {
  return (
    <html lang="en">
      <body >
        <AdminHeader />
        <ToastContainer />
        <AdminAside />
        <AuthUserProvider>
          <AdminContextProvider>{children}</AdminContextProvider>
        </AuthUserProvider>

      </body>
    </html>
  );
};

export default adminLayout;
