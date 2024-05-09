import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import css from "./phoneInpute.module.css";
import "react-international-phone/style.css";

export default function PhoneInpute() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone);
  };

  return (
    <form className={css.phoneInput} onSubmit={handleSubmit}>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <button type="submit" className={css.phoneInput___buttonSubmite}>
        Recall
      </button>
    </form>
  );
}
