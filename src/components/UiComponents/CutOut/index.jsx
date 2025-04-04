import React from "react";
const CutOut = () => {
  return (
    <div className="relative flex items-center justify-center h-80 w-80">
      <div
        className="w-72 h-72 rounded-full absolute z-10"
        style={{
          backgroundColor: "#004466", 
          border: "10px solid #004466", 
        }}
      ></div>
      <div className="bg-white w-40 h-40 rounded-full absolute z-20"></div>
    </div>
  );
};

export default CutOut;