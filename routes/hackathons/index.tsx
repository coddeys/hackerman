export default function ViewHackathons() {
  return (
    <div className="">
      <ViewHackathonsHeader />
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="x-data x-masonry grid grid-cols-3 gap-4">
            <li className="h-64">
              <HackathonCard
                title={"Super cool Hackathon"}
                desc={"This is a super cool hackathon"}
                date={"04-03-2024"}
                state={"Finished"}
                createdBy={" Dima"}
              />
            </li>
            <li className="h-64">
              <HackathonCard
                title={"Awesome Hackathon!"}
                desc={"There has never been a hackathon this awesome"}
                date={"11-03-2024"}
                state={"Ongoing"}
                createdBy={" Mees"}
              />
            </li>
            <li className="h-64">
              <HackathonCard
                title={"The best Hackathon"}
                desc={"This is the bestest hackathon ever"}
                date={"18-03-2024"}
                state={"Upcoming"}
                createdBy={" Ryan"}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ViewHackathonsHeader() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Welcome to the hub of all our Hackathons
            </h1>

            <p className="mt-1.5 text-sm text-white-500">
              Create a new Hackathon or join an existing one!
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              href="/hackathons/new"
              type="button"
            >
              Create Hackathon
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HackathonCard({ title, desc, date, state, createdBy }) {
  let color = "";
  if (state == "Ongoing") {
    color = "bg-green-600 ";
  }
  if (state == "Upcoming") {
    color = "bg-blue-600 ";
  }
  if (state == "Finished") {
    color = "bg-red-600 ";
  }
  let id = 1;
  return (
    <article className="rounded-xl border-2 border-gray-300 bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <div>
          <h3 className="font-medium sm:text-lg">
            <a href={"hackathons/" + id} className="hover:underline">
              {title}
            </a>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            {desc}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <p className="text-xs">{date}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>

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
          className={color +
            "-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-xl rounded-ee-xl rounded-ss-xl  px-3 py-1.5 text-white"}
        >
          <span className="text-[10px] font-medium sm:text-xs">{state}</span>
        </strong>
      </div>
    </article>
  );
}
