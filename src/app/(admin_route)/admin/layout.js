'use client'
import AdminAside from "@/app/(adminComponents)/AdminAside";
import AdminHeader from "@/app/(adminComponents)/AdminHeader";
import AdminTables from "@/app/(adminComponents)/AdminTables";
import ProdctsForm from "@/app/(adminComponents)/AddProdctsForm";
import { ToastContainer,} from 'react-toastify';
import { AdminContextProvider} from "@/app/(Adminlogic)/Logic";
import React from "react";

const Layout = ({children}) => {
  return (
    <>
    
    <ToastContainer/>
      <AdminHeader />
      <AdminAside />
      <div>
        <AdminContextProvider>
        {children}
        </AdminContextProvider>
        </div>
    </>
  );
};

export default Layout;

