// "use client";
import AdminAside from "@/app/(adminComponents)/AdminAside";
import AdminHeader from "@/app/(adminComponents)/AdminHeader";
import AdminTables from "@/app/(adminComponents)/AdminTables";
import ProdctsForm from "@/app/(adminComponents)/AddProdctsForm";
import { ToastContainer } from "react-toastify";
import { AdminContextProvider } from "@/app/(Adminlogic)/Logic";
import React from "react";

const adminLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <AdminHeader />
        <AdminAside />
        <AdminContextProvider>{children}</AdminContextProvider>
      </body>
    </html>
  );
};

export default adminLayout;
