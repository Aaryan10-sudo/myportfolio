import React from "react";
import Navbar from "./features/Navbar";

const Hire = () => {
  let types = [
    { label: "Web Site Type", value: "" },
    { label: "Static Web", value: "static" },
    { label: "E-commerce", value: "e-commerce" },
  ];
  return (
    <div className="md:mx-[60px] mx-[15px] relative">
      <Navbar />
      <br />
      <input
        type="Email"
        placeholder="Your Email Address"
        className="text-black placeholder:p-[10px]"
      />
      <br />
      <br />
      <select className="text-black">
        {types.map((value, index) => {
          return (
            <option key={index} value={value.value}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Hire;
