import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-5">
          <Link href={"/"} className="flex items-center">
            <img
              src="https://seeklogo.com/images/B/blogger_B-logo-47610B2F87-seeklogo.com.png"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tech Insider
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link href={"/login"}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-200 via-green-300 to-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-md px-5 py-2 text-center mr-3 md:mr-0 dark:hover:scale-110 transition duration-200 dark:hover:shadow-lg dark:hover:shadow-green-500 dark:focus:ring-green-300"
              >
                Login Now
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href={"/"}
                  className={`${
                    router.pathname === "/"
                      ? "rounded md:px-5 md:py-2 bg-gradient-to-r from-purple-400 to-yellow-400"
                      : "text-gray-900 rounded hover:bg-gray-100 md:pt-2 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  } block py-2 pl-3 pr-4 text-white`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className={`${
                    router.pathname === "/about"
                      ? "rounded md:px-5 md:py-2 bg-gradient-to-r from-purple-400 to-yellow-400"
                      : "text-gray-900 rounded hover:bg-gray-100 md:pt-2 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  } block py-2 pl-3 pr-4 text-white`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/profile"}
                  className={`${
                    router.pathname === "/profile"
                      ? "rounded md:px-5 md:py-2 bg-gradient-to-r from-purple-400 to-yellow-400"
                      : "text-gray-900 rounded hover:bg-gray-100 md:pt-2 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  } block py-2 pl-3 pr-4 text-white`}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
