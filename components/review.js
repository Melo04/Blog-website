import { BsTwitter } from 'react-icons/bs'
import {useEffect, useRef} from 'react'

export default function review() {
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
      let intervalId;

      const slideRight = () => {
        const firstReview = container.querySelector("figure");
        const firstReviewWidth = firstReview.offsetWidth;

        // Add CSS transition property to the container for smooth sliding
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(-${firstReviewWidth}px)`;

        setTimeout(() => {
          container.style.transition = "";
          container.appendChild(firstReview);
          container.style.transform = ""; 
        }, 500);
      };
      intervalId = setInterval(slideRight, 3000);

      return () => {
        clearInterval(intervalId);
      };
    }, []);


    return (
      <>
        <div className="text-center">
          <h1 className="text-4xl font-black bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-green-500 inline-block">
            Our Reviews
          </h1>
          <p className="text-gray-600 mt-2 font-bold">- Read what our users are saying -</p>
        </div>

        <div className="relative">
          <div className="flex">
            <div className="overflow-x-auto">
              <div
                className="grid grid-flow-row grid-cols-2 p-10 gap-10"
                style={{
                  width: "4500px",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                }}
                ref={containerRef}
              >
                <figure className="bg-white rounded-2xl shadow-lg overflow-hidden rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-yellow-100"></div>
                    <p className="font-bold text-lg">
                      “I recently stumbled upon this blog and I'm so glad I did!
                      The articles are well-written and engaging, and the topics
                      covered are relevant and interesting. I've learned so much
                      from reading the posts here, and I'm looking forward to
                      more great content in the future.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-br from-yellow-500 to-orange-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg -rotate-2 hover:-rotate-1 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “I've been a loyal reader of this blog for a while now,
                      and I continue to be impressed with the quality of the
                      content. The writing is excellent, the topics are diverse,
                      and the insights shared are thought-provoking. This blog
                      has become my go-to source for reliable and informative
                      content in my niche.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-6 bg-gradient-to-br from-blue-500 to-indigo-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “I recently used the tips and advice shared on this blog
                      to improve my own website, and the results have been
                      amazing! The practical and actionable insights provided in
                      the articles have helped me optimize my content and grow
                      my audience. I'm grateful for the valuable information
                      shared on this blog and will continue to be a regular
                      reader."”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-green-500 to-emerald-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “I have had a wonderful experience working with Tech Insider.
                      Their professionalism and timely delivery have exceeded my
                      expectations. I highly recommend their services and will
                      definitely be using them again in the future.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-red-500 to-orange-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      "I am thoroughly impressed with Tech Insider's work. Their
                      professionalism and commitment to meeting deadlines are
                      top-notch. I would highly recommend them to anyone looking
                      for high-quality work delivered on time.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-pink-500 to-purple-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “I am delighted with the level of professionalism
                      displayed by Tech Insider. Their timely delivery and commitment
                      to excellence are truly admirable. I will definitely be
                      recommending them to my friends and colleagues for their
                      outstanding service.”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-blue-500 to-green-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “The content on this blog is top-notch! I love how
                      well-researched and informative the articles are. It's
                      clear that the Tech Insiders put a lot of effort into creating
                      valuable content for their readers. Keep up the great
                      work!”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-purple-500 to-yellow-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>

                <figure className="bg-white rounded-2xl shadow-lg rotate-1 hover:rotate-0 transition duration-200">
                  <blockquote className="p-8">
                    <div className="mb-5 text-blue-100"></div>
                    <p className="font-bold text-lg">
                      “The content on this blog is top-notch! I love how
                      well-researched and informative the articles are. It's
                      clear that the Tech Insiders put a lot of effort into creating
                      valuable content for their readers. Keep up the great
                      work!”
                    </p>
                  </blockquote>
                  <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-br from-blue-500 to-orange-500">
                    <div className="flex items-center gap-5">
                      <div className="rounded-full border-4 w-14 h-14 border-white">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "47px",
                            height: "49px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                        </div>
                      </div>
                      <figcaption className="text-white font-semibold">
                        <div>Peter Parker</div>
                        <div className="opacity-70">Front End Developer</div>
                      </figcaption>
                    </div>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white/80 transition duration-300"
                    >
                      <BsTwitter />
                    </a>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
