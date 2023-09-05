'use client'
import React from "react";
import AdminTables from "@/app/adminComponents/AdminTables";
import ProdctsForm from "@/app/adminComponents/ProdctsForm";
import Table from "./Table";
const page = () => {
  return (
    <>
      <main className=" sm:ml-60 pt-16  max-h-screen overflow-auto bg-slate-400 min-h-screen">
        <ProdctsForm />
        <AdminTables />
        <Table/>
      </main>
    </>
  );
};

export default page;
