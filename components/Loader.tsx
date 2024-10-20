// components/Loader.tsx

import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#fff] z-50">
      <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
