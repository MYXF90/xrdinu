import React from "react";
import styles from "../style";


const Airdrop = ({ styles }) => (
  <section>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-4 mb-2 relative z-[1]">

      <div className="w-full md:mt-0 mt-2">
        <p className={`text-left max-w-[450px] text-white m-2 py-1 px-1 font-poppins font-medium text-[18px]`}>
          Join the 1st Airdrop Campaign:
        </p>
      </div>
    </div>



    <a href="https://crew3.xyz/c/xrdinuarmy/invite/6yKxP9lHIdCp5jBy1y7s2" target="_blank">
      <button type="button" className={`m-2 py-4 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        Airdrop Campaign
      </button>
    </a>

  </section>




);

export default Airdrop;
