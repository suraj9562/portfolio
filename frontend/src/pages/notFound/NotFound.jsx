import Styles from "./notFound.module.css";

import notFound from "./../../assets/images/notFound.svg";

function NotFound() {
  return (
    <div className={Styles.container}>
      <img src={notFound} alt="" />
      <div className={Styles.text}>
        Looks like you are lost somewhere. Page you are looking for does not
        exist!
      </div>
    </div>
  );
}

export default NotFound;
