import { Link } from "react-router-dom";
import css from "./header.module.css";
import BurgerButton from "../burger/burger";

export default function Header({ openModal, amount }) {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.header___nav}>
          <Link to="/" className={css.header___logo}>
            <svg width="120" height="20">
              <use href="svg-icons.svg#icon-logo"></use>
            </svg>
          </Link>
          <div className={css.header___mainBtn}>
            <Link to="/how_it_works">How It Works</Link>
            <Link to="/products">Vegetables</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
          <button className={css.header___orderIcon} onClick={openModal}>
            <svg width="20" height="20">
              <use href="svg-icons.svg#icon-cart"></use>
            </svg>
            {amount > 0 && (
              <div className={css.header___orderAmount}>{amount}</div>
            )}
          </button>
          <BurgerButton>
            <div className={css.header___mainBtnMob}>
              <Link to="/how_it_works">How It Works</Link>
              <Link to="/products">Vegetables</Link>
              <Link to="/contacts">Contacts</Link>
              <Link to="/order" className={css.header___orderIconMob}>
                <svg width="20" height="20">
                  <use href="svg-icons.svg#icon-cart"></use>
                </svg>
              </Link>
            </div>
          </BurgerButton>
        </nav>
      </div>
    </header>
  );
}
