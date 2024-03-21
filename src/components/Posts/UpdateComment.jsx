import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateDetail = () => {
  const [commentDetail, setCommentDetail] = useState({});
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setCommentDetail(response.data);
        console.log(response.data);
      });
  }, [id]);
  const handleUpdate = () => {
    const payload = {
      title: title,
      body: body,
    };
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
      .then((response) => {
        setTitle(response.data.title);
      });
  };
  const handleDelete = () => {
    const payload = {
      body: body,
    };
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
      .then((response) => {
        setTitle(response.data);
      });
  };

  return (
    <div className="">
      <div className=" h-screen justify-center items-center flex flex-col gap-8">
        <div>
          {" "}
          <label>Name: </label>
          <input
            className="border "
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <input
              className="border p-5 mt-2"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </div>
        <div>
          {" "}
          <button
            onClick={handleUpdate}
            className="border p-2 bg-slate-400 rounded-md"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            className="border p-2 bg-slate-400 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetail;
