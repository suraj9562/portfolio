import Styles from "./blogCard.module.css";

function BlogCard() {
  return (
    <div className={Styles.card}>
      <div className={Styles.title}>Making a design system from scratch</div>
      <div className={Styles.subtitle}>
        <div className={Styles.date}>12 Feb 2020</div>
        <div className={Styles.verticalLine}></div>
        <div className={Styles.position}>Design, Pattern</div>
      </div>
      <div className={Styles.desc}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
    </div>
  );
}

export default BlogCard;
