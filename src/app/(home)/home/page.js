export default function Home() {
  return (
    <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10 ">
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Most Experienced Team
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Team BrainEdge education is a bunch of highly focused, energetic set
            of people.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Best Test preparation
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Know where you stand and what next to do to succeed .
          </p>
        </div>
      </div>
    </div>
  );
}
