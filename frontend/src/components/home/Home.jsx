import Button from "../../subComponents/button/Button";
import Styles from "./home.module.css";

import clientImg from "./../../assets/images/UserImg.svg";

function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.title}>
          Hey 👋, I am Johnny😁, Software Developer 🚀🚀
        </div>
        <div className={Styles.subtitle}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <Button data="Download Resume" />
      </div>
      <div className={Styles.right}>
        <img src={clientImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
