import { Link } from "react-router-dom";
import css from "./header.module.css";
export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className={css.header}>
          <div className={css.header___mainBtn}>
            <Link to="/how_it_works">How It Works</Link>
            <Link to="/products">Vegetables</Link>
            <Link to="/contacts">Contacts</Link>
          </div>

          <Link to="/">
            <svg width="120" height="20">
              <use href="svg-icons.svg#icon-logo"></use>
            </svg>
          </Link>
          <Link to="/order">
            <svg width="20" height="20">
              <use href="svg-icons.svg#icon-cart"></use>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
