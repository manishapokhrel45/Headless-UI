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
        setTitle(response.data.title);
      });
  }, [id]);
  const handleUpdate = () => {
    const payload = {
      title: title,
      body,
    };
    axios
      .patch(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data);
      });
  };
  const handleDelete = () => {
    const payload = {};
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`, payload)
      .then((response) => {
        setTitle(response.data.title);
        setBody(response.data.body);
      });
  };

  return (
    <div class="flex justify-center items-center h-screen bg-slate-700">
      <div class="bg-slate-100 p-12  rounded-lg shadow-md">
        <div class="flex mb-4">
          <label for="name" class="text-lg font-bold mt-1 mr-2">
            Name:
          </label>
          <input
            id="name"
            class="border w-full rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <input
          class="border w-full rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter some text"
        />
        <div class="flex justify-end">
          <button
            onClick={handleUpdate}
            class="px-4 py-2 bg-green-500 text-white rounded-md focus:outline-none  mr-2"
          >
            Update
          </button>
          <button
            onClick={handleDelete}
            class="px-4 py-2 bg-red-500 text-white rounded-md  focus:outline-none "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateDetail;
