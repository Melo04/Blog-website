// endpoint: api/posts

// const baseURL = "http://localhost:3000/api/posts";

// export default async function getPost(id) {
//   const res = await fetch(`${baseURL}`)
//   const posts = await res.json();

//   if(id){
//     return posts.find(value => value.id == id)
//   }

//   return posts;
// }


const baseURL = "http://localhost:3000/api/posts";

export default async function getPost(idOrSlug) {
  const res = await fetch(`${baseURL}`);
  const posts = await res.json();

  if (idOrSlug) {
    // Check if idOrSlug is a valid number (postId)
    const postId = parseInt(idOrSlug);
    if (Number.isInteger(postId)) {
      const postById = posts.find((value) => value.id == postId);
      if (postById) {
        return postById;
      } else {
        return null; // or throw an error if desired
      }
    } else {
      // idOrSlug is a slug
      const postBySlug = posts.find((value) => value.slug === idOrSlug);
      if (postBySlug) {
        return postBySlug;
      } else {
        return null; // or throw an error if desired
      }
    }
  }

  return posts;
}
