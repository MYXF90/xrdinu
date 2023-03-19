import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Become a VC, register interest now!</h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      We are allocating 20% of the total token supply, 
      which equates to 200,000,000 tokens, to seed investors. These are the early 
      backers of the project who have provided initial capital and support to help 
      get the project off the ground. This allocation will be used to reward and 
      incentivize these investors for their early support.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
