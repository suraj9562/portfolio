import Home from "../../components/home/Home";
import Styles from "./landingpage.module.css";

function LandingPage() {
  return (
    <div className={Styles.container}>
      <Home />
    </div>
  );
}

export default LandingPage;
