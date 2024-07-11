export default function ViewHackathons() {
  return (
    <div className="">
      <ViewHackathonsHeader />
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="x-data x-masonry grid grid-cols-3 gap-4">
            <li className="p-4 rounded-xl border-2">
              <HackathonCard
                id={1}
                title={"Platform Tribe Hackathon"}
                desc={"Bring your brightest minds to this hackathon!"}
                date={"04-03-2024"}
                state={"Ongoing"}
                createdBy={"Hydra Squad"}
              />
            </li>
            <li className="p-4 rounded-xl border-2">
              <HackathonCard
                id={2}
                title={"Healthcare Economy Hackathon"}
                desc={"You can apply for free, as an individual, or as a team of 3 members."}
                date={"11-03-2024"}
                state={"Upcoming"}
                createdBy={"Platform Tribe"}
              />
            </li>
            <li className="p-4 rounded-xl border-2">
              <HackathonCard
                id={3}
                title={"European Healthcare Hackathon"}
                desc={"We bring hackers, students, entrepreneurs, healthcare, and industry experts together to create new ideas and technologies for diabetology, surgery, transplantology, patient care and comfort"}
                date={"18-03-2024"}
                state={"Upcoming"}
                createdBy={"Dataprotection"}
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
    <header className="bg-gray-900 text-white h-1/3">
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
            <a
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              href="/hackathons/new"
            >
              Create Hackathon
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function HackathonCard({ id, title, desc, date, state, createdBy }) {
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
  return (
    <article className="order-gray-300 bg-white">
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
