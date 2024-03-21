import { useState } from "react";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);

  function FetchComments() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((comments) => setComments(comments));

    console.log(comments);
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={FetchComments}
        >
          Fetch Comments
        </button>
        <div className="flex justify-center">
          <ul className="mt-4 w-[50%]">
            {comments.map((comment) => (
              <Link to={`/comment/${comment.id}`}>
                <li
                  key={comment.id}
                  className=" p-4 rounded mb-2 text-start bg-violet-100"
                >
                  <div className="text-lg font-bold mb-2">
                    {comment.id}.{comment.name}
                  </div>
                  <div className="text-gray-700">{comment.body}</div>
                </li>{" "}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Comments;
