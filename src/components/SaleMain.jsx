import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";
import Phase1 from "./Phase1";
import CountdownTimer from './CountdownTimer';

const targetDate = new Date("2023-08-01");

const Hero = () => {
  return (
    <div>
      <div>
        <h2 className="font-poppins text-center font-semibold ss:text-[48px] text-[32px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Phase 1 ending in:
        </h2>
        <div className="font-poppins text-center font-semibold ss:text-[20px] text-[10px] text-white ss:leading-[100.8px] leading-[75px] w-full" >
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className={`flex items-center flex-col sm:ml-10 ml-10 sm:mt-10 mt-10`}>
            <Phase1 />
          </div>
      </div>        

      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Phase 2<br className="sm:block hidden" />{" "}
              <span className="text-gradient"> Coming</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Soon
          </h1>

        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img src={robot} className="w-[80%] h-[100%] relative z-[5]" />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
    </div>
  );
};

export default Hero;
