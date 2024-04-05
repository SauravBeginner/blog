import { Link } from "react-router-dom";
import { Image } from "./Image";

type BlogCardProps = {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
};
export const BlogCard = ({
  authorName,
  id,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <article className="space-y-4 flex border-b-2 shadow-md mb-5">
        <div className="flex-1 p-4">
          <header className="flex items-center space-x-2">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image src="https://dummyimage.com/100x100" />
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                PV
              </span>
            </span>
            <div>
              <div className="text-sm font-medium">
                {authorName}. - {publishedDate}
              </div>
              <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Member-only
              </div>
            </div>
          </header>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{content.slice(0, 100) + "..."}</p>
          <footer className="flex items-center justify-between pt-2">
            <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              Side Hustle
            </div>
            <div className="text-sm">
              {Math.ceil(content.length / 100)} min read
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
            </svg>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              ...
            </button>
          </footer>
        </div>
        <div className="flex-shrink-0 mx-4 ">
          <Image
            alt="Dummy Image"
            className="aspect-square h-32 w-32"
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*B9czCu8g4ihd4Ijq.png"
          />
        </div>
      </article>
    </Link>
  );
};
