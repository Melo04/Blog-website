import Link from "next/link";

export default function footer() {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
          <h1 className="font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none">
            <span className="text-5xl inline md:block">Join Our Community</span> <br/>
            <span className="text-2xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block">
              {" "}
              Passionate about a topic?
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300">
                {" "}
                Join us and let your voice be heard through blogging
              </span>{" "}
            </span>
          </h1>
          <div className="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
            <Link
              href={"/login"}
              className="bg-tkb hover:bg-indigo-600 hover:scale-150 hover:shadow-lg border text-sm text-white py-3 px-7 rounded-full"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </section>

      <hr className="text-white mx-5" />
      <footer className="bg-black pb-5">
        <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href={"/"} className="flex justify-center text-teal-300 sm:justify-start">
              <img
                className="rounded-full"
                src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
                width="40"
                height="40"
                alt="hi"
              />
              <span className="self-center ml-2 text-2xl transition duration-200 hover:text-3xl font-semibold whitespace-nowrap dark:text-white">
                Tech Insider
              </span>
            </Link>

            <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
              T&C &nbsp; Career &nbsp; Privacy & Policy &nbsp; Developers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
