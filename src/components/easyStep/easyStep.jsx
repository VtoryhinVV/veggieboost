import clsx from "clsx";
import css from "./easyStep.module.css";

export default function EasyStep() {
  return (
    <section className={css.easyStep}>
      <div className={clsx("container", css.easyStep___bg)}>
        <div className={css.easyStep___contant}>
          <div className={css.easyStep___img}></div>
          <div className={css.easyStep___info}>
            <h2>3 Easy Steps for Buying Fresh Vegetables</h2>
            <ol>
              <li>
                <p>
                  Just choose the vegetable you want to order by clicking on the
                  checkboxes next to it.
                </p>
              </li>
              <li>
                <p>
                  Click on the basket and <br /> fill out the form.
                </p>
              </li>

              <li>
                <p>
                  Sit back and relax! Your fresh vegetables basket will be
                  delivered.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
