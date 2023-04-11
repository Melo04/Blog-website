export default function Card() {
  return (
    <>
      <div
        className="bg-gradient-to-r from-green-300 to-purple-400 h-screen w-fit sm:w-screen mb-20"
        style={{ overflowY: "auto" }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-center pt-20 text-white">
          About Our Blog
        </h1>
        <div className="border-b-2 md:border-b-4 w-12 md:w-16 mx-auto mt-4 border-white mb-40 rounded-full"></div>

        <div className="flex flex-wrap justify-center items-center gap-40 mb-32 sm:mb-0 sm:gap-8 md:gap-10">
          <div className="bg-slate-50 w-80 sm:w-64 md:w-72 h-auto flex flex-col items-center p-4 md:p-8 rounded-lg shadow-lg group hover:cursor-pointer hover:-mt-10">
            <div className="bg-cover bg-[url(/images/meta.jpg)] aspect-square w-full -mt-16 md:-mt-24 bg-center rounded-lg shadow-sm group-hover:grayscale-0 transition-all duration-500"></div>
            <div className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full">
              <div
                id="content"
                className="flex flex-col items-center -mt-14 md:-mt-20 group-hover:mt-2 transition-all duration-300 delay-600"
              >
                <h2 className="font-extrabold text-xl md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-400 to-green-500">
                  Discovering the Exciting World of Metaverses
                </h2>
                <p className="font-bold text-sm md:text-base text-justify text-slate-700 mt-6">
                  Metaverses are virtual realms that have gained immense
                  popularity in recent years. These digital universes offer
                  unique and immersive experiences, blurring the boundaries
                  between the physical and virtual worlds.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-80 sm:w-72 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group hover:cursor-pointer hover:-mt-20">
            <div className="bg-cover bg-[url(/images/tech.jpg)] aspect-square w-full -mt-24 bg-center rounded-lg shadow-sm group-hover:grayscale-0 transition-all duration-500"></div>
            <div className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full">
              <div
                id="content"
                className="flex flex-col items-center -mt-28 group-hover:mt-2 transition-all duration-300 delay-600"
              >
                <h2 className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-500 to-pink-800">
                  Tech News and Updates
                </h2>
                <p className="font-bold text-justify text-slate-700 mt-10">
                  Our blogs focus on the latest news and updates in the world of
                  technology, covering topics such as new product releases,
                  software updates, industry trends, and technological
                  advancements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-80 sm:w-72 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group hover:cursor-pointer hover:-mt-20">
            <div className="bg-cover bg-[url(/images/coder.jpg)] aspect-square w-full -mt-24 bg-center rounded-lg shadow-sm group-hover:grayscale-0 transition-all duration-500"></div>
            <div className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full">
              <div
                id="content"
                className="flex flex-col items-center -mt-28 group-hover:mt-2 transition-all duration-300 delay-600"
              >
                <h2 className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                  Developer Blogs
                </h2>
                <p className="font-bold text-center text-slate-700 mt-6">
                  These blogs cater to developers and programmers, providing
                  tutorials, code snippets, and insights into coding practices,
                  programming languages, software development tools, and best
                  practices for building applications and websites.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 w-80 sm:w-72 h-auto flex flex-col items-center p-8 rounded-lg shadow-lg group hover:cursor-pointer hover:-mt-20">
            <div className="bg-cover bg-[url(/images/tips.jpg)] aspect-square w-full -mt-24 bg-center rounded-lg shadow-sm group-hover:grayscale-0 transition-all duration-500"></div>
            <div className="flex flex-col opacity-0 group-hover:opacity-100 invisible group-hover:visible h-0 group-hover:h-full">
              <div
                id="content"
                className="flex flex-col items-center -mt-28 group-hover:mt-2 transition-all duration-300 delay-600"
              >
                <h2 className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                  Tech Tips and Tricks
                </h2>
                <p className="font-bold text-justify text-slate-700 mt-10">
                  These blogs share tips, tricks, and hacks to help readers
                  optimize their use of technology, improve productivity, and
                  enhance their overall tech experience. Topics can include
                  shortcuts, hidden features, and customization options for
                  various devices and software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
