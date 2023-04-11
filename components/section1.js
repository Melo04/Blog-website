import Image from "next/image"
import Link from "next/link";
import Author from './_child/author'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section1() {
    const { data, isLoading, isError } = fetcher("api/posts");

    if (isLoading) return <Spinner></Spinner>;
    if (isError) return <Error></Error>;

    SwiperCore.use([Autoplay])

    return (
      <section className="py-16 -mb-10 bg-gradient-to-r from-yellow-200 via-green-200 to-green-300">
        <div className="container sm:mt-20 mx-10 sm:mx-auto md:px-20 mt-20">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {data.slice(18, 22).map((item, index) => (
              <SwiperSlide key={index}>
                <Slide data={item}></Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
}

function Slide({ data }) {
   const { id, title, category, img, published, description, author } = data;

    return (
      <div className="grid md:grid-cols-2 sm:ml-5 sm:mr-5">
        <div className="flex justify-center items-center image">
          <Link href={`/posts/${id}`}>
            <Image src={img || "/"} width={600} height={600} alt="hi" />
          </Link>
        </div>
        <div className="info flex justify-center flex-col lg:mt-0 sm:mb-5 sm:mt-10">
          <div className="title">
            <Link
              href={`/posts/${id}`}
              className="text-3xl md:text-6xl text-justify font-extrabold text-gray-900 hover:text-gray-600"
            >
              {title || "Title"}
            </Link>
          </div>
          <div className="cat mt-10">
            <Link
              href={`/posts/${id}`}
              className="text-indigo-600 hover:text-purple-400"
            >
              {category || "Unknown"}{" "}
            </Link>
            <Link
              href={`/posts/${id}`}
              className="text-gray-800 hover:text-gray-600"
            >
              {published || "Unknown"}
            </Link>
          </div>
          <p className="text-indigo-900 pt-3">
              {description && description.length > 100
                ? description.slice(0, 600) + "..."
                : description || "description"}
          </p>
          {author ? <Author {...author}></Author> : <></>}
        </div>
      </div>
    );
}