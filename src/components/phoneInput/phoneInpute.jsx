import { useState } from "react";
import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";

export default function PhoneInpute() {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        hideDropdown={true}
        forceDialCode={true}
      />
    </div>
  );
}
