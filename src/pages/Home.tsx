import { BlogCard } from "../components/BlogCard";
import { BlogCardSkeleton } from "../components/loader/BlogCardSkeleton";
import { useBlogs } from "../hooks/useBlog";

const Home = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto my-8">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    );
  }
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex ">
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          For you
        </button>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Following
        </button>
      </div>
      <div className="py-4 my-2">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name || "Annonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate || "Dec 3, 2023"}
          />
        ))}
      </div>
      {/* Repeat the structure for Blog Post 2 and others */}
    </div>
  );
};

export default Home;
