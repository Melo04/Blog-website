// import data from "../data";

// export default function handler(req, res) {
//    const {postId} = req.query;
//    const {Posts} = data;

//    if(postId){
//         const post = Posts.find(value => value.id == postId)
//         return res.status(200).json(post)
//    }

//    return res.status(404).json({error: "Post Not Found"})
// }

import data from "../data";

export default function handler(req, res) {
  const { postId, slug } = req.query;
  console.log(postId)
  console.log(slug)
  const { Posts } = data;

  if (postId) {
    // Handle postId
    const post = Posts.find((value) => value.id == postId);
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: "Post Not Found" });
    }
  } else if (slug) {
    // Handle slug
    const post = Posts.find((value) => value.slug === slug);
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: "Post Not Found" });
    }
  } else {
    return res.status(400).json({ error: "Invalid Request" });
  }
}
