import styles from "../style";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";

const CTA = () => (
  <div>
    <section id="invest" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Become a VC, register interest now!</h2>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
          20% of the total token supply (200,000,000 tokens), are allocated to seed investors. 
          These are the early backers of the project who have provided initial capital and support to help
          get the project off the ground. This allocation will be used to reward and
          incentivize these investors for their early support.
        </p>
        <p className={`${styles.paragraph} max-w-[670px] mt-5`}>Phase 1 registrations are live.</p>
      </div>
      <div className={`flex flex-col sm:ml-10 ml-10 sm:mt-10 mt-10`}>
        <Phase1 />
      </div>
      <div className={`flex flex-col sm:ml-10 ml-10 sm:mt-10 mt-10`}>
        <Phase2 />
      </div>
    </section>


  </div>
);

export default CTA;
