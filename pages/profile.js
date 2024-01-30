import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { SessionProvider, useSession, getSession, signOut } from "next-auth/react"
import {GraphQLClient, gql} from 'graphql-request'
import BlogCard from "@/components/BlogCard"
import { FaUser, FaEnvelope } from "react-icons/fa";
import Footer from "@/components/footer"
import Header from "@/components/header"
import { useRouter } from "next/router"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
{
    posts {
        id,
        title,
        datePublished,
        slug,
        content {
            html
        }
        author{
            name
            avatar {
                url
            }
        }
        coverPhoto{
            url
        }
    }
}
`

export default function admin({session, posts}) {
  const router = useRouter();
  const loginSuccess = router.query.loginSuccess;

  if (loginSuccess === "true") {
    toast.success("Successfully login!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

    return (
      <SessionProvider session={session}>
        <div className="mb-28">
          <ToastContainer />
          <Head>
            <title>Profile</title>
          </Head>

          <Header />
          <Content />

          <h1 className="text-center text-4xl font-bold text-purple-500 mt-5">
            My Blog Post
          </h1>
          <div className="border-b-4 w-16 mx-auto mt-3 border-purple-400"></div>

          <div className="flex justify-center">
            <Link
              href="https://auth.graphcms.com/login?state=hKFo2SBQM09uOHpKemg4eUQwTHh0c3k0cnB4Z3RaOE5mWUpvT6FupWxvZ2luo3RpZNkgNmE0Zy0zRnhfa1lYNmhYaUNDQ1l6RF9CUWM3ZDJhZzKjY2lk2SA4VldTZHlVaHRaVDQzbkFpcHIyZmpLUmhqSm1wOHNZeQ&client=8VWSdyUhtZT43nAipr2fjKRhjJmp8sYy&protocol=oauth2&response_type=id_token&redirect_uri=https%3A%2F%2Fapp.hygraph.com%2Fauth&scope=openid%20https%3A%2F%2Fgraphcms.com%2FloginsCount&mode=login&nonce=AQFum.39al_FM4L62ZV27GjlPT1QzKkM&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4xIn0%3D"
              className="text-center mt-10 px-5 py-4 rounded-sm bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 text-black font-bold text-base hover:scale-110 hover:shadow-green-600 hover:shadow-2xl hover:text-black transition duration-300 ease-in-out"
            >
              Upload a blog
            </Link>
          </div>

          <main className="sm:mx-10 sm:my-5 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 my-10 grid-cols-1">
            {posts.map((post) => (
              <BlogCard
                title={post.title}
                author={post.author}
                coverPhoto={post.coverPhoto}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                className="hover:shadow-lg"
              />
            ))}
          </main>
        </div>

        <Footer />
      </SessionProvider>
    );
}

function Content() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sign Out successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return session ? (
    <>
      <ToastContainer />
      <User session={session} handleSignOut={handleSignOut} />
    </>
  ) : (
    <Guest />
  );
}

function Guest() {
    return (
        <main className="container mx-auto text-center py-20">
            <h3 className="text-4xl font-bold">Guest Homepage</h3>

            <div className="flex justify-center">
                <Link href={'/login'} className="mt-5 px-10 py-1 rounded-dm bg-indigo-500 text-gray-500">Sign In</Link>
            </div>
        </main>
    )
}

function User({session, handleSignOut}){    
    return (
      <>
        <main className="container mt-10 mx-auto text-center py-20">
          <h3 className="text-4xl font-bold mb-8">
            Welcome Back,{" "}
            <span className="text-purple-600"> {session.user.name}</span>
            <img
              src={session.user.image} // Set the src attribute to the URL of the user avatar image
              alt=" "
              className="inline-block ml-3 w-10 h-10 rounded-full"
            />
          </h3>

          <div className="flex justify-center items-center">
            <div className="mr-12">
              <FaUser className="inline-block mr-3 text-2xl text-purple-500" />
              <h5 className="inline-block font-bold mr-2 text-purple-700">
                Name:
              </h5>
              <span>{session.user.name}</span>
            </div>
            <div>
              <FaEnvelope className="inline-block mr-3 text-2xl text-purple-500" />
              <h5 className="inline-block font-bold mr-2 text-purple-700">
                Email:
              </h5>
              <span>{session.user.email}</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSignOut}
              className="mt-10 px-10 py-4 rounded-sm text-white font-bold text-base hover:scale-110 hover:shadow-purple-600 hover:shadow-2xl hover:text-black transition duration-300 ease-in-out"
              style={{
                background: "#59c173",
                background:
                  "-webkit-linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
                background:
                  "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
              }}
            >
              Sign Out
            </button>
          </div>
        </main>
      </>
    );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
        session,
        posts,
    }
  };
};