import { useState } from "react";
import Layout from "../../layout";

const Post = () => {
  const [posts, setPosts] = useState([]);

  function fetchPost() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));

    console.log(posts);
  }

  return (
    <>
      <Layout>
        <div className="container mx-auto p-4">
          <button
            className="bg-gray-500  text-white font-bold py-2 px-4 rounded"
            onClick={fetchPost}
          >
            Fetch Posts
          </button>
          <div className="flex justify-center">
            <ul className="mt-4 w-[50%] ">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className=" mb-2 p-4 rounded-lg bg-violet-200 "
                >
                  <div className="text-lg font-bold mb-2 text-start ">
                    {post.id}. {post.title}
                  </div>
                  <div className="text-gray-700 text-start">{post.body}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Post;
