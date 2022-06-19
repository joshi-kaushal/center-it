import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

import "./Header.css";

const handleHamburgerClick = () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("nav--visible");
};

export default function Header(props) {
  return (
    <header>
      <div class="container d-flex container__header">
        <h1 className="title">Center It!</h1>

        <nav class="nav">
          <ul class="nav_list">
            <li class="nav-item">
              <a
                href="https://github.com/joshi-kaushal/center-it"
                target="_blank"
                rel="noopener noreferrer"
                class="nav__link"
              >
                <AiFillGithub />
              </a>
            </li>
            <li class="nav-item">
              <a
                href="https://twitter.com/clumsy_coder"
                target="_blank"
                rel="noopener noreferrer"
                class="nav__link"
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
