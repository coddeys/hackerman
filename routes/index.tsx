export default function Home() {
  return (
    <div class="">
      <Banner />
    </div>
  );
}

function Banner() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-2 py-32 lg:flex h-[calc(100vh-64px)] lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            SUPER COOL HACKATHONS
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Code like the wind, debug like a ninja, and hack like there's no
            tomorrow! Welcome to Hackathons where sleep is optional and caffeine
            is mandatory. Let's turn bugs into features and pizza into code!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/hackathons/new"
            >
              Create Hackathon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
