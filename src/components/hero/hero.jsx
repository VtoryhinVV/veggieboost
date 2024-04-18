import clsx from "clsx";
import css from "./hero.module.css";
export default function Hero() {
  return (
    <section className={css.heroBg}>
      <div className={clsx("container", css.hero)}>
        <div className={css.hero___reviewsImgs}>
          <img src="/img/user1.png" />
          <img src="/img/user2.png" />
          <img src="/img/user3.png" />
          <div className={css.hero___reviewsInfo}>
            <p>2K</p> <p>reviews</p>
          </div>
        </div>
        <h2>
          organic vegetables
          <br /> to your diet today!
        </h2>
      </div>
    </section>
  );
}
