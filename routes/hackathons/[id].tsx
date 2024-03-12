export default function ViewHackathon() {
  return (
    <div className="">
      <HackathonHeader />
      <div className="mx-auto max-w-screen-xl py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-1xl">
              Part of this hackathon:
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="x-data x-masonry grid grid-cols-2 gap-4">
            <li>
              <ProjectCard
                title={"Super cool project"}
                desc={"This is a super cool project"}
                createdBy={" Dima"}
                id={1}
              />
            </li>
            <li>
              <ProjectCard
                title={"Awesome project!"}
                desc={"There has never been a project this awesome"}
                createdBy={" Mees"}
                id={2}
              />
            </li>
            <li>
              <ProjectCard
                title={"The best project"}
                desc={"This is the bestest project ever"}
                createdBy={" Ryan"}
                id={3}
              />
            </li>
          </ul>
        </div>
      </div>
      <VoteButton />
    </div>
  );
}

function HackathonHeader() {
  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Super cool Hackathon
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              This is a super cool hackathon
            </p>
            <p className="mt-1.5 text-sm text-gray-500">
              04-03-2024 to 11-03-2024
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Add project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ id, title, desc, createdBy }) {
  let img = "/nedapLogoBlue.svg";
  if (id == "1") {
    img = "/hackermanImage.jpeg";
  } else if (id == "2") {
    img = "/nedapLogoBlue.svg";
  } else if (id == "3") {
    img = "/unicorn.png";
  }

  return (
    <article class="rounded-xl border-2 border-gray-300 bg-white">
      <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" className="block shrink-0">
          <img
            alt=""
            src={img}
            width="128"
            height="128"
          />
        </a>

        <div>
          <h3 className="font-medium sm:text-lg">
            <a href="#" className="hover:underline">{title}</a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            {desc}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
              Created by
              <a className="font-medium">
                {createdBy}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <strong
          id="state_banner"
          className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl  px-3 py-1.5 text-white"
        >
          <Buttons />
        </strong>
      </div>
    </article>
  );
}

function Buttons() {
  return (
    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
      <button
        className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
        title="Edit Product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>

      <button
        className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
        title="Delete Product"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </span>
  );
}

function VoteButton() {
  return (
    <div className="mx-auto max-w-screen-xl py-8 sm:px-6 sm:py-8 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-center">
          <button type="button"
                  className="mb-2 block w-full rounded-lg px-5 py-3 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            Vote for a winner!</button>

      </div>
    </div>
  );
}
