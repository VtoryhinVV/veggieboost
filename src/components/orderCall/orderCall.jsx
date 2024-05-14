import clsx from "clsx";
import PhoneInput from "../phoneInput/phoneInpute";
import css from "./orderCall.module.css";

export default function OrderCall() {
  return (
    <section className={css.orderCall}>
      <div className={clsx("container", css.orderCall___container)}>
        <div className={css.orderCall___info}>
          <h2>Fresh Harvest Box has got you covered</h2>
          <p>
            Our boxes are packed with delicious, nutritious vegetables, perfect
            for anyone looking to eat healthier or support local farmers. Order
            your box today and start enjoying the best that nature has to offer!
          </p>
          <PhoneInput />
        </div>
        <div className={css.orderCall___img}></div>
      </div>
    </section>
  );
}
