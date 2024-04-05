import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks/useBlog";
import { FullBlogSkeleton } from "../components/loader/FullBlogSKeleton";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading && !blog) {
    return (
      <>
        <FullBlogSkeleton />
      </>
    );
  }
  return (
    <>
      <FullBlog blog={blog} />
    </>
  );
};

export default Blog;
