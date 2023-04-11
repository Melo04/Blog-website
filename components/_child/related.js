import Link from "next/link";
import Image from "next/image";
import Author from "./author";
import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";

export default function Ralated() {
  const { data, isLoading, isError } = fetcher("api/posts");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="pt-20">
      <h1 className="font-extrabold font-sans text-4xl text-center py-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-purple-400 to-purple-200">
        Related Blog Posts
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.slice(0, 9).map((value, index) => (
          <Post key={index} data={value}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image src={img || ""} className="rounded" width={500} height={350} alt=""/>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link
            href={`/posts/${id}`}
            className="text-blue-600 hover:text-blue-300"
          >
            {category || "No Category"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            - {published || ""}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "No Title"}
          </Link>
        </div>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}