import BlogCard from "../../subComponents/blogCard/BlogCard";
import Styles from "./blog.module.css";

function Blog() {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.heading}>Recent Posts</div>
        <div className={Styles.btn}>View all</div>
      </div>
      <div className={Styles.cards}>
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Blog;
