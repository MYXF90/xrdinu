import React from "react";
import { Link } from "react-router-dom";

const Phase2 = ({ styles }) => (

  <Link to="/sale">
    <button type="button" className={`m-8 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      Invest in Phase 2
    </button>
  </Link>

);

export default Phase2;
