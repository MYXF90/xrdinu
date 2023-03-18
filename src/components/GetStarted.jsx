import styles from "../style";


const GetStarted = () => (
  <a href="https://radix-inu.gitbook.io/radix-inu-first-memecoin-on-radix/" target="_blank">
  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[14px] leading-[23.4px]">
          <span className="text-gradient">Learn</span>
        </p>
       
      </div>
      
      <p className="font-poppins font-medium text-[14px] leading-[23.4px]">
        <span className="text-gradient">More</span>
      </p>
    </div>
  </div>
  </a>

);

export default GetStarted;
