import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex justify-center items-center">
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
              className="h-8 w-8"
            >
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
              <line x1={4} x2={4} y1={22} y2={15} />
            </svg>

            <span className="text-sm font-semibold px-2">Medium</span>
          </Link>
          <div className="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            Saved
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Publish
          </button>
          <Link to="/publish">
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
              className="h-6 w-6"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
              <circle cx={5} cy={12} r={1} />
            </svg>
          </Link>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              H
            </span>
          </span>
        </div>
      </header>
    </>
  );
};
