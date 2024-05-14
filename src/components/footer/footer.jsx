import { Link } from "react-router-dom";
import css from "./footer.module.css";
import { clsx } from "clsx";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={clsx("container", css.footer___container)}>
        <div className={css.footer___logo}>
          <div className={css.footer___img}></div>
          <Link to="/">
            <svg width="120" height="20">
              <use href="svg-icons.svg#icon-logo"></use>
            </svg>
          </Link>
        </div>
        <ul className={css.footer___nav}>
          <li>
            <Link to="/how_it_works">How It Works</Link>
          </li>
          <li>
            <Link to="/products">Vegetables</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <div>
          <ul className={css.footer___social}>
            <li>
              <a href="#">
                <svg width="28" height="28">
                  <use href="svg-icons.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="28" height="28">
                  <use href="svg-icons.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg width="28" height="28">
                  <use href="svg-icons.svg#icon-youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
          <p>+380 (68) 443-94-26</p>
          <address>
            1678 S. Pioneer Road
            <br /> Salt Lake City <br /> UT 84104
          </address>
        </div>
      </div>
    </footer>
  );
}
