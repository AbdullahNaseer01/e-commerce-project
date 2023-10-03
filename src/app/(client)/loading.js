import React from "react";

const loading = () => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 `}>
      <div className="absolute inset-0 bg-blur"></div> {/* Apply background blur */}
      <div className="z-10 bg-white p-4 rounded-lg shadow-lg">
        <img src="Loader.gif" alt="Loading" className="mx-auto w-16 h-16" /> {/* Loader image */}
        <p className="text-center mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
