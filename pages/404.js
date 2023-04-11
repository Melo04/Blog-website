import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-2xl font-bold mb-4">Oops! Page not found.</p>
        <p className="text-lg mb-8">
          The page you are looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white rounded-md font-medium hover:scale-125 hover:shadow-purple-500 hover:shadow-lg transition duration-200"
        >
          Go to Home
        </Link>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <Image
          src={"/images/error.jpg"}
          width={400}
          height={400}
          alt="Error"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
