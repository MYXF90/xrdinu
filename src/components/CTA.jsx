import styles from "../style";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";

const CTA = () => (
  <div>
    <section id="invest" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Become a VC, register interest now!</h2>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>
          20% of the total token supply (200,000,000 tokens), are allocated to seed investors.
          These are the early backers of the project who have provided initial capital and support to help
          get the project off the ground. This allocation will be used to reward and
          incentivize these investors for their early support.
        </p>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>Phase 1 registrations are live.</p>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>
          Phase 1 = Pre-Babylon stage (wallet interaction based token sale) -
          $XRDINU price will be: $0.0025
        </p>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>
          Phase 2 = Post-Babylon stage (smart contract based token sale) -
          $XRDINU price will be: $0.0035
        </p>

      </div>
      <div className={`flex flex-row`}>
        <Phase1/>
        
        <Phase2/>
      </div>
    
    </section >


  </div >
);

export default CTA;
