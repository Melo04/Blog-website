import Format from "../../layout/format";
import Author from "../../components/_child/author";
import Image from "next/image";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/_child/spinner";
import ErrorComponent from "../../components/_child/error";
import Related from "@/components/_child/related";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { GraphQLClient, gql } from "graphql-request";
import useSWR from "swr";
import styles from "@/styles/Slug.module.css";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id,
      title,
      slug,
      datePublished,
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export default function Page({ fallback }) {
  const router = useRouter();
  const { postId, slug } = router.query;
  const { data, isLoading, isError } = useSWR(
    slug ? `/api/posts/${slug}` : `/api/posts/${postId}`,
    async (url) => {
      if (slug) {
        const data = await graphcms.request(QUERY, { slug });
        return data.post;
      } else if (postId) {
        // Fetch data from another API for postId
        const posts = await getPost(postId);
        return posts;
      } else {
        return null;
      }
    }
  );

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <ErrorComponent></ErrorComponent>;

  return (
    <SWRConfig value={{ fallback }}>
      {slug ? (
        <BlogPost post={data}></BlogPost>
      ) : (
        <Article {...data}></Article>
      )}
    </SWRConfig>
  );
}


// function Article({ title, img, subtitle, description, author }) {
//   return (
//     <Format>
//       <section className="container mx-auto md:px-2 py-16 w-3/4 sm:w-1/2">
//         <div className="post py-10">
//           <h1 className="font-extrabold text-4xl text-center text-indigo-700 pb-5">
//             {title || "No Title"}
//           </h1>

//           <p className="text-gray-500 text-xl text-center">
//             {subtitle || "No Title"}
//           </p>

//           <div className="flex justify-center">
//             {author ? <Author {...author}></Author> : <></>}
//           </div>

//           <div className="py-10">
//             <Image src={img || "/"} width={900} height={600} alt=""></Image>
//           </div>

//           <div className="content text-black text-lg flex flex-col gap-4">
//             {description.split("\n").map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))}
//           </div>
//         </div>
//       </section>
//       <div className="mx-auto w-3/4">
//         <Related></Related>
//       </div>
//     </Format>
//   );
// }


function Article({ title, img, subtitle, description, author }) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-3/4 sm:w-1/2">
        <div className="post py-10">
          <h1 className="font-extrabold text-4xl text-center text-indigo-700 pb-5">
            {title || "No Title"}
          </h1>

          <p className="text-gray-500 text-xl text-center">
            {subtitle || "No Title"}
          </p>

          <div className="flex justify-center">
            {author ? <Author {...author}></Author> : <></>}
          </div>

          <div className="py-10">
            <Image src={img || "/"} width={900} height={600} alt=""></Image>
          </div>

          <div className="content text-black text-lg flex flex-col gap-4">
            {description &&
              description
                .split("\n")
                .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <div className="mx-auto w-3/4">
        <Related></Related>
      </div>
    </Format>
  );
}


function BlogPost({ post }) {
  return (
    <main className={styles.blog}>
      <img
        className={styles.cover}
        src={post.coverPhoto.url}
        alt={post.title}
      />
      <div className={styles.title}>
        <div className={styles.authdetails}>
          <img src={post.author.avatar.url} alt={post.author.name} />
          <div className={styles.authtext}>
            <h6>By {post.author.name} </h6>
            <h6 className={styles.date}>
              {moment(post.datePublished).format("MMMM d, YYYY")}
            </h6>
          </div>
        </div>
        <h2>{post.title}</h2>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </main>
  );
}

// export async function getStaticProps({ params }) {
//   const postId = params.postId;

//   // Fetch post data from one API
//   const posts = await getPost(params.postId);

//   // Fetch post data from another API
//   const slug = postId; // Use postId as the slug value
//   const data = await graphcms.request(QUERY, { slug });
//   const post = data.post;

//   return {
//     props: {
//       fallback: {
//         "/api/posts": posts || null,
//       },
//       post,
//     },
//     revalidate: 10,
//   };
// }




export async function getStaticProps({ params }) {
  const postId = params.postId;

  if (params.slug) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;

    return {
      props: {
        fallback: {
          "/api/posts": post || null,
        },
        post,
      },
      revalidate: 10,
    };
  } else {
    // Fetch post data from another API for postId
    const posts = await getPost(postId);

    return {
      props: {
        fallback: {
          "/api/posts": posts || null,
        },
      },
      revalidate: 10,
    };
  }
}







// export async function getStaticPaths() {
//   const posts = await getPost();
//   const { posts: graphcmsPosts } = await graphcms.request(SLUGLIST);

//   console.log(graphcms.request(SLUGLIST));

//   const paths = posts
//     .map((value) => {
//       return {
//         params: {
//           postId: value.id.toString(),
//         },
//       };
//     })
//     .concat(graphcmsPosts.map((post) => ({ params: { postId: post.slug } })));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const posts = await getPost();
  const { posts: graphcmsPosts } = await graphcms.request(SLUGLIST);

  const paths = posts
    .map((value) => {
      return {
        params: {
          postId: value.id.toString(),
          slug: value.slug, // Include slug as a parameter
        },
      };
    })
    .concat(
      graphcmsPosts.map((post) => {
        return {
          params: {
            postId: post.slug, // Use slug as postId
            slug: post.slug, // Include slug as a parameter
          },
        };
      })
    );

  return {
    paths,
    fallback: false,
  };
}
