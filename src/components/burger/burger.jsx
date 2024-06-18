import { useState } from "react";
import clsx from "clsx";
import styles from "./burger.module.css"; // Импортируем стили из модульного файла

const BurgerButton = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burgerMenu}>
      <button
        className={clsx(styles.burgerButton, { [styles.open]: isOpen })}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      <div className={clsx({ [styles.open]: isOpen })}>
        <div className={clsx(styles.menu, { [styles.open]: isOpen })}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BurgerButton;
