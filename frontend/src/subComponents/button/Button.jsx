import Styles from "./button.module.css";

function Button({ data }) {
  return <div className={Styles.container}>{data}</div>;
}

export default Button;
