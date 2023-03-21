import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Phase1";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Developed with <a href ="https://learn.radixdlt.com/article/what-is-scrypto" target="_blank" className="underline text-blue-700">Scrypto</a>  
         - the best smart contract <br className="sm:block hidden" />  
        programming language.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Based on Rust, Scrypto aims to substantially improve the Web3 and DeFi 
      developer experience by providing assets (tokens) as a native first-class 
      feature of the language. Scrypto is asset-oriented.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="scrypto" className="rounded-lg" />
    </div>
  </section>
);

export default CardDeal;
