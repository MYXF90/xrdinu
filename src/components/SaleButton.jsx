import React from "react";
import { NavLink } from "react-router-dom";

const SaleButton = ({ styles }) => (
  <NavLink to="sale">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Phase 2 VC
  </button>
  </NavLink>
);

export default SaleButton;
