'use client'
import AdminAside from "@/app/adminComponents/AdminAside";
import AdminHeader from "@/app/adminComponents/AdminHeader";
import AdminTables from "@/app/adminComponents/AdminTables";
import ProdctsForm from "@/app/adminComponents/AddProdctsForm";
import { ToastContainer,} from 'react-toastify';
import React from "react";

const Layout = ({children}) => {
  return (
    <>
    <ToastContainer/>
      <AdminHeader />
      <AdminAside />
      <div>{children}</div>
    </>
  );
};

export default Layout;


// 'use client'
// import React, { useState } from "react";
// import AdminAside from "@/app/adminComponents/AdminAside";
// import AdminHeader from "@/app/adminComponents/AdminHeader";
// import AdminTables from "@/app/adminComponents/AdminTables";
// import ProdctsForm from "@/app/adminComponents/ProdctsForm";
// import { ToastContainer } from 'react-toastify';

// const Page = () => {
//   const [activeComponent, setActiveComponent] = useState(null);

//   const showComponent = (componentName) => {
//     setActiveComponent(componentName);
//   };

//   return (
//     <>
//       <ToastContainer />
//       <AdminHeader />
//       <AdminAside />
//       <main className="sm:ml-60 pt-16 max-h-screen overflow-auto bg-slate-400 min-h-screen">
//         {activeComponent === "ProdctsForm" && <ProdctsForm />}
//         {activeComponent === "AdminTables" && <AdminTables />}
        
//         <button onClick={() => showComponent("ProdctsForm")}>Show Prodcts Form</button>
//         <button onClick={() => showComponent("AdminTables")}>Show Admin Tables</button>
//       </main>
//     </>
//   );
// };

// export default Page;
