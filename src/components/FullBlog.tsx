import { Blog } from "../hooks/useBlog";
import { Image } from "./Image";

export const FullBlog = ({ blog }: { blog?: Blog }) => {
  return (
    <div className="max-w-4xl mx-auto my-12 px-8">
      <h1 className="text-5xl font-bold leading-tight mb-4">{blog?.title}</h1>
      <p className="text-lg text-gray-600 mb-8">Posted on August 24, 2023</p>
      <div className="flex">
        <div className="flex-grow">
          <p className="text-lg leading-relaxed mb-6">{blog?.content}</p>
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        </div>
        <div className="w-48 ml-12">
          <div className="flex items-center mb-4">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image src="https://dummyimage.com/100x100" alt="Jokester" />
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                JK
              </span>
            </span>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{blog?.author?.name}</h3>
              <p className="text-sm text-gray-600">Author</p>
            </div>
          </div>
          <p className="text-sm">
            Master of mirth, purveyor of puns, and the funniest person in the
            kingdom.
          </p>
        </div>
      </div>
    </div>
  );
};
