import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

import "./Header.css";

const handleHamburgerClick = () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("nav--visible");
};

export default function Header(props) {
  return (
    <header>
      <div className="container d-flex container__header">
        <h1 className="title">Center It!</h1>

        <nav className="nav">
          <ul className="nav_list">
            <li className="nav-item">
              <a
                href="https://github.com/joshi-kaushal/center-it"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/clumsy_coder"
                target="_blank"
                rel="noopener noreferrer"
                className="nav__link"
              >
                <AiFillTwitterCircle />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
