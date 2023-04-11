import Typewriter from "typewriter-effect";

export default function TypeWriterText2() {
  return (
    <>
      <div className="mx-4 md:mx-40 px-4 md:px-8 py-8 bg-white shadow-2xl rounded-lg">
        <h1 className="text-xl md:text-3xl mx-4 md:mx-40 capitalize font-extrabold text-black self-center text-center font-nunito">
          Unleash Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-400 to-green-500">
            Tech Potential
          </span>{" "}
          with our{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-400 to-orange-500">
            Cutting-Edge
          </span>{" "}
          blog technologies🚀 <br></br>Your source of
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span class="text-4xl uppercase text-purple-500">Innovate.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="text-4xl uppercase text-blue-500">Transform.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="text-4xl uppercase text-green-500">Inspire.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="text-4xl uppercase text-red-600">Tech Unleashed.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="text-4xl uppercase text-orange-500">Tech Discovered.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '<span class="text-4xl uppercase text-indigo-600">Digital Journey.</span>'
                )
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </h1>
      </div>
    </>
  );
};