import clsx from "clsx";
import css from "./hero.module.css";
import ButtonHero from "../buttons/buttonHero";
export default function Hero() {
  const btnName = ["#organic", "#products", "#basket", "#vegetables"];
  return (
    <section className={css.heroBg}>
      <div className={clsx("container", css.hero)}>
        <div className={css.hero___info}>
          <div className={css.hero___reviewsImgs}>
            <img src="/img/user1.png" />
            <img src="/img/user2.png" />
            <img src="/img/user3.png" />
            <div className={css.hero___reviewsInfo}>
              <p>2K</p> <p>reviews</p>
            </div>
          </div>
          <h2 className={css.hero___titel}>
            organic <span>vegetables</span>
            <br /> to your diet today!
          </h2>
          <p className={css.hero___description}>
            Our expertly curated vegetable baskets are made with the freshest,
            highest quality vegetables available. Fresh Harvest Box has got you
            covered. Fresh, high-quality vegetables in expertly curated
            vegetable baskets delivered to you.
          </p>
          <div className={css.hero___shopNow}>
            <p>Shop now</p>
          </div>
        </div>
        <div>
          <div className={css.hero___img}></div>
          <div className={css.hero___btnInfo}>
            {btnName.map((btn, index) => {
              return <ButtonHero key={index} name={btn} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
