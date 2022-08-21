import Styles from "./header.module.css";

import { NavLink } from "react-router-dom";

import home from "./../../assets/icons/home.svg";
import work from "./../../assets/icons/work.svg";
import contact from "./../../assets/icons/contact.svg";
import blog from "./../../assets/icons/blog.svg";

function Header() {
  return (
    <div className={Styles.container}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? Styles.active : "")}
      >
        <div className={Styles.link}>
          <img src={home} alt="" />
          Home
        </div>
      </NavLink>

      <NavLink
        to="/work"
        className={({ isActive }) => (isActive ? Styles.active : "")}
      >
        <div className={Styles.link}>
          <img src={work} alt="" />
          Work
        </div>
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? Styles.active : "")}
      >
        <div className={Styles.link}>
          <img src={blog} alt="" />
          Blog
        </div>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? Styles.active : "")}
      >
        <div className={Styles.link}>
          <img src={contact} alt="" />
          Contact
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
